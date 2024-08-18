import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { IoPlayCircleOutline } from "react-icons/io5";
import Script from "next/script";
import HtmlContent from "./HtmlContent";
import AboutVideo from "./AboutVideo";

const AboutSection = ({ homepageData }: { homepageData: any }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-11/12 m-auto gap-10">
      <div className="flex flex-col gap-4 flex-1">
        <p className="font-medium text-lg">{homepageData.homeAboutSubtitle}</p>
        <h2 className="font-bold text-3xl flex gap-2 items-center">
          {homepageData.homeAboutTitle}
          <span>
            <Image
              src={"/assets/images/about-red.png"}
              alt="about-red"
              width={157}
              height={10}
            />
          </span>
        </h2>

        <HtmlContent html={homepageData.homeAboutDescription} />

        <Link href={homepageData.homeAboutButton.url} className="w-fit">
          <Button className="bg-transparent text-[#E70000] border border-[#E70000] hover:text-white font-semibold rounded-[20px]">
            {homepageData.homeAboutButton.title}
          </Button>
        </Link>
      </div>

      <AboutVideo
        videoImage={homepageData.homeAboutVideoImage.node.sourceUrl}
        videoUrl={homepageData.homeAboutVideoUrl}
      />
    </div>
  );
};

export default AboutSection;
