import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { GOLD, PARTICLE_COUNT } from "./constants";
import { lerp3, segmentScrollProgress } from "./mathMorph";
import { buildAllShapeBuffers } from "./sampleShapes";
import { createRng } from "./rng";

const N = PARTICLE_COUNT;

export type MorphParticlePointsProps = {
  scrollRef: React.MutableRefObject<number>;
};

export function MorphParticlePoints({ scrollRef }: MorphParticlePointsProps) {
  const buffers = useMemo(() => buildAllShapeBuffers(), []);
  const positions = useMemo(() => {
    const arr = new Float32Array(N * 3);
    arr.set(buffers[0]!);
    return arr;
  }, [buffers]);

  const vanishDir = useMemo(() => {
    const rng = createRng(0xdead);
    const vx = new Float32Array(N);
    const vz = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const a = rng() * Math.PI * 2;
      vx[i] = Math.cos(a) * (0.3 + rng() * 0.7);
      vz[i] = Math.sin(a) * (0.3 + rng() * 0.7);
    }
    return { vx, vz };
  }, []);

  const chaosPhase = useMemo(() => {
    const rng = createRng(0xca05);
    const ph = new Float32Array(N);
    const fq = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      ph[i] = rng() * Math.PI * 2;
      fq[i] = 0.6 + rng() * 2.2;
    }
    return { ph, fq };
  }, []);

  const gold = useMemo(() => new THREE.Color(GOLD), []);
  const geomRef = useRef<THREE.BufferGeometry>(null);
  const matRef = useRef<THREE.PointsMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);

  const tmpOut = useRef({ x: 0, y: 0, z: 0 }).current;
  const smoothScrollRef = useRef<number | null>(null);

  const { pointer } = useThree();

  useFrame((state) => {
    const dt = Math.min(state.clock.getDelta(), 0.064);
    const targetScroll = scrollRef.current;
    if (smoothScrollRef.current === null) {
      smoothScrollRef.current = targetScroll;
    }
    smoothScrollRef.current = THREE.MathUtils.damp(smoothScrollRef.current, targetScroll, 3.8, dt);
    const p = smoothScrollRef.current;
    const { segment, localT, global } = segmentScrollProgress(p);
    const t = state.clock.elapsedTime;

    const b0 = buffers[Math.min(segment, 4)]!;
    const b1 = segment >= 4 ? b0 : buffers[Math.min(segment + 1, 4)]!;

    const chaosWeight = Math.max(0, 1 - global / 0.22);

    for (let i = 0; i < N; i++) {
      const j = i * 3;
      const x0 = b0[j]!,
        y0 = b0[j + 1]!,
        z0 = b0[j + 2]!;
      let x1 = b1[j]!,
        y1 = b1[j + 1]!,
        z1 = b1[j + 2]!;

      if (segment >= 4) {
        const lift = localT * localT * 6.2;
        const spread = localT * 1.35;
        x1 = x0 + vanishDir.vx[i]! * spread;
        y1 = y0 + lift;
        z1 = z0 + vanishDir.vz[i]! * spread;
      }

      lerp3(x0, y0, z0, x1, y1, z1, localT, tmpOut);

      let ox = tmpOut.x,
        oy = tmpOut.y,
        oz = tmpOut.z;

      if (chaosWeight > 0.02) {
        const ph = chaosPhase.ph[i]!;
        const fq = chaosPhase.fq[i]!;
        const amp = chaosWeight * 0.14;
        ox += Math.sin(t * fq + ph) * amp;
        oy += Math.cos(t * fq * 0.9 + ph * 1.3) * amp * 0.85;
        oz += Math.sin(t * fq * 1.1 + ph * 0.7) * amp;
      }

      positions[j] = ox;
      positions[j + 1] = oy;
      positions[j + 2] = oz;
    }

    const posAttr = geomRef.current?.getAttribute("position") as THREE.BufferAttribute | undefined;
    if (posAttr) {
      posAttr.array = positions;
      posAttr.needsUpdate = true;
    }

    const burst = Math.max(0, 1 - Math.abs(global - 0.2) / 0.055);
    const mat = matRef.current;
    if (mat) {
      mat.size = 0.019 + burst * 0.032 + (segment === 1 ? 0.01 : 0);
      const fadeStart = 0.82;
      mat.opacity =
        global > fadeStart ? Math.max(0, 1 - (global - fadeStart) / (1 - fadeStart)) : 1;
      mat.transparent = true;
    }

    const g = groupRef.current;
    if (g) {
      const targetRy = pointer.x * 0.16;
      const targetRx = -pointer.y * 0.11;
      const targetRz = pointer.x * pointer.y * 0.05;
      g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetRy, 5.2, dt);
      g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetRx, 5.2, dt);
      g.rotation.z = THREE.MathUtils.damp(g.rotation.z, targetRz, 4.5, dt);
      const targetPx = pointer.x * 0.09;
      const targetPy = pointer.y * 0.07;
      g.position.x = THREE.MathUtils.damp(g.position.x, targetPx, 4.8, dt);
      g.position.y = THREE.MathUtils.damp(g.position.y, targetPy, 4.8, dt);
    }
  });

  return (
    <group ref={groupRef}>
      <points frustumCulled={false}>
        <bufferGeometry ref={geomRef}>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={matRef}
          color={gold}
          size={0.02}
          sizeAttenuation
          depthWrite={false}
          transparent
          opacity={1}
          blending={THREE.NormalBlending}
        />
      </points>
    </group>
  );
}
