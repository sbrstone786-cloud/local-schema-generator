import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://local-schema-generator.vercel.app/'; //

  const categories = [
    'dental-clinic',
    'plumbing-service',
    'real-estate-agency',
    'car-repair-shop',
    'legal-services',
    'restaurant',
    'roofing-contractor',
    'hvac-service',
    'accounting-service',
    'local-business',
  ];

  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/schema/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    ...categoryUrls,
  ];
}
