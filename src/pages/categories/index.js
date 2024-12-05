import React, { useEffect } from "react";
import HeroSection from "../../components/HeroSection";
import CategoryCard from "../../components/CategoriesCard";
import { useRouter } from "next/router";
import { getNoAuth } from "@/redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

const CategoriesPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state?.Category?.categories);

  const getCategories = async (search) => {
    await getNoAuth(
      `/category?search=${search || ""}`,
      "GET_CATEGORY",
      dispatch
    );
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleSearch = (e) => {
    getCategories(e);
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        onSearch={handleSearch}
        title="Explore Categories"
        description="Browse through our categories and find the perfect template for your needs."
        showSearch={true}
        searchPlaceholder={"Search category"}
      />

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-36 py-10 px-20 items-center justify-center capitalize">
        {categories?.map((category) => (
          <CategoryCard
            key={category._id}
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
