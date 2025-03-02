import FAQSection from "./components/FacSection";
import HowItworks from "./components/HowItworks";
import MobileAppSection from "./components/phoneShowCase";

export default function Home() {
  return (
    <div className="items-center justify-items-center pt-[100px] px-0 pb-20 gap-16 sm:p-20 w-full">
      <MobileAppSection />
      <HowItworks />
      <FAQSection />
    </div>
  );
}
