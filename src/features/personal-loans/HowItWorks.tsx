import React from "react";
import Image from "next/image";
import Link from "next/link";
import { howitworks } from "@/constants/personal-loans/howItWorks";
const HowItWorks = () => {
  return (
    <section className="bg-[url('/assets/images/personal-loans/howitworks-bg.svg')] bg-cover bg-center  py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:mb-0 mb-12">
          <p className="text-xl lg:text-[28px] font-bold font-body  mb-2">
            How it works
          </p>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-0 gap-17 items-center">
          {/* Left side  */}
          <div className="lg:pl-30">
            <div className="relative">
              <Image
                src="/assets/images/personal-loans/phone2.svg"
                alt="SeedFi App Interface"
                width={420}
                height={512}
                priority
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="lg:w-[70%]">
            <div className="mb-8">
              <p className="text-xl lg:text-2xl font-bold font-body  mb-4">
                It takes less than 5 minutes
              </p>
            </div>

            <div className="relative flex flex-col lg:space-y-5 space-y-10">
              {howitworks.map((step, index) => (
                <div key={index} className="flex gap-4 relative">
                  <div className="flex flex-col items-center relative">
                    <div className="w-6 h-6 bg-white text-[#5285D1] rounded-full flex items-center justify-center font-bold text-sm z-10">
                      {step.number}
                    </div>

                    {index < howitworks.length - 1 && (
                      <div className="absolute top-9 left-1/2 -translate-x-1/2 h-[90%] lg:h-[70%] border-l border-dashed border-[#5285D1]" />
                    )}
                  </div>

                  <div className="pb-10">
                    {" "}
                    <p className="text-[16px] lg:text-[14px] font-semibold mb-2">
                      {step.title}
                    </p>
                    <p className="font-body text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className=" pb-5 lg:pb-3 mt-10 flex gap-4 lg:mt-8">
              <Link
                href="/calculator"
                className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold  "
              >
                Use Calculator
              </Link>
              <Link
                href="/apply"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold  "
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
