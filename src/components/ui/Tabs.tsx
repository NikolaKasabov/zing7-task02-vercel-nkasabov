"use client";
import { useState } from "react";

export default function Tabs({
  tabs,
  onClick,
}: {
  tabs: { id: number; title: string }[];
  onClick: (title: string) => void;
}) {
  const [activeTitle, setActiveTitle] = useState(tabs[0].title.toLowerCase());

  function handleClick(title: string) {
    setActiveTitle(title);
    onClick(title);
  }

  return (
    <div className="flex gap-x-[35px] flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className="py-[22px] text-lg font-medium border-b-[3px] capitalize"
          style={{
            borderColor: tab.title === activeTitle ? "#00CC61" : "transparent",
            color: tab.title === activeTitle ? "black" : "#777777",
          }}
          onClick={() => handleClick(tab.title.toLowerCase())}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
}
