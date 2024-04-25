import Image from "next/image";

export default function BlogItemBig({ id, type, title, date, author, image }: any) {
  return (
    <article className="max-w-[1140px] flex justify-between gap-6 max-lg:flex-col max-lg:items-center">
      <div className="max-w-[555px] w-full border-t-[#787878] border-t-[1px] border-b-[#787878] border-b-[1px] flex flex-col">
        <p className="mt-[21px] text-sm font-bold text-[#787878] tracking-[1.4px] uppercase">{type}</p>
        <h3 className="mt-[13px] text-[40px] font-bold leading-[1.25] tracking-[-0.56px] max-lg:text-[32px]">{title}</h3>
        <div className="mt-auto mb-[20px] pt-[40px] flex font-medium">
          <p>{date},</p>
          <p className="text-[#787878]">&nbsp;by {author}</p>
        </div>
      </div>

      <div className="max-w-[555px] w-full">
        <Image src={image} alt="blog post image" className="w-full" />
      </div>
    </article>
  );
}
