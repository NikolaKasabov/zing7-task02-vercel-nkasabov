"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import Button from "../ui/Button";
import image from "../../../public/images/hero-image.png";
import google from '../../../public/images/Google.png';
import atlassian from "../../../public/images/Atlassian.png";
import canon from "../../../public/images/Canon.png";
import walmart from "../../../public/images/Walmart.png";
import amazon from "../../../public/images/Amazon.png";

export default function Hero() {
  const [email, setEmail] = useState("");

  function handleSubmit(ev: any) {
    ev.preventDefault();
    toast.success("Thank you for subscribing.");
    setEmail("");
  }

  return (
    <section className="bg-secondary overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 pt-[70px] pb-[90px] relative max-xl:flex max-xl:flex-col max-xl:gap-[70px] max-xl:text-center">
        <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
          <h1 className="max-w-[642px] text-[64px] font-bold tracking-[0.89px] leading-[74px] text-primary max-sm:text-[40px] max-sm:leading-[50px]">
            Bringing companies and customers together, anywhere
          </h1>
          <p className="max-w-[478px] mt-5 text-lg leading-7">
            An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built
            to acquire and engage cutomers.
          </p>
          <form className="mt-[60px] max-w-[457px] w-full h-[72px] relative" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              className="w-full h-full px-6 rounded-xl border-[#EDEDED] border-[1px] placeholder:text-lg placeholder:font-medium placeholder:text-[#787878]"
              placeholder="Enter your email"
              value={email}
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
              required
            />
            <p className="ml-4 mt-2 text-sm text-[#404040] text-left">Full access. No credit card required.</p>
            <Button
              primary
              className="!h-[56px] !text-lg !font-bold !rounded-lg !absolute !top-[8px] !right-[8px] max-sm:!static max-sm:!mt-2 max-sm:!w-full"
            >
              Try for Free
            </Button>
          </form>
        </div>

        <Image
          src={image}
          alt="charts"
          className="absolute top-[70px] -right-[215px] max-xl:static max-xl:self-center max-sm:mt-[70px]"
        />
      </div>

      <div className="max-w-[1180px] mx-auto px-5 mt-[70px] mb-[88px] flex flex-wrap justify-center items-center gap-[70px] max-sm:mt-0">
        <p className="text-base font-medium tracking-[-0.22px]">Trusted by 1,000+ customers</p>
        <Image src={google} alt="google" />
        <Image src={atlassian} alt="atlassian" />
        <Image src={canon} alt="canon" />
        <Image src={walmart} alt="walmart" />
        <Image src={amazon} alt="amazon" />
      </div>
    </section>
  );
}
