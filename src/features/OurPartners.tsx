import Carousel from "@/components/ui/Carousel";
import React from "react";

const OurPartners = () => {
  return (
    <section className="lg:py-16 bg-white py-10">
      <div className="container mx-auto px-4">
        <p className="font-figtree font-400 text-sm text-start  mb-10 text-gray-800">
          Our Partners
        </p>
        <Carousel />
      </div>
    </section>
  );
};

export default OurPartners;
