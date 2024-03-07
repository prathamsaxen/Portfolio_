import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pratham Saxena",
  description: "Portfolio of Pratham Saxena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar/>
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
