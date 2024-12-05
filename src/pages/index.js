import CategoryCard from "@/components/CategoriesCard";
import { getNoAuth } from "@/redux/actions/action";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function IndexPage() {
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
  // const handleSearch = (e) => {
  //   getCategories(e);
  // };

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
              className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-50"
            >
              Browse Templates
            </a>
          </div>

          <div id="categories" className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
              Popular Categories
            </h2>

            <div className="max-w-9xl mx-auto  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pl-36 px-10 items-center justify-center capitalize">
              {categories?.slice(0, 3).map((category) => (
                <CategoryCard
                  key={category._id}
                  title={category.name}
                  description={category.description}
                  onClick={() => router.push(`/categories/${category._id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Categ;
