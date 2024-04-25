"use client";
import { useState } from "react";
import FAQItem from "./FAQItem";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleClick(index: number) {
    setActiveIndex((prev) => (index === prev ? null : index));
  }

  const faqItems = [
    {
      id: 1,
      title: "How Does Roooby CRM Compare To The Competition?",
      text: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    },
    {
      id: 2,
      title: "Can I Change Plans Or Cancel My Subscription At Any Time?",
      text: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers.",
    },
    {
      id: 3,
      title: "How Secure Is My Data With Roooby CRM?",
      text: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    },
    {
      id: 4,
      title: "What Is The Uptime Guarantee?",
      text: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers.",
    },
    {
      id: 5,
      title: "How Can I Add More Emails To My Account?",
      text: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    },
  ];

  return (
    <section>
      <div className="max-w-[1180px] mx-auto px-5 pt-[116px] pb-[129px] max-lg:py-[60px]">
        <h2 className="max-w-[594px] text-[64px] font-bold leading-[1.1563] tracking-[-0.89px] max-lg:text-[40px] max-lg:text-center max-lg:mx-auto">
          Frequently asked questions
        </h2>

        <div className="max-w-[945px] ml-auto mt-[72px]">
          {faqItems.map((item, index) => (
            <div key={item.id}>
              <FAQItem {...item} isActive={activeIndex === index ? true : false} onClick={() => handleClick(index)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
