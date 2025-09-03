import React from "react";
import Image from "next/image";
import { Blog, SingleCardProps, MultipleCardsProps } from "@/types";

type BlogCardProps = SingleCardProps | MultipleCardsProps;

const BlogCard: React.FC<BlogCardProps> = (props) => {
  const { variant = "default" } = props;
  
  const cardClass = variant === "about"
    ? "w-[70%] lg:w-[28%] bg-white rounded-lg shadow-sm overflow-hidden flex-shrink-0"
    : "min-w-[280px] max-w-[320px] bg-white rounded-2xl shadow-sm overflow-hidden";

  const renderCard = (item: Blog, key: number) => (
    <div key={key} className={cardClass}>
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
  );

  // Single item usage
  if ('item' in props) {
    return renderCard(props.item, 0);
  }

  // Multiple items usage
  const containerClass = variant === "about" 
    ? "flex gap-6 w-full" 
    : "flex gap-6 w-max";

  return (
    <div className={containerClass}>
      {props.data.map((item, idx) => renderCard(item, idx))}
    </div>
  );
};

export default BlogCard;