import React from "react";
import { businessBenefits } from "@/constants/merchant/business-benefits";
import Image from "next/image";

const BusinessBenefits = () => {
  return (
    <section className="py-15  bg-[#EEF3FA] relative">
      <div className="absolute top-0 left-0 z-0 opacity-70  lg:block">
        <Image
          src="/assets/images/about us/test.svg"
          alt=""
          width={200}
          height={200}
          className="lg:w-85 lg:h-65 w-40 h-40"
        />
      </div>
      <div className="absolute top-20 left-[30%] ">
        <Image
          src="/assets/icons/left-beside-image.svg"
          alt="decorative"
          width={10}
          height={16}
        />
      </div>

      <div className="absolute  top-0 left-1/2  h-2.5 w-2.5 bg-[#5285D1] "></div>
      <div className="absolute top-0 right-[3%] ">
        <Image
          src="/assets/icons/whyseedfitop.svg"
          alt="Decorative shape"
          width={20}
          height={20}
          className="w-6 h-6"
        />
      </div>
      <div className="absolute bottom-0 left-1/2  h-2.5 w-2.5 bg-primary"></div>
      <div className="absolute lg:bottom-[30%] lg:left-0 bottom-[15%] -left-2 h-5 w-5 bg-primary rounded-full"></div>
      <div className="absolute bottom-[39%] right-[8.7%]  lg:block hidden">
        {" "}
        <svg
          width="20"
          height="10"
          viewBox="0 0 20 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10L19.4397 10C19.4397 4.47715 15.088 -3.32141e-07 9.71986 -2.13969e-07C4.35173 -9.5797e-08 0 4.47715 0 10Z"
            fill="#2A8851"
          />
        </svg>
      </div>

      <div className=" mx-auto px-6  lg:px-30 flex lg:flex-row flex-col  items-center gap-10   lg:pt-0 pt-24">
        <div className="  mx-auto  lg:w-[37%] ">
          <p className="text-2xl lg:text-4xl  font-bold font-body mb-4">
            Why businesses choose SeedFi
          </p>
          <p className="text-base lg:text-xl  font-body font-medium lg:max-w-xl mx-auto">
            SeedFi helps you offer quick, affordable loans — while you stay in
            control of how it's done.
          </p>
        </div>

        <div className="flex-1 lg:pt-15 grid grid-cols-2  w-[full] lg:gap-8 gap-4">
          {businessBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white z-10 rounded-2xl p-4 shadow-sm flex flex-col   "
            >
              <div className="mb-6">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={40}
                  height={40}
                />
              </div>
              <p className="lg:text-sm text-xs font-body font-semibold  mb-3">
                {benefit.title}
              </p>
              <p className="lg:w-[75%] text-xs leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;
