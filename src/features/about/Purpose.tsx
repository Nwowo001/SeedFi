import Image from "next/image";
import React from "react";

const Purpose = () => {
  return (
    <section className="bg-[url('/assets/images/about us/new.svg')] lg:bg-[#FCFDFEFF] bg-cover bg-center relative min-h-screen">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-[#5285D1] z-0 lg:hidden"></div>

      <div className="absolute top-0 right-0 w-5 h-5  z-0 lg:hidden">
        <Image
          src="/assets/icons/whyseedfitop.svg"
          alt=""
          width={20}
          height={20}
        />
      </div>

      <div className="absolute bottom-5 -left-2.5 w-5 h-5 bg-[#2A8851] rounded-full z-0 lg:hidden"></div>

      <div className="absolute -bottom-2 right-5 w-6 h-6  z-0 lg:hidden">
        {" "}
        <Image
          src="/assets/icons/about us/purposebottomright.svg"
          alt=""
          width={20}
          height={20}
        />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-1.5 bg-[#2A8851] z-0 lg:hidden"></div>

      <div className="absolute top-0 left-0 z-0 opacity-70  lg:block">
        <Image
          src="/assets/images/about us/test.svg"
          alt=""
          width={200}
          height={200}
          className="lg:w-52 lg:h-52 w-40 h-40"
        />
      </div>

      <div className="relative z-10 container mx-auto lg:pt-3 py-20">
        {/* Section Title */}
        <div className="px-6 pt-20 lg:px-40 ">
          <p className="lg:text-[32px] text-xl  font-bold font-body">
            Why We Exist
          </p>
        </div>

        <div className="px-6 lg:pr-32 lg:pl-64 w-full ">
          {/* Mission Section */}
          <div className="lg:pt-[-16px] flex flex-col-reverse lg:flex-row items justify-between lg:gap-12 w-full">
            <div className="w-full  lg:w-[50%] lg:pt-12">
              <p className="lg:text-2xl text-[16px] font-bold  font-body py-5 lg:py-7">
                Our Mission
              </p>
              <p className=" text-[14px] lg:text-[16px] font-body font-normal               leading-relaxed">
                Bridging the credit access gap for borrowers with limited credit
                history. By leveraging data from various sources, we empower
                borrowers to understand & improve their creditworthiness,
                enabling them to achieve their dreams.
              </p>
            </div>

            {/* Image */}
            <div className="lg:flex-1 flex ">
              <Image
                src="/assets/images/about us/mission.svg"
                alt="Mission Illustration"
                width={347}
                height={347}
                className="w-[60%] lg:w-[80%] max-w-md h-auto "
              />
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between lg:gap-12  w-full">
            {/* Text */}
            <div className="w-full lg:w-[50%] ">
              <p className="lg:text-2xl text-[16px] font-bold  font-body py-5 lg:py-7">
                Our Vision
              </p>
              <p className=" text-[14px] lg:text-[16px] font-body font-normal     leading-relaxed">
                Bridging the credit access gap for borrowers with limited credit
                history. By leveraging data from various sources, we empower
                borrowers to understand & improve their creditworthiness,
                enabling them to achieve their dreams.
              </p>
            </div>

            {/* Image */}
            <div className="flex-1 flex ">
              <Image
                src="/assets/images/about us/vision.svg"
                alt="Vision Illustration"
                width={253}
                height={253}
                className="w-[70%] lg:w-[80%] max-w-sm h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
