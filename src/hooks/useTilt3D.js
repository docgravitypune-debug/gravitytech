import { useCallback, useRef, useState } from "react";

export default function useTilt3D({ maxTilt = 10, scale = 1.02 } = {}) {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
  });

  const onMouseMove = useCallback(
    (event) => {
      const element = ref.current;
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      setStyle({
        transform: `perspective(1000px) rotateX(${(-y * maxTilt).toFixed(2)}deg) rotateY(${(x * maxTilt).toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      });
    },
    [maxTilt, scale],
  );

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    });
  }, []);

  return { ref, style, onMouseMove, onMouseLeave };
}
