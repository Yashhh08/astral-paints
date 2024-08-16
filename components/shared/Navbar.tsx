"use client";

import { navbarLinks } from "@/constants/navbarLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="h-[100px] bg-[#0060AF] text-white py-[28px] px-[40px] md:px-[80px] flex justify-between items-center">
      <Link href="/">
        <Image
          src="/assets/images/astral-logo.png"
          alt="Logo"
          width={150}
          height={47.55}
        />
      </Link>

      <div className="hidden xl:flex justify-center items-center gap-8">
        <div className="flex justify-center items-center gap-8">
          {navbarLinks.map((link) => {
            return (
              <Link
                href={link.path}
                key={link.name}
                className="hover:scale-95 hover:underline underline-offset-4 transition-all"
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <Link href="/contact">
          <Button className="bg-white text-[#0060AF] hover:text-white font-semibold rounded-[20px]">
            Enquire Now
          </Button>
        </Link>
      </div>

      <div className="xl:hidden">
        <Sheet>
          <SheetTrigger className="flex justify-center items-center ml-2">
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent side={"right"} className="flex flex-col gap-5 pt-10">
            {navbarLinks.map((link) => {
              let active = false;

              if (link.path === pathname) {
                active = true;
              }

              return (
                <SheetClose asChild key={link.name}>
                  <Link
                    href={link.path}
                    className={`flex justify-start items-center gap-4 font-medium text-lg ${
                      active ? "text-primary font-bold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              );
            })}
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
