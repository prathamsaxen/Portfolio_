import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";
import Config from "./Config";
// import { useEffect } from "react";
// import MainPreLoader from "./Components/MainPreLoader/MainPreLoader";
export const metadata = {
  title: "Pratham Saxena",
  description: "Portfolio of Pratham Saxena",
};

export default function RootLayout({ children }) {
  // const [load, setLoad] = useState(true);
  return (
    <html lang="en">
      <body className={inter.className}>
      <Config children={children}/>
      </body>
    </html>
  );
}
