/**
 * Product500N — dedicated page for the 500N Micro Turbojet Engine.
 */
import ProductDetail from "@/components/ProductDetail";
import engine500n from "/lovable-uploads/500.png";

const Product500N = () => (
  <ProductDetail
    name="500N Micro Turbojet Engine"
    thrust="500N"
    image={engine500n}
    description="The 500N Micro Turbojet is the most compact engine in the Vayuvya lineup. Designed for small UAVs, target drones, and experimental aerospace platforms, it delivers surprising performance from an incredibly small package."
    specs={[
      { label: "Maximum Thrust", value: "500 N" },
      { label: "Specific Fuel Consumption", value: "1.15 kg/kN·h" },
      { label: "Weight", value: "8.5 kg" },
      { label: "Diameter", value: "130 mm" },
      { label: "Length", value: "280 mm" },
      { label: "Max RPM", value: "95,000" },
      { label: "Pressure Ratio", value: "3.5:1" },
      { label: "Turbine Inlet Temperature", value: "880°C" },
      { label: "Operating Altitude", value: "Up to 5,000 m" },
      { label: "Design Life", value: "100+ hours" },
    ]}
    highlights={[
      "Weighs under 9 kg including all accessories and starter system.",
      "Can be hand-started or electrically initiated within 15 seconds.",
      "Extremely low per-unit cost for expendable drone applications.",
      "Simple maintenance with only 3 major modular assemblies.",
      "Proven reliability through extensive bench testing campaigns.",
      "Adaptable mounting interface for diverse airframe configurations.",
    ]}
    applications={[
      "Small tactical UAVs",
      "Aerial target drones",
      "Experimental aerospace research",
      "Academic propulsion research platforms",
      "Rapid prototype flight testing",
    ]}
    status="The 500N engine has completed initial prototype testing and design validation. Second-generation prototypes with improved compressor efficiency are currently under fabrication. Flight testing on a subscale demonstrator platform is planned for mid-2026."
  />
);

export default Product500N;
