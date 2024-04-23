import Benefit from "@/components/layout/Benefit";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Info from "@/components/layout/Info";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefit />
        <Info />
      </main>
    </>
  );
}
