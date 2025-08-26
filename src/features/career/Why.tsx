import React from "react";
import { why } from "@/constants/career/why";
import WhyCard from "@/components/ui/career/WhyCard";

const Why = () => {
  return (
    <section
      className="relative py-20 px-6 bg-[url('/assets/images/personal-loans/howitworks-bg.svg')] bg-cover bg-center"
    >
      <div className="max-w-6xl mx-auto ">
        <p className="text-2xl font-body font-semibold mb-12">
          Why <span className="text-[28px] text-primary">Join Us</span>
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {why.map((item, index) => (
            <WhyCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
