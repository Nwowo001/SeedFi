import React from "react";
import { values } from "@/constants/career/values";
import ValueCard from "@/components/ui/career/ValueCard";

const Values = () => {
  return (
    <section className="pb-30">
      <div className="py-10 px-6 bg-[#FAEFEF]">
      <div className="max-w-6xl mx-auto">
        <p className="lg:text-2xl text-[16px] font-semibold text-start lg:mb-7  mb-4 lg:not-italic italic">
          Our <span className="text-primary text-[28px] not-italic  ">Values</span>
        </p>
        
        <p className=" lg:text-xl text-sm lg:text-center text-start text-black mb-7  mx-auto">
          We are guided by a core set of values that shape our approach to using data in the credit industry:
        </p>

        <div className="grid gap-12 md:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Values;