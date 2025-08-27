"use client";

import { useState } from "react";
import Image from "next/image";

const blogCategories = ["All", "Personal Loans", "Business Tips", "Credit", "Financial Literacy"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Hero Section */}
      <div className="text-center px-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Insights to Power Your Financial Journey
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Smart content for smarter choices — whether you're just starting out or already on your way.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Categories and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Blog Categories</h3>
            <div className="flex flex-wrap gap-3">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category
                      ? "bg-[#2A8851] text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg w-64 outline-none focus:border-[#2A8851]"
            />
            <button className="bg-[#2A8851] text-white px-6 py-2 rounded-lg hover:bg-green-700">
              Search
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {index % 3 === 0 ? "SeedFi x Winich Farms" : 
                   index % 3 === 1 ? "6 Practical Tips to Effectively Manage Your Loans" :
                   "7 Tips for Small Businesses: How to Manage Your Finances Better"}
                </h3>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>SeedFi</span>
                  <span>17 Jun, 2025</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mb-16">
          <button className="px-3 py-2 text-gray-500">Prev</button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 rounded ${
                page === 1 ? "bg-[#2A8851] text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
          <span className="px-2 text-gray-500">...</span>
          <button className="w-10 h-10 rounded text-gray-600">10</button>
          <button className="px-3 py-2 text-gray-500">Next</button>
        </div>
      </div>

      {/* Newsletter Section */}
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
    </div>
  );
}