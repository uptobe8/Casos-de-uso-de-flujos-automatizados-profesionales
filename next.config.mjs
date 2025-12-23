/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
    output: 'export',
    basePath: '/Casos-de-uso-de-flujos-automatizados-profesionales',
 
}

export default nextConfig
