import FAQ from "@/features/personal-loans/FAQ";
import PersonalLoanHero from "@/features/personal-loans/Hero";
import HowItWorks from "@/features/personal-loans/HowItWorks";
import TrustedByIndividuals from "@/features/personal-loans/TrustedByIndividuals";
import WhoCanApply from "@/features/personal-loans/WhoCanApply";
import React from "react";

const PersonalLoans = () => {
  return (
    <div>
      <PersonalLoanHero />
      <HowItWorks/>
      <WhoCanApply/>
      <TrustedByIndividuals/>
      <FAQ/>
    </div>
  );
};

export default PersonalLoans;
