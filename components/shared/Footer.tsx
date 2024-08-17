import Image from "next/image";
import Link from "next/link";
import React from "react";
import EnquiryForm from "./EnquiryForm";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-footer bg-cover p-5 md:p-20 flex flex-col gap-5 md:gap-10 text-white mt-20">
      <h3 className="font-bold text-3xl md:text-center">Group Company</h3>
      <div className="flex justify-around items-center gap-5 md:gap-10 w-fit mx-auto">
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

      <span className="h-[1px] w-full bg-[#EEDBB0]"></span>

      {/* Enquiry form */}

      <div className="flex flex-col md:flex-row justify-between md:items-center w-full gap-5">
        <Image
          src={"/assets/images/astral-logo.png"}
          alt="astral-logo"
          width={200}
          height={60}
        />

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 md:gap-10">
          <div className="space-y-2">
            <p className="font-bold text-sm text-[#EEDBB1]">
              sign up to our newsletter
            </p>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur. </p>
          </div>

          <div>
            <EnquiryForm />
          </div>
        </div>
      </div>

      {/* Links */}

      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 w-full">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-sm text-[#EEDCB2]">Reach us</p>
          <Link href={"/"}>
            <p className="text-xs flex gap-2 items-center">
              <span>
                <CiLocationOn className="size-7" />
              </span>{" "}
              #417/418, 11th Cross, 4th Phase, <br /> Peenya Industrial Area,
              Bangalore - 560 058
            </p>
          </Link>

          <Link href={"/"}>
            <p className="text-xs flex gap-2 items-center">
              <span>
                <IoCallOutline className="size-7" />
              </span>{" "}
              +91 - 80 - 42552555
            </p>
          </Link>

          <Link href={"/"}>
            <p className="text-xs flex gap-2 items-center">
              <span>
                <CiMail className="size-7" />
              </span>{" "}
              info@gem-paints.com
            </p>
          </Link>
        </div>

        <div className="flex flex-wrap w-ful justify-between gap-5 xl:gap-20">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-sm text-[#EEDCB2]">About</p>

            <Link href={"/"}>
              <p className="text-xs">About astrals</p>
            </Link>

            <Link href={"/"}>
              <p className="text-xs">paint journey</p>
            </Link>

            <Link href={"/"}>
              <p className="text-xs">Group Companies</p>
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-bold text-sm text-[#EEDCB2]">Category</p>

            <Link href={"/"}>
              <p className="text-xs">interior paints</p>
            </Link>

            <Link href={"/"}>
              <p className="text-xs">exterior paints</p>
            </Link>

            <Link href={"/"}>
              <p className="text-xs">undercoats</p>
            </Link>

            <Link href={"/"}>
              <p className="text-xs">painting tools</p>
            </Link>

            <Link href={"/"}>
              <p className="text-xs">water proofing</p>
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-bold text-sm text-[#EEDCB2]">Services</p>

            <Link href={"/"}>
              <p className="text-xs">wall painting</p>
            </Link>

            <Link href={"/"}>
              <p className="text-xs">water Solution</p>
            </Link>

            <Link href={"/"}>
              <p className="text-xs">painting</p>
            </Link>

            <Link href={"/"}>
              <p className="text-xs">colour shades</p>
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <Link href={"/"}>
              <p className="font-bold text-sm text-[#EEDCB2]">Downloads</p>
            </Link>

            <Link href={"/"}>
              <p className="font-bold text-sm text-[#EEDCB2]">
                Become A Dealer
              </p>
            </Link>

            <Link href={"/"}>
              <p className="font-bold text-sm text-[#EEDCB2]">Blogs</p>
            </Link>

            <Link href={"/"}>
              <p className="font-bold text-sm text-[#EEDCB2]">Contact</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Social links */}

      <div className="flex gap-5 md:justify-end">
        <Link href={"/"}>
          <FaFacebookF className="size-8 border border-[#EEDBB0] p-2 rounded-full text-[#EEDBB0]" />
        </Link>

        <Link href={"/"}>
          <FaInstagram className="size-8 border border-[#EEDBB0] p-2 rounded-full text-[#EEDBB0]" />
        </Link>

        <Link href={"/"}>
          <AiOutlineYoutube className="size-8 border border-[#EEDBB0] p-2 rounded-full text-[#EEDBB0]" />
        </Link>

        <Link href={"/"}>
          <FaXTwitter className="size-8 border border-[#EEDBB0] p-2 rounded-full text-[#EEDBB0]" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
