import Link from "next/link";
import React from "react";

const CareerHero = () => {
  return (
    <section className="relative bg-white pt-35 lg:pt-45 pb-10 lg:pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-body font-semibold text-[28px] lg:text-5xl leading-tight">
          <span className="hidden lg:inline">
            Join{" "}
            <span className="text-primary">
              Seed<span className="italic">Fi</span>
            </span>{" "}
            –{" "}
          </span>
          Build the <span className="lg:text-black text-primary">Future of Credit</span> with Us
        </p>

        <p className="mt-6 lg:text-xl text-[16px] lg:w-[50%] mx-auto ">
          We’re solving real problems and growing fast, and we’re looking for
          people who care about doing meaningful work.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block bg-primary  text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View Open Roles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
