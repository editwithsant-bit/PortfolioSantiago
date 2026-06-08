import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = "PortfolioSantiago";
const basePath = isGitHubPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? basePath : undefined,
  assetPrefix: isGitHubPages ? `${basePath}/` : undefined,
  trailingSlash: isGitHubPages ? true : undefined,
  images: {
    unoptimized: isGitHubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "interactive-examples.mdn.mozilla.net"
      }
    ]
  }
};

export default nextConfig;
