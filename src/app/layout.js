
import "./globals.css";



export const metadata = {
  title: "Eco Tech",
  description: "Innovating for a Greener Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
