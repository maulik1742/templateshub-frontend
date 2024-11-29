import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { getNoAuth, post, postAuthToken } from "@/redux/actions/action";
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
    <div className="bg-slate-200 h-screen pt-10 ">
      <div className="container m-auto">
        <div className="p-7 bg-slate-300 rounded-xl text-2xl font-semibold mb-8">
          Create Template{" "}
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="text-gray-800 font-semibold text-lg mb-3">
              Select Category
            </h1>
            <select
              value={category || ""}
              onChange={(e) => setCategory(e.target.value)}
              name="categories"
              id="categories"
              className="mb-4"
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
          <label className="font-semibold mb-3 text-lg">Title</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            onChange={(e) => {
              setTitle(e?.target?.value);
            }}
            className="block w-auto px-2 mt-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          />
          <div>
            <h1 className="text-gray-800 font-semibold text-lg mb-3 mt-3">
              Template text
            </h1>

            <ReactQuill
              className="!rounded-lg"
              theme="snow" // Choose a Quill theme
              value={content}
              onChange={setContent}
              placeholder="Type your content here..."
            />
          </div>
          <button
            className="bg-slate-600 p-2 rounded-md px-4 text-white"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Save Content
          </button>
        </form>
      </div>
    </div>
  );
}

export default TemplateForm;
