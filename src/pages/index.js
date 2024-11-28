import React from "react";

function Index() {
  return (
    <div>
      <div className="bg-gradient-to-br pt-10 from-indigo-600 via-purple-500 to-pink-400 min-h-screen flex items-center justify-center px-4 py-2 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Free Templates for Every Occasion
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto mb-8">
            Explore a wide range of professional and customizable templates,
            from
            <span className="font-semibold"> resignation letters </span> to
            <span className="font-semibold"> offer letters</span>. Copy and use
            them instantly!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/categories"
              className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-100"
            >
              Browse Templates
            </a>
          </div>

          <div className="mt-10">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search templates (e.g., Resignation Letter)"
                className="w-full px-5 py-3 rounded-lg shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="absolute top-0 right-0 bg-indigo-600 text-white font-bold px-5 py-3 rounded-r-lg shadow-lg hover:bg-indigo-700">
                Search
              </button>
            </div>
          </div>
          <div id="categories" className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Popular Categories
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white p-6 rounded-lg shadow-lg w-64 hover:shadow-xl transform hover:scale-105 transition">
                <h3 className="text-xl font-bold text-indigo-600">
                  Resignation Letters
                </h3>
                <p className="text-gray-600 mt-2">
                  Professional resignation letters for your next move.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg w-64 hover:shadow-xl transform hover:scale-105 transition">
                <h3 className="text-xl font-bold text-indigo-600">
                  Offer Letters
                </h3>
                <p className="text-gray-600 mt-2">
                  Formal offer letter templates for your employees.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg w-64 hover:shadow-xl transform hover:scale-105 transition">
                <h3 className="text-xl font-bold text-indigo-600">
                  Email Templates
                </h3>
                <p className="text-gray-600 mt-2">
                  Ready-to-use email templates for every situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
