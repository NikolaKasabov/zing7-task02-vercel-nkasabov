"use client";
import BlogDetails from "@/components/layout/BlogDetails";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function BlogDetailsPage() {
  return (
    <>
      <Header />
      <main>
        <BlogDetails />
      </main>
      <Footer />
    </>
  );
}
