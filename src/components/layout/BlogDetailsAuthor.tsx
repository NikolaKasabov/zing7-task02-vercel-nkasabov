import Image from "next/image";
import { MdInsertLink } from "react-icons/md";
import facebook from '../../../public/images/facebook.png';
import twitter from '../../../public/images/twitter.png';
import linkedin from "../../../public/images/linkedin.png";

export default function BlogDetailsAuthor({ name, jobTitle, image, className }: any) {
  return (
    <article className={`flex items-center flex-wrap gap-y-[20px] py-[22px] border-t-[#787878] border-t-[1px] border-b-[#787878] border-b-[1px] ${className}`}>
      <Image src={image} alt="person" />
      <div className="ml-[18px]">
        <p className="font-bold">{name}</p>
        <p className="text-sm">{jobTitle}</p>
      </div>
      <div className="ml-auto flex items-center gap-[14px]">
        <Image src={facebook} alt="facebook" />
        <Image src={twitter} alt="twitter" />
        <Image src={linkedin} alt="linkedin" />
        <MdInsertLink size={25} className="rotate-[-45deg]" />
      </div>
    </article>
  );
}
