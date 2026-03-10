/**
 * ProductCard — displays a product with image, title, specs, and link.
 * Used on the Products listing page and homepage preview.
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
        className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500"
      >
        <div className="aspect-square overflow-hidden bg-background flex items-center justify-center p-8">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">{thrust} Thrust</p>
          <h3 className="text-foreground text-lg font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </SectionReveal>
  );
};

export default ProductCard;
