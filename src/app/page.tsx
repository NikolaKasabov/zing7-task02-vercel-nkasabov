import Benefit from "@/components/layout/Benefit";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Info from "@/components/layout/Info";
import Integrations from "@/components/layout/Integrations";
import Results from "@/components/layout/Results";
import WhatIsNew from "@/components/layout/WhatIsNew";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefit />
        <Info />
        <Integrations />
        <WhatIsNew />
        <Results />
      </main>
    </>
  );
}
