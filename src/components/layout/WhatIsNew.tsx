import Link from "next/link";
import image1 from "../../../public/images/whatIsNew1.png";
import image2 from "../../../public/images/whatIsNew2.png";
import WhatIsNewItem from "./WhatIsNewItem";

export default function WhatIsNew() {
  const items = [
    {
      id: 1,
      tag: "service",
      title: "How To Deliver a Successful Product Launch",
      date: "05 Sep 2024",
      author: "Joshua Nash",
      image: image1,
    },
    {
      id: 2,
      tag: "service",
      title: "What Makes an Authentic Employee Profile, and Why Does It Matter?",
      date: "07 Sep 2023",
      author: "Ivan Neshev",
      image: image2,
    },
  ];

  return (
    <section className="py-[120px] max-lg:py-[60px]">
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-6">
          <h2 className="text-[64px] font-bold leading-[1.156] tracking-[-0.89px] max-lg:text-[40px] max-lg:text-center">
            What’s new at Roooby?
          </h2>
          <Link href="/" className="text-xl font-medium tracking-[0.43px] lg:self-end">
            See all <span className="text-[#00CC61]">&gt;</span>
          </Link>
        </div>

        <div className="mt-[68px] flex gap-x-[30px] gap-y-[50px] max-lg:flex-col max-lg:items-center max-lg:mt-[50px]">
          {items.map((item) => (
            <div key={item.id}>
              <WhatIsNewItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
