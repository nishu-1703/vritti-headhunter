import { motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

export function MotionAtmosphere() {
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  const pointerX = useMotionValue(-420);
  const pointerY = useMotionValue(-420);
  const smoothX = useSpring(pointerX, { stiffness: 72, damping: 26, mass: 0.5 });
  const smoothY = useSpring(pointerY, { stiffness: 72, damping: 26, mass: 0.5 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX - 170);
      pointerY.set(event.clientY - 170);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY]);

  return (
    <div className="motion-atmosphere" aria-hidden="true">
      <motion.div className="scroll-beam" style={{ scaleX: progressScale }} />
      <div className="motion-grid-field" />
      <div className="ambient-orb ambient-orb--one" />
      <div className="ambient-orb ambient-orb--two" />
      <div className="ambient-orb ambient-orb--three" />
      <div className="prism-ring prism-ring--one" />
      <div className="prism-ring prism-ring--two" />
      <motion.div className="cursor-aura" style={{ x: smoothX, y: smoothY }} />
    </div>
  );
}
