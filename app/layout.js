import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Noto_Sans_Thai } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const Thai = Noto_Sans_Thai({
  weight: "400",
  subsets: ["thai"],
});

export const metadata = {
  title: "HubwaterTech",
  description: "จำหน่ายเครื่องกรองน้ำสำหรับครัวเรือน เชิงพาณิชย์ และอุตสาหกรรม",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body
        className={`${Thai.className} min-h-screen flex flex-col text-base `}
      >
        <Header />
        <main className="flex-1 bg-gray-50">
          <div className=" flex-grow mx-auto px-6 sm:px-12 lg:px-34 py-8 ">
            {children}
          </div>
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
