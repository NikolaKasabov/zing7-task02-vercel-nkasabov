"use client";
import { useEffect, useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function FAQItem({ title, text, isActive, onClick }: any) {
  const [divHeight, setDivHeight] = useState(0);
  const pRef: any = useRef();

  function setHeight() {
    const pHeight = pRef.current.offsetHeight;
    setDivHeight(pHeight);
  }

  function handleClick() {
    setHeight();
    onClick();
  }

  useEffect(() => {
    setHeight();
  }, []);

  return (
    <article className="border-t-[#787878] border-t-[1px] py-[48px]">
      <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        <h3 className="text-[32px] font-medium leading-[1.3125] tracking-[-0.44px]">{title}</h3>
        {isActive ? (
          <FaMinus color="#787878" size={36} className="shrink-0" />
        ) : (
          <FaPlus color="#787878" size={36} className="shrink-0" />
        )}
      </div>

      <div
        className={`overflow-hidden transition-height duration-300`}
        style={{ height: isActive ? divHeight + "px" : "0", marginTop: isActive ? "32px" : "0" }}
      >
        <p ref={pRef} className="text-lg">
          {text}
        </p>
      </div>
    </article>
  );
}
