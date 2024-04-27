import Image from "next/image";
import google from "../../../public/images/Google.png";
import atlassian from "../../../public/images/Atlassian.png";
import canon from "../../../public/images/Canon.png";
import walmart from "../../../public/images/Walmart.png";
import amazon from "../../../public/images/Amazon.png";

export default function CustomersLogos({ text, className }: any) {
  return (
    <div className={`flex flex-wrap justify-center items-center gap-[72px] ${className}`}>
      <p className="text-base font-medium tracking-[-0.22px] text-center">{text}</p>
      <Image src={google} alt="google" />
      <Image src={atlassian} alt="atlassian" />
      <Image src={canon} alt="canon" />
      <Image src={walmart} alt="walmart" />
      <Image src={amazon} alt="amazon" />
    </div>
  );
}
