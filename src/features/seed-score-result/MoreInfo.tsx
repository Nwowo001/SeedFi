import Image from "next/image";
import React from "react";

const MoreInfo = () => {
  return (
    <section>
      <div className="justify-center items-center text-center px-6 pt-16 ">
        <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold  mb-8">
          Get Funded Now
        </button>
        {/* Social Sharing */}
        <div className="mb-16">
          <p className="text-gray-600 mb-4">
            Let your friends know they can hack their credit score on SeedFi for
            free
          </p>
          <p className="text-sm text-gray-500 mb-4">Share using:</p>
        </div>{" "}
        <div className="flex justify-center space-x-4">
          <Image
            src="/assets/images/facebook.svg"
            alt=""
            width={40}
            height={40}
            className=""
          />
          <Image
            src="/assets/images/linkln.svg"
            alt=""
            width={40}
            height={40}
            className=""
          />
          <Image
            src="/assets/images/x.svg"
            alt=""
            width={40}
            height={40}
            className=""
          />
          <Image
            src="/assets/images/whatsapp.svg"
            alt=""
            width={40}
            height={40}
            className=""
          />
        </div>
      </div>
      {/* Factors Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-2xl font-bold text-center text-gray-800 mb-12">
            Common Factors That Determine Your Score
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-primary rounded-3xl p-6 shadow-sm">
              <p className="font-semibold text-gray-800 mb-3">
                Payment History
              </p>
              <p className="text-sm text-gray-600">
                Payment History Record of making on-time payments, including any
                late payments or defaults
              </p>
            </div>

            <div className="bg-white border border-[#CFBA49] rounded-3xl p-6 shadow-sm">
              <p className="font-semibold text-gray-800 mb-3">
                Credit Utilization
              </p>
              <p className="text-sm text-gray-600">
                An indication of how much of your available credit you're using
              </p>
            </div>

            <div className="bg-white border border-[#5285D1] rounded-3xl p-6 shadow-sm">
              <p className="font-semibold text-gray-800 mb-3">
                Length of Credit History
              </p>
              <p className="text-sm text-gray-600">
                The average age of your active credit accounts, including the
                age of your oldest and newest accounts
              </p>
            </div>

            <div className="bg-white border border-[#E46159] rounded-3xl p-6 shadow-sm">
              <p className="font-semibold text-gray-800 mb-3">
                Type of Credit in Use
              </p>
              <p className="text-sm text-gray-600">
                The variety of credit accounts you have, such as credit cards,
                mortgages, and installment loans
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              Looking for expert advice on improving your credit score? Contact
              us at{" "}
              <a
                href="mailto:hello@theseedfi.com"
                className="text-primary hover:underline"
              >
                hello@theseedfi.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MoreInfo;
