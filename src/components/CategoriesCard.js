import React from "react";

const CategoryCard = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-lg w-72 hover:shadow-xl transform hover:scale-105 transition cursor-pointer border border-gray-200"
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
        {/* Optional Badge */}
        <span className="text-sm font-medium text-white bg-[#918ce6ad] px-2 py-0.5 rounded-lg">
          New
        </span>
      </div>

      {/* Description Section */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

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
