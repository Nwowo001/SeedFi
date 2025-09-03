"use client";
import React, { useState, useMemo } from "react";
import BlogCard from "@/components/ui/BlogCard";
import { blog, blogCategories } from "@/constants/main-blog";
import Image from "next/image";

const ITEMS_PER_PAGE_DESKTOP = 9;
const ITEMS_PER_PAGE_MOBILE = 3;

const MainBlog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    let filtered = blog;

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter((item) => {
        return item.title
          .toLowerCase()
          .includes(activeCategory.toLowerCase().replace(" ", ""));
      });
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, activeCategory]);

  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerPage = isMobile
    ? ITEMS_PER_PAGE_MOBILE
    : ITEMS_PER_PAGE_DESKTOP;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="hidden md:flex justify-between items-center mb-12">
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

        <div className="flex gap-2 pt-10">
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

      {/* Mobile Layout */}
      <div className="md:hidden mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Blog Categories</h3>
          <Image
            src="/assets/icons/lens.svg"
            alt="Search"
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </div>

        {/* Categories  */}
        <div className="overflow-x-auto">
          <div className="flex gap-2 pb-2" style={{ minWidth: "max-content" }}>
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-[#EAF3EE]"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {currentItems.map((item, index) => (
          <BlogCard key={startIndex + index} item={item} variant="default" />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 lg:mb-16 mb-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 ${
              currentPage === 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Prev
          </button>

          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded ${
                  page === currentPage ? "bg-[#EAF3EE] " : " hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}

          {totalPages > 5 && (
            <>
              <span className="px-2 text-gray-500">...</span>
              <button
                onClick={() => handlePageChange(totalPages)}
                className="w-10 h-10 rounded text-gray-600 hover:bg-gray-100"
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 ${
              currentPage === totalPages
                ? "text-primary cursor-not-allowed"
                : "text-primary "
            }`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default MainBlog;
