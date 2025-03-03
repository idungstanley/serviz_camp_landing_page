import Button from "../Button";

const MainHero = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]"
      style={{
        backgroundImage: "url('/images/bgImg.png')",
        backgroundPosition: "100 100",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
    }}>
      {/* Background Image (Woman Holding Bottle) */}
      {/* <Image
        src="/images/bgImg.png" // Replace with actual image path
        alt="Cleaning Service"
        layout="fill"
        objectFit="cover"
        className="z-0"
      /> */}

      {/* Green Overlay Image Positioned on the Left */}
      
      {/* Text and Button on the Overlay */}
      <div className="absolute top-1/2 right-[5%] transform -translate-y-1/2 z-[9999] w-[40%] text-black">
        <h1 className="text-2xl md:text-4xl font-bold">
          Connecting You with Local Experts, Fast & Easy”
        </h1>
        <p className="text-sm md:text-base mt-3 text-gray-700">
          From skilled artisans to your doorstep—ServizCamp makes it easy to find trusted
          experts for all your needs, right from the comfort of your home.
        </p>
        <div className="flex gap-2">
        <Button className="" href="/book-service" label="Find Artisans Near Me"/>
        <Button className="" href="/book-service" label="Browse Services"/>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
