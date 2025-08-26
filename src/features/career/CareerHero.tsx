import Link from "next/link";
import React from "react";

const CareerHero = () => {
  return (
    <section className="relative bg-white py-45 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-body font-semibold text-4xl lg:text-5xl leading-tight">
          Join{" "}
          <span className="text-primary">
            Seed<span className="italic">Fi</span>
          </span>{" "}
          – Build the Future of Credit with Us
        </p>

        <p className="mt-6 text-lg w-[50%] mx-auto ">
          We’re solving real problems and growing fast, and we’re looking for
          people who care about doing meaningful work.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            View Open Roles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
