import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-footer bg-cover p-20 flex flex-col gap-10 justify-center items-center text-white mt-20">
      <h3 className="font-bold text-3xl">Group Company</h3>
      <div className="flex justify-around items-center gap-10">
        <Link href={"/"}>
          <Image
            src={"/assets/images/astral-pipes.png"}
            alt="astral-pipes"
            width={200}
            height={60}
          />
        </Link>

        <Link href={"/"}>
          <Image
            src={"/assets/images/astral-adhesives.png"}
            alt="astral-adhesives"
            width={160}
            height={60}
          />
        </Link>

        <Link href={"/"}>
          <Image
            src={"/assets/images/bondit.png"}
            alt="bondit"
            width={160}
            height={60}
          />
        </Link>

        <Link href={"/"}>
          <Image
            src={"/assets/images/astral-bathware.png"}
            alt="astral-bathware"
            width={160}
            height={60}
          />
        </Link>

        <Link href={"/"}>
          <Image
            src={"/assets/images/gem.png"}
            alt="gem"
            width={160}
            height={60}
          />
        </Link>
      </div>

      <span className="h-[2px] w-full bg-[#EEDBB0]"></span>

      <div></div>
    </div>
  );
};

export default Footer;
