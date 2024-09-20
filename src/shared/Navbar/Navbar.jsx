"use client"
import Link from "next/link";
import arrow from "../../../public/icons/home/navbar/arrow.svg";
import Image from "next/image";
import Menu from "../../../public/icons/home/navbar/menu.png"
import { useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const toogleMenu = () =>{
        setMenu(!menu);
  
    }
    const navbar = (
      <>
        {" "}
        <div className="flex bg-black mt-5 items-center justify-between">
          <p className="text-2xl font-bold">Logo</p>
          <div className="hidden md:block">
            <div className=" items-center gap-10 flex ">
              <Link href="/" className="hover:text-gray-300 ">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-300 t">
                About Us
              </Link>
              <div className="flex group items-center gap-2 hover:text-gray-300 t">
                <Link href="/services">Services</Link>
                <Image
                  src={arrow}
                  alt="v"
                  loading="lazy"
                  height={20}
                  width={20}
                  className="group-hover:translate-y-[2px] cursor-pointer transition-all duration-300"
                ></Image>
              </div>
              <Link href="/contact" className="hover:text-gray-300 t">
                Contact
              </Link>
            </div>
          </div>
          <div className="block md:hidden">
            <Image
              src={Menu}
              onClick={toogleMenu}
              className="cursor-pointer"
              alt="-"
              height={20}
              width={20}
            ></Image>
          </div>
        </div>
      </>
    );
  return (
    <div className="px-5 xl:px-10 ">
      {navbar}
      {menu && (
        <div className="bg-black h-screen duration-500 transition-transform">
          <div className="h-[1px] w-full bg-gray-600 mt-5">
            <div className="flex justify-start items-start pt-4  flex-col">
              <Link href="/" className="py-3">
                Home
              </Link>
              <Link href="/about" className="py-3">
                About Us
              </Link>
              <div className="flex items-center gap-2 hover:text-gray-300 py-3">
                <Link href="/services">Services</Link>
                <Image
                  src={arrow}
                  alt="v"
                  loading="lazy"
                  height={15}
                  width={15}
                ></Image>
              </div>
              <Link href="/contact" className="py-3">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
