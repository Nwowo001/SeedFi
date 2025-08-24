import React from "react";
import Image from "next/image";
import { blog } from "@/constants/blog";

const BlogCards = () => {
  return (
    <div className="flex gap-6 w-max">
      {blog.map((item, idx) => (
        <div
          key={idx}
          className="min-w-[280px] max-w-[320px] bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          {/* Image */}
          <div className="h-48 w-full relative">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
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

export default BlogCards;
