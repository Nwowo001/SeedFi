import React from "react";
import Image from "next/image";
import WhySeedfiCards from "@/components/ui/WhySeedfiCards";
const WhySeedfi = () => {
  return (
    <section className=" w-full relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-10">
        <Image
          src="/assets/icons/whyseedfitop.svg"
          alt="Decorative shape"
          width={20}
          height={20}
        />
      </div>
      <div className="relative top-[560px] -translate-y-1/2 left-6 h-5 w-5 bg-green-700 rounded-full"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-4 w-4 bg-green-700"></div>

      <div className="font-body text-start absolute top-10 left-20 ">
        <p className="text-3xl md:text-4xl font-bold text-gray-900 ">
          Why SeedFi?
        </p>
        <p className="text-lg text-gray-600">See how we are different</p>
      </div>
      <div className="lg:px-20 lg:py-10 py-7">
        <WhySeedfiCards />
      </div>
    </section>
  );
};

export default WhySeedfi;
