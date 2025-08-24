"use client";
import React, { useState, useEffect, useRef } from "react";
import ReviewCard from "@/components/ui/ReviewsCard";
import { reviews } from "@/constants/reviews";
import Image from "next/image";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const updateCardsPerView = () => {
    if (window.innerWidth < 640) setCardsPerView(1);
    else if (window.innerWidth < 1024) setCardsPerView(2);
    else setCardsPerView(3);
  };

  const totalPages = Math.ceil((reviews.length - 1) / cardsPerView);
  const peek = cardsPerView === 1 ? 40 : 60;
  const maxIndex = (totalPages - 1) * cardsPerView;
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= maxIndex;

  const goToPrevious = () =>
    setCurrentIndex(Math.max(0, currentIndex - cardsPerView));
  const goToNext = () =>
    setCurrentIndex(Math.min(maxIndex, currentIndex + cardsPerView));
  const goToPage = (pageIndex: number) =>
    setCurrentIndex(pageIndex * cardsPerView);

  const handleScroll = () => {
    if (cardsPerView === 1 && trackRef.current && cardWidth > 0) {
      const scrollLeft = trackRef.current.scrollLeft;
      const index = Math.round(scrollLeft / (cardWidth + 24));
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    if (cardRef.current) setCardWidth(cardRef.current.offsetWidth);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const containerWidth =
    cardWidth > 0
      ? cardsPerView * cardWidth + (cardsPerView - 1) * 24 + peek
      : "100%";

  const transform =
    cardsPerView > 1
      ? `translateX(-${currentIndex * (cardWidth + 24)}px)`
      : "none";

  return (
    <section className="bg-white py-1 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:py-7 text-start">
          <p className="text-xl lg:text-[28px] font-bold font-body text-zinc-900">
            Real Stories. Real People. Real Impact.
          </p>
          <p className="font-body text-[16px] font-medium text-zinc-600 mt-2">
            What real people say about SeedFi
          </p>
        </div>

        <div className="relative flex items-center justify-center lg:py-0 py-7">
          {/* Left Arrow */}
          {cardsPerView > 1 && (
            <button
              onClick={goToPrevious}
              disabled={isAtStart}
              className={`absolute -left-12 top-1/2 -translate-y-1/2 z-10 ${
                isAtStart
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-110 transition"
              }`}
            >
              <Image
                src="/assets/icons/right-arrow.svg"
                alt="previous"
                width={32}
                height={32}
                className="rotate-180"
              />
            </button>
          )}

          {/* Cards Track */}
          <div
            className={`overflow-hidden ${
              cardsPerView === 1 ? "overflow-x-auto scrollbar-hide" : ""
            }`}
            style={{ width: containerWidth }}
            ref={trackRef}
            onScroll={handleScroll}
          >
            <div
              className={`flex gap-6 ${
                cardsPerView === 1
                  ? "snap-x snap-mandatory scroll-smooth"
                  : "transition-transform duration-500 ease-in-out"
              }`}
              style={{ transform }}
            >
              {reviews.map((review, index) => (
                <div
                  ref={index === 0 ? cardRef : null}
                  key={index}
                  className={cardsPerView === 1 ? "snap-start" : ""}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {cardsPerView > 1 && (
            <button
              onClick={goToNext}
              disabled={isAtEnd}
              className={`absolute -right-12 top-1/2 -translate-y-1/2 z-10 ${
                isAtEnd
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-110 transition"
              }`}
            >
              <Image
                src="/assets/icons/right-arrow.svg"
                alt="next"
                width={32}
                height={32}
              />
            </button>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => goToPage(pageIndex)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / cardsPerView) === pageIndex
                  ? "bg-green-700 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
