import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const CategorySection = () => {
  return (
    <div className="w-11/12 m-auto flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <p className="font-medium text-lg">Category</p>
        <h2 className="font-bold text-3xl flex gap-2 items-center">
          Wide range of Colours
          <span>
            <Image
              src={"/assets/images/category-orange.png"}
              alt="category-orange"
              width={157}
              height={10}
            />
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-5 max-lg:flex-col max-lg:justify-center max-lg:items-center">
        <div className="relative w-full h-[350px] lg:h-[370px] 2xl:h-[620px] col-span-2 lg:col-span-1 lg:row-span-2">
          <Image
            src={"/assets/images/category-1.png"}
            alt="image"
            fill
            className="object-cover"
          />

          <div className="bg-[#FF9119] bg-opacity-60 backdrop-filter backdrop-blur-lg h-[70px] flex justify-between px-5 items-center absolute left-0 bottom-0 w-full">
            <p className="text-white font-semibold text-xl">Interior Paints</p>
            <Link href="/contact">
              <Button className="bg-white text-[#FF9119] hover:text-white font-semibold rounded-[20px]">
                Read More
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 col-span-2 lg:col-span-1 lg:row-span-2">
          <div className="relative w-full h-[200px] lg:h-[175px] 2xl:h-[300px]">
            <Image
              src={"/assets/images/category-2.png"}
              alt="image"
              fill
              className="object-cover"
            />

            <p className="absolute bottom-2 left-4 text-white font-semibold text-xl backdrop-filter backdrop-blur-lg">
              Exterior Paints
            </p>
          </div>

          <div className="relative w-full h-[200px] lg:h-[175px] 2xl:h-[300px]">
            <Image
              src={"/assets/images/category-3.png"}
              alt="image"
              fill
              className="object-cover"
            />

            <p className="absolute bottom-2 left-4 text-white font-semibold text-xl backdrop-filter backdrop-blur-lg">
              Water Proofing
            </p>
          </div>

          <div className="relative w-full h-[200px] lg:h-[175px] 2xl:h-[300px]">
            <Image
              src={"/assets/images/category-4.png"}
              alt="image"
              fill
              className="object-cover"
            />

            <p className="absolute bottom-2 left-4 text-white font-semibold text-xl backdrop-filter backdrop-blur-lg">
              Undercoats
            </p>
          </div>

          <div className="relative w-full h-[200px] lg:h-[175px] 2xl:h-[300px]">
            <Image
              src={"/assets/images/category-5.png"}
              alt="image"
              fill
              className="object-cover"
            />

            <p className="absolute bottom-2 left-4 text-white font-semibold text-xl backdrop-filter backdrop-blur-lg">
              Painting Tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
