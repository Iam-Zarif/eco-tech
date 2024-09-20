import Image from "next/image";
import cover from "../../../public/images/home/contactUs/cover.svg";
import sustain from "../../../public/images/home/contactUs/sustain.svg";
import Link from "next/link";
import facebook from "../../../public/icons/home/contactUs/facebook.svg";
import twitter from "../../../public/icons/home/contactUs/twitter.svg";
import instagram from "../../../public/icons/home/contactUs/insta.svg";
import linkedin from "../../../public/icons/home/contactUs/linkedin.svg";

import "./style.css"

const ContactUs = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto mt-10 lg:mt-16">
        <p className="lg:text-6xl text-3xl font-bold px-5 xl:px-10">
          Contact Us
        </p>
      </div>
      <div className="relative text-black">
        <Image
          src={cover}
          alt="cover"
          className="w-screen object-cover object-top h-screen"
        />
        <div className="absolute w-[95%] top-8 left-1/2 transform -translate-x-1/2">
          <Image
            src={sustain}
            alt="sustain"
            className="mx-auto w-full"
            width={900}
          />
        </div>

        <div className="absolute lg:w-[42%] lg:top-[20rem] top-[15%] md:w-[70%] w-[90%] left-1/2 transform -translate-x-1/2">
          <div className="w-full bg-[#8DD147] text-sm rounded-lg px-10 pt-6 pb-4">
            <div className="grid grid-cols-12 ">
              <div className="lg:col-span-3 col-span-6 flex items-start flex-col gap-3">
                <Link href="/blog">Blog</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/career">Careers</Link>
                <Link href="/aboutUs">About Us</Link>
              </div>
              <div className="col-span-3">
                <div className="col-span-3 flex items-start flex-col gap-3">
                  <Link href="/testimonials">Testimonials</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/clients">Clients</Link>
                </div>
              </div>
              <div className="col-span-12 mt-6 lg:mt-0 lg:col-span-6">
                <div className="relative h-12">
                  <input
                    type="text"
                    className="h-full w-full focus:outline-none rounded-full bg-[#D9D9D9] px-4 "
                    placeholder="Enter Your Email"
                    name=""
                    id=""
                  />
                  <button className="absolute right-1 h-[84%] rounded-full my-auto text-white px-8 top-1 bg-hulk">
                    Submit
                  </button>
                </div>
                <div className="flex items-center mt-8 justify-end gap-9">
                  <Image src={facebook} width={18}></Image>
                  <Image src={twitter} width={18}></Image>
                  <Image src={instagram} width={18}></Image>
                  <Image src={linkedin} width={18}></Image>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-600 mt-5 h-[1px]"></div>
            <div className="flex items-center justify-between text-[10px] mt-3">
              <p>@Copyrightdesign2024</p>
              <div className="flex items-center gap-3">
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
