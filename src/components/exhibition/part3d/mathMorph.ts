import { STAGE_EDGES } from "./constants";

/** Hermite smootherstep — đạo hàm bậc nhất = 0 tại 0 và 1, giảm giật khi đổi hình */
export function smootherStep(t: number): number {
  const x = Math.min(1, Math.max(0, t));
  return x * x * x * (x * (x * 6 - 15) + 10);
}

/**
 * Chia [0,1] thành các đoạn STAGE_EDGES, trả về chỉ số đoạn 0..n-1 và t nội suy đã smoother.
 * Đoạn cuối (0.8→1): dùng cho morph + vanish (xử lý ở layer particles).
 */
export function segmentScrollProgress(p: number): {
  segment: number;
  localT: number;
  global: number;
} {
  const g = Math.min(1, Math.max(0, p));
  const edges = STAGE_EDGES;
  let seg = 0;
  for (let i = 0; i < edges.length - 1; i++) {
    if (g <= edges[i + 1]) {
      seg = i;
      break;
    }
  }
  const t0 = edges[seg];
  const t1 = edges[seg + 1];
  const span = t1 - t0;
  const raw = span > 1e-8 ? (g - t0) / span : 0;
  return { segment: seg, localT: smootherStep(raw), global: g };
}

export function lerp3(
  ax: number,
  ay: number,
  az: number,
  bx: number,
  by: number,
  bz: number,
  t: number,
  out: { x: number; y: number; z: number },
): void {
  const s = Math.min(1, Math.max(0, t));
  out.x = ax + (bx - ax) * s;
  out.y = ay + (by - ay) * s;
  out.z = az + (bz - az) * s;
}
