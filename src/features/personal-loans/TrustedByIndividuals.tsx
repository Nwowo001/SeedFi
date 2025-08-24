import React from "react";
import ReviewCard from "@/components/ui/ReviewsCard";

const TrustedByIndividuals = () => {
  const testimonials = [
    {
      review: "I recently reached out to SeedFi for business financial support, and they were amazing! They provided me with clear and helpful advice, and their customer service was top-notch.",
      author: "Mr Awe",
      location: "Pentrust Business Solutions Ltd",
      icon: "/assets/icons/quote.svg",
      bgColor: "#EAF3EE"
    },
    {
      review: "I recently reached out to SeedFi for business financial support, and they were amazing! They provided me with clear and helpful advice, and their customer service was top-notch.",
      author: "Mr Awe", 
      location: "Pentrust Business Solutions Ltd",
      icon: "/assets/icons/quote.svg",
      bgColor: "#EAF3EE"
    },
    {
      review: "I recently reached out to SeedFi for business financial support, and they were amazing! They provided me with clear and helpful advice, and their customer service was top-notch.",
      author: "Mr Awe",
      location: "Pentrust Business Solutions Ltd", 
      icon: "/assets/icons/quote.svg",
      bgColor: "#EAF3EE"
    },
    {
      review: "I recently reached out to SeedFi for business financial support, and they were amazing! They provided me with clear and helpful advice, and their customer service was top-notch.",
      author: "Mr Awe",
      location: "Pentrust Business Solutions Ltd",
      icon: "/assets/icons/quote.svg", 
      bgColor: "#EAF3EE"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-body text-gray-900 mb-2">
            Trusted by individuals
          </h2>
          <p className="text-lg text-gray-600 font-body">
            What real people say about SeedFi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <ReviewCard key={index} review={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByIndividuals;