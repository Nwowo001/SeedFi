import Image from "next/image";
import React from "react";

const MerchantHero = () => {
  return (
    <section className="relative pt-35 lg:pt-45  px-6  overflow-hidden">
      <div className="">
        <div className="absolute bottom-0 left-0 ">
          <Image
            src="/assets/images/bg.svg"
            alt="Merchant Hero Background"
            width={476}
            height={476}
            className="lg:w-full h-auto w-[55%] "
          />
        </div>
        <div className="absolute bottom-[7%] right-[20%]">
          <Image
            src="/assets/images/bg2.svg"
            alt="Merchant Hero Top Right Decoration"
            width={420}
            height={420}
            className="lg:w-full h-auto w-[55%]"
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/assets/images/bg3.svg"
            alt="Merchant Hero Top Left Decoration"
            width={600}
            height={320}
            className="lg:w-full h-auto w-[55%]"
          />
        </div>
      </div>
      {/* Background spheres */}
      <div className="absolute bottom-55 left-20">
        <Image
          src="/assets/images/bg-sphere.svg"
          alt="Merchant Hero Background"
          width={184.77}
          height={184.77}
          className="lg:w-full h-auto w-[55%]"
        />
      </div>
      <div className="absolute bottom-0 right-30">
        <Image
          src="/assets/images/bg-sphere2.svg"
          alt="Merchant Hero Bottom Decoration"
          width={111.26676766970864}
          height={111.26676766970864}
          className="lg:w-full h-auto w-[55%]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-[28px] lg:text-5xl font-bold font-body mb-6  mx-auto">
            One platform to offer credit to your staff and customers.
          </p>
          <p className="text-[16px] lg:text-xl font-medium font-body  mx-auto mb-15 lg:mb-8 w-[85%] lg:w-[45%] ">
            From salary advances to customer financing, SeedFi helps you offer
            credit the smart way — fast, flexible, and in your control.
          </p>
          <div className="flex gap-7 justify-center">
            <button className="bg-white px-4 lg:px-6 py-3 rounded-lg text-[16px] font-medium border border-gray-300 hover:bg-gray-50">
              Request a Demo
            </button>
            <button className="bg-primary text-white px-4 lg:px-6 py-3 rounded-lg text-[16px] font-medium hover:bg-primary/90">
              Create an Account
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="relative w-[85%] lg:w-[1000px] max-w-full">
            <Image
              src="/assets/images/merchant-wrapper.svg"
              alt="Merchant Wrapper"
              width={1000}
              height={700}
              className="w-full h-auto   "
            />

            <Image
              src="/assets/images/merchant-hero.svg"
              alt="Merchant Hero Dashboard"
              width={950}
              height={675.56}
              className="absolute top-[6%] left-1/2 -translate-x-1/2 lg:w-fit h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantHero;
