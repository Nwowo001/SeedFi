import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[url('/assets/images/background-texture.svg')] bg-cover bg-center">
      <div className="absolute bottom-0 -left-0 ">
        <Image
          src="/assets/images/sphere-full.svg"
          alt="Decorative sphere"
          width={56}
          height={56}
        />
      </div>
      <div className="container mx-auto px-4 lg:px-8 xl:px-16 pt-32 lg:pt-40">
        <div className="flex width-50% flex-col lg:flex-row items-start lg:items-center justify-between relative">
          {/* Left content */}
          <div className="flex-1 max-w-2xl mb-12 lg:mb-0 lg:pr-12 relative z-10 w-50%">
            <p className="font-figtree font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug text-gray-900 mb-6">
              <span className="whitespace-nowrap">
                Making credit{" "}
                <span className="relative inline-block text-green-700 italic">
                  accessible
                  <Image
                    src="/assets/images/accessible-underline.svg"
                    alt="Underline decoration"
                    width={280}
                    height={20}
                    className="absolute -bottom-2 left-0 w-full"
                  />
                </span>
              </span>
              <br />
              to everyone
            </p>

            <p className="font-figtree font-medium text-sm sm:text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Flexible terms. Competitive rates. Personal support.
              <br />
              Take control of your finances and build a{" "}
              <span className="relative inline-block">
                brighter future
                <Image
                  src="/assets/images/brighter future underline.svg"
                  alt="Underline decoration"
                  width={140}
                  height={8}
                  className="absolute -bottom-1 left-0"
                />
              </span>
              <br />
              with SeedFi by your side.
            </p>

            {/*  QR Code section */}
            <div className="hidden lg:flex flex-row items-center gap-6 mb-8">
              <div className="text-center">
                <Image
                  src="/assets/images/QR-code.svg"
                  alt="QR Code"
                  width={120}
                  height={120}
                  className="mb-2"
                />
                <p className="text-sm text-gray-600">Scan to get the app</p>
              </div>

              {/* Divider line */}
              <svg
                width="2"
                height="40"
                viewBox="0 0 2 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-4"
              >
                <path
                  d="M1 1L1 39"
                  stroke="#2A8851"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              {/* App store buttons */}
              <div className="flex flex-row gap-3">
                <Image
                  src="/assets/images/Google Play.svg"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                />
                <Image
                  src="/assets/images/Apple-store.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                />
              </div>
            </div>

            {/* Mobile Get the App button and app store icons */}
            <div className="lg:hidden mb-8 ">
              <div className=" flex flex-row items-center gap-6 mb-8 sm:flex-row   justify-start">
                <Link
                  href="/"
                  className="bg-green-700 hover:bg-white hover:text-green-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
                >
                  Get the App
                </Link>
                {/* Divider line */}
                <svg
                  width="2"
                  height="40"
                  viewBox="0 0 2 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-4"
                >
                  <path
                    d="M1 1L1 39"
                    stroke="#2A8851"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm text-gray-600">Available on</span>
                  <div className="flex gap-7 justify-center items-center">
                    <Image
                      src="/assets/icons/playstore.svg"
                      alt="Google Play"
                      width={30}
                      height={33}
                    />
                    <Image
                      src="/assets/icons/apple.svg"
                      alt="App Store"
                      width={24}
                      height={29}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content  */}
          <div className="flex-1 width-50% flex justify-center lg:justify-end items-center relative">
            <div className="relative">
              {/* Main phone image */}
              <div className="relative z-20">
                <Image
                  src="/assets/images/phone-on-herosection.svg"
                  alt="SeedFi Mobile App"
                  width={677}
                  height={388}
                  className="max-w-full h-auto"
                  priority
                />
              </div>

              {/* Decorative spheres around the phone */}
              <div className="absolute -top-0 -right-27 ">
                <Image
                  src="/assets/images/split-sphere.svg"
                  alt="Decorative sphere"
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>

        {/* NDIC Badge - Bottom center */}
        <div className="absolute bottom-10 right-40  flex justify-center lg:justify-end items-center gap-3 mt-12 lg:mt-12 lg:mr-14">
          <Image
            src="/assets/images/audit-badge.svg"
            alt="NDIC Badge"
            width={67}
            height={60}
          />
          <span className="text-sm font-medium text-gray-700">
            NDPR 2024 Audit
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
