import Link from 'next/link';

export async function generateMetadata({ params }: { params: { category: string } }) {
  const formattedCategory = params.category.replace(/-/g, ' ');
  return {
    title: `Free ${formattedCategory.toUpperCase()} Schema Markup Generator`,
    description: `Generate Google-compliant JSON-LD FAQ and LocalBusiness schema for ${formattedCategory}.`,
  };
}

export default function CategorySchemaPage({ params }: { params: { category: string } }) {
  const categoryName = params.category.replace(/-/g, ' ');

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Link href="/" className="text-blue-600 hover:underline text-sm">
          ← Back to Main Generator
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2 capitalize">
        {categoryName} Schema Generator
      </h1>
      <p className="text-gray-600 mb-8">
        Create structured JSON-LD schema markup tailored specifically for {categoryName} businesses.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-1">
          Why use schema for {categoryName}?
        </h2>
        <p className="text-blue-800 text-sm">
          Adding structured data helps search engines understand your local business services, direct contact details, and FAQs, improving your rich snippet visibility on Google.
        </p>
      </div>

      <div className="text-center mt-8">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Use Main Schema Generator Tool
        </Link>
      </div>
    </div>
  );
}
