import React from "react";

const PageSkeleton = () => (
  <div className="min-h-screen bg-gray-50 p-8 space-y-12 animate-pulse">
    {/* Hero Section */}
    <div className="h-16 w-2/3 bg-gray-200 rounded mb-4 shimmer" />
    <div className="h-8 w-1/3 bg-gray-200 rounded mb-8" />

    {/* Stats Section */}
    <div className="flex gap-6 mb-8">
      <div className="h-20 w-32 bg-gray-200 rounded" />
      <div className="h-20 w-32 bg-gray-200 rounded" />
      <div className="h-20 w-32 bg-gray-200 rounded" />
    </div>

    {/* Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-48 bg-gray-200 rounded" />
      ))}
    </div>
  </div>
);

export default PageSkeleton;