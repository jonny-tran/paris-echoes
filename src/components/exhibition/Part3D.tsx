import { useLayoutEffect, useEffect, useRef, useState, useCallback } from "react";
import { BG_DEEP_RED } from "./part3d/constants";
import { getSectionScrollProgress01 } from "./part3d/sectionScrollProgress";
import { Part3DCanvas } from "./part3d/Part3DCanvas";

const VIEWBOX = "min(90vmin, 640px)";

/**
 * Vĩ thanh — chỉ hệ hạt 3D.
 * Kích thước Canvas: phải có width + height tường minh; chỉ dùng absolute + con aspect-square
 * dễ khiến hộp 0px (không còn nội dung dòng nào) → WebGL không vẽ.
 * Scroll: getBoundingClientRect + window scroll + rAF + ResizeObserver.
 */
export function Part3D() {
  const containerRef = useRef<HTMLSectionElement | null>(null);
  const scrollRef = useRef(0);
  const [mounted, setMounted] = useState(false);
  const rafRef = useRef(0);

  const updateProgress = useCallback(() => {
    const el = containerRef.current;
    if (el) {
      scrollRef.current = getSectionScrollProgress01(el);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    updateProgress();
  }, [updateProgress, mounted]);

  /** Một lần sau khi paint để kích thước / rect ổn định. */
  useLayoutEffect(() => {
    if (!mounted) return;
    const t = requestAnimationFrame(() => updateProgress());
    return () => cancelAnimationFrame(t);
  }, [mounted, updateProgress]);

  useEffect(() => {
    if (!mounted) return;
    const loop = () => {
      updateProgress();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    const onScroll = () => updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener("resize", onScroll, { passive: true });
      vv.addEventListener("scroll", onScroll, { passive: true });
    }

    const el = containerRef.current;
    const ro = el ? new ResizeObserver(() => updateProgress()) : null;
    if (el && ro) {
      ro.observe(el);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      if (vv) {
        vv.removeEventListener("resize", onScroll);
        vv.removeEventListener("scroll", onScroll);
      }
      ro?.disconnect();
    };
  }, [mounted, updateProgress]);

  return (
    <section
      id="part-3d"
      ref={containerRef}
      className="relative isolate h-[min(500vh,7200px)]"
      style={{ backgroundColor: BG_DEEP_RED }}
    >
      <div className="sticky top-0 flex h-[100dvh] w-full min-h-0 items-center justify-center px-3 py-4">
        <div
          className="mx-auto max-w-full shrink-0"
          style={{
            width: VIEWBOX,
            height: VIEWBOX,
            minWidth: 200,
            minHeight: 200,
            position: "relative",
            backgroundColor: BG_DEEP_RED,
          }}
        >
          {mounted ? (
            <Part3DCanvas scrollRef={scrollRef} className="block h-full w-full touch-none" />
          ) : (
            <div
              className="block h-full w-full"
              style={{ backgroundColor: BG_DEEP_RED }}
              aria-hidden
            />
          )}
        </div>
      </div>
    </section>
  );
}
