import React from "react";
import Image from "next/image";
import Link from "next/link";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Sign Up & Verify Your Identity",
      description: "Download the SeedFi app, create your account, and verify your identity with your BVN and other required documents."
    },
    {
      number: "2", 
      title: "Complete your Profile",
      description: "Provide key details like your employment and residential information to help us understand your eligibility."
    },
    {
      number: "3",
      title: "Apply & Accept Terms",
      description: "Select your preferred amount and repayment plan, then agree to the terms and conditions to proceed."
    },
    {
      number: "4",
      title: "Receive Funds Instantly",
      description: "Once approved, your loan is disbursed straight to your bank account. Get and spend fast."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-body text-gray-900 mb-2">
            How it works
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Phone mockup */}
          <div className="">
            <div className="relative">
              <Image
                src="/assets/images/personal-loans/phone2.svg"
                alt="SeedFi App Interface"
                width={420}
                height={667}
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Steps */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-body text-gray-900 mb-4">
                It takes less than 5 minutes
              </h3>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <Link
                href="/calculator"
                className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Use Calculator
              </Link>
              <Link
                href="/apply"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;