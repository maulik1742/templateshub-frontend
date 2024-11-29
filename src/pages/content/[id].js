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
    <>
      <div className=" flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">{data?.[0]?.title}</h1>
      </div>
      <div className="container mx-auto mt-8 flex justify-center">
        <div className="w-3/4 border border-red-400 p-4">
          {/* Copy Button */}
          <div className="flex justify-end mb-2">
            <button
              onClick={handleCopy}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Copy
            </button>
          </div>

          {/* Content */}
          {data?.length > 0 && (
            <div dangerouslySetInnerHTML={{ __html: data?.[0]?.content }} />
          )}
        </div>
      </div>
    </>
  );
};

export default TemplatePage;
