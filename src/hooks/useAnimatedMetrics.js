import { useEffect, useState } from "react";

export default function useAnimatedMetrics(metrics) {
  const [progress, setProgress] = useState(() => metrics.map(() => 0));

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setProgress(metrics.map((metric) => metric.value));
      return undefined;
    }

    let frameId;
    const start = performance.now();
    const duration = 1000;

    function tick(now) {
      const ratio = Math.min((now - start) / duration, 1);
      setProgress(metrics.map((metric) => Math.round(metric.value * ratio)));

      if (ratio < 1) {
        frameId = requestAnimationFrame(tick);
      }
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [metrics]);

  return metrics.map((metric, index) => ({
    ...metric,
    current: progress[index],
  }));
}
