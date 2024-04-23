"use client";
import { useEffect, useRef, useState } from "react";

export default function BenefitItem({ key, getIcon, title, text }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const wrapper: any = useRef();

  useEffect(() => {
    const el: any = wrapper.current;

    function handleMouseEnter() {
      setIsHovered(true);
    }

    function handleMouseLeave() {
      setIsHovered(false);
    }

    if (el) {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (el) {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <article
      key={key}
      ref={wrapper}
      className="max-w-[374px] w-full px-8 py-16 rounded-xl bg-[#1E0A57] hover:bg-[#FFE377] hover:text-black hover:translate-y-[-12px] transition-transform group"
    >
      {getIcon(isHovered ? "black" : "white")}
      <div className="h-[1px] mt-[57px] bg-[#54457F] group-hover:bg-[#473F21]"></div>
      <h3 className="mt-4 text-xl font-bold tracking-[0.38px]">{title}</h3>
      <p className="mt-4 leading-[26px]">{text}</p>
    </article>
  );
}
