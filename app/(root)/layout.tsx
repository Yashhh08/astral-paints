import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Astral Paints",
  description: "",
  icons: {
    icon: "/assets/images/astral-icon.png",
  },
  openGraph: {
    title: "Astral Paints",
    description: "",
    images: [{ url: "/assets/images/astral-icon.png" }],
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />

      <div className="py-2 bg-[#0060AF] w-full">
        <div className="w-11/12 flex flex-wrap gap-2 justify-between items-center mx-auto text-white text-xs">
          <Link href={"/"}>Terms & Conditions</Link>

          <Link href={"/"}>ALL RIGHTS RESERVED</Link>

          <Link href={"/"}>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
