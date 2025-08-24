"use client";

import React from "react";
import LifeCards from "@/components/ui/about/LifeCards";

const LifeInTheGarden = () => {
  return (
    <section className="lg:pb-20 pt-45 px-4 bg-[linear-gradient(180deg,#FFFFFF_20%,#F9E9EAFF_50%,#EAF3EE_80%)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center ">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold  mb-6 leading-tight font-body">
            Life In The Garden
          </p>
          <p className="text-lg md:text-xl  max-w-3xl mx-auto leading-relaxed font-body font-medium">
            This is The Garden, where every{" "}
            <span className="font-semibold">SeedFi</span> idea is planted,
            nurtured, and brought to life by the Seedlings you see here.
          </p>
        </div>

        <div >
          <LifeCards />
        </div>
      </div>
    </section>
  );
};

export default LifeInTheGarden;
