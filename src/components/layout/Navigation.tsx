"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../ui/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navigation() {
  const pathname = usePathname();
  const [showMobileNav, setShowMobileNav] = useState(false);

  function handleShowMobileNav() {
    setShowMobileNav(true);
  }

  function handleHideMobileNav() {
    setShowMobileNav(false);
  }

  const links = [
    {
      id: 1,
      text: "Product",
      path: "/",
    },
    {
      id: 2,
      text: "Pricing",
      path: "/pricing",
    },
    {
      id: 3,
      text: "Company",
      path: "/company",
    },
    {
      id: 4,
      text: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      text: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <nav
        className="lg:!flex items-center justify-between grow relative z-[100] max-lg:pt-16 max-lg:fixed max-lg:inset-0 max-lg:flex-col max-lg:justify-start max-lg:gap-[36px] max-lg:bg-secondary"
        style={{ display: showMobileNav ? "flex" : "none" }}
      >
        <ul className="flex gap-[36px] max-lg:flex-col max-lg:items-center">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className={`py-1 text-sm font-medium border-b-2 border-transparent hover:border-black max-lg:text-xl ${
                pathname === link.path ? "!border-black" : ""
              }`}
            >
              {link.text}
            </Link>
          ))}
        </ul>
        <div className="flex gap-5 max-lg:flex-col max-lg:gap-9">
          <Button secondary className="max-lg:text-xl max-lg:h-11">
            Log In
          </Button>
          <Button primary className="max-lg:text-xl max-lg:h-11">
            Try for Free
          </Button>
        </div>
        {/* close mobile nav button */}
        <button className="lg:hidden absolute top-6 right-5" onClick={handleHideMobileNav}>
          <AiOutlineClose size={30} />
        </button>
      </nav>
      {/* open mobile nav button */}
      <button className="lg:hidden" onClick={handleShowMobileNav}>
        <GiHamburgerMenu size={30} />
      </button>
    </>
  );
}
