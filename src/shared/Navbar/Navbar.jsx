"use client";
import Link from "next/link";
import arrow from "../../../public/icons/home/navbar/arrow.svg";
import Image from "next/image";
import Menu from "../../../public/icons/home/navbar/menu.png";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const navbar = (
    <div className="w-full bg-black fixed top-0 left-0 z-50">
      <div className="max-w-screen-3xl mx-auto flex items-center justify-between py-5 px-5 md:px-10">
        <p className="text-2xl font-bold text-white">Logo</p>
        <div className="hidden md:block">
          <div className="items-center gap-10 flex text-white">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <div className="flex group items-center gap-2 hover:text-gray-300">
              <Link href="/services">Services</Link>
              <Image
                src={arrow}
                alt="v"
                loading="lazy"
                height={20}
                width={20}
                className="group-hover:translate-y-[2px] cursor-pointer transition-all duration-300"
              />
            </div>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
        <div className="block md:hidden">
          <Image
            src={Menu}
            onClick={toggleMenu}
            className={`cursor-pointer ${
              menu
                ? "rotate-90 transition-all duration-500"
                : "transition-all duration-500 rotate-0"
            }`}
            alt="-"
            height={20}
            width={20}
          ></Image>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 px-5 xl:px-10">
      {navbar}

      <div
        className={`fixed top-14 right-0 h-full bg-black w-full text-white z-50 transition-transform duration-500 ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full h-[1px] bg-gray-500 mt-4"></div>
        <div className="flex justify-start items-start pt-4 px-5 flex-col">
          <Link href="/" className="py-3 text-lg hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="py-3 text-lg hover:text-gray-300">
            About Us
          </Link>
          <div className="flex items-center gap-2 py-3 text-lg hover:text-gray-300">
            <Link href="/services">Services</Link>
            <Image src={arrow} alt="v" loading="lazy" height={15} width={15} />
          </div>
          <Link href="/contact" className="py-3 text-lg hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
