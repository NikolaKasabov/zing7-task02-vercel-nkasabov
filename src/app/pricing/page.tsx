import Header from "@/components/layout/Header";
import Supercharge from "@/components/layout/Supercharge";
import Footer from "@/components/layout/Footer";
import Plans from "@/components/layout/Plans";

export default function Pricing() {
  return (
    <>
      <Header />
      <main>
        <Plans />
        <Supercharge />
      </main>
      <Footer />
    </>
  );
}
