import Image from "next/image";
import Button from "../Button";

const HeroSection1 = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <Image
        src="/images/other-section.jpg"
        alt="Cleaning Service"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <div className="absolute top-0 right-0 w-[50%] h-full z-10">
        <Image
          src="/images/overlay.png" 
          alt="Green Overlay"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Text and Button on the Overlay */}
      <div className="absolute top-1/2 right-[5%] transform -translate-y-1/2 z-20 w-[40%] text-black">
        <h1 className="text-2xl md:text-4xl font-bold">
          Become a Service Hero—Connect, Create, and Transform Lives
        </h1>
        <p className="text-sm md:text-base mt-3 text-gray-700">
          Sign up today to showcase your expertise, reach new customers, and make a real difference in your community. With Service Camp, you’ll have the tools to grow your business and provide top-notch service from the comfort of your own space.
        </p>
        <Button className="" href="/book-service" label="signup"/>
      </div>
    </div>
  );
};

export default HeroSection1;
