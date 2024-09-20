import AboutUs from "@/components/AboutUs/AboutUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import HomeCover from "@/components/HomeCover/HomeCover";
import OurServices from "@/components/OurServices/OurServices";


export default function Home() {
  return (
    <>
      <div className="px-5 xl:px-10 ">
        {" "}
        <HomeCover />
        <OurServices />
        <AboutUs />
      </div>
      <ContactUs />
    </>
  );
}


//  