export default function BlogItemSmall({ id, type, title, date, author }: any) {
  return (
    <article className="mt-[32px] border-t-[#787878] border-t-[1px]">
      <h3 className="mt-[16px] max-w-[486px] text-2xl font-bold leading-[1.4167] tracking-[-0.33px]">{title}</h3>
      
      <div className="mt-[26px] flex justify-between items-center">
        <div className="flex flex-wrap font-medium">
          <p>{date},</p>
          <p className="text-[#787878]">&nbsp;by {author}</p>
        </div>
        <p className="text-sm font-bold text-[#787878] tracking-[1.4px] uppercase">{type}</p>
      </div>
    </article>
  );
}
