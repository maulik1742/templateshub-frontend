import React, { useState } from "react";
import { useRouter } from "next/router";
import HeroSection from "../../../../../components/HeroSection";

const templatesContent = {
  "1-1-1":
    "Dear [Recipient Name],\n\nI am writing to formally announce my resignation, effective [date].\n\nThank you for the opportunity to work with [Company Name].\n\nSincerely,\n[Your Name]",
  "1-1-2":
    "Subject: Immediate Resignation Notice\n\nDear [Recipient Name],\n\nPlease accept this letter as my immediate resignation from [Company Name] due to unforeseen circumstances.\n\nThank you for the opportunity.\n\nBest regards,\n[Your Name]",
};

const TemplatePreviewPage = () => {
  const router = useRouter();
  const { templateId } = router.query;
  const [copySuccess, setCopySuccess] = useState(false);

  const templateContent = templatesContent[templateId] || "Template not found.";

  const handleCopy = () => {
    navigator.clipboard.writeText(templateContent);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Reset success message after 2 seconds
  };

  return (
    <div>
      {/* Reusing HeroSection */}
      <HeroSection
        title="Template Preview"
        description="Review the template below. Use the 'Copy' button to copy it to your clipboard."
        showSearch={false}
      />

      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg p-6">
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 bg-indigo-600 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-700"
          >
            {copySuccess ? "Copied!" : "Copy"}
          </button>
          <pre className="whitespace-pre-wrap text-gray-800 font-mono text-lg">
            {templateContent}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreviewPage;
