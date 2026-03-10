/**
 * ScrollProgress — a thin progress bar fixed at the top of the viewport
 * that fills as the user scrolls down the page.
 */
import { useScrollProgress } from "@/hooks/useScrollProgress";

const ScrollProgress = () => {
  const progress = useScrollProgress();
  return <div className="scroll-progress" style={{ width: `${progress * 100}%` }} />;
};

export default ScrollProgress;
