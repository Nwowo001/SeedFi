"use client"
import TrustedByIndividualsCard from "@/components/ui/about/personal-loans/TrustedByIndividualsCard";
import { trustedByIndividuals } from "@/constants/personal-loans/trustedByIndividuals";
import Carousel from "@/components/common/Carousel";
const TrustedByIndividuals = () => {
  return (
    <Carousel
      data={trustedByIndividuals}
      CardComponent={({ item }) => <TrustedByIndividualsCard testimonial={item} />}
      title="Trusted by Individuals Like You"
      subtitle="What people say about their SeedFi journey"
    />
  );
};

export default TrustedByIndividuals;
