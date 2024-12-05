import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { getNoAuth, postAuthToken } from "@/redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function TemplateForm() {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(null);
  const [title, setTitle] = useState("");
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    getNoAuth("/category/subcategory", "GET_SUBCATEGORY", dispatch);
  }, []);

  const subCategoryData = useSelector(
    (state) => state?.SubCategory?.subCategories
  );

  // asdfasd
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title,
      content,
      subcategory: category,
    };
    const response = await postAuthToken(
      "/template/save-template",
      payload,
      "CREATE_TEMPLATE",
      dispatch
    );
    if (response?.success) {
      router?.push(`/content/${response?.data?._id}`);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen py-10">
      {/* Page Header */}
      <div className="container mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-indigo-600 bg-white rounded-lg py-4 px-6 shadow-md">
          Create a New Template
        </h1>
      </div>

      {/* Form Container */}
      <div className="container mx-auto px-4 max-w-4xl">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          {/* Select Category */}
          <div className="mb-6">
            <label
              htmlFor="categories"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Select Category
            </label>
            <select
              value={category || ""}
              onChange={(e) => setCategory(e.target.value)}
              id="categories"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {subCategoryData?.map((item) => (
                <option key={item?._id} value={item?._id}>
                  {item?.name}
                </option>
              ))}
            </select>
          </div>

          {/* Title Input */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the template title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Template Text Editor */}
          <div className="mb-6">
            <label
              htmlFor="content"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Template Content
            </label>
            <ReactQuill
              id="content"
              className="!rounded-lg"
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder="Type your content here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-auto bg-indigo-600 text-white py-3 px-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
          >
            Save Template
          </button>
        </form>
      </div>
    </div>
  );
}

export default TemplateForm;
