"use client";

import Image from "next/image";
import Link from "next/link";

const MobileAppSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-36 py-16 relative">
          {/* Left Content */}
          {/* stars */}
          <Image src="/images/star.png" alt="star" width={45} height={25} className="absolute top-8 left-[140px]"/>
      <Image src="/images/star.png" alt="star" width={45} height={25} className="absolute top-[112px] right-[200px]"/>
      <Image src="/images/star.png" alt="star" width={45} height={25} className="absolute bottom-[100px] left-[420px]"/>
      <div className="text-center lg:text-left max-w-lg">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          Download ServizCamp mobile app
        </h2>
        <p className="text-gray-600 mt-2">From your home to their hands</p>

        {/* Store Buttons */}
        <div className="flex gap-4 mt-6 justify-center lg:justify-start">
          <Link href="/google-play" target="_blank">
            <Image
              src="/images/buttonImg/google.png"
              alt="Download on Google Play"
              width={150}
              height={50}
              className="w-[150px] hover:opacity-80 transition"
            />
          </Link>
          <Link href="/app-store" target="_blank">
            <Image
              src="/images/buttonImg/app-store.png"
              alt="Download on App Store"
              width={150}
              height={50}
              className="w-[150px] hover:opacity-80 transition"
            />
          </Link>
        </div>
      </div>

      {/* Right Image Section - Using Background Image */}
      <div className="relative w-full lg:w-[800px] h-[500px] overflow-hidden">
  <div 
    className="absolute inset-0 bg-[url('/images/iphone.png')] bg-cover bg-no-repeat bg-center lg:bg-right scale-109"
  />
</div>

    </section>
  );
};

export default MobileAppSection;
