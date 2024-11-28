import React, { useEffect } from "react";
import HeroSection from "../../../../components/HeroSection";
import { useRouter } from "next/router";
import { getNoAuth } from "@/redux/actions/action";
import { useDispatch } from "react-redux";

const TemplatesPage = () => {
  const templates = [
    { id: "1-1-1", name: "Formal Resignation Letter" },
    { id: "1-1-2", name: "Immediate Resignation Letter" },
  ];

  const router = useRouter();
  const { categoryId, subcategoryId } = router.query;

  return (
    <div>
      <HeroSection
        title="Templates"
        description="Choose a template and copy it instantly."
        showSearch={false}
      />
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition cursor-pointer"
            onClick={() =>
              router.push(
                `/categories/${categoryId}/${subcategoryId}/${template.id}`
              )
            }
          >
            <h3 className="text-xl font-bold text-indigo-600">
              {template.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatesPage;
