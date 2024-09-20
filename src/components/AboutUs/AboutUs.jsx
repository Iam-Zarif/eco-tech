import Image from "next/image";
import cover from "../../../public/images/home/aboutUs/aboutUs.svg"


const AboutUs = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto mt-10 lg:mt-28">
        <p className="lg:text-6xl text-3xl font-bold">About Us</p>

        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <Image src={cover} aalt="iamge"></Image>
          </div>
          <div className="col-span-12 flex flex-col gap-5 lg:gap-10 text-lg lg:text-2xl md:col-span-6">
            <p>
              EcoTech Solutions is a leading provider of sustainable solutions,
              dedicated to helping businesses and individuals reduce their
              environmental impact. We offer a range of services, including
              solar energy installation, eco-friendly product selection, and
              comprehensive green consulting.{" "}
            </p>
            <p>
              Our team of experts is committed to delivering innovative and
              effective solutions that help our clients achieve their
              sustainability goals.
            </p>
          </div>
        </div>
      <div className="-full h-[1px] bg-gray-500 mt-10 lg:mt-20"></div>
      </div>
    </>
  );
}

export default AboutUs

//   