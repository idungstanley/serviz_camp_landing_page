import { secondProvider, steps } from "@/app/constants";
import React from "react";
import StepCard from "../stepCard";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-start w-full justify-start px-4 md:px-10 lg:px-[70px] relative min-h-screen">
      <div className="flex w-full flex-col text-center md:text-left">
        <div className="bg-[#4c762e] px-5 py-2 rounded-full w-[150px] text-white text-sm md:text-base">
          How it works
        </div>
        <h1 className="text-[#0C101C] text-lg md:text-xl pt-5 font-semibold">Users</h1>
        <p className="text-[#0c101c88] text-sm md:text-base font-light max-w-lg">
          Guides users through the seamless process of selecting a service provider, 
          choosing a service, and confirming the booking.
        </p>
      </div>

      {/* Decorative Images */}
      <Image
        src="/images/star.png"
        alt="star"
        width={35}
        height={25}
        className="lg:flex hidden absolute top-0 right-[30px] md:right-[230px]"
      />
      <Image
        src="/images/star.png"
        alt="star"
        width={35}
        height={25}
        className="lg:flex hidden absolute top-[500px] left-[-30px] md:left-[-60px]"
      />
      <Image
        src="/images/star.png"
        alt="star"
        width={35}
        height={25}
        className="hg:flex hidden absolute bottom-[100px] md:bottom-[180px] right-[30px] md:right-[76px]"
      />

      {/* Steps for Users */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
        {steps.map((step) => (
          <StepCard key={step.stepNumber} {...step} />
        ))}
      </div>

      {/* Providers Section */}
      <h1 className="text-[#0C101C] text-lg md:text-xl pt-10 font-semibold text-center md:text-left">
        Providers
      </h1>
      <p className="text-[#0c101c88] text-sm md:text-base font-light max-w-lg">
        Guides providers through the seamless process of using Servizcamp.
      </p>

      {/* Steps for Providers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
        {secondProvider.map((step) => (
          <StepCard key={step.stepNumber} {...step} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
