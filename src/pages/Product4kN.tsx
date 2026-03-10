/**
 * Product4kN — dedicated page for the 4kN Turbojet Engine.
 */
import ProductDetail from "@/components/ProductDetail";
import engine4kn from "@/assets/engine-4kn.png";

const Product4kN = () => (
  <ProductDetail
    name="4kN Turbojet Engine"
    thrust="4kN"
    image={engine4kn}
    description="The 4kN Turbojet Engine is Vayuvya Defence's flagship propulsion system, designed for medium-range UAV platforms and cruise missile systems. It delivers sustained high-altitude performance with exceptional reliability and fuel efficiency, making it ideal for extended mission profiles."
    specs={[
      { label: "Maximum Thrust", value: "4,000 N" },
      { label: "Specific Fuel Consumption", value: "0.95 kg/kN·h" },
      { label: "Weight", value: "85 kg" },
      { label: "Diameter", value: "320 mm" },
      { label: "Length", value: "780 mm" },
      { label: "Max RPM", value: "48,000" },
      { label: "Pressure Ratio", value: "6.5:1" },
      { label: "Turbine Inlet Temperature", value: "1,050°C" },
      { label: "Operating Altitude", value: "Up to 12,000 m" },
      { label: "Design Life", value: "500+ hours" },
    ]}
    highlights={[
      "Optimized for sustained cruise at high altitude with minimal fuel consumption.",
      "Indigenous superalloy turbine blades rated for 1,050°C inlet temperature.",
      "Full-authority digital engine control (FADEC) with redundant channels.",
      "Quick-start capability under 30 seconds from cold to full thrust.",
      "Modular design enabling rapid field-level maintenance and component swap.",
      "Designed for integration with JP-5, JP-8, and ATF fuel grades.",
    ]}
    applications={[
      "Medium-range reconnaissance UAVs",
      "Subsonic cruise missile platforms",
      "High-altitude long-endurance (HALE) drones",
      "Unmanned combat aerial vehicles (UCAVs)",
      "Target drone systems",
    ]}
    status="The 4kN engine has completed over 200 hours of ground testing and is currently undergoing flight qualification testing. Integration with partner UAV platforms is scheduled for Q3 2026, with limited series production planned for early 2027."
  />
);

export default Product4kN;
