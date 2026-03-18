"use client";

import { useState, useEffect } from "react";
import { Download, ExternalLink } from "lucide-react";

interface Notice {
  id: string;
  title: string;
  date: string;
  driveLink: string;
}

interface NoticesResponse {
  notices: Notice[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

const ITEMS_PER_PAGE = 10;

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices();
  }, [currentPage]);

  const fetchNotices = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/notices?page=${currentPage}&limit=${ITEMS_PER_PAGE}`);
      const data: NoticesResponse = await res.json();
      setNotices(data.notices);
      setTotalPages(data.pagination.totalPages);
      setTotal(data.pagination.total);
    } catch (error) {
      console.error("Error fetching notices:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).replace(/\//g, "-");
  };

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

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

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
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">All Notices</h2>
            <p className="text-sm text-gray-300">
              {loading ? "Loading..." : `Showing ${startIndex + 1} to ${Math.min(startIndex + ITEMS_PER_PAGE, total)} of ${total} entries`}
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
                    <td colSpan={4} className="border border-gray-300 px-4 py-8 text-center text-gray-500">
                      Loading notices...
                    </td>
                  </tr>
                ) : notices.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="border border-gray-300 px-4 py-8 text-center text-gray-500">
                      No notices found
                    </td>
                  </tr>
                ) : (
                  notices.map((notice, index) => (
                    <tr key={notice.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                        {startIndex + index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-800">
                        {notice.title}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-600">
                        {formatDate(notice.date)}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        <a
                          href={notice.driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#003366] hover:text-[#D4A853] transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">View</span>
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