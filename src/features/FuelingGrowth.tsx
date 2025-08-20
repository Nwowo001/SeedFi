import FuelingGrowthCard from "@/components/ui/FuelingGrowthCard";
import React from "react";
import { fuelingGrowth } from "@/constants/fuelingGrowth";
const FuelingGrowth = () => {
  return (
    <section className="w-full bg-white py-20 font-body">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className=" font-body text-start text-3xl font-bold text-zinc-900">
          Fueling Growth. Funding Dreams.
        </h2>
      </div>

      <div className="scrollbar-hide flex snap-x snap-mandatory gap-8 overflow-x-auto py-4 pl-8">
        {fuelingGrowth.map((item) => (
          <FuelingGrowthCard key={item.category} card={item} />
        ))}
      </div>
    </section>
  );
};

export default FuelingGrowth;
