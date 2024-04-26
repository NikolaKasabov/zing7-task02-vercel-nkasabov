export default function BlogItemSmallInDetails({ id, type, title, date, author, onClick }: any) {
  return (
    <article>
      <p className="text-sm font-bold text-[#787878] tracking-[1.4px] uppercase">{type}</p>
      <div className="mt-[13px] h-[1px] bg-[#787878]"></div>
      <h2 className="mt-[14px] text-5xl font-bold leading-[1.2083] tracking-[-0.67px] max-lg:text-[40px]">
        {title}
      </h2>
      <div className="mt-[18px] flex font-medium">
        <p>{date},</p>
        <p className="text-[#787878]">&nbsp;by {author}</p>
      </div>
    </article>
  );
}
