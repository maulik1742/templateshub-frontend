import React, { useEffect } from "react";
import HeroSection from "../../../../components/HeroSection";
import { useRouter } from "next/router";
import { getNoAuth } from "@/redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "@/components/CategoriesCard";

const TemplatesPage = () => {
  // const templates = [
  //   { id: "1-1-1", name: "Formal Resignation Letter" },
  //   { id: "1-1-2", name: "Immediate Resignation Letter" },
  // ];
  const dispatch = useDispatch();
  const router = useRouter();
  const template = useSelector((state) => state?.Template?.template);

  const { categoryId, subcategoryId } = router.query;
  console.log("subcategoryId :>> ", subcategoryId);
  const getTemplate = async () => {
    const res = await getNoAuth(
      `/template?subcategory=${subcategoryId}`,
      "GET_TEMPLATE",
      dispatch
    );
    return res;
  };
  useEffect(() => {
    if (subcategoryId) {
      getTemplate();
    }
  }, [subcategoryId]);
  console.log("template :>> ", template);
  return (
    <div>
      <HeroSection
        title="Templates"
        description="Choose a Template And Copy It Instantly."
        showSearch={false}
      />
      <div className="max-w-7xl mx-auto flex flex-wrap py-10 px-28 capitalize  text-center gap-32">
        {template?.map((template) => (
          <CategoryCard
            key={template?._id}
            title={template?.title}
            description="Click to view templates"
            onClick={() => router.push(`/content/${template._id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplatesPage;
