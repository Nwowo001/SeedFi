import React from "react";

const BusinessBenefits = () => {
  const benefits = [
    {
      icon: (
        <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      ),
      title: "Reduce financial stress",
      description: "Reduce financial stress in your workforce."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        </div>
      ),
      title: "No upfront cost",
      description: "No upfront cost for employers."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        </div>
      ),
      title: "Fair interest rates",
      description: "Fair, employee-negotiated interest rates."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
          </svg>
        </div>
      ),
      title: "Help & Support",
      description: "Dedicated support & reporting tools."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why businesses choose SeedFi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SeedFi helps you offer quick, affordable loans — while you stay in control of how it's done.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;


