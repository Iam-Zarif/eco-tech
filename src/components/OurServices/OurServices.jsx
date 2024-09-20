"use client";
import { useState } from "react";
import ArrowColor from "@/hooks/ArrowColor/ArrowColor";
import forward from "../../../public/icons/home/ourServices/forward.svg"
import backward from "../../../public/icons/home/ourServices/backward.svg"
import Image from "next/image";
import cover from "../../../public/images/home/ourServices/cover.svg"

const OurServices = () => {
  const [hoveredCards, setHoveredCards] = useState([false, false, false]);

  const handleMouseEnter = (index) => {
    setHoveredCards((prevState) => {
      const newHoveredCards = [...prevState];
      newHoveredCards[index] = true;
      return newHoveredCards;
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredCards((prevState) => {
      const newHoveredCards = [...prevState];
      newHoveredCards[index] = false;
      return newHoveredCards;
    });
  };

//   

  return (
    <div className="">
      <div className="max-w-5xl mx-auto">
      <div className="-full h-[1px] bg-gray-500 mt-10 lg:mt-20"></div>
        <div className="lg:mt-20 mt-10 flex items-center justify-between ">
          <p className="lg:text-6xl text-3xl font-bold">Our Services</p>
          <div className="flex items-center gap-5">
            <Image src={backward} alt="<-" height={30} width={50}></Image>
            <Image src={forward} alt="->" height={30} width={50}></Image>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-12 lg:mt-24 gap-5  lg:gap-8  mx-auto text-black">
          <div
            className="col-span-12 md:col-span-4 bg-white cursor-pointer group hover:bg-cardHover transition-all duration-300 flex flex-col lg:h-80 lg:gap-0 gap-8  justify-between py-8 px-10 rounded-lg"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <div className="flex items-center justify-between">
              <p
                className={`lg:text-heading text-xl ${
                  hoveredCards[0] ? "text-white" : ""
                } transition-all duration-300`}
              >
                Solar Energy
              </p>
              <ArrowColor stroke={hoveredCards[0] ? "white" : "black"} />
            </div>
            <p
              className={`${
                hoveredCards[0] ? "text-white" : ""
              } transition-all duration-300`}
            >
              Our team of experts offers professional installation and ongoing
              maintenance services.
            </p>
          </div>

          <div
            className="col-span-12 md:col-span-4 bg-white cursor-pointer group hover:bg-cardHover transition-all duration-300 flex flex-col justify-between lg:h-80 lg:gap-0 gap-8  py-8 px-10 rounded-lg"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <div className="flex items-start justify-between">
              <p
                className={`lg:text-heading text-xl ${
                  hoveredCards[1] ? "text-white" : ""
                } transition-all duration-300`}
              >
                Eco-friendly Products
              </p>
              <ArrowColor stroke={hoveredCards[1] ? "white" : "black"} />
            </div>
            <p
              className={`${
                hoveredCards[1] ? "text-white" : ""
              } transition-all duration-300`}
            >
              EcoTech Solutions offers a variety of sustainable products to help
              you live a greener life.
            </p>
          </div>

          <div
            className="col-span-12 md:col-span-4 bg-white cursor-pointer group hover:bg-cardHover transition-all duration-300 flex flex-col justify-between lg:h-80 lg:gap-0 gap-8  py-8 px-10 rounded-lg"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <div className="flex items-start justify-between">
              <p
                className={`lg:text-heading text-xl ${
                  hoveredCards[2] ? "text-white" : ""
                } transition-all duration-300`}
              >
                Green Consulting
              </p>
              <ArrowColor stroke={hoveredCards[2] ? "white" : "black"} />
            </div>
            <p
              className={`${
                hoveredCards[2] ? "text-white" : ""
              } transition-all duration-300`}
            >
              Our experts can assess your energy usage, create customized
              sustainability plans.
            </p>
          </div>
        </div>
      <div className="-full h-[1px] bg-gray-500 mt-10 lg:mt-20"></div>
      </div>
      <div className="max-w-5xl mx-auto"></div>
      <Image src={cover} alt="cover" className="mt-20 mx-auto"></Image>
    </div>
  );
};

export default OurServices;
