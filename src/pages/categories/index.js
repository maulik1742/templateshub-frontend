import React, { useEffect } from "react";
import HeroSection from "../../components/HeroSection";
import CategoryCard from "../../components/CategoriesCard";
import { useRouter } from "next/router";
import { getNoAuth } from "@/redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

const categories = [
  {
    id: "1",
    name: "Resignation Letters",
    description: "Templates for resignations",
  },
  { id: "2", name: "Offer Letters", description: "Templates for job offers" },
  {
    id: "3",
    name: "Email Templates",
    description: "Corporate email templates",
  },
];

const CategoriesPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state?.Category?.categories);
  const getCategories = async () => {
    const res = await getNoAuth("/category", "GET_CATEGORY", dispatch);
    console.log("res :>> ", res);
    return res;
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <HeroSection
        title="Explore Categories"
        description="Browse through our categories and find the perfect template for your needs."
        showSearch={false}
      />
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories?.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            description={category.description}
            onClick={() => router.push(`/categories/${category._id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
