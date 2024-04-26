import Image from "next/image";

export default function BlogItemNormal({ id, type, title, date, author, image, onClick }: any) {
  return (
    <article className="cursor-pointer" onClick={() => onClick(id)}>
      <p className="text-sm font-bold text-[#787878] tracking-[1.4px] uppercase">{type}</p>
      <div className="mt-[13px] h-[1px] bg-[#787878]"></div>
      <Image src={image} alt="blog post image" className="mt-[20px] w-full" />
      <h3 className="mt-[16px] text-2xl font-bold leading-[1.4167] tracking-[-0.33px]">{title}</h3>
      <div className="mt-[18px] flex font-medium">
        <p>{date},</p>
        <p className="text-[#787878]">&nbsp;by {author}</p>
      </div>
      {id}
    </article>
  );
}
