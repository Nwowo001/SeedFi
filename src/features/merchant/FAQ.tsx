"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of loans does SeedFi offer?",
      answer: "SeedFi offers various types of loans including personal loans, salary advances, and customer financing solutions. Our platform supports both individual and business lending needs with flexible terms and competitive rates."
    },
    {
      question: "What are the interest rates for SeedFi loans?",
      answer: "Our interest rates are competitive and vary based on the loan type, amount, and repayment period. We offer fair, employee-negotiated interest rates that are transparent and affordable. Contact our team for specific rate information."
    },
    {
      question: "How quickly can loans be disbursed?",
      answer: "SeedFi provides instant loan disbursement once approved. Our streamlined process allows for same-day or next-day disbursement, depending on the loan amount and verification requirements."
    },
    {
      question: "Is there any upfront cost for employers?",
      answer: "No, there are no upfront costs for employers. SeedFi operates on a transparent fee structure where costs are only incurred when loans are successfully disbursed and repaid."
    },
    {
      question: "How do I get started as a merchant?",
      answer: "Getting started is simple: 1) Sign up for a merchant account, 2) Add your customers to the platform, 3) Customers can then apply for loans, and 4) Monitor everything from your dashboard. The entire process is designed to be fast and user-friendly."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Here are some frequently asked questions we get on loans. If you can't find your answer here, please{" "}
            <a href="/contacts" className="text-primary hover:underline font-medium">
              contact us
            </a>
            .
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More button */}
        <div className="text-center mt-8">
          <button className="bg-primary text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-green-800 transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


