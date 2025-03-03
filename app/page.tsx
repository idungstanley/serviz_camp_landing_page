import FAQSection from "./components/FacSection";
import HeroSection from "./components/HeroSection";
import HeroSection1 from "./components/HeroSection1";
import HowItworks from "./components/HowItworks";
import MainHero from "./components/MainHero";
import MobileAppSection from "./components/phoneShowCase";

export default function Home() {
  return (
    <div className="items-center justify-items-center pt-[100px] md:p-0 pb-20 gap-16 p-20 w-full">
      <MainHero />
      <MobileAppSection />
      <HeroSection />
      <HowItworks />
      <HeroSection1 />
      <FAQSection />
    </div>
  );
}
