"use client";
import BenefitItem from "./BenefitItem";
import { IoPerson } from "react-icons/io5";
import { AiOutlineLaptop } from "react-icons/ai";
import { ImMagicWand } from "react-icons/im";

export default function Benefit() {
  const items = [
    {
      id: 1,
      title: "Lead customers to happiness",
      text: "Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.",
      getIcon: (color: string) => <IoPerson color={color} size={60} />,
    },
    {
      id: 2,
      title: "Support your support",
      text: "Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.",
      getIcon: (color: string) => <AiOutlineLaptop color={color} size={60} />,
    },
    {
      id: 3,
      title: "Grow without growing pains",
      text: "Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.",
      getIcon: (color: string) => <ImMagicWand color={color} size={60} />,
    },
  ];

  return (
    <section className="bg-primary text-white">
      <div className="max-w-[1180px] mx-auto px-5 pt-[124px] pb-[130px] max-lg:py-[60px]">
        <div className="flex gap-7 max-lg:flex-col max-lg:items-center max-lg:text-center">
          <h2 className="max-w-[560px] text-5xl font-bold leading-[1.2]">Here&apos;s how Roooby can benefit your business</h2>
          <p className="max-w-[490px] mt-10 text-lg leading-7">
            Build more meaningful and lasting relationships — better understand their needs, identify new opportunities
            to help, address any problems faster.
          </p>
        </div>

        <div className="mt-[76px] flex flex-wrap justify-center gap-x-2 gap-y-6">
          {items.map((item) => (
            <div key={item.id}>
              <BenefitItem getIcon={item.getIcon} title={item.title} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
