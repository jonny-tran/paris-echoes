import { PARTICLE_COUNT } from "./constants";
import { createRng } from "./rng";

const N = PARTICLE_COUNT;

function alloc(): Float32Array {
  return new Float32Array(N * 3);
}

/** Đám mây hỗn loạn — Gaussian + một ít rejection để tránh hình cầu quá đều */
export function sampleChaosCloud(seed = 0x1973): Float32Array {
  const rng = createRng(seed);
  const out = alloc();
  for (let i = 0; i < N; i++) {
    let x = 0,
      y = 0,
      z = 0,
      ok = false;
    let guard = 0;
    while (!ok && guard++ < 32) {
      x = (rng() + rng() + rng() + rng() - 2) * 0.85;
      y = (rng() + rng() + rng() + rng() - 2) * 0.75;
      z = (rng() + rng() + rng() + rng() - 2) * 0.9;
      const r = x * x * 0.45 + y * y * 0.55 + z * z * 0.5;
      ok = r < 2.4 && r > 0.05;
    }
    const j = i * 3;
    out[j] = x * 1.35;
    out[j + 1] = y * 1.15;
    out[j + 2] = z * 1.25;
  }
  return out;
}

type Grid = string[];

const G1: Grid = ["  #  ", " ##  ", "  #  ", "  #  ", "  #  ", "  #  ", " ### "];

const G6: Grid = [" ##  ", "#  # ", "#    ", "###  ", "#  # ", "#  # ", " ##  "];

const G8: Grid = [" ##  ", "#  # ", "#  # ", " ##  ", "#  # ", "#  # ", " ##  "];

const G9: Grid = [" ##  ", "#  # ", "#  # ", " ### ", "   # ", "#  # ", " ##  "];

function mergeDigits(patterns: Grid[]): { x: number; y: number }[] {
  const all: { x: number; y: number }[] = [];
  let offsetX = 0;
  const gap = 1;
  const maxH = Math.max(...patterns.map((g) => g.length), 1);
  for (const g of patterns) {
    const cols = g[0]?.length ?? 5;
    for (let r = 0; r < g.length; r++) {
      const row = g[r] ?? "";
      for (let c = 0; c < cols; c++) {
        const ch = row[c];
        if (ch === "#") {
          all.push({ x: offsetX + c, y: r });
        }
      }
    }
    offsetX += cols + gap;
  }
  const maxX = Math.max(offsetX - gap, 1);
  return all.map((p) => ({ x: p.x / maxX, y: p.y / Math.max(maxH - 1, 1) }));
}

/** Con số 1968 — điểm neo trên lưới bitmap, nhân lặp + jitter đủ N hạt */
export function sample1968(seed = 0x1968): Float32Array {
  const anchors = mergeDigits([G1, G9, G6, G8]);
  const rng = createRng(seed);
  const out = alloc();
  const sx = 5.2;
  const sy = 2.0;
  for (let i = 0; i < N; i++) {
    const a = anchors[Math.floor(rng() * anchors.length) % anchors.length]!;
    const jx = (rng() - 0.5) * 0.06;
    const jy = (rng() - 0.5) * 0.06;
    const jz = (rng() - 0.5) * 0.04;
    const j = i * 3;
    out[j] = (a.x - 0.5) * sx + jx;
    out[j + 1] = (0.55 - a.y) * sy + jy;
    out[j + 2] = jz;
  }
  return out;
}

/** Cân — beam, trụ, dây treo, đĩa */
export function sampleScales(seed = 0x5ca1e5): Float32Array {
  const rng = createRng(seed);
  const out = alloc();
  const beamY = 0.55;
  const beamX0 = -1.35;
  const beamX1 = 1.35;

  for (let i = 0; i < N; i++) {
    const t = i / N;
    const r = rng();
    const j = i * 3;
    let x = 0,
      y = 0,
      z = 0;
    if (t < 0.12) {
      // trụ đứng
      x = (rng() - 0.5) * 0.08;
      y = -1.1 + rng() * (beamY + 0.15);
      z = (rng() - 0.5) * 0.08;
    } else if (t < 0.28) {
      // ngang beam
      x = beamX0 + rng() * (beamX1 - beamX0);
      y = beamY + (rng() - 0.5) * 0.05;
      z = (rng() - 0.5) * 0.06;
    } else if (t < 0.5) {
      // dây trái + đĩa trái
      const u = rng();
      if (u < 0.55) {
        x = beamX0 + (rng() - 0.5) * 0.04;
        y = beamY - rng() * 0.55;
        z = (rng() - 0.5) * 0.04;
      } else {
        const a = rng() * Math.PI * 2;
        const rad = 0.22 * Math.sqrt(rng());
        x = beamX0 + Math.cos(a) * rad;
        y = beamY - 0.62 + Math.sin(a) * rad * 0.35;
        z = Math.sin(a * 2) * rad * 0.4;
      }
    } else if (t < 0.72) {
      const u = rng();
      if (u < 0.55) {
        x = beamX1 + (rng() - 0.5) * 0.04;
        y = beamY - rng() * 0.55;
        z = (rng() - 0.5) * 0.04;
      } else {
        const a = rng() * Math.PI * 2;
        const rad = 0.22 * Math.sqrt(rng());
        x = beamX1 + Math.cos(a) * rad;
        y = beamY - 0.62 + Math.sin(a) * rad * 0.35;
        z = Math.sin(a * 2) * rad * 0.4;
      }
    } else {
      // chuyển động mềm: vòng quanh tâm cân (ellipse nhỏ)
      const a = rng() * Math.PI * 2;
      const rad = 0.08 + rng() * 0.12;
      x = Math.cos(a) * rad * 2.2;
      y = beamY - 0.2 + Math.sin(a * 2) * 0.12;
      z = Math.sin(a) * rad;
    }
    out[j] = x;
    out[j + 1] = y;
    out[j + 2] = z;
  }
  return out;
}

