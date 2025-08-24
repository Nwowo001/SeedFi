import React from "react";
import Image from "next/image";

const WhoCanApply = () => {
  const requirements = [
    {
      icon: "/assets/icons/user-check.svg",
      title: "You must a Nigerian above 18 years of age",
      bgColor: "#FFF9DA"
    },
    {
      icon: "/assets/icons/phone-check.svg", 
      title: "Valid means of ID & phone number",
      bgColor: "#E5EDF8"
    },
    {
      icon: "/assets/icons/bank-check.svg",
      title: "An active Bank Verification Number (BVN)",
      bgColor: "#DEE7E2"
    },
    {
      icon: "/assets/icons/income-check.svg",
      title: "Stable source of income",
      bgColor: "#F7CECC"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-body text-gray-900 mb-4">
            Who can apply for a loan at <span className="text-primary">SeedFi</span>
          </h2>
          <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
            SeedFi loans are designed for everyday Nigerians. If you meet these basic requirements, you're eligible to apply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 text-center"
              style={{ backgroundColor: requirement.bgColor }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={requirement.icon}
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <p className="text-gray-800 font-medium text-sm leading-relaxed">
                {requirement.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;