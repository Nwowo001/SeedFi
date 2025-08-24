"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { building } from "@/constants/about-us/building";
import Image from "next/image";

const BuilderCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="flex gap-2 overflow-hidden max-md:flex-row max-md:gap-4 max-md:overflow-x-auto">
      {building.map((member, index) => {
        const isExpanded =
          index === 0 ? hoveredIndex === null : hoveredIndex === index;

        return (
          <motion.div
            key={index}
            className={`relative h-[720px] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden  w-full max-md:min-w-[75%] max-md:h-[408.97px] max-md:rounded-[13.63px]
    ${isExpanded ? "md:w-[350px]" : "md:w-[309px]"}`}
            animate={{
              width: isExpanded ? 544 : 200,
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            onMouseEnter={() => index !== 0 && setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              zIndex: isExpanded ? 10 : 1,
            }}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover max-md:rounded-[13.63px]"
            />

            <div
              className={`absolute bottom-0 left-0 right-0 p-6 
    bg-gradient-to-t from-[#008037]/95 via-[#008037]/70 to-transparent 
    text-white transition-opacity duration-500
    ${isExpanded ? "md:opacity-100" : "md:opacity-0"} max-md:opacity-100`}
            >
              <p className="text-sm mb-1 font-medium tracking-wide">
                {member.position}
              </p>
              <h3 className="text-2xl font-bold">{member.name}</h3>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default BuilderCards;
