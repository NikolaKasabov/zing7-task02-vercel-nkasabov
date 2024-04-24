import Button from "../ui/Button";
import { IoMdCheckmark } from "react-icons/io";

export default function PlanItem({ title, isRecommended, subtitle, price, period, button, trialText, listItems }: any) {
  return (
    <article className="max-w-[374px] pt-[30px] px-[32px] pb-[40px] bg-white rounded-xl">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        {isRecommended && (
          <div className="py-1 px-2 text-xs font-bold tracking-[1.2px] text-[#00CC61] bg-[#EBFBF3] rounded-md uppercase">
            recommended
          </div>
        )}
      </div>

      <p className="mt-2 leading-[26px]">{subtitle}</p>

      <div className="mt-[22px] pl-4 flex gap-1">
        <p className="text-5xl font-bold leading-[1.2083] tracking-[-0.67px] max-lg:text-[40px]">{price}</p>
        <p className="self-end text-base font-bold text-[#777777]">/{period}</p>
      </div>

      {button.type === "primary" ? (
        <Button primary className="!mt-[22px] !w-full !h-[56px] !text-lg !font-bold !tracking-[-0.25px] !rounded-lg">
          {button.text}
        </Button>
      ) : (
        <Button secondary className="!mt-[22px] !w-full !h-[56px] !text-lg !font-bold !tracking-[-0.25px] !rounded-lg">
          {button.text}
        </Button>
      )}

      <p className="mt-3 text-sm tracking-[0.16px] text-[#777777] text-center">{trialText}</p>

      <div className="mt-[27px] h-[1px] bg-[#DFDFDF]"></div>

      <ul className="mt-[27px] space-y-[16px]">
        {listItems.map((item: any, index: number) => (
          <li key={index} className="flex items-center gap-3">
            <IoMdCheckmark size={20} color={item.lineThrough ? "rgba(0, 204, 97, 0.5)" : "rgba(0, 204, 97, 1)"} />
            <p className={`${item.lineThrough ? "text-[#C2C2C2] line-through" : ""} leading-[1.625] tracking-[0.18px]`}>
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
