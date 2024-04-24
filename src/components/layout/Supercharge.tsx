import Image from "next/image";
import background from "../../../public/images/supercharge.png";
import Button from "../ui/Button";

export default function Supercharge() {
  return (
    <section className="relative text-white">
      <div className="max-w-[1180px] mx-auto px-5 flex justify-between items-center pt-[120px] pb-[117px] max-lg:py-[60px] max-lg:flex-col max-lg:gap-7 max-lg:text-center">
        <div>
          <h2 className="max-w-[770px] text-[64px] font-bold leading-[1.1563] tracking-[-0.89px] max-lg:text-[40px]">
            Ready to supercharge your business?
          </h2>
          <p className="mt-[25px] max-w-[570px] text-lg font-medium text-[#B8CACE] max-lg:mx-auto">
            Ask about <span className="font-black">Roooby</span> products, pricing, implementation, or anything else.
            Our highly trained reps are standing by, ready to help.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <Button secondary className="!h-[64px] !text-lg !font-bold !px-8 !rounded-lg !shadow-lg">
            Try for free <span className="ml-5">&gt;</span>
          </Button>
          <p className="text-sm font-medium">Full access. No credit card required.</p>
        </div>
      </div>

      <Image
        src={background}
        alt="background image"
        className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
      />
    </section>
  );
}
