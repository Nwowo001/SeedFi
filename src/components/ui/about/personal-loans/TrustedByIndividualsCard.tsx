import React from "react";
import Image from "next/image";
import { TrustedByIndividuals } from "@/types/personal-loans";

interface TrustedByIndividualsCardProps {
  testimonial: TrustedByIndividuals;
}

const TrustedByIndividualsCard: React.FC<TrustedByIndividualsCardProps> = ({
  testimonial,
}) => {
  return (
    <div
      className="flex-shrink-0 w-80 rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between"
      style={{
        backgroundColor: testimonial.bgColor,
      }}
    >
      {/* Quote icon */}
      <div className="mb-4">
        <div className="w-13.5 h-13 bg-white rounded-[8px] flex items-center justify-center">
          <Image src="/assets/icons/quote.svg" alt="" width={40} height={40} />
        </div>
      </div>

      {/* Testimonial text */}
      <p className="text-gray-800 italic text-sm leading-relaxed  flex-grow">
        {testimonial.review}
      </p>

      {/* Author info */}
      <div className="mt-6">
        <p className="text-gray-900 font-semibold text-sm">
          {testimonial.author}
        </p>
        <p className="text-gray-600 text-xs">{testimonial.location}</p>
      </div>
    </div>
  );
};

export default TrustedByIndividualsCard;
