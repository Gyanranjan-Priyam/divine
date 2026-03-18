"use client";

import React from "react";
import { WifiOff, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function OfflinePage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="w-20 h-20 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-6">
            <WifiOff className="w-10 h-10 text-[#D4A853]" />
          </div>

          <h1 className="text-2xl font-bold text-[#003366] mb-3">
            You&apo;sre Offline
          </h1>

          <p className="text-gray-600 mb-6">
            It looks like you&apo;sve lost your internet connection. Please check
            your connection and try again.
          </p>

          <div className="space-y-3">
            <button
              onClick={handleRefresh}
              className="w-full bg-[#003366] text-white py-3 px-6 rounded flex items-center justify-center gap-2 hover:bg-[#004488] transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>

            <Link
              href="/"
              className="w-full bg-gray-100 text-[#003366] py-3 px-6 rounded flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Some pages you&apo;sve visited before may still be available offline.
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Divine Group of Institutions, Nayagarh
        </p>
      </div>
    </div>
  );
}
