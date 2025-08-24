import React from "react";
import Image from "next/image";
import { aboutblog } from "@/constants/about-us/aboutblog";

const AboutBlogCards = () => {
  return (
    <div className="flex gap-6 w-full  ">
      {aboutblog.map((item, idx) => (
        <div
          key={idx}
          className="w-[70%] lg:w-[28%] bg-white rounded-lg shadow-sm overflow-hidden flex-shrink-0"
        >
          <div className="h-48 w-full relative">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-4">
            <h3 className="text-sm font-semibold text-zinc-800 mb-2 line-clamp-2">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500">
              {item.author} • {item.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutBlogCards;
