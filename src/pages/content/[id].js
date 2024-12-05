import { getNoAuth } from "@/redux/actions/action";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TemplatePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const data = useSelector((state) => state?.Template?.template);

  const getTemplate = async () => {
    await getNoAuth(`/template?id=${id}`, "GET_TEMPLATE", dispatch);
  };

  const handleCopy = () => {
    if (data?.[0]?.content) {
      const tempElement = document.createElement("div");
      tempElement.innerHTML = data[0].content;
      const plainText = tempElement.textContent || tempElement.innerText;
      navigator.clipboard.writeText(plainText);
      alert("Content copied to clipboard!");
    } else {
      alert("No content to copy.");
    }
  };

  useEffect(() => {
    if (id) {
      getTemplate();
    }
  }, [id]);
  return (
    <div className="bg-gradient-to-b  from-indigo-600 via-purple-500 to-pink-400 min-h-screen py-10">
      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-10 ">
          <h1 className="text-3xl font-semibold text-indigo-600 capitalize  rounded-lg py-4 ">
            {data?.[0]?.title}
          </h1>
          {/* Copy Button */}
          <div>
            {/* Content */}
            {data?.length > 0 ? (
              <div
                className="prose lg:prose-lg text-blue-900 capitalize"
                dangerouslySetInnerHTML={{ __html: data?.[0]?.content }}
              />
            ) : (
              <p className="text-center text-gray-500 text-lg">
                No content available to display.
              </p>
            )}
            <div className="flex justify-end mb-6">
              <button
                onClick={handleCopy}
                className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
