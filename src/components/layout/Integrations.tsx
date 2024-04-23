import integrations1 from "../../../public/images/integrations1.png";
import integrations2 from "../../../public/images/integrations2.png";
import integrations3 from "../../../public/images/integrations3.png";
import integrations4 from "../../../public/images/integrations4.png";
import integrations5 from "../../../public/images/integrations5.png";
import integrations6 from "../../../public/images/integrations6.png";
import integrations7 from "../../../public/images/integrations7.png";
import integrations8 from "../../../public/images/integrations8.png";
import integrations9 from "../../../public/images/integrations9.png";
import integrations10 from "../../../public/images/integrations10.png";
import Image from "next/image";
import Link from "next/link";

export default function Integrations() {
  return (
    <section className="py-[115px] bg-[#F4F4F4] max-lg:py-[60px]">
      <div className="max-w-[1180px] mx-auto px-5 text-center">
        <h2 className="text-5xl font-bold tracking-[-0.67px] max-lg:text-[40px]">Over 300+ integrations</h2>
        <p className="mt-5 text-lg">
          Expand the capabilities of <span className="font-black">Roooby</span> with hundreds of apps and integrations
        </p>

        <div className="mt-[67px] flex flex-wrap justify-center gap-[9px]">
          <Image src={integrations1} alt="company logo" />
          <Image src={integrations2} alt="company logo" />
          <Image src={integrations3} alt="company logo" />
          <Image src={integrations4} alt="company logo" />
          <Image src={integrations5} alt="company logo" />
          <Image src={integrations6} alt="company logo" />
          <Image src={integrations7} alt="company logo" />
          <Image src={integrations8} alt="company logo" />
          <Image src={integrations9} alt="company logo" />
          <Image src={integrations10} alt="company logo" />
        </div>

        <Link href="/" className="mt-[63px] block text-2xl font-medium max-lg:text-[22px]">
          See all apps and extensions &gt;
        </Link>
      </div>
    </section>
  );
}
