import React from "react";

const GetStartedSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Sign Up as a Merchant",
      description: "Create a SeedFi Merchant account to unlock access to customer-friendly loan services."
    },
    {
      number: "2", 
      title: "Add your customers",
      description: "Upload or onboard your customers to your dashboard—no paperwork needed."
    },
    {
      number: "3",
      title: "Customers apply for loans",
      description: "Once onboarded, customers can apply for instant loans directly from the app."
    },
    {
      number: "4",
      title: "Monitor and manage loans",
      description: "Track all disbursements, repayments, and performance from your dashboard in real-time."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get started in just a few steps.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From onboarding to disbursement, we've made the whole process fast, flexible, and built around your business needs.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200">
            <div className="absolute top-0 left-1/4 w-1/2 h-0.5 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number circle */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-xl font-bold mb-6 mx-auto lg:mx-0">
                  {step.number}
                </div>

                {/* Step content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection line for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-8">
                    <div className="w-0.5 h-8 bg-gray-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSteps;


