import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { IoPlayCircleOutline } from "react-icons/io5";

const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-11/12 m-auto gap-10">
      <div className="flex flex-col gap-5 flex-1">
        <p className="font-medium text-lg">About Astral Paints</p>
        <h2 className="font-bold text-3xl flex gap-2 items-center">
          Bringing your dreams to life
          <span>
            <Image
              src={"/assets/images/about-red.png"}
              alt="about-red"
              width={157}
              height={10}
            />
          </span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis
          phasellus porttitor amet odio tempor. Ac molestie fames id urna dui
          posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at
          in pharetra velit luctus id pellentesque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis
          phasellus porttitor amet odio tempor. Ac molestie fames id urna dui
          posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at
          in pharetra velit luctus id pellentesque.
        </p>

        <Link href="/contact">
          <Button className="bg-transparent text-[#E70000] border border-[#E70000] hover:text-white font-semibold rounded-[20px]">
            Read More
          </Button>
        </Link>
      </div>

      <div className="w-full h-[400px] md:w-[600px] xl:h-[530px] relative xl:-top-20">
        <Image src={"/assets/images/video-image.png"} alt="video-image" fill />

        <div className="absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          <IoPlayCircleOutline className="size-10 text-white hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
