import Header from "@/components/layout/Header";
import Supercharge from "@/components/layout/Supercharge";
import Footer from "@/components/layout/Footer";
import Plans from "@/components/layout/Plans";
import FAQ from "@/components/layout/FAQ";

export default function Pricing() {
  return (
    <>
      <Header />
      <main>
        <Plans />
        <FAQ />
        <Supercharge />
      </main>
      <Footer />
    </>
  );
}
