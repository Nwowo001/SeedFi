import React from "react";
import { values } from "@/constants/about-us/values";
import Image from "next/image";

const ValueCards = () => {
  return (
    <div className="flex w-full flex-col md:flex-row justify-center items-center gap-6 p-6">
      {values.map((value, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center  lg:p-6 w-full "
        >
          <Image
            src={value.icon}
            alt={value.title}
            width={60}
            height={60}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
          <p className="text-gray-600 ">{value.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ValueCards;
