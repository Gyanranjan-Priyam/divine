"use client";

import { useState, useEffect } from "react";
import { ExternalLink, FileText, Loader2 } from "lucide-react";

interface Notice {
  id: string;
  title: string;
  link: string;
  date: string;
  category: string;
  active: boolean;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: Notice[];
}

const ITEMS_PER_PAGE = 10;

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [filteredNotices, setFilteredNotices] = useState<Notice[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Academic", "Administrative", "Events", "Examination", "Holiday"];

  useEffect(() => {
    fetchNotices();
  }, []);

  useEffect(() => {
    filterNotices();
  }, [notices, selectedCategory]);

  const fetchNotices = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/notices");
      const data: ApiResponse = await res.json();
      
      if (data.success && data.data) {
        // Filter only active notices and sort by date (newest first)
        const activeNotices = data.data
          .filter((notice) => notice.active)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setNotices(activeNotices);
      }
    } catch (error) {
      console.error("Error fetching notices:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterNotices = () => {
    if (selectedCategory === "All") {
      setFilteredNotices(notices);
    } else {
      setFilteredNotices(notices.filter((notice) => notice.category === selectedCategory));
    }
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Pagination calculations
  const totalPages = Math.ceil(filteredNotices.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNotices = filteredNotices.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Academic: "bg-blue-100 text-blue-800",
      Administrative: "bg-purple-100 text-purple-800",
      Events: "bg-green-100 text-green-800",
      Examination: "bg-orange-100 text-orange-800",
      Holiday: "bg-red-100 text-red-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003366] to-[#004488] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Notice Board</h1>
          <p className="text-gray-200">
            Stay updated with the latest announcements and important notices
          </p>
        </div>
      </div>

      {/* Notice Board Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-[#003366] text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">All Notices</h2>
            <p className="text-sm text-gray-300">
              {loading 
                ? "Loading..." 
                : filteredNotices.length === 0 
                ? "No notices found"
                : `Showing ${startIndex + 1} to ${Math.min(startIndex + ITEMS_PER_PAGE, filteredNotices.length)} of ${filteredNotices.length} entries`
              }
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-[#003366] w-16">
                    S.No
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-[#003366]">
                    Title
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-[#003366] w-32">
                    Category
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-[#003366] w-32">
                    Date
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-[#003366] w-32">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="border border-gray-300 px-4 py-12 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Loader2 className="h-8 w-8 animate-spin text-[#003366]" />
                        <span className="text-gray-500">Loading notices...</span>
                      </div>
                    </td>
                  </tr>
                ) : paginatedNotices.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="border border-gray-300 px-4 py-12 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <FileText className="h-12 w-12 text-gray-300" />
                        <span className="text-gray-500">No notices found</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginatedNotices.map((notice, index) => (
                    <tr key={notice.id} className="hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                        {startIndex + index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-800 font-medium">
                        {notice.title}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(notice.category)}`}>
                          {notice.category}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-600">
                        {formatDate(notice.date)}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        <a
                          href={notice.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#003366] text-white rounded hover:bg-[#002244] transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View</span>
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-gray-200 gap-4">
              <p className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </p>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                {getPageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === "number" && setCurrentPage(page)}
                    disabled={page === "..."}
                    className={`px-3 py-2 text-sm border rounded transition-colors ${
                      currentPage === page
                        ? "bg-[#003366] text-white border-[#003366]"
                        : page === "..."
                        ? "border-transparent cursor-default"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}