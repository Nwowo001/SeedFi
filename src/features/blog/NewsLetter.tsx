"use client";
import Image from 'next/image';
import React, { useState } from 'react'

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className=" pb-35">
<div className='bg-[#FFEC89] lg:py-16 py-3.5'>
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Mobile Image - Top Right */}
        <div className="md:hidden absolute -top-5 -right-8">
          <Image
            src="/assets/images/news-letter.svg"
            alt="Newsletter"
            width={195.76547604044558}
            height={195.76547604044558}
          />
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className=" pt-16 lg:pt-0">
            <p className="text-[16px] lg:text-2xl font-semibold font-body  mb-2">
              Don't Miss a Money Move
            </p>
            <p className="lg:text-[16px] text-xs font-normal font-body mb-6 lg:w-full w-[70%] ">
              Get practical tips, helpful insights, and updates from SeedFi—delivered fresh to your inbox.
            </p>
           <div className="flex flex-col sm:flex-row gap-3">
  <div className="relative flex-1">
    <input
      type="email"
      placeholder="Enter your email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full px-4 py-3 pr-28 rounded-2xl border outline-none"
    />
    <button
      type="submit"
      className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#2A8851] text-white px-4 py-1.5 rounded-lg text-sm sm:text-base"
    >
      Subscribe
    </button>
  </div>
</div>

          </div>
          
          {/* Desktop Image */}
          <div className="hidden md:block">
            <Image
              src="/assets/images/news-letter.svg"
              alt="Newsletter"
              width={334}
              height={334}
            />
          </div>
        </div>
      </div>
</div>
    </section>
  )
}

export default NewsLetter

