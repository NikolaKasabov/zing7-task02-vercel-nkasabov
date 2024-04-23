import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";

export default function InfoItem({ tagText, title, text, listItems, image, isImageOnTheRight }: any) {
  const info = (
    <div className="max-w-[485px]">
      <div className="px-2 py-[6px] inline-block text-sm font-bold tracking-[1.4px] uppercase rounded bg-[#FFE377]">
        {tagText}
      </div>
      <h3 className="mt-[15px] text-5xl font-bold leading-[1.2] tracking-[-0.67px] max-lg:text-[40px]">{title}</h3>
      <p className="mt-6 text-lg leading-[28px]">{text}</p>
      <ul className="mt-5 space-y-4">
        {listItems.map((item: string, index: number) => (
          <li key={index} className="flex gap-5">
            <IoMdCheckmark size={24} color="#00CC61" className="mt-1 shrink-0" />
            <p className="text-lg tracking-[0.2px]">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const img = <Image src={image} alt={tagText} />;

  return (
    <article className="flex justify-between items-center pt-[50px] border-t-[1px] border-[#787878] max-lg:flex-col max-lg:gap-10">
      {isImageOnTheRight ? (
        <>
          {info}
          {img}
        </>
      ) : (
        <>
          {img}
          {info}
        </>
      )}
    </article>
  );
}
