import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import twitter from "../../../public/images/twitter.png";
import facebook from "../../../public/images/facebook.png";
import linkedin from "../../../public/images/linkedin.png";
import { GrLanguage } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="px-5">
      <div className="max-w-[1180px] mx-auto px-5 flex flex-wrap gap-x-[110px] gap-y-[50px] max-sm:flex-col max-sm:items-center max-sm:text-center pt-[120px] pb-[100px] max-lg:py-[60px]">
        <div>
          <Image src={logo} alt="Roooby" className="max-sm:mx-auto" />
          <p className="mt-[23px] max-w-[263px] text-sm leading-6">
            We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs
          </p>
          <div className="mt-[22px] flex items-center gap-4 max-sm:justify-center">
            <a href="https://twitter.com/?lang=en" target="_blank">
              <Image src={twitter} alt="twitter" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Image src={facebook} alt="facebook" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <Image src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Company</h3>
          <ul className="mt-[16px] text-sm leading-6 space-y-[9px]">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/">Jobs</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Product</h3>
          <ul className="mt-[16px] text-sm leading-6 space-y-[9px]">
            <li>
              <Link href="/">Sales software</Link>
            </li>
            <li>
              <Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
            <li>
              <Link href="/">Marketplace</Link>
            </li>
            <li>
              <Link href="/">Status</Link>
            </li>
            <li>
              <Link href="/">API</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Discover</h3>
          <ul className="mt-[16px] text-sm leading-6 space-y-[9px]">
            <li>
              <Link href="/">Partner Program</Link>
            </li>
            <li>
              <Link href="/">Get our newsletter</Link>
            </li>
            <li>
              <Link href="/">Sales Pipeline</Link>
            </li>
            <li>
              <Link href="/">What is CRM?</Link>
            </li>
            <li>
              <Link href="/">CRM Comparison</Link>
            </li>
            <li>
              <Link href="/">Resources</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Help Center</h3>
          <ul className="mt-[16px] text-sm leading-6 space-y-[9px]">
            <li>
              <Link href="/">Community</Link>
            </li>
            <li>
              <Link href="/">Knowledge Base</Link>
            </li>
            <li>
              <Link href="/">Academy</Link>
            </li>
            <li>
              <Link href="/">Support</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto h-[1px] bg-[#DFDFDF]"></div>

      <div className="max-w-[1180px] mx-auto px-5 py-[40px]  flex justify-between items-center max-[800px]:flex-col max-[800px]:gap-[50px]">
        <p className="text-sm tracking-[0.2px]">&copy; Copyright 2024</p>

        <ul className="flex gap-[40px] text-sm tracking-[0.2px] max-[800px]:flex-col max-[800px]:text-center max-[800px]:gap-[20px]">
          <li>
            <Link href="/">Terms of Service</Link>
          </li>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/">Cookies</Link>
          </li>
        </ul>

        <div className="flex items-center">
          <GrLanguage size={20} color="#787878" />
          <p className="ml-3 mr-1 text-sm tracking-[0.2px]">English</p>
          <FaChevronDown size={10} color="#787878" />
        </div>
      </div>
    </footer>
  );
}
