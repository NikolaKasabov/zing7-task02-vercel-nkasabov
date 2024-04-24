import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";

export default function CustomerItem({ text, name, jobTitle, image }: any) {
  return (
    <article className="max-w-[360px] w-full h-full flex flex-col">
      <BiSolidQuoteLeft size={50} color="#00CC61" />
      <div className="mt-[25px] h-[1px] bg-[#787878]"></div>
      <p className="mt-[22px] mb-[45px] text-2xl font-medium leading-[1.4167] tracking-[-0.33px]">{text}</p>

      <div className="mt-auto flex gap-4">
        <Image src={image} alt="person" className="shrink-0 self-center" />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-[#404040]">{jobTitle}</p>
        </div>
      </div>
    </article>
  );
}
