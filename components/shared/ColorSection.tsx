import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const ColorSection = ({
  homepageData,
  colourCategories,
}: {
  homepageData: any;
  colourCategories: any;
}) => {
  return (
    <div className="w-11/12 m-auto flex flex-col gap-4">
      <p className="font-medium text-lg">{homepageData.homeColoursSubtitle}</p>

      <div className="flex justify-between items-center w-full gap-7">
        <h2 className="font-bold text-3xl flex gap-2 items-center">
          {homepageData.homeColoursTitle}
          <span>
            <Image
              src={"/assets/images/colors-green.png"}
              alt="colors-green"
              width={157}
              height={10}
            />
          </span>
        </h2>

        <Link href={homepageData.homeColoursButton.url}>
          <Button className="bg-white text-[#00AE44] border border-[#00AE44] hover:text-white font-semibold rounded-[20px]">
            {homepageData.homeColoursButton.title}
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 transition-all duration-300">
        {colourCategories.map((category: any) => {
          return category.colours.nodes.map((color: any) => {
            return (
              <div
                key={color.slug}
                className="w-[190px] h-[320px] flex-1 flex flex-col hover:shadow-2xl rounded-[20px] justify-center items-center hover:border gap-2 group transition-all duration-300"
              >
                <p className="font-semibold text-xs group-hover:block hidden transition-all">
                  {color.title}
                </p>
                <div
                  className="w-full h-[200px]"
                  style={{ backgroundColor: color.colourInfo.selectColor }}
                >
                  <div className="w-full h-full border border-white scale-95"></div>
                </div>
                <p>{color.title}</p>
                <p className="text-sm">
                  {color.colourInfo.selectColor.toUpperCase()}
                </p>
              </div>
            );
          });
        })}

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
