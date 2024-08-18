"use client";
import Image from "next/image";
import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

const AboutVideo = ({
  videoImage,
  videoUrl,
}: {
  videoImage: string;
  videoUrl: string;
}) => {
  return (
    <div className="w-full h-[400px] md:w-[600px] xl:h-[530px] relative xl:-top-20 group">
      <Image src={videoImage} alt="video-image" fill />

      <video
        loop
        muted
        controls
        className="w-full h-full object-cover z-10 absolute opacity-0 group-hover:opacity-100 transition-all duration-300"
        onMouseEnter={(e) => {
          e.currentTarget.play();
        }}
        onMouseLeave={(e) => {
          e.currentTarget.pause();
        }}
      >
        <source
          src={
            "/assets/demo-video.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <p className="absolute left-[50%] max-sm:mt-2 md:top-[50%] transform -translate-x-[50%] md:-translate-y-[50%] z-10 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 font-semibold text-center text-white">
        Playing random video because api endpoint giving this url, {videoUrl}
      </p>

      <div className="absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]">
        <IoPlayCircleOutline className="size-10 text-white hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default AboutVideo;
