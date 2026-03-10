/**
 * SectionReveal — wrapper that fades children in when scrolled into view.
 * Uses IntersectionObserver for performant scroll-triggered animation.
 */
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const SectionReveal = ({ children, className = "", delay = 0, direction = "up" }: Props) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  const initial = {
    opacity: 0,
    y: direction === "up" ? 40 : 0,
    x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={initial}
        animate={isVisible ? { opacity: 1, y: 0, x: 0 } : initial}
        transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SectionReveal;
