import { MetadataRoute } from 'next'
import registry from '@/lib/registry.json'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://certifind.intellecto.com.co'
  
  const certificates = registry.certificates.map((cert) => ({
    url: `${baseUrl}/certificate/${cert.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
 
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...certificates,
  ]
}
