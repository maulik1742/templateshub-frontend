import React, { useState } from "react";

const HeroSection = ({
  title,
  description,
  showSearch,
  searchPlaceholder,
  onSearch,
}) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };
  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto mb-8">
          {description}
        </p>
        {showSearch && (
          <form onSubmit={handleSearchClick}>
            <div className="mt-10">
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full px-5 py-3 rounded-lg shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="absolute top-0 right-0 bg-indigo-600 text-white font-bold px-5 py-3 rounded-r-lg shadow-lg hover:bg-indigo-700">
                  Search
                </button>
              </div>
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
