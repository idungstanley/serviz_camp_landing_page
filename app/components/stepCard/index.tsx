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
      
        


      <div className="bg-[#F5F7F2] p-6 rounded-lg shadow-md max-w-[300px] mt-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
