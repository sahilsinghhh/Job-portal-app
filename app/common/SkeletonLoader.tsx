import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="w-[830px] h-[320px] flex my-6 bg-white rounded-lg shadow-md py-4 px-6 border sm:w-full">
      <div className="flex flex-wrap">
        <div className="bg-gray-300 w-10 h-10 rounded-md me-2 animate-pulse" />
        <div>
          <div className="bg-gray-300 h-6 w-64 mb-1 animate-pulse rounded-md" />
          <div className="bg-gray-300 h-5 w-72 mb-1 animate-pulse rounded-md" />
          <div className="bg-gray-300 h-5 w-48 animate-pulse rounded-md" />
          <div className="bg-gray-300 h-5 w-48 mt-8 animate-pulse rounded-md" />
          <div className="bg-gray-300 h-5 w-48 mt-2 animate-pulse rounded-md" />
          <div className="bg-gray-300 h-5 w-64 mt-2 animate-pulse rounded-md" />
          <div className="bg-gray-300 h-5 w-48 mt-2 animate-pulse rounded-md" />
          <div className="bg-gray-300 h-5 w-28 mt-2 animate-pulse rounded-md" />
          <div className="flex flex-row gap-4">
            <div className="bg-gray-300  mt-2 h-[42px] w-[100px] animate-pulse rounded-md" />
            <div className="bg-gray-300  mt-2 h-[42px] w-[100px] animate-pulse rounded-md" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <div className="bg-gray-300 h-6 w-6 ms-3 animate-pulse rounded-md" />
        <div className="bg-gray-300 h-6 w-6 ms-3 animate-pulse rounded-md" />
      </div>
    </div>
  );
};

export default SkeletonLoader;
