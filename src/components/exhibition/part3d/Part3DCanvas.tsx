import { Canvas } from "@react-three/fiber";
import { Suspense, type MutableRefObject } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BG_DEEP_RED } from "./constants";
import { MorphParticlePoints } from "./MorphParticlePoints";

export type Part3DCanvasProps = {
  scrollRef: MutableRefObject<number>;
  className?: string;
};

export function Part3DCanvas({ scrollRef, className }: Part3DCanvasProps) {
  return (
    <Canvas
      className={className ?? "h-full w-full touch-none"}
      camera={{ position: [0, 0.15, 6.2], fov: 42 }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
        stencil: true,
        depth: true,
      }}
      dpr={[1, 2]}
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <color attach="background" args={[BG_DEEP_RED]} />
      <Suspense fallback={null}>
        <MorphParticlePoints scrollRef={scrollRef} />
        <EffectComposer multisampling={0}>
          <Bloom
            intensity={1.45}
            luminanceThreshold={0.08}
            luminanceSmoothing={0.35}
            mipmapBlur
            radius={0.48}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
