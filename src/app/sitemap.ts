import { MetadataRoute } from 'next'
import { allPosts } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/experience', '/projects', '/about'].map(
    (route) => ({
      url: `https://frankliu.dev${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  )
  return [...routes]
}
