"use client"

import React, { useState } from "react";
import Image from "next/image";

const CheckScore = () => {
  const [formData, setFormData] = useState({
    bvn: "",
    dateOfBirth: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 px-10 lg:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-start lg:text-center mb-6 lg:mb-12">
          <p className="text-[16px] lg:text-xl font-medium  font-body">
            Enter your details below to check your score
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="bvn" className="block text-sm font-medium text-gray-700 mb-2">
                BVN<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="bvn"
                name="bvn"
                value={formData.bvn}
                onChange={handleInputChange}
                placeholder="Ex: 12345678901"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors font-body"
                required
              />
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  // type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  placeholder="Select date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors font-body appearance-none"
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                 <Image
                 src="/assets/icons/seed-score/calendar.svg"
                 alt=""
                 width={20}
                 height={20}/>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              required
            />
            <label htmlFor="agreeToTerms" className="w-[80%] lg:w-[45%] text-[12px]  font-normal font-body leading-relaxed">
              By using this service, you acknowledge and agree to comply with SeedFi's{' '}
              <a href="/terms" className="text-primary hover:underline">
                Terms & Conditions
              </a>
              {' '}and{' '}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6 lg:pb-0 pb-15">
            <button
              type="submit"
              disabled={!formData.agreeToTerms}
              className="bg-primary text-white font-medium py-3 px-8 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-body"
            >
              Check my Score
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckScore;