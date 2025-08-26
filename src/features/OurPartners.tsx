import OurPartnersCarousel from "@/components/ui/OurPartners";
import React from "react";

const OurPartners = () => {
  return (
    <section className="px-7 lg:px-2 lg:py-16 bg-white py-10">
      <div className="container mx-auto px-4">
        <p className="font-figtree font-400 text-sm text-start  mb-5 text-gray-800">
          Our Partners
        </p>
        <OurPartnersCarousel />
      </div>
    </section>
  );
};

export default OurPartners;
