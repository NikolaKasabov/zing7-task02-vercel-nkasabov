export default function Quote({children, author, className}: any) {
  return (
    <article className={`py-[22px] border-t-[#787878] border-t-[1px] border-b-[#787878] border-b-[1px] ${className}`}>
      <p className="text-2xl font-medium leading-[1.4167]">{children}</p>
      <p className="mt-[25px] text-base font-medium text-[#787878]">{author}</p>
    </article>
  );
}