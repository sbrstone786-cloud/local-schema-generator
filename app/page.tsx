'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SchemaGenerator() {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('LocalBusiness');
  const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);
  const [generatedSchema, setGeneratedSchema] = useState('');

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const handleFaqChange = (index: number, field: string, value: string) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][field as 'question' | 'answer'] = value;
    setFaqs(updatedFaqs);
  };

  const generateSchema = () => {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": businessType,
          "name": businessName || "Your Business Name",
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqs.filter(f => f.question && f.answer).map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };

    setGeneratedSchema(JSON.stringify(schemaData, null, 2));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Local Business FAQ Schema Generator</h1>
        <p className="text-gray-600 mt-1">Generate Google-compliant JSON-LD markup for local services.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Business Name</label>
            <input 
              type="text" 
              value={businessName} 
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="e.g. Apex Dental Clinic" 
              className="mt-1 w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Business Category</label>
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

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800">FAQs</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="p-3 border rounded-md space-y-2 bg-gray-50">
                <input 
                  type="text" 
                  placeholder="Question" 
                  value={faq.question} 
                  onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                  className="w-full p-2 border rounded-md text-sm"
                />
                <textarea 
                  placeholder="Answer" 
                  value={faq.answer} 
                  onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                  className="w-full p-2 border rounded-md text-sm"
                  rows={2}
                />
              </div>
            ))}
            <button 
              onClick={handleAddFaq} 
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              + Add Another Question
            </button>
          </div>

          <button 
            onClick={generateSchema} 
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-semibold"
          >
            Generate JSON-LD Code
          </button>
        </div>

        {/* Output Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Generated JSON-LD Output</h3>
          <textarea 
            readOnly 
            value={generatedSchema} 
            placeholder="Click 'Generate' to output schema markup here..." 
            className="w-full h-96 p-3 font-mono text-xs bg-gray-900 text-green-400 rounded-md"
          />
          {generatedSchema && (
            <button 
              onClick={() => navigator.clipboard.writeText(generatedSchema)}
              className="mt-2 w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 font-medium"
            >
              Copy to Clipboard
            </button>
          )}
        </div>
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
    </div>
  );
}
