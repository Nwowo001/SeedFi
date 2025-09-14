"use client";
import React from "react";
import TrustedByIndividuals from "../personal-loans/TrustedByIndividuals";
import Carousel from "@/components/common/Carousel";
import { trustedByIndividuals } from "@/constants/personal-loans/trustedByIndividuals";
import TrustedByIndividualsCard from "@/components/ui/about/personal-loans/TrustedByIndividualsCard";

const BusinessTestimonials = () => {
  return (
    <section className="py-15 ">
      <Carousel
        data={trustedByIndividuals}
        CardComponent={({ item }) => (
          <TrustedByIndividualsCard testimonial={item} />
        )}
        title="Trusted by businesses "
        subtitle="What other merchants say about SeedFi"
      />
    </section>
  );
};

export default BusinessTestimonials;
