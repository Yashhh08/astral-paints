import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const ServiceSection = ({ homepageData }: { homepageData: any }) => {
  return (
    <div className="w-11/12 m-auto flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <p className="font-medium text-lg">
          {homepageData.homeServicesSubtitle}
        </p>
        <h2 className="font-bold text-3xl flex gap-2 items-center">
          {homepageData.homeServicesTitle}
          <span>
            <Image
              src={"/assets/images/service-yellow.png"}
              alt="service-yellow"
              width={157}
              height={10}
            />
          </span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-around gap-5 items-center">
        <div className="size-[385px] relative md:flex-1">
          <Image
            src={"/assets/images/service-1.png"}
            alt="service-1"
            fill
            className="object-cover"
          />

          <div className="bg-[#FFE710] backdrop-filter bg-opacity-60 backdrop-blur-lg absolute left-0 bottom-0 h-[143px] w-full p-5 flex flex-col gap-1.5">
            <p className="font-semibold text-xl">Wall Painting</p>
            <p className="truncate">Lorem ipsum dolor sit amet consectetur.</p>
            <Link href="/contact">
              <Button className="bg-white text-black hover:text-white font-semibold rounded-[20px]">
                Read More
              </Button>
            </Link>
          </div>
        </div>

        <div className="size-[385px] relative md:flex-1">
          <Image
            src={"/assets/images/service-2.png"}
            alt="service-1"
            fill
            className="object-cover"
          />

          <div className="bg-[#FFE710] backdrop-filter bg-opacity-60 backdrop-blur-lg absolute left-0 bottom-0 h-[143px] w-full p-5 flex flex-col gap-1.5">
            <p className="font-semibold text-xl">Water Solution</p>
            <p className="truncate">Lorem ipsum dolor sit amet consectetur.</p>
            <Link href="/contact">
              <Button className="bg-white text-black hover:text-white font-semibold rounded-[20px]">
                Read More
              </Button>
            </Link>
          </div>
        </div>

        <div className="size-[385px] relative md:flex-1">
          <Image
            src={"/assets/images/service-3.png"}
            alt="service-1"
            fill
            className="object-cover"
          />

          <div className="bg-[#FFE710] backdrop-filter bg-opacity-60 backdrop-blur-lg absolute left-0 bottom-0 h-[143px] w-full p-5 flex flex-col gap-1.5">
            <p className="font-semibold text-xl">Painting</p>
            <p className="truncate">Lorem ipsum dolor sit amet consectetur.</p>
            <Link href="/contact">
              <Button className="bg-white text-black hover:text-white font-semibold rounded-[20px]">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
