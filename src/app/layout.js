
import Navbar from "@/shared/Navbar/Navbar";
import "./globals.css";



export const metadata = {
  title: "Eco Tech",
  description: "Innovating for a Greener Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-armorWash">
        <Navbar />
        <div className={` text-white   2xl:max-w-[1800px]  mx-auto `}>
          {" "}
          {children}
        </div>
      </body>
    </html>
  );
}
