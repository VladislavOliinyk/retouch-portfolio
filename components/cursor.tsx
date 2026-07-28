"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function Cursor() {
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 350, damping: 32 });
  const springY = useSpring(y, { stiffness: 350, damping: 32 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
    };

    const enter = (event: Event) => {
      if ((event.target as HTMLElement).closest("a, button, input, textarea, [data-cursor='hover']")) {
        setActive(true);
      }
    };

    const leave = () => setActive(false);

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", enter);
    document.addEventListener("pointerout", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", enter);
      document.removeEventListener("pointerout", leave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-9 w-9 rounded-full border border-gold mix-blend-difference md:block"
      style={{ x: springX, y: springY }}
      animate={{ scale: active ? 1.8 : 1, opacity: active ? 0.45 : 0.9 }}
      transition={{ duration: 0.25 }}
    />
  );
}
