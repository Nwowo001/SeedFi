import React from "react";
import Image from "next/image";
import WhySeedfiCards from "@/components/ui/WhySeedfiCards";
const WhySeedfi = () => {
  return (
    <section className="bg-[#f6faf8] w-full lg:h-[140vh] relative py-20 lg:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="relative top-0 left-100 lg:-top-20 lg:left-5">
        <Image
          src="/assets/icons/whyseedfitop.svg"
          alt="Decorative shape"
          width={20}
          height={20}
        />
      </div>
      <div className="relative top-[650px] lg:top-[500px] left-98 -translate-y-1/2 lg:left-6 h-5 w-5 bg-green-700 rounded-full"></div>
      <div className="absolute bottom-65 left-2 lg:bottom-0 lg:left-1/2 -translate-x-1/2 h-4 w-4 bg-green-700"></div>

      <div className="font-body text-start absolute top-5 lg:top-10 lg:left-20 ">
        <p className="text-xl lg:text-[28px] font-bold  ">Why SeedFi?</p>
        <p className="text-[16px] font-body pt-3">See how we are different</p>
      </div>
      <div className="lg:px-20 lg:pt-10 pt-6">
        <WhySeedfiCards />
      </div>
    </section>

//    <section className="relative w-full h-[150vh] bg-white flex items-center justify-center">
//   <Image
//     src="/assets/images/why.svg"
//     alt=""
//     fill
//     className="object-contain"
//     priority
//   />
// </section>

  );
};

export default WhySeedfi;
