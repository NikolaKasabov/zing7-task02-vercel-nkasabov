import Image from "next/image";

export default function WhatIsNewItem({ tag, title, date, author, image }: any) {
  return (
    <article className="max-w-[555px]">
      <div className="text-sm font-bold uppercase tracking-[1.4px] text-[#787878]">{tag}</div>
      <div className="mt-[14px] h-[1px] bg-[#787878]"></div>
      <Image src={image} alt={title} className="mt-[22px]" />
      <h3 className="mt-[24px] text-[32px] font-bold leading-[1.3125] tracking-[-0.44px]">{title}</h3>
      <p className="mt-[19px]">
        <span className="text-base font-medium">{date}, </span>
        <span className="text-lg font-medium text-[#787878]">by {author}</span>
      </p>
    </article>
  );
}
