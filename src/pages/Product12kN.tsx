/**
 * Product12kN — dedicated page for the 1.2kN Turbojet Engine.
 */
import ProductDetail from "@/components/ProductDetail";
import engine12kn from "@/assets/engine-12kn.png";

const Product12kN = () => (
  <ProductDetail
    name="1.2kN Turbojet Engine"
    thrust="1.2kN"
    image={engine12kn}
    description="The 1.2kN Turbojet Engine is a compact, high-reliability propulsion system optimized for tactical drones and loitering munition platforms. Its lightweight design and extended endurance capability make it the ideal choice for cost-effective expendable and reusable aerial systems."
    specs={[
      { label: "Maximum Thrust", value: "1,200 N" },
      { label: "Specific Fuel Consumption", value: "1.05 kg/kN·h" },
      { label: "Weight", value: "28 kg" },
      { label: "Diameter", value: "200 mm" },
      { label: "Length", value: "450 mm" },
      { label: "Max RPM", value: "65,000" },
      { label: "Pressure Ratio", value: "4.2:1" },
      { label: "Turbine Inlet Temperature", value: "950°C" },
      { label: "Operating Altitude", value: "Up to 8,000 m" },
      { label: "Design Life", value: "200+ hours" },
    ]}
    highlights={[
      "Ultra-compact form factor for integration into space-constrained airframes.",
      "Rapid start capability for launch-on-demand tactical scenarios.",
      "Low infrared signature exhaust design for stealth applications.",
      "Cost-optimized manufacturing for expendable platform variants.",
      "Compatible with standard military fuel grades.",
      "Built-in health monitoring and prognostics system.",
    ]}
    applications={[
      "Tactical reconnaissance drones",
      "Loitering munition systems",
      "Decoy and electronic warfare UAVs",
      "Short-range strike platforms",
      "Swarm drone propulsion",
    ]}
    status="The 1.2kN engine is in the advanced testing phase with over 100 hours of accumulated run time. Environmental qualification testing including vibration, shock, and temperature extremes is underway. First deliveries to platform integrators expected Q4 2026."
  />
);

export default Product12kN;
