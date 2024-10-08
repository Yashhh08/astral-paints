"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowCircleDown } from "react-icons/fa";
import { type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

const HeadCarousel = ({ banners }: { banners: any }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {banners.map((banner: any, index: number) => {
          return (
            <CarouselItem key={banner.bannersTitle}>
              <div
                className="h-[87vh] flex justify-between items-center text-white bg-cover bg-bottom max-sm:bg-center"
                style={{
                  backgroundImage: `url(${banner.bannerImage.node.sourceUrl})`,
                }}
              >
                <div className="w-11/12 m-auto flex flex-col gap-4 justify-between items-center md:items-start h-screen pt-32 pb-16">
                  <div className="flex flex-col justify-between gap-2">
                    <h1 className="text-center md:text-left -space-y-5">
                      <div className="text-4xl md:text-6xl 2xl:text-8xl font-semibold backdrop-filter backdrop-blur-lg md:w-fit">
                        {banner.bannersTitle}
                      </div>
                    </h1>

                    <h3 className="backdrop-filter backdrop-blur-lg md:w-fit max-sm:text-center">
                      {banner.bannerDescription}
                    </h3>

                    <Link
                      href={banner.bannerButton.url}
                      className="max-md:flex justify-center items-center mt-2"
                    >
                      <Button className="bg-white text-[#0060AF] hover:text-white font-semibold rounded-[20px]">
                        {banner.bannerButton.title}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
      <div className="flex justify-start px-5 items-center space-x-2 absolute bottom-12">
        {Array.from({ length: banners.length }, (_, index) => (
          <div
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-3 h-3 rounded-full hover:cursor-pointer ${
              current === index + 1 ? "bg-black" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <div className="w-full h-[50vh] absolute -bottom-[18vh] select-none z-10">
        <Image
          src={"/assets/images/colors.png"}
          alt="colors"
          fill
          className="max-sm:object-cover"
        />
      </div>
    </Carousel>
  );
};

export default HeadCarousel;