function bezier2(
  p0: [number, number, number],
  p1: [number, number, number],
  p2: [number, number, number],
  t: number,
): [number, number, number] {
  const u = 1 - t;
  const x = u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0];
  const y = u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1];
  const z = u * u * p0[2] + 2 * u * t * p1[2] + t * t * p2[2];
  return [x, y, z];
}

/** Cây bút — thân hình trụ mảnh + ngòi + nét mực cong */
export function samplePen(seed = 0x2701): Float32Array {
  const rng = createRng(seed);
  const out = alloc();
  const ink0: [number, number, number] = [0.35, -0.95, 0];
  const ink1: [number, number, number] = [1.05, -0.55, 0.02];
  const inkC: [number, number, number] = [0.95, -1.35, -0.05];

  for (let i = 0; i < N; i++) {
    const t = i / N;
    const j = i * 3;
    let x = 0,
      y = 0,
      z = 0;
    if (t < 0.62) {
      const u = rng();
      const yy = -0.35 + u * 1.55;
      const thick = 0.04;
      x = (rng() - 0.5) * thick;
      y = yy;
      z = (rng() - 0.5) * thick;
    } else if (t < 0.78) {
      // ngòi
      const v = rng();
      const ang = (rng() - 0.5) * 0.5;
      x = Math.sin(ang) * 0.08;
      y = -0.55 + v * 0.22;
      z = Math.cos(ang) * 0.06 * (rng() * 0.5);
    } else {
      const s = rng();
      const [bx, by, bz] = bezier2(ink0, inkC, ink1, s);
      const n = (rng() - 0.5) * 0.025;
      const m = (rng() - 0.5) * 0.018;
      x = bx + n;
      y = by + m;
      z = bz + (rng() - 0.5) * 0.012;
    }
    out[j] = x - 0.15;
    out[j + 1] = y + 0.15;
    out[j + 2] = z;
  }
  return out;
}

/** Ngôi sao 5 cánh — biên + lấp đầy từ tâm */
export function sampleStar5(seed = 0x1975): Float32Array {
  const rng = createRng(seed);
  const out = alloc();
  const R = 1.35;
  const r = 0.52;
  const verts: { x: number; y: number; o: boolean }[] = [];
  for (let k = 0; k < 10; k++) {
    const outer = k % 2 === 0;
    const ang = (k / 10) * Math.PI * 2 - Math.PI / 2;
    const rad = outer ? R : r;
    verts.push({ x: Math.cos(ang) * rad, y: Math.sin(ang) * rad, o: outer });
  }

  function pointInStar(px: number, py: number): boolean {
    let inside = false;
    for (let a = 0, b = verts.length - 1; a < verts.length; b = a++) {
      const va = verts[a]!;
      const vb = verts[b]!;
      if (
        va.y > py !== vb.y > py &&
        px < ((vb.x - va.x) * (py - va.y)) / (vb.y - va.y + 1e-8) + va.x
      ) {
        inside = !inside;
      }
    }
    return inside;
  }

  let i = 0;
  let guard = 0;
  while (i < N && guard < N * 80) {
    guard++;
    const ang = rng() * Math.PI * 2;
    const rad = R * Math.sqrt(rng());
    const x = Math.cos(ang) * rad;
    const y = Math.sin(ang) * rad;
    if (!pointInStar(x, y)) continue;
    const j = i * 3;
    out[j] = x * 1.05;
    out[j + 1] = y * 1.05;
    out[j + 2] = (rng() - 0.5) * 0.06;
    i++;
  }
  // fallback: dọc cạnh nếu rejection chậm (hiếm)
  while (i < N) {
    const k = Math.floor(rng() * 10);
    const k2 = (k + 1) % 10;
    const va = verts[k]!;
    const vb = verts[k2]!;
    const s = rng();
    const j = i * 3;
    out[j] = va.x + (vb.x - va.x) * s;
    out[j + 1] = va.y + (vb.y - va.y) * s;
    out[j + 2] = (rng() - 0.5) * 0.04;
    i++;
  }
  return out;
}

export function buildAllShapeBuffers(): Float32Array[] {
  return [sampleChaosCloud(), sample1968(), sampleScales(), samplePen(), sampleStar5()];
}
