import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const CategorySection = ({ homepageData }: { homepageData: any }) => {
  return (
    <div className="w-11/12 m-auto flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <p className="font-medium text-lg">
          {homepageData.homeCategorySubtitle}
        </p>
        <h2 className="font-bold text-3xl flex gap-2 items-center">
          {homepageData.homeCategoryTitle}
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
        <div className="relative w-full h-[350px] lg:h-[370px] 2xl:h-[620px] col-span-2 lg:col-span-1 lg:row-span-2 hover:scale-105 transition-all duration-300">
          <Image
            src={homepageData.categories[0].image.node.sourceUrl}
            alt={homepageData.categories[0].title}
            fill
            className="object-cover"
          />

          <div className="bg-[#FF9119] bg-opacity-60 backdrop-filter backdrop-blur-lg h-[70px] flex justify-between px-5 items-center absolute left-0 bottom-0 w-full">
            <p className="text-white font-semibold text-xl">
              {homepageData.categories[0].title}
            </p>
            <Link href={homepageData.categories[0].link}>
              <Button className="bg-white text-[#FF9119] hover:text-white font-semibold rounded-[20px]">
                Read More
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 col-span-2 lg:col-span-1 lg:row-span-2">
          {homepageData.categories
            .slice(1)
            .map((category: any, index: number) => {
              return (
                <Link
                  key={category.title}
                  href={category.link}
                  className="relative w-full h-[200px] lg:h-[175px] 2xl:h-[300px] hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={category.image.node.sourceUrl}
                    alt="image"
                    fill
                    className="object-cover"
                  />

                  <p className="absolute bottom-2 left-4 text-white font-semibold text-xl backdrop-filter backdrop-blur-lg">
                    {category.title}
                  </p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
