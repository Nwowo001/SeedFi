import React from "react";
import { steps } from "@/constants/merchant/steps";
import Image from "next/image";

const GetStartedSteps = () => {
  return (
    <section className="relative lg:pb-40 pb-10 pt-20 bg-white">
      <div className="absolute top-[6%] -right-[0.5%] hidden lg:block">
        <Image
          src="/assets/icons/whyseedfitop.svg"
          alt="Decorative shape"
          width={20}
          height={20}
        />
      </div>
      <div className="absolute  bottom-[20%] left-0  h-3.5 w-3.5 bg-[#5285D1] hidden lg:block"></div>
      <div className="absolute -right-[2%] top-[20%] hidden lg:block">
        <Image
          src="/assets/images/personal-loans/complete-circle.svg"
          alt=""
          width={67}
          height={67}
          className="w-20 h-20"
        />
      </div>
      <div className="absolute top-[30%] -left-4 hidden lg:block">
        <Image
          src="/assets/images/personal-loans/split-circle.svg"
          alt=""
          width={55}
          height={55}
          className="w-15 h-15"
        />
      </div>
      <div className="absolute -right-[2%] bottom-[10%] hidden lg:block">
        <Image
          src="/assets/images/personal-loans/complete-circle.svg"
          alt=""
          width={67}
          height={67}
          className="w-15 h-15"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="lg:text-[32px] text-xl font-bold  mb-4">
            Get started in just a few steps.
          </p>
          <p className="text-[16px] lg:text-xl  lg:w-[55%] mx-auto">
            From onboarding to disbursement, we've made the whole process fast,
            flexible, and built around your business needs.
          </p>
        </div>

        <div className="relative  w-full">
          <div className="">
            <div className=" justify-center items-center hidden lg:flex ">
              <Image
                src="/assets/images/steps.svg"
                alt="steps"
                width={498}
                height={784}
                className="w-1/3 h-auto"
              />
            </div>
            {/* mobile-steps */}
            <div className=" flex justify-center items-center lg:hidden ">
              <Image
                src="/assets/images/mobile-steps.png"
                alt="mobile steps"
                width={616}
                height={37}
                className= "w-[10%] h-auto"
              />
            </div>
            {/* {element 1} */}
            <div className="               absolute top-[4%] lg:left-[17%] left-[45%] col-span-4">
              <div className="relative rounded-2xl pl-10 pr-7 pt-6 pb-4  mx-auto">
                <p className="text-sm lg:text-2xl font-semibold  mb-4 ">
                  {steps[0].title}
                </p>
                <p className="lg:text-[16px] text-xs leading-relaxed font-medium  lg:w-[50%] ">
                  {steps[0].desc}
                </p>
              </div>
            </div>
            {/* {element 2} */}
            <div className=" absolute lg:top-[22%] top-[26.5%] lg:-right-[17%] lg:col-span-4">
              <div className="relative rounded-2xl pl-10 pr-7 pt-6 pb-4  mx-auto">
                <p className="lg:text-2xl text-sm font-semibold  mb-4 ">
                  {steps[1].title}
                </p>
                <p className="lg:text-[16px] text-xs leading-relaxed font-medium w-[50%] ">
                  {steps[1].desc}
                </p>
              </div>
            </div>
            {/* {element 3} */}
            <div className=" absolute bottom-[28%] left-[50%] lg:bottom-[14%] lg:left-[5%] lg:col-span-4  ">
              <div className="relative   pr-7 pt-6 pb-4 z-10 bg-white lg:z-auto lg:bg-transparent  mx-auto">
                <p className="lg:text-2xl text-sm font-semibold  mb-4 ">
                  {steps[2].title}
                </p>
                <p className="lg:text-[16px] text-xs leading-relaxed font-medium lg:w-[45%] ">
                  {steps[2].desc}
                </p>
              </div>
            </div>
            {/* {element 4} */}
            <div className="relative lg:absolute lg:-bottom-[16%] lg:-right-[17%] lg:col-span-4">
              <div className="relative pt-6 pl-10 pr-7  pb-4  mx-auto">
                <p className="lg:text-2xl text-sm font-semibold  mb-4 ">
                  {steps[3].title}
                </p>
                <p className="lg:text-[16px] text-xs leading-relaxed font-medium w-[55%] lg:w-[45%]">
                  {steps[3].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSteps;
