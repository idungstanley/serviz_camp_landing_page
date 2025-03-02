import { steps } from '@/app/constants';
import React from 'react'
import StepCard from '../stepCard';

const HowItworks = () => {
  return (
    <div className="flex flex-col items-start gap-8 min-h-screen w-full justify-start lg:px-[70px]">
          <div className="flex w-full flex-col">
              <div className="bg-[#4c762e] px-5 py-3 rounded-full w-[150px]">How it works</div>
              <h1 className="text-[#0C101C] text-[20px] pt-7 font-medium">Users</h1>
              <h6 className="text-[#0c101c88] font-light">Guides users through the seamless process of selecting a service provider, choosing a service, and confirming the booking.</h6>
          </div>
          <div className="flex justify-center gap-6 mt-10">
              {steps.map((step) => (
        <StepCard key={step.stepNumber} {...step} />
      ))}

          </div>
    </div>
  )
}

export default HowItworks
