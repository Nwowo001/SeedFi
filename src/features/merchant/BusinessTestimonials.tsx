"use client";
import React, { useState } from "react";

const BusinessTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      review: "SeedFi has helped reduce financial pressure on our staff. It's easy to use, and we've seen happier, more focused employees",
      author: "-HR, XYZ Group",
      bgColor: "#EAF3EE"
    },
    {
      review: "The platform is intuitive and our employees love the flexibility. It's been a game-changer for our company culture.",
      author: "-HR, ABC Group", 
      bgColor: "#EAF3EE"
    },
    {
      review: "SeedFi's merchant dashboard gives us complete control over our employee loan program. Highly recommended!",
      author: "-Finance Director, TechCorp",
      bgColor: "#EAF3EE"
    },
    {
      review: "Our staff retention has improved significantly since implementing SeedFi. The financial wellness benefits are incredible.",
      author: "-CEO, GrowthLabs",
      bgColor: "#EAF3EE"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by businesses
          </h2>
          <p className="text-lg text-gray-600">
            What other merchants say about SeedFi
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center">
                      {/* Quote icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Testimonial text */}
                      <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
                        "{testimonial.review}"
                      </blockquote>

                      {/* Author */}
                      <div className="text-gray-600 font-medium">
                        {testimonial.author}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTestimonials;


