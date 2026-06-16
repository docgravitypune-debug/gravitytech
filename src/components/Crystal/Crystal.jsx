import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function CrystalMesh({ scrollProgress, mouseTarget }) {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += delta * 0.15;

    const targetX = scrollProgress.current * Math.PI * 0.5 + mouseTarget.current.y * 0.15;
    const targetY = scrollProgress.current * Math.PI * 0.9 + mouseTarget.current.x * 0.2;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.05);
  });

  return (
    <mesh ref={meshRef} castShadow>
      <octahedronGeometry args={[1.8, 2]} />
      <MeshTransmissionMaterial
        backside
        samples={16}
        resolution={512}
        transmission={1}
        roughness={0.02}
        thickness={3}
        ior={2.4}
        chromaticAberration={0.08}
        anisotropy={0.3}
        distortion={0.2}
        distortionScale={0.3}
        temporalDistortion={0.1}
        color="#c0e8ff"
        attenuationDistance={0.5}
        attenuationColor="#ffffff"
      />
    </mesh>
  );
}

function Scene({ scrollProgress, mouseTarget }) {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#00e5ff" />
      <pointLight position={[-5, -3, -5]} intensity={1.5} color="#e040fb" />
      <pointLight position={[0, 8, 0]} intensity={1} color="#ffffff" />
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <CrystalMesh scrollProgress={scrollProgress} mouseTarget={mouseTarget} />
      </Float>
    </>
  );
}

export default function Crystal() {
  const scrollProgress = useRef(0);
  const mouseTarget = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      scrollProgress.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    const onPointerMove = (event) => {
      mouseTarget.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * -2
      };
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1
    });

    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
      trigger.kill();
    };
  }, []);

  return (
    <div className="crystal-canvas">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <Scene scrollProgress={scrollProgress} mouseTarget={mouseTarget} />
      </Canvas>
    </div>
  );
}
