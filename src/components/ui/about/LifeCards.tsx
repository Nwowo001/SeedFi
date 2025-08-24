"use client";

import React from "react";
import { Life } from "@/constants/about-us/life";
import Image from "next/image";

const LifeCards = () => {
  return (
    <div
      className="
        flex gap-3 w-full py-10 px-4 
        overflow-x-auto scrollbar-hide
        lg:overflow-visible lg:justify-center lg:flex-nowrap
      "
    >
      {Life.map((item, index) => (
        <div
          key={index}
          className="relative flex-shrink-0 w-42.5 h-45 rounded-xl bg-white  transition-all duration-300  "
          style={{ transform: item.cardRotation }}
        >
          <div className="relative   w-full overflow-hidden rounded-t-xl border-8 border-white">
            <Image
              src={item.image}
              alt={item.title}
              width={154}
              height={120}
              className="object-cover"
            />
          </div>

          <div className="p-3 flex flex-col justify-start align-middle">
            <p className="font-medium text-xs  font-body ">
              {item.title}
            </p>
            <p className=" text-[10px] italic font-normal font-body">{item.desc}</p>
          </div>

          {item.icon && (
            <div
              className={`absolute w-8 h-8 rounded-full flex items-center justify-center  ${item.iconBg} ${item.iconPosition}`}
            >
              <Image
                src={item.icon}
                alt="icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LifeCards;
