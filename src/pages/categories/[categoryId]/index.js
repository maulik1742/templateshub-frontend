import React, { useEffect } from "react";
import HeroSection from "../../../components/HeroSection";
import CategoryCard from "../../../components/CategoriesCard";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getNoAuth } from "@/redux/actions/action";

const SubcategoriesPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categoryId } = router.query;
  const subCategories = useSelector(
    (state) => state?.SubCategory?.subCategories
  );
  const getSubCategory = async (search) => {
    const response = await getNoAuth(
      `/category/subcategory?categoryId=${categoryId}&search=${search || ""}`,
      "GET_SUBCATEGORY",
      dispatch
    );
    return response;
  };
  useEffect(() => {
    if (categoryId) {
      getSubCategory();
    }
  }, [categoryId]);
  // const subcategories = subcategoriesData[categoryId] || [];

  const handleSearch = (e) => {
    getSubCategory(e);
  };
  return (
    <div>
      <HeroSection
        title="Explore Subcategories"
        description="Select a subcategory to explore templates."
        showSearch={true}
        onSearch={handleSearch}
        searchPlaceholder={"Search Subcategory"}
      />
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 pl-32 py-10 px-20 capitalize">
        {subCategories && subCategories?.length > 0 ? (
          subCategories.map((subcategory) => (
            <CategoryCard
              key={subcategory.id}
              title={subcategory.name}
              description="Click to view templates"
              onClick={() =>
                router.push(`/categories/${categoryId}/${subcategory._id}`)
              }
            />
          ))
        ) : (
          <>
            <img
              src="/no-data1.png"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                marginLeft: "100%",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SubcategoriesPage;
