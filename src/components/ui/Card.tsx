import type React from "react";
import type { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div
      className={`${product.cardHeight} rounded-2xl md:rounded-3xl p-4 md:p-6 flex items-start gap-4 md:gap-6 relative overflow-hidden transition-all duration-300`}
      style={{ backgroundColor: product.bgcolor }}
    >
      {/* Text section */}
      <div
        className={`${
          product.image ? "flex-[0.7] sm:flex-[0.5]" : "flex-1"
        } min-w-0`}
      >
        <div className="text-sm font-figtree font-medium text-gray-600 mb-3 uppercase tracking-wide">
          {product.category}
        </div>

        <p className="text-xl md:text-3xl font-bold text-gray-900 mb-4 italic leading-tight whitespace-pre-line">
          {product.title}
        </p>

        <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
          {product.desc}
        </p>

        <Link href={product.href}>
          <p className="inline-flex items-center text-green-700 font-medium text-base md:text-lg hover:text-green-800 transition-colors group  cursor-pointer">
            {product.buttonText}
            <svg
              width="20"
              height="21"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 transition-transform group-hover:translate-x-1"
            >
              <path
                d="M10.293 7.19141L15.8358 8.61564L14.4115 14.1584"
                stroke="#2A8851"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.08008 14.3828L15.7387 8.67314"
                stroke="#2A8851"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </Link>
      </div>

      {product.image && (
        <div className="flex-[0.5] self-end sm:absolute sm:bottom-0 sm:right-0 sm:flex-none">
          <Image
            src={product.image}
            alt={product.title}
            width={product.imageConfig.width}
            height={product.imageConfig.height}
            className="object-contain w-50% h-50% sm:w-[50%] md:w-auto"
          />
        </div>
      )}
    </div>
  );
};

export default Card;