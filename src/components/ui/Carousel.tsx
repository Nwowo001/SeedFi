import React from "react";
import Image from "next/image";

const Carousel = () => {
  const partners = [
    {
      src: "/assets/images/sterling.svg",
      alt: "Sterling Bank Logo",
      width: 119,
      height: 37,
    },
    {
      src: "/assets/images/paystack.svg",
      alt: "paystack Logo",
      width: 157,
      height: 28,
    },
    {
      src: "/assets/images/lendsqr logo.svg",
      alt: "lendsqr Logo",
      width: 160,
      height: 33,
    },
    {
      src: "/assets/images/youverify.svg",
      alt: "youverify Logo",
      width: 139,
      height: 74,
    },
    {
      src: "/assets/images/mono logo.svg",
      alt: "mono Logo",
      width: 167,
      height: 23,
    },
    {
      src: "/assets/images/dojah.svg",
      alt: "dojah Logo",
      width: 82,
      height: 36,
    },
    {
      src: "/assets/images/okra logo.svg",
      alt: "okra Logo",
      width: 113,
      height: 41,
    },
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-scroll">
        {/* First set of logos */}
        {partners.map((partner, index) => (
          <div
            key={`first-${index}`}
            className="mx-8 flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={partner.height}
              className="max-h-12 w-auto  
               transition-opacity duration-300"
            />
          </div>
        ))}
        {/* Duplicate set for seamless infinite scroll */}
        {partners.map((partner, index) => (
          <div
            key={`second-${index}`}
            className="mx-8 flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={partner.height}
              className="max-h-12 w-auto   transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
