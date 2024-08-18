import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const BlogSection = ({ homepageData }: { homepageData: any }) => {
  return (
    <div className="w-11/12 m-auto flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <p className="font-medium text-lg">{homepageData.blogSubtitle}</p>
        <h2 className="font-bold text-3xl flex gap-2 items-center">
          {homepageData.blogTitle}
          <span>
            <Image
              src={"/assets/images/blog-blue.png"}
              alt="blog-blue"
              width={157}
              height={10}
            />
          </span>
        </h2>
      </div>

      <div className="grid max-sm:grid-cols-1 grid-cols-3 gap-5 col-span-3 lg:col-span-1 lg:row-span-2">
        <div className="flex flex-col gap-5">
          <div className="relative w-full h-[200px] lg:h-[175px] 2xl:h-[300px]">
            <Image
              src={"/assets/images/blog-1.png"}
              alt="image"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 left-4 text-white font-semibold text-xl space-y-2">
              <p className="backdrop-filter backdrop-blur-lg w-fit font-normal italic text-sm">
                10 Jan 2024
              </p>
              <p className="backdrop-filter backdrop-blur-lg w-fit font-semibold text-xl">
                How to choose the perfect wallcolour for your office
              </p>
            </div>
          </div>
          <div className="relative w-full h-[200px] lg:h-[175px] 2xl:h-[300px]">
            <Image
              src={"/assets/images/blog-2.png"}
              alt="image"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 left-4 text-white font-semibold text-xl space-y-2">
              <p className="backdrop-filter backdrop-blur-lg w-fit font-normal italic text-sm">
                10 Jan 2024
              </p>
              <p className="backdrop-filter backdrop-blur-lg w-fit font-semibold text-xl">
                How to choose the perfect wallcolour for your office
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[420px] lg:h-[370px] 2xl:h-[620px]">
          <Image
            src={"/assets/images/blog-3.png"}
            alt="image"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 left-4 text-white font-semibold text-xl flex flex-col gap-2">
            <p className="backdrop-filter backdrop-blur-lg w-fit font-normal italic text-sm">
              20 Jan 2024
            </p>
            <p className="backdrop-filter backdrop-blur-lg w-fit font-semibold text-xl">
              10 stylish cream colour combination for your home
            </p>
            <Link
              href="/contact"
              className="max-md:flex justify-center items-center"
            >
              <Button className="bg-white text-[#0060AF] hover:text-white font-semibold rounded-[20px]">
                Read More
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative w-full h-[200px] lg:h-[175px] 2xl:h-[300px]">
            <Image
              src={"/assets/images/blog-4.png"}
              alt="image"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 left-4 text-white font-semibold text-xl space-y-2">
              <p className="backdrop-filter backdrop-blur-lg w-fit font-normal italic text-sm">
                10 Jan 2024
              </p>
              <p className="backdrop-filter backdrop-blur-lg w-fit font-semibold text-xl">
                How to choose the perfect wallcolour for your office
              </p>
            </div>
          </div>
          <div className="relative w-full h-[200px] lg:h-[175px] 2xl:h-[300px]">
            <Image
              src={"/assets/images/blog-5.png"}
              alt="image"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 left-4 text-white font-semibold text-xl space-y-2">
              <p className="backdrop-filter backdrop-blur-lg w-fit font-normal italic text-sm">
                10 Jan 2024
              </p>
              <p className="backdrop-filter backdrop-blur-lg w-fit font-semibold text-xl">
                How to choose the perfect wallcolour for your office
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
