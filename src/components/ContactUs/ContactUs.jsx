import Image from "next/image";
import cover from "../../../public/images/home/contactUs/cover.svg";
import sustain from "../../../public/images/home/contactUs/sustain.svg";

const ContactUs = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto mt-10 lg:mt-16">
        <p className="lg:text-6xl text-3xl font-bold px-5 xl:px-10">
          Contact Us
        </p>
      </div>
      <div className="relative">
        <Image
          src={cover}
          alt="cover"
          className="w-screen object-cover object-top h-screen"
        />
        <div className="absolute w-[95%] top-8 left-1/2 transform -translate-x-1/2">
          <Image src={sustain} alt="sustain" className="mx-auto w-full" width={900} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
