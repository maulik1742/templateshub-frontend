import React from "react";

const CategoryCard = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-lg w-64 hover:shadow-xl transform hover:scale-105 transition cursor-pointer"
    >
      <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default CategoryCard;
