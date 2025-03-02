import React from "react";
import { faqs } from "@/app/constants";
import FAQCard from "./components/FaqCard";

const FAQSection = () => {

  const groupedFAQs: [typeof faqs[number], typeof faqs[number]?][] = faqs.reduce(
    (rows, faq, index) => {
      if (index % 2 === 0) {
        rows.push([faq]); // Start a new row
      } else {
        rows[rows.length - 1].push(faq); // Add to the existing row
      }
      return rows;
    },
    [] as [typeof faqs[number], typeof faqs[number]?][] // Explicitly define the type
  );

  return (
    <section className="py-12 px-6 md:px-12 bg-white min-h-screen relative z-10">
      <h2 className="text-start text-2xl font-semibold mb-6 text-[#0C101C]">Frequently Asked Questions</h2>
      <img src="/images/star.png" alt="star" className="w-[48px] h-[35px] absolute top-3 right-0"/>
      <img src="/images/star.png" alt="star" className="w-[48px] h-[35px] absolute bottom-[450px] left-[-45px]"/>
      <img src="/images/star.png" alt="star" className="w-[48px] h-[35px] absolute bottom-0 right-0"/>
      <div className="grid gap-4">
        {groupedFAQs.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5">
            {row.map((faq, colIndex) =>
              faq ? ( // Ensure faq is defined before rendering
                <FAQCard
                  key={faq.title + colIndex}
                  title={faq.title}
                  description={faq.description}
                  bgColor={
                    rowIndex % 2 === 0
                      ? colIndex === 0
                        ? "bg-[#548235] text-white"
                        : "bg-[#eef3ec] text-black"
                      : colIndex === 0
                      ? "bg-[#eef3ec] text-black"
                      : "bg-[#548235] text-white"
                  }
                />
              ) : null
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
