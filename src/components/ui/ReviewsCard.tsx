import React from "react";
import { Reviews } from "@/types";
import Image from "next/image";

interface ReviewCardProps {
  review: Reviews;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div
      className="flex-shrink-0 w-80 rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between"
      style={{
        backgroundColor: review.bgColor,
      }}
    >
      {/* Quote icon */}
      <div className="mb-4">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-gray-600 text-lg font-bold">
            <Image
              src="/assets/icons/quote.svg"
              alt=""
              width={40}
              height={40}
            />
          </span>
        </div>
      </div>

      {/* Review text */}
      <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-line flex-grow">
        {review.review}
      </p>

      {/* Author info */}
      <div className="mt-6">
        <p className="text-gray-900 font-semibold text-sm">{review.author}</p>
        <p className="text-gray-600 text-xs">{review.location}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
