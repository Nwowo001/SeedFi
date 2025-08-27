"use client";

import Image from "next/image";
import Questions from "./Questions";

export default function FAQPage() {
  return (
    <>
      <section className=" bg-gray-50 pt-32 pb-16">
        {/* Hero Section */}
        <div className="text-center px-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Got <span className="text-[#2A8851]">Questions?</span> We've Got{" "}
            <span className="text-[#2A8851]">Answers</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're curious about how SeedFi works, need help with your
            account, or just want to understand our services better, this is the
            place
          </p>
        </div>
      </section>
      <Questions />
      <section className="bg-[#F8E8E7] py-16 mt-16">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Still Have Questions?
            </h2>
            <p className="text-gray-700 mb-6">
              Contact our support team so we can make sure everything is clear
              and intuitive for you
            </p>
            <button className="bg-[#2A8851] text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Contact Support
            </button>
          </div>
          <div className="hidden md:block ml-8">
           <Image
           src="/assets/images/faq.svg"
           alt=""
           width={332}
           height={332}
           />
          </div>
        </div>
      </section>
    </>
  );
}
