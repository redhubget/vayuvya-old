/**
 * ProductDetail — reusable product detail page component.
 * Shows hero, description, specs table, engine components with scroll reveal,
 * applications, and development status.
 */
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface Spec {
  label: string;
  value: string;
}

interface ProductDetailProps {
  name: string;
  thrust: string;
  description: string;
  image: string;
  specs: Spec[];
  highlights: string[];
  applications: string[];
  status: string;
}

const engineComponents = [
  { name: "Intake", desc: "Aerodynamically optimized air intake for efficient airflow capture across operating envelope." },
  { name: "Compressor", desc: "Multi-stage axial/centrifugal compressor delivering high pressure ratios in a compact package." },
  { name: "Combustion Chamber", desc: "Annular combustion chamber with advanced fuel injection for complete combustion and low emissions." },
  { name: "Turbine", desc: "High-temperature turbine stage with indigenous superalloy blades for maximum energy extraction." },
  { name: "Nozzle", desc: "Convergent exhaust nozzle optimized for thrust generation and thermal signature management." },
];

const ProductDetail = ({ name, thrust, description, image, specs, highlights, applications, status }: ProductDetailProps) => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 blueprint-grid">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              >
                {thrust} Thrust Class
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-foreground leading-tight mb-6"
              >
                {name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground leading-relaxed"
              >
                {description}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <img src={image} alt={name} className="w-full max-w-md animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Technical Specifications</h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {specs.map((spec, i) => (
                    <tr key={spec.label} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                      <td className="px-6 py-4 text-muted-foreground text-sm font-medium">{spec.label}</td>
                      <td className="px-6 py-4 text-foreground text-sm font-semibold text-right">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Performance Highlights */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Performance Highlights</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-5">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-foreground text-sm">{h}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engine Components — scroll reveal */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">Engine Components</h2>
          </SectionReveal>
          <div className="space-y-8">
            {engineComponents.map((comp, i) => (
              <SectionReveal key={comp.name} delay={i * 0.1}>
                <div className="flex items-start gap-6 bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/30 transition-colors">
                  <span className="text-primary font-black text-2xl md:text-3xl shrink-0 w-12">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-foreground font-bold text-lg mb-2">{comp.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{comp.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Applications</h2>
            <ul className="space-y-3">
              {applications.map((a) => (
                <li key={a} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Development Status</h2>
            <p className="text-muted-foreground leading-relaxed">{status}</p>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
