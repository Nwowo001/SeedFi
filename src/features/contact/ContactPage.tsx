"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative min-h-screen bg-white pt-32 lg:pt-55 pb-16 px-8 lg:px-6">
      <div className="max-w-6xl mx-auto  gap-16">
        <p className="text-center lg:text-start lg:text-5xl text-[28px] font-bold lg:w-[40%]  leading-relaxed">
          Got a Question? {" "} We're Listening.
        </p>
        <div className="text-[16px] lg:text-xl pt-5  lg:pb-0 pb-8 lg:text-start text-center ">
          <p className="hidden lg:inline"> Partnerships? Enquiries? Support?</p>
          <p className="lg:hidden w-[85%] ">
            {" "}
            Send us a message and we’ll get back to you as soon as we can.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto  relative">
        {/*  Contact Info  */}
        <div className="lg:absolute lg:right-0 lg:-top-39 lg:w-1/2 space-y-8 mb-8 lg:mb-0">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/contact.svg"
              alt=""
              width={452}
              height={418}
            />
          </div>

          <div className="space-y-6 lg:pl-20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-[#BDDAC9] rounded-[10px] flex items-center justify-center">
                <div className="">
                  <Image
                    src="/assets/icons/phone.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900">+234 913 887 2203</p>
                <p className="text-sm text-gray-500">Phone Number</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-[#BDDAC9] rounded-[10px] flex items-center justify-center">
                <div className="">
                  <Image
                    src="/assets/icons/mail.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  hello@theseedfi.com
                </p>
                <p className="text-sm text-gray-500">Email Address</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-[#BDDAC9] rounded-[10px] flex items-center justify-center mt-1">
                <div className="">
                  <Image
                    src="/assets/icons/location.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  The Dataseed Company Limited.
                </p>
                <p className="font-semibold text-gray-900">
                  21/22 Teslim Elias Close, Victoria Island, Lagos, Nigeria
                </p>
                <p className="text-sm text-gray-500">Location</p>
              </div>
            </div>
          </div>
        </div>

        {/* - Form */}
        <div className="lg:w-1/2 lg:relative lg:left-0 lg:top-0  -top-40">
          <div className="text-xl pt-5 pb-8 text-start    ">
            <p className="lg:hidden"> Partnerships? Enquiries? Support?</p>
          </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Placeholder text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#D9D9D9] rounded-lg outline-none focus:border-[#2A8851] "
                />
              </div>
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Placeholder text"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border bg-[#F9F9F9] border-[#D9D9D9] rounded-lg outline-none focus:border-[#2A8851]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium  mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Placeholder text"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border bg-[#F9F9F9] border-[#D9D9D9] rounded-lg outline-none focus:border-[#2A8851]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium  mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="seedfi@example.com"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border bg-[#F9F9F9] border-[#D9D9D9] rounded-lg outline-none focus:border-[#2A8851]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium  mb-2">Message</label>
              <textarea
                name="message"
                rows={6}
                placeholder="Placeholder text"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border bg-[#F9F9F9] border-[#D9D9D9] rounded-lg outline-none focus:border-[#2A8851] resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreement"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="agreement" className="text-sm text-gray-600">
                By submitting this form, you consent to the storage of your
                information and agree to be contacted using the details
                provided. Your submission indicates acceptance of our full{" "}
                <span className="text-[#2A8851] underline cursor-pointer">
                  Terms & conditions
                </span>
                .
              </label>
            </div>
            <div className="flex justify-center items-center pb-15">
              <button
                type="submit"
                disabled={!agreed}
                className="bg-primary text-white font-medium py-3 px-8 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-body"
              >
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
