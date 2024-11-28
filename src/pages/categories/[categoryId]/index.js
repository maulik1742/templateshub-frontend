import React, { useEffect } from "react";
import HeroSection from "../../../components/HeroSection";
import CategoryCard from "../../../components/CategoriesCard";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getNoAuth } from "@/redux/actions/action";

const subcategoriesData = {
  1: [
    { id: "1-1", name: "Immediate Resignation" },
    { id: "1-2", name: "Resignation with Notice" },
  ],
  2: [
    { id: "2-1", name: "Formal Offer" },
    { id: "2-2", name: "Conditional Offer" },
  ],
  3: [
    { id: "3-1", name: "Follow-Up Emails" },
    { id: "3-2", name: "Meeting Invitations" },
  ],
};

const SubcategoriesPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categoryId } = router.query;
  const subCategories = useSelector(
    (state) => state?.SubCategory?.subCategories
  );
  const getSubCategory = async () => {
    const response = await getNoAuth(
      `/category/subcategory?categoryId=${categoryId}`,
      "GET_SUBCATEGORY",
      dispatch
    );
    console.log("response :>> ", response);
    return response;
  };
  useEffect(() => {
    if (categoryId) {
      getSubCategory();
    }
  }, [categoryId]);
  console.log("categoryId :>> ", categoryId);
  console.log("Redux state:", subCategories);
  // const subcategories = subcategoriesData[categoryId] || [];

  return (
    <div>
      <HeroSection
        title="Explore Subcategories"
        description="Select a subcategory to explore templates."
        showSearch={false}
      />
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <p>No subcategories available.</p>
        )}
      </div>
    </div>
  );
};

export default SubcategoriesPage;
