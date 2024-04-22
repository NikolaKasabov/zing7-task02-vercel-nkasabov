"use client";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Navigation from "./Navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6 bg-[#F4F4F4]">
      <div className="max-w-[1180px] mx-auto px-5 flex items-center lg:gap-x-[100px] max-lg:justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
