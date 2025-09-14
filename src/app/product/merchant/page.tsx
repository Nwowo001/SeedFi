import MerchantHero from "@/features/merchant/MerchantHero";
import GetStartedSteps from "@/features/merchant/GetStartedSteps";
import BusinessBenefits from "@/features/merchant/BusinessBenefits";
import BusinessTestimonials from "@/features/merchant/BusinessTestimonials";
import React from "react";
import BusinessFAQ from "@/features/merchant/BusinessFAQ";

const MerchantApplication = () => {
  return (
    <div>
      <MerchantHero />
      <GetStartedSteps />
      <BusinessBenefits />
      <BusinessTestimonials />
      <BusinessFAQ />
    </div>
  );
};

export default MerchantApplication;
