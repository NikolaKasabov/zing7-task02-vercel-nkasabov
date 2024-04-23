import Image from "next/image";

export default function ResultItem({ revenueText1, revenueText2, text, author, jobTitle, image }: any) {
  return (
    <article className="pt-11 flex justify-between border-t-[1px] border-[#787878] max-lg:flex-col max-lg:items-center max-lg:gap-7">
      <div className="max-lg:text-center">
        <p className="text-7xl font-bold tracking-[-1px] max-lg:text-[50px]">{revenueText1}</p>
        <p className="text-xl font-bold">{revenueText2}</p>
      </div>

      <div className="max-w-[750px]">
        <p className="text-3xl font-medium leading-[1.4] tracking-[-0.44px] max-lg:text-center">{text}</p>

        <div className="mt-[30px] flex gap-4 max-lg:justify-center">
          <Image src={image} alt="person" className="shrink-0 self-center" />
          <div>
            <p className="font-bold">{author}</p>
            <p className="text-[#404040]">{jobTitle}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
