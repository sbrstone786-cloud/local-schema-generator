"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState("LocalBusiness");
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
  const [jsonLd, setJsonLd] = useState("");
  const [copied, setCopied] = useState(false);

const handleCopy = () => {
  if (!jsonLd) return;
  navigator.clipboard.writeText(jsonLd);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const handleFaqChange = (index: number, field: "question" | "answer", value: string) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  const generateSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": category,
          "name": businessName || "Local Business",
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqs
            .filter((f) => f.question && f.answer)
            .map((f) => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer,
              },
            })),
        },
      ],
    };
    setJsonLd(JSON.stringify(schema, null, 2));
  };

  return (
    <main className="max-w-5xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Local Business FAQ Schema Generator
      </h1>
      <p className="text-gray-600 mb-8">
        Generate Google-compliant JSON-LD markup for local services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Inputs */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Business Name
            </label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="e.g. Apex Dental Clinic"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Business Category
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="LocalBusiness">General Local Business</option>
              <option value="Dentist">Medical / Dental Clinic</option>
              <option value="HVACBusiness">HVAC / Home Services</option>
              <option value="RealEstateAgent">Real Estate Agency</option>
              <option value="Plumber">Plumbing Service</option>
              <option value="LegalService">Legal / Law Firm</option>
              <option value="AutoRepair">Car / Auto Repair Shop</option>
              <option value="Restaurant">Restaurant / Food Service</option>
              <option value="RoofingContractor">Roofing Contractor</option>
              <option value="AccountingService">Accounting & Tax Services</option>
            </select>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">FAQs</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2 mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded bg-white text-sm"
                  placeholder="Question"
                  value={faq.question}
                  onChange={(e) => handleFaqChange(index, "question", e.target.value)}
                />
                <textarea
                  className="w-full p-2 border border-gray-300 rounded bg-white text-sm"
                  placeholder="Answer"
                  rows={2}
                  value={faq.answer}
                  onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
                />
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddFaq}
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              + Add Another Question
            </button>
          </div>

          <button
            type="button"
            onClick={generateSchema}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Generate JSON-LD Code
          </button>
        </div>

        {/* JSON-LD Output Box */}
<div>
  <div className="flex justify-between items-center mb-2">
    <h2 className="text-sm font-semibold text-gray-700">
      Generated JSON-LD Output
    </h2>
    <button
      type="button"
      onClick={handleCopy}
      className="text-xs bg-gray-800 text-white px-3 py-1.5 rounded hover:bg-gray-700 transition"
    >
      {copied ? "Copied!" : "Copy Code"}
    </button>
  </div>
  <textarea
    readOnly
    className="w-full h-96 p-4 font-mono text-xs bg-slate-900 text-green-400 rounded-lg border border-gray-800"
    value={jsonLd}
    placeholder="Click 'Generate' to output schema markup here..."
  />
</div>

      {/* Programmatic SEO Internal Links Section */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Popular Schema Generators by Business Type
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
          <Link href="/schema/dental-clinic" className="text-blue-600 hover:underline">
            Dental Clinic Schema
          </Link>
          <Link href="/schema/plumbing-service" className="text-blue-600 hover:underline">
            Plumbing Service Schema
          </Link>
          <Link href="/schema/real-estate-agency" className="text-blue-600 hover:underline">
            Real Estate Schema
          </Link>
          <Link href="/schema/car-repair-shop" className="text-blue-600 hover:underline">
            Car Repair Schema
          </Link>
          <Link href="/schema/legal-services" className="text-blue-600 hover:underline">
            Legal Services Schema
          </Link>
          <Link href="/schema/restaurant" className="text-blue-600 hover:underline">
            Restaurant Schema
          </Link>
          <Link href="/schema/roofing-contractor" className="text-blue-600 hover:underline">
            Roofing Contractor Schema
          </Link>
          <Link href="/schema/hvac-service" className="text-blue-600 hover:underline">
            HVAC Service Schema
          </Link>
          <Link href="/schema/accounting-service" className="text-blue-600 hover:underline">
            Accounting Services Schema
          </Link>
          <Link href="/schema/local-business" className="text-blue-600 hover:underline">
            General Local Business Schema
          </Link>
        </div>
      </div>
    </main>
  );
}
