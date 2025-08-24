import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
<section className="relative bg-white w-full pt-16 lg:pt-45">
  {/* Heading */}
  <p className="hidden lg:block font-body font-bold text-[56px] lg:text-[56px] text-center">
    Check your SeedScore, <span className="text-[#2A8851]">FOR FREE</span>
  </p>

  {/* Mobile Hero Image */}
  <div className="relative w-full h-[609px] lg:hidden">
    <Image
      src="/assets/images/seedscore/try.png"
      alt="SeedScore Mobile Hero"
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Desktop Hero Image */}
  <div className="relative w-full h-[468px] hidden lg:block">
    <Image
      src="/assets/images/seedscore/seedscore-hero.svg"
      alt="SeedScore Desktop Hero"
      fill
      className="object-cover"
      priority
    />
  </div>
</section>

  );
};

export default Hero;
