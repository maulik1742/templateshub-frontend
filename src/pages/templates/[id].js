import { useRouter } from "next/router";

const TemplatePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">
        Templates for Subcategory: {id}
      </h1>
    </div>
  );
};

export default TemplatePage;
