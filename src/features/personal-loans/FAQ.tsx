"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { faq } from "@/constants/personal-loans/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-white pb-40">
      <div className="relative bg-[#FFFCED] py-16">
      <div className="absolute right-1 top-5">
        <Image
          src="/assets/images/personal-loans/complete-circle.svg"
          alt=""
          width={67}
          height={67}

        />
      </div>
      <div className="absolute bottom-15 left-0">
        <Image
          src="/assets/images/personal-loans/split-circle.svg"
          alt=""
          width={55}
          height={55}
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src="/assets/images/personal-loans/bottom-circle.svg"
          alt=""
          width={25}
          height={25}
        />
      </div>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="lg:text-[32px] text-xl font-bold font-body  mb-4">
            Got questions? We've got answers.
          </p>
          <p className="text-sm lg:text-xl text-gray-600 font-body">
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
          {faq.map((faq, index) => (
            <div key={index} className=" rounded-lg ">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center "
              >
                <span className="lg:text-[16px] text-sm font-medium ">
                  {faq.question}
                </span>
                <Image
                  src="/assets/icons/personal-loans/plus.svg"
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
      </div>
    </section>
  );
};

export default FAQ;
