import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const ColorSection = () => {
  return (
    <div className="w-11/12 m-auto flex flex-col gap-4">
      <p className="font-medium text-lg">Colours</p>

      <div className="flex justify-between items-center w-full gap-7">
        <h2 className="font-bold text-3xl flex gap-2 items-center">
          Popular Colours
          <span>
            <Image
              src={"/assets/images/colors-green.png"}
              alt="category-orange"
              width={157}
              height={10}
            />
          </span>
        </h2>

        <Link href="/contact">
          <Button className="bg-white text-[#00AE44] border border-[#00AE44] hover:text-white font-semibold rounded-[20px]">
            Explore More
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 transition-all duration-300">
        <div className="w-[190px] h-[320px] flex-1 flex flex-col hover:shadow-2xl rounded-[20px] justify-center items-center hover:border gap-2 group transition-all duration-300">
          <p className="font-semibold text-xs group-hover:block hidden transition-all">
            Astral Paints
          </p>
          <div className="w-full h-[200px] bg-[#FAE0B2]">
            <div className="w-full h-full border border-white scale-95"></div>
          </div>
          <p>Colour Name</p>
          <p className="text-sm">Colour Code</p>
        </div>

        <div className="w-[190px] h-[320px] flex-1 flex flex-col hover:shadow-2xl rounded-[20px] justify-center items-center hover:border gap-2 group transition-all duration-300">
          <p className="font-semibold text-xs group-hover:block hidden transition-all">
            Astral Paints
          </p>
          <div className="w-full h-[200px] bg-[#FBC9C3]">
            <div className="w-full h-full border border-white scale-95"></div>
          </div>
          <p>Colour Name</p>
          <p className="text-sm">Colour Code</p>
        </div>

        <div className="w-[190px] h-[320px] flex-1 flex flex-col hover:shadow-2xl rounded-[20px] justify-center items-center hover:border gap-2 group transition-all duration-300">
          <p className="font-semibold text-xs group-hover:block hidden transition-all">
            Astral Paints
          </p>
          <div className="w-full h-[200px] bg-[#00C1DE]">
            <div className="w-full h-full border border-white scale-95"></div>
          </div>
          <p>Colour Name</p>
          <p className="text-sm">Colour Code</p>
        </div>

        <div className="w-[190px] h-[320px] flex-1 flex flex-col hover:shadow-2xl rounded-[20px] justify-center items-center hover:border gap-2 group transition-all duration-300">
          <p className="font-semibold text-xs group-hover:block hidden transition-all">
            Astral Paints
          </p>
          <div className="w-full h-[200px] bg-[#0060AF]">
            <div className="w-full h-full border border-white scale-95"></div>
          </div>
          <p>Colour Name</p>
          <p className="text-sm">Colour Code</p>
        </div>

        <div className="w-[190px] h-[320px] flex-1 flex flex-col hover:shadow-2xl rounded-[20px] justify-center items-center hover:border gap-2 group transition-all duration-300">
          <p className="font-semibold text-xs group-hover:block hidden transition-all">
            Astral Paints
          </p>
          <div className="w-full h-[200px] bg-[#800404]">
            <div className="w-full h-full border border-white scale-95"></div>
          </div>
          <p>Colour Name</p>
          <p className="text-sm">Colour Code</p>
        </div>

        <div className="w-[190px] h-[320px] flex-1 flex flex-col hover:shadow-2xl rounded-[20px] justify-center items-center hover:border gap-2 group transition-all duration-300">
          <p className="font-semibold text-xs group-hover:block hidden transition-all">
            Astral Paints
          </p>
          <div className="w-full h-[200px] bg-[#ECA628]">
            <div className="w-full h-full border border-white scale-95"></div>
          </div>
          <p>Colour Name</p>
          <p className="text-sm">Colour Code</p>
        </div>
      </div>
    </div>
  );
};

export default ColorSection;
