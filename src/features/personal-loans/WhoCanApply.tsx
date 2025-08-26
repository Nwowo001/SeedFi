import React from "react";
import Image from "next/image";
import { whoCanApply } from "@/constants/personal-loans/whocanapply";

const WhoCanApply = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:text-center mb-12">
          <p className="lg:text-[32px] text-xl lg:font-bold font-semibold font-body text-gray-900 mb-4">
            Who can apply for a loan at{" "}
            <span className="text-primary">
              Seed<span className="italic">Fi</span>
            </span>
          </p>
          <p className="lg:text-xl text-sm font-medium font-body max-w-2xl mx-auto lg:w-[50%]">
            SeedFi loans are designed for everyday Nigerians. If you meet these
            basic requirements, you're eligible to apply.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 max-w-5xl mx-auto">
          {whoCanApply.map((requirement, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 flex flex-col items-start"
              style={{ backgroundColor: requirement.bgColor }}
            >
              <div className="flex ">
                <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                  <Image
                    src={requirement.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="lg:w-10 lg:h-10 w-8 h-8"
                  />
                </div>
              </div>
              <p className="font-medium text-xs lg:text-sm leading-relaxed w-[80%] lg:w-[70%]">
                {requirement.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
