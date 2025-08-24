import BuilderCards from "@/components/ui/about/BuilderCards";
import React from "react";

const Builders = () => {
  return (
    <section className="bg-white lg:py-16">
      <div className="text-start lg:px-20 px-10 pt-9 w- lg:w-[60%]">
        <p className="font-body text-xl lg:text-[32px] font-bold ">Meet the Builders</p>
        <p className="font-body font-medium text-[16px]  lg:text-[24px] py-5">
          Every great product starts with a great team. These are the 
          hands and minds bringing Seed<span className="italic">Fi'</span>s
          mission to life.
        </p>
      </div>
      <div className="w-full flex justify-center items-center px-10 pt-10 pb-10 lg:py-20">
        <BuilderCards />
      </div>
    </section>
  );
};

export default Builders;
