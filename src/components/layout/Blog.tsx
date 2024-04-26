"use client";
import { Fragment, useState } from "react";
import { allBlogs } from "../../../public/blogData";
import Tabs from "../ui/Tabs";
import BlogItemBig from "./BlogItemBig";
import BlogItemNormal from "./BlogItemNormal";
import BlogItemSmall from "./BlogItemSmall";
import { useRouter } from "next/navigation";

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
  const [selectedBlogsType, setSelectedBlogsType] = useState(tabs[0].title);
  const router = useRouter();

  function handleTabClick(tabTitle: string) {
    setSelectedBlogsType(tabTitle);
  }

  function handleBlogItemClick(blogId: any) {
    router.push(`/blog/${blogId}`);
  } 

  const filteredBlogs = allBlogs.filter((blogItem) => {
    if (selectedBlogsType === "all articles") {
      return true;
    } else if (blogItem.type.toLowerCase() === selectedBlogsType) {
      return true;
    } else return false;
  });

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
            {filteredBlogs.slice(0, 1).map((item, index) => (
              <Fragment key={index}>
                <BlogItemBig {...item} onClick={handleBlogItemClick} />
              </Fragment>
            ))}
          </div>

          {/* 6 normal blogItems */}
          <div className="mt-[95px] grid grid-cols-3 gap-x-[30px] gap-y-[117px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[40px]">
            {filteredBlogs.slice(1, 7).map((item, index) => (
              <Fragment key={index}>
                <BlogItemNormal {...item} onClick={handleBlogItemClick} />
              </Fragment>
            ))}
          </div>

          {/* 1 normal and 3 small blogItems */}
          <div className="mt-[117px] grid grid-cols-2 gap-x-[30px] gap-y-[30px] max-sm:grid-cols-1 max-sm:mt-[50px]">
            {filteredBlogs.slice(7, 8).map((item, index) => (
              <Fragment key={index}>
                <BlogItemNormal {...item} onClick={handleBlogItemClick} />
              </Fragment>
            ))}

            <div>
              {filteredBlogs.slice(8, 11).map((item, index) => (
                <Fragment key={index}>
                  <BlogItemSmall {...item} onClick={handleBlogItemClick} />
                </Fragment>
              ))}
            </div>
          </div>

          {/* 3 normal blogItems */}
          <div className="mt-[95px] grid grid-cols-3 gap-x-[30px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[40px]">
            {filteredBlogs.slice(11, 14).map((item, index) => (
              <Fragment key={index}>
                <BlogItemNormal {...item} onClick={handleBlogItemClick} />
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
