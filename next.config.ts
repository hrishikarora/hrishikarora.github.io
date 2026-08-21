import type { NextConfig } from 'next'

// Static export: GitHub Pages serves plain files, so no server-rendered
// anything. `hrishikarora.github.io` is a *user* site served at the root,
// which is why there is no basePath/assetPrefix here — those are only
// needed for project repos served under /repo-name/.
// `public/.nojekyll` is what stops Pages' Jekyll pass from eating `_next/`.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
