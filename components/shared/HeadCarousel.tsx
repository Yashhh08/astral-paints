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

const HeadCarousel = () => {
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
        <CarouselItem>
          <div className="h-[87vh] flex justify-between items-center bg-banner-1 text-white bg-cover bg-bottom max-sm:bg-center">
            <div className="w-11/12 m-auto flex flex-col gap-4 justify-between items-center md:items-start h-screen pt-32 pb-16">
              <div className="flex flex-col justify-between gap-2">
                <h1 className="text-center md:text-left -space-y-5">
                  <div className="text-4xl md:text-6xl 2xl:text-8xl font-semibold backdrop-filter backdrop-blur-lg md:w-fit">
                    Interior
                    <br />
                    Emulsions
                  </div>
                </h1>

                <h3 className="backdrop-filter backdrop-blur-lg md:w-fit">
                  Excellent fungal resistance | smooth finish
                </h3>

                <Link
                  href="/contact"
                  className="max-md:flex justify-center items-center mt-2"
                >
                  <Button className="bg-white text-[#0060AF] hover:text-white font-semibold rounded-[20px]">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="h-[87vh] flex justify-between items-center bg-banner-2 text-white bg-cover max-sm:bg-center relative">
            <div className="w-11/12 m-auto flex flex-col gap-4 justify-between items-center md:items-start h-screen pt-32 pb-16">
              <div className="flex flex-col justify-between gap-2">
                <h1 className="text-center md:text-left -space-y-5">
                  <div className="text-4xl md:text-6xl 2xl:text-8xl font-semibold backdrop-filter backdrop-blur-lg md:w-fit">
                    Interior
                    <br />
                    Emulsions
                  </div>
                </h1>

                <h3 className="backdrop-filter backdrop-blur-lg md:w-fit">
                  Excellent fungal resistance | smooth finish
                </h3>

                <Link
                  href="/contact"
                  className="max-md:flex justify-center items-center mt-2"
                >
                  <Button className="bg-white text-[#0060AF] hover:text-white font-semibold rounded-[20px]">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="h-[87vh] flex justify-between items-center bg-banner-3 text-white bg-cover max-sm:bg-center relative">
            <div className="w-11/12 m-auto flex flex-col gap-4 justify-between items-center md:items-start h-screen pt-32 pb-16">
              <div className="flex flex-col justify-between gap-2">
                <h1 className="text-center md:text-left -space-y-5">
                  <div className="text-4xl md:text-6xl 2xl:text-8xl font-semibold backdrop-filter backdrop-blur-lg md:w-fit">
                    Interior
                    <br />
                    Emulsions
                  </div>
                </h1>

                <h3 className="backdrop-filter backdrop-blur-lg md:w-fit">
                  Excellent fungal resistance | smooth finish
                </h3>

                <Link
                  href="/contact"
                  className="max-md:flex justify-center items-center mt-2"
                >
                  <Button className="bg-white text-[#0060AF] hover:text-white font-semibold rounded-[20px]">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
      <div className="flex justify-start px-5 items-center space-x-2 absolute bottom-12">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-3 h-3 rounded-full hover:cursor-pointer ${
              current === index + 1 ? "bg-black" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <div className="w-screen h-[50vh] absolute -bottom-[18vh] select-none">
        <Image
          src={"/assets/images/colours.png"}
          alt="colours"
          fill
          className="max-sm:object-cover"
        />
      </div>
    </Carousel>
  );
};

export default HeadCarousel;
