/** Vàng kim & nền đỏ đô — Hiệp định Paris, vĩ thanh */
export const PARTICLE_COUNT = 8000;
export const GOLD = "#D4AF37";
export const BG_DEEP_RED = "#1a0101";

/**
 * Cạnh scrollProgress [0,1] — 5 trạng thái morph:
 * Chaos → 1968 → Scales → Pen → Star (+ vanish cuối đoạn).
 */
export const STAGE_EDGES = [0, 0.2, 0.4, 0.6, 0.8, 1] as const;
