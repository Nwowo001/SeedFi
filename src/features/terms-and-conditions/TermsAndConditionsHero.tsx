import React from "react";

const TermsAndConditionsHero = () => {
  return (
    <section className="w-full flex px-6 pt-30 lg:pt-45 ">
      <div className="mx-auto text-center">
        <p className="font-body font-bold text-[28px] sm:text-[36px]  lg:text-[56px] leading-tight">
          Terms & Conditions
        </p>

        <div className="flex flex-col items-center gap-2 mt-6">
          <p className="text-base sm:text-lg  font-body font-medium">
            02 Jul, 2025
          </p>
          <p className="text-sm text-[#84868C] font-body font-medium">
            Last updated
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsHero;
