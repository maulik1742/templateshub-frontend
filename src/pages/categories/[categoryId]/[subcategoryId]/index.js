import React, { useEffect } from "react";
import HeroSection from "../../../../components/HeroSection";
import { useRouter } from "next/router";
import { getNoAuth } from "@/redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "@/components/CategoriesCard";

const TemplatesPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { subcategoryId } = router.query;
  const template = useSelector((state) => state?.Template?.template);

  const getTemplates = async (search) => {
    const res = await getNoAuth(
      `/template?subcategory=${subcategoryId}&search=${search || ""}`,
      "GET_TEMPLATE",
      dispatch
    );
    return res;
  };
  useEffect(() => {
    if (subcategoryId) {
      getTemplates();
    }
  }, [subcategoryId]);
  const handleSearch = (e) => {
    getTemplates(e);
  };

  return (
    <div>
      <HeroSection
        title="Templates"
        description="Choose a Template And Copy It Instantly."
        showSearch={true}
        onSearch={handleSearch}
        searchPlaceholder={"Search Templates"}
      />
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 pl-32 py-10 px-20 capitalize">
        {template && template?.length > 0 ? (
          template?.map((template) => (
            <CategoryCard
              key={template?._id}
              title={template?.title}
              description="Click to view templates"
              onClick={() => router.push(`/content/${template._id}`)}
            />
          ))
        ) : (
          <img
            src="/no-data1.png"
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
              marginLeft: "100%",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TemplatesPage;
