import React from "react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, description }) => {
  return (
      <div className="flex flex-col items-start text-center">
          
          
      <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#548235] text-white rounded-full text-lg">
        {stepNumber}
      </div>
      
        


      <div className="bg-[#eef3ec] p-6 rounded-lg shadow-md lg:max-w-[300px] mt-6 w-full">
        <h3 className="text-[20px] font-medium text-black">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
