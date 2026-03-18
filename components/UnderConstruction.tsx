"use client";

import React from 'react';

const UnderConstruction: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
          Under Construction
        </h1>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          This page is currently being developed. Please check back soon.
        </p>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">
            For inquiries, please contact:
          </p>
          <a 
            href="mailto:info@college.edu"
            className="text-gray-900 font-medium border-b border-gray-900 pb-0.5 hover:opacity-70 transition-opacity"
          >
            info@college.edu
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;