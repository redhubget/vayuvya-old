/**
 * Products — listing page for all propulsion systems.
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionReveal from "./SectionReveal";

interface Props {
  title: string;
  thrust: string;
  description: string;
  image: string;
  path: string;
  delay?: number;
}

const ProductCard = ({ title, thrust, description, image, path, delay = 0 }: Props) => {
  return (
    <SectionReveal delay={delay}>
      <Link
        to={path}
        className="group block bg-zinc-900 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-500"
      >
        {/* Image Container */}
        <div className="aspect-square overflow-hidden bg-black flex items-center justify-center p-8">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-2">
            {thrust} Thrust
          </p>

          <h3 className="text-white text-lg font-bold mb-2 group-hover:text-blue-400 transition">
            {title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {description}
          </p>

          <span className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </SectionReveal>
  );
};

export default ProductCard;
