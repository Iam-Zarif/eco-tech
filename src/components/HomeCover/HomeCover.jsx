
import Image from "next/image";
import cover from "../../../public/images/home/cover/cover.svg"
import arrow from "../../../public/icons/home/cover/arrow-up-right.svg"
import Link from "next/link";
const HomeCover = () => {
  return (
    <div className="mt-10 lg:mt-16 ">
      <p className="text-center lg:text-cover lg:max-w-5xl lg:leading-[7rem] mx-auto text-4xl font-bold">
        Innovating for a Greener Future
      </p>
      <p className="text-center lg:text-3xl mt-5 lg:mt-2">
        Sustainable technology solutions for businesses worldwide
      </p>

      <div className="pt-12">
        <Image
          src={cover}
          alt="cover"
          className="mx-auto w-full"
          loading="lazy"
        ></Image>
      </div>

      <Link href="/learnMore" className="lg:w-72 lg:h-24 w-40 h-12 rounded-lg my-auto  flex items-center justify-center bg-hulk mx-auto mt-12 lg:mt-20 text-center ">
        <div className="flex justify-center my-auto items-center gap-2">
          <button className="lg:text-2xl text-sm">Learn More</button>
          <Image alt="->" src={arrow} height={25} width={25}></Image>
        </div>
      </Link>
    </div>
  );
}

export default HomeCover