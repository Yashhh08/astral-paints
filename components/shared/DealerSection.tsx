import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const DealerSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-5 gap-4 bg-dealer bg-cover h-[350px] text-white ">
      <p className="font-medium text-lg">Join the Success Journey</p>
      <h3 className="font-bold text-3xl">Become A Dealer</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Integer dui quam nisi <br />
        in ornare. Nec in tristique et ultrices sit ullamcorper massa tempor et.
      </p>
      <Link href="/contact">
        <Button className="bg-white text-black hover:text-white font-semibold rounded-[20px]">
          Read More
        </Button>
      </Link>
    </div>
  );
};

export default DealerSection;
