/**
 * Tiến độ 0…1 khi “cuộn qua” một section rất cao (vd 500vh) có nội dung sticky.
 * 0 khi đỉnh section vừa canh cạnh trên viewport, 1 khi cuộn hết hành trình.
 */
export function getSectionScrollProgress01(el: HTMLElement): number {
  if (typeof window === "undefined") return 0;
  const rect = el.getBoundingClientRect();
  const h = el.offsetHeight || rect.height;
  if (h <= 0) return 0;
  const vh = window.visualViewport?.height ?? window.innerHeight;
  const track = h - vh;
  if (track <= 0) return 0;
  return Math.min(1, Math.max(0, -rect.top / track));
}
