import Image from "next/image";
import Button from "../Button";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Image (Woman Holding Bottle) */}
      <Image
        src="/images/woman.jpg" // Replace with actual image path
        alt="Cleaning Service"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Green Overlay Image Positioned on the Left */}
      <div className="absolute top-0 left-0 w-[50%] h-full z-10">
        <Image
          src="/images/left.png" // Replace with actual overlay image path
          alt="Green Overlay"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Text and Button on the Overlay */}
      <div className="absolute top-1/2 left-[5%] transform -translate-y-1/2 z-20 w-[40%] text-black">
        <h1 className="text-2xl md:text-4xl font-bold">
          Crafting Connections, One Service at a Time
        </h1>
        <p className="text-sm md:text-base mt-3 text-gray-700">
          From skilled artisans to your doorstep—ServizCamp makes it easy to find trusted
          experts for all your needs, right from the comfort of your home.
        </p>
        <Button className="" href="/book-service" label="book service"/>
      </div>
    </div>
  );
};

export default HeroSection;
