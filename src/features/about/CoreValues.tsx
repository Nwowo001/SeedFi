import ValueCards from "@/components/ui/about/ValueCards";
import React from "react";

const CoreValues = () => {
  return (
    <section className="bg-white">
      <div className="text-center  lg:text-[28px] text-xl font-body font-bold pt-15">
        <p> Our Core Values</p>
      </div>
      <div className="px-7">
        <ValueCards />
      </div>
    </section>
  );
};

export default CoreValues;
