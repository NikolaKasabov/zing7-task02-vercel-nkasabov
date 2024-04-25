import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Blog from "@/components/layout/Blog";
import Supercharge from "@/components/layout/Supercharge";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <Blog />
        <Supercharge />
      </main>
      <Footer />
    </>
  );
}
