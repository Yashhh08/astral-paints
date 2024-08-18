import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import HtmlContent from "./HtmlContent";

const DealerSection = ({ homepageData }: { homepageData: any }) => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center p-5 gap-4 bg-cover h-[350px] text-white"
      style={{
        backgroundImage: `url(${homepageData.homeJoinBackgroundImage.node.sourceUrl})`,
      }}
    >
      <p className="font-medium text-lg">{homepageData.homeJoinSubtitle}</p>
      <h3 className="font-bold text-3xl">{homepageData.homeJoinTitle}</h3>

      <HtmlContent html={homepageData.homeJoinDescription} />

      <Link href={homepageData.homeJoinButton.url}>
        <Button className="bg-white text-black hover:text-white font-semibold rounded-[20px]">
          {homepageData.homeJoinButton.title}
        </Button>
      </Link>
    </div>
  );
};

export default DealerSection;
