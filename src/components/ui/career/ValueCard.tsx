import React from "react";
import Image from "next/image";
import { Value } from "@/types/career";

interface Props {
  value: Value;
}

const ValueCard: React.FC<Props> = ({ value }) => {
  return (
    <div className="text-start bg-white p-6 rounded-3xl">
      <div className="w-16 h-16  mb-10  flex  ">
        <Image
          src={value.icon}
          alt={value.title}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-5">
        {value.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {value.description}
      </p>
    </div>
  );
};

export default ValueCard;
