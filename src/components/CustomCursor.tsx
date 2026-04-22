import { useCallback, useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

const GOLD = "#D4AF37";
const SPRING_FOLLOW = { stiffness: 250, damping: 20 } as const;
const SPRING_PRESS = { stiffness: 420, damping: 28 } as const;

function isPenTarget(node: EventTarget | null): boolean {
  return node instanceof Element && Boolean(node.closest('[data-cursor="pen"]'));
}

function PenGlyph({ className }: { className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const gradientId = `pe-cursor-gold-${uid}`;
  const filterId = `pe-cursor-soft-${uid}`;

  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="8"
          y1="4"
          x2="34"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2E6A8" />
          <stop offset="0.45" stopColor={GOLD} />
          <stop offset="1" stopColor="#8A6B1E" />
        </linearGradient>
        <filter id={filterId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M20.5 6.5L31 26.2l-4.2 1.2-2.4 8.6-4.8-5.6-5.4 1.1L9 27.8 20.5 6.5Z"
        fill={`url(#${gradientId})`}
        stroke={GOLD}
        strokeOpacity={0.55}
        strokeWidth={0.75}
        filter={`url(#${filterId})`}
      />
      <path
        d="M14.5 28.2l5.8-1.1 3.6 4.2"
        stroke="rgba(26,18,6,0.45)"
        strokeWidth={0.6}
        strokeLinecap="round"
      />
      <path
        d="M22 9.5l6.8 14.6"
        stroke="rgba(255,247,204,0.35)"
        strokeWidth={0.55}
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Con trỏ tùy chỉnh toàn trang: chấm vàng kim + morph sang bút khi hover `data-cursor="pen"`.
 * Chỉ bật trên thiết bị con trỏ tinh (pointer: fine); không chặn tương tác (`pointer-events-none`).
 */
export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const [isPen, setIsPen] = useState(false);
  const [pressed, setPressed] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, SPRING_FOLLOW);
  const springY = useSpring(mouseY, SPRING_FOLLOW);

  const press = useMotionValue(1);
  const pressSpring = useSpring(press, SPRING_PRESS);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const mq = window.matchMedia("(pointer: fine)");
    const sync = () => setFinePointer(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !finePointer) return;
    document.documentElement.classList.add("hide-native-cursor");
    return () => document.documentElement.classList.remove("hide-native-cursor");
  }, [mounted, finePointer]);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY],
  );

  const onMouseOver = useCallback((e: MouseEvent) => {
    setIsPen(isPenTarget(e.target));
  }, []);

  const onMouseDown = useCallback(() => {
    press.set(0.88);
    setPressed(true);
  }, [press]);

  const onMouseUp = useCallback(() => {
    press.set(1);
    setPressed(false);
  }, [press]);

  useEffect(() => {
    if (!mounted || !finePointer) return;
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("blur", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("blur", onMouseUp);
    };
  }, [mounted, finePointer, onMouseMove, onMouseOver, onMouseDown, onMouseUp]);

  if (!mounted || !finePointer) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x: springX, y: springY, scale: pressSpring }}
    >
      <motion.div
        className="relative"
        animate={{
          x: isPen ? -20 : -7,
          y: isPen ? -33 : -7,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      >
        <motion.div
          animate={{
            filter: pressed ? "brightness(1.18) saturate(1.08)" : "brightness(1) saturate(1)",
          }}
          transition={{ duration: 0.12, ease: "easeOut" }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {isPen ? (
              <motion.div
                key="pen"
                layoutId="paris-cursor-shape"
                className="relative flex items-center justify-center drop-shadow-[0_0_14px_rgba(212,175,55,0.32)]"
                initial={{ opacity: 0.65, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.65, scale: 0.92 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
              >
                <PenGlyph />
              </motion.div>
            ) : (
              <motion.div
                key="dot"
                layoutId="paris-cursor-shape"
                className="relative flex h-[14px] w-[14px] items-center justify-center rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 28%, color-mix(in oklab, ${GOLD} 92%, #fff) 0%, ${GOLD} 42%, #7f6316 100%)`,
                  boxShadow: `
                  0 0 0 1px color-mix(in oklab, ${GOLD} 35%, transparent),
                  0 0 18px color-mix(in oklab, ${GOLD} 45%, transparent),
                  inset 0 1px 0 color-mix(in oklab, #fff 35%, transparent)
                `,
                }}
                initial={{ opacity: 0.75, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.75, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
