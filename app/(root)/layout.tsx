import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Astral Paints",
  description: "",
  icons: {
    icon: "/assets/images/",
  },
  openGraph: {
    title: "OnVigil",
    description: "",
    images: [{ url: "/assets/images/" }],
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
