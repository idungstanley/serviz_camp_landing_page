import React from "react";

interface FAQCardProps {
  title: string;
  description: string;
  bgColor: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ title, description, bgColor }) => {
  return (
    <div className={`px-5 flex flex-col py-10 rounded-lg h-[181px] ${bgColor}`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default FAQCard;
