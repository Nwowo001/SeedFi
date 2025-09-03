"use client";
import React, { useState, useMemo } from 'react'
import BlogCard from '@/components/ui/BlogCard'
import { blog, blogCategories } from '@/constants/main-blog'

const ITEMS_PER_PAGE = 9;

const MainBlog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    let filtered = blog;
    
    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(item => {
        return item.title.toLowerCase().includes(activeCategory.toLowerCase().replace(" ", ""));
      });
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [searchTerm, activeCategory]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };



  return (
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

      {/* Blog Grid using BlogCard */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {currentItems.map((item, index) => (
          <BlogCard key={startIndex + index} item={item} variant="default" />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mb-16">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 ${
              currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:text-gray-700"
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
                  page === currentPage ? "bg-[#2A8851] text-white" : "text-gray-600 hover:bg-gray-100"
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
              currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default MainBlog