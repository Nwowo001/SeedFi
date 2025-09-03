"use client";
import BlogCard from "@/components/ui/BlogCard";
import { blog } from "@/constants/blog";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const Blog = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth - 100;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScrollPosition();

    container.addEventListener("scroll", checkScrollPosition);
    return () => container.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-xl lg:text-2xl font-bold font-body text-zinc-900">
            Your Guide to Smarter Money Moves
          </p>
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={atStart}
              className={`p-2 rounded-full ${
                atStart ? " opacity-30 cursor-not-allowed" : ""
              }`}
            >
              <Image
                src="/assets/icons/right-arrow.svg"
                alt="prev"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={atEnd}
              className={`p-2 rounded-full ${
                atEnd ? " opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <Image
                src="/assets/icons/right-arrow.svg"
                alt="next"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth pb-7"
        >
          <BlogCard data={blog} variant="default" />
        </div>
      </div>
    </section>
  );
};

export default Blog;
