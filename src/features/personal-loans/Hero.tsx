import React from "react";
import Image from "next/image";
import Link from "next/link";

const PersonalLoanHero = () => {
  return (
    <section className="bg-white pt-32 lg:pt-45 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center ">
          <p className="text-[28px] lg:text-[64px] font-bold font-body  mb-4">
            Get <span className="lg:text-primary">cash</span>, when you{" "}
            <span className="lg:text-primary">need it</span>
          </p>
          <p className="text-[16px] lg:text-xl font-medium font-body">
            Get personal loans in minutes. No collateral, no hassle.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="relative flex justify-center items-center mb-16">
          {/* Background Circle */}
          <Image
            src="/assets/images/personal-loans/bg.svg"
            alt="Background Circle"
            width={519}
            height={519}
            className="max-w-full h-auto"
            priority
          />

          {/* Phone & Floating Elements */}
          <div className="absolute bottom-0 flex justify-center">
            {/* Phone */}
            <Image
              src="/assets/images/personal-loans/phone.svg"
              alt="SeedFi App Interface"
              width={372}
              height={532}
              className="max-w-full h-auto"
              priority
            />

            {/* Floating Elements */}
            {/* Top right card */}
            <div className="absolute top-[20%] -right-[40px] lg:-right-[19%]">
              <Image
                src="/assets/images/personal-loans/1.svg"
                alt="Fast disbursement feature"
                width={186}
                height={56}
                priority
                className="lg:w-full lg:h-full w-[90%]"
              />
            </div>

            {/* Left middle card */}
            <div className="lg:pl-0 pl-12 absolute top-[50%] lg:top-[55%] -left-12 lg:-left-20">
              <Image
                src="/assets/images/personal-loans/2.svg"
                alt="No collateral required feature"
                width={205}
                height={56}
                priority
                className="lg:w-full lg:h-full w-[90%]"
              />
            </div>

            {/* Bottom right card */}
            <div className="absolute bottom-0 -right-[20%] lg:-right-[35%]">
              <Image
                src="/assets/images/personal-loans/3.svg"
                alt="Flexible repayment options feature"
                width={235}
                height={56}
                priority
                className="lg:w-full lg:h-full w-[82%]"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/apply"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PersonalLoanHero;
