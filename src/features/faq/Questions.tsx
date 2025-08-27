"use client";
import React from "react";
import { useState } from "react";
import { faqData } from "@/constants/faq/faq";
import { FAQCategory } from "@/types/faq";

const Questions = () => {
  const [activeCategory, setActiveCategory] = useState("about-seedfi");
  const [openQuestions, setOpenQuestions] = useState<string | null>(null);
 
  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(openQuestions === questionId ? null : questionId);
  };

  const activeCategoryData = faqData.find(cat => cat.id === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
      {/* Left Sidebar - Categories */}
      <div className="md:col-span-1">
        <div className="space-y-2">
          {faqData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeCategory === category.id
                  ? "bg-[#2A8851] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
              <span className="float-right">›</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Content - Questions */}
      <div className="md:col-span-3">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {activeCategoryData?.questions.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg border">
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="text-2xl text-gray-400">
                    {openQuestions === faq.id ? "−" : "+"}
                  </span>
                </button>
                {openQuestions === faq.id && (
                  <div className="px-6 pb-4 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
