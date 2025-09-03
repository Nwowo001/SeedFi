"use client";
import React, { useState } from 'react'

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-[#FFEC89] py-16">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Don't Miss a Money Move
          </h2>
          <p className="text-gray-700 mb-6">
            Get practical tips, helpful insights, and updates from SeedFi—delivered fresh to your inbox.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border outline-none"
            />
            <button className="bg-[#2A8851] text-white px-6 py-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
        <div className="hidden md:block ml-8 w-48 h-32 bg-green-200 rounded-lg"></div>
      </div>
    </div>
  )
}

export default NewsLetter

