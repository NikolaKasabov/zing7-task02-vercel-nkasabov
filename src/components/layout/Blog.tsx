"use client";
import { useState } from "react";
import { blogsData } from "../../../public/blogData";
import Tabs from "../ui/Tabs";
import BlogItemBig from "./BlogItemBig";

const tabs = [
  {
    id: 1,
    title: "all articles",
  },
  {
    id: 2,
    title: "sales",
  },
  {
    id: 3,
    title: "marketing",
  },
  {
    id: 4,
    title: "service",
  },
  {
    id: 5,
    title: "product",
  },
  {
    id: 6,
    title: "news",
  },
];

export default function Blog() {
  const [selectedBlogType, setSelectedBlogType] = useState(tabs[0].title);

  function handleTabClick(tabTitle: string) {
    setSelectedBlogType(tabTitle);
  }

  return (
    <>
      <section className="bg-secondary">
        <div className="max-w-[1180px] mx-auto px-5 pt-[70px] max-lg:pt-[60px]">
          <h1 className="max-w-[652px] text-[64px] font-bold leading-[1.1563] tracking-[-0.89px] max-lg:text-[40px] max-lg:text-center max-lg:mx-auto">
            News and insights <span className="text-[#787878]">from our experts</span>
          </h1>

          <div className="mt-[77px]">
            <Tabs tabs={tabs} onClick={handleTabClick} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1180px] mx-auto px-5 pt-[120px] pb-[160px] max-lg:py-[60px]">
          {/* 1 big blogItem */}
          <div>
            {blogsData.slice(0, 1).map((item) => (
              <BlogItemBig {...item} />
            ))}
          </div>

          {/* 6 normal blogItems */}
          <div></div>

          {/* 1 normal and 3 small blogItems */}
          <div></div>

          {/* 3 normal blogItems */}
          <div></div>
        </div>
      </section>
    </>
  );
}
