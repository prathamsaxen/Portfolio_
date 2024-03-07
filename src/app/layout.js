import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Pratham Saxena",
  description: "Portfolio of Pratham Saxena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ToastContainer/>
      <Navbar/>
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
