"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of loans does SeedFi offer?",
      answer: "SeedFi offers personal loans, business loans, and other financial products designed to meet your specific needs."
    },
    {
      question: "What are the interest rates for SeedFi loans?", 
      answer: "Our interest rates are competitive and vary based on your creditworthiness and loan terms. Contact us for personalized rates."
    },
    {
      question: "What types of loans does SeedFi offer?",
      answer: "SeedFi offers personal loans, business loans, and other financial products designed to meet your specific needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-secondary py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-body text-gray-900 mb-4">
            Got questions? We've got answers.
          </h2>
          <p className="text-lg text-gray-600 font-body">
            Looking for answers? Check out some common questions below,{" "}
            <br className="hidden md:block" />
            or{" "}
            <Link href="/contact" className="text-primary underline">
              contact us
            </Link>{" "}
            if you still need help.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <Image
                  src="/assets/icons/plus.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={`transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/faq"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;