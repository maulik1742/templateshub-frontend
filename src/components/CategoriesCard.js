import React from "react";

const CategoryCard = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-72 h-56 p-4 flex flex-col justify-between bg-white shadow-lg hover:shadow-xl rounded-lg overflow cursor-pointer transition-transform transform hover:scale-105 relative"
    >
      {/* Icon Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="p-3 bg-indigo-100 rounded-full">
            {/* Replace with an appropriate icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
        </div>
      </div>

      {/* Description Section with Tooltip */}
      <div className="relative group">
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        {/* Tooltip */}
        <div className="absolute top-7 left-20 ml-3 w-64 hidden group-hover:block bg-gray-800 text-white text-xs font-medium py-2 px-3 rounded-md shadow-lg z-10">
          {description}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-center items-center">
        <button className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700">
          Select
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
