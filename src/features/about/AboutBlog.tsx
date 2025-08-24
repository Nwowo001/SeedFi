"use client";
import AboutBlogCards from "@/components/ui/about/AboutBlogCards";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const AboutBlog = () => {
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

  // Track when at start / end
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
    <section className="bg-[url('/assets/images/background-texture.svg')] bg-cover bg-center py-16">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="lg:w-[35%]">
          {" "}
          <p className="text-2xl font-bold font-body text-zinc-900">
            Seed<span className="italic">Fi</span> in the Media
          </p>
          <p>
            From smarter credit to real-world impact, see how Seed<span className="italic">Fi</span> is 
            making waves in the media.
          </p>
        </div>
        <div className="flex justify-end  mb-6">
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={atStart}
              className={`p-2 rounded-full  ${
                atStart ? " opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <Image
                src="/assets/icons/about us/right-arrow.svg"
                alt="prev"
                width={32}
                height={32}
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
                src="/assets/icons/about us/right-arrow.svg"
                alt="next"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
        >
          <AboutBlogCards />
        </div>
      </div>
    </section>
  );
};

export default AboutBlog;
