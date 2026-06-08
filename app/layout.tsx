import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) => `${basePath}${path}`;
const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
const metadataAssetBase =
  basePath && !normalizedSiteUrl.endsWith(basePath)
    ? `${normalizedSiteUrl}${basePath}`
    : normalizedSiteUrl;
const metadataAsset = (path: string) => `${metadataAssetBase}${path}`;

export const metadata: Metadata = {
  metadataBase: new URL(metadataAssetBase),
  title: "SANTIAGO | Professional Video Editor",
  description:
    "Premium portfolio for SANTIAGO, a professional video editor helping creators turn attention into growth through YouTube, Shorts, Reels, and high-retention storytelling.",
  keywords: [
    "SANTIAGO",
    "Edit with Intent",
    "video editor",
    "YouTube editor",
    "short form content",
    "retention editing",
    "SFX",
    "pacing"
  ],
  openGraph: {
    title: "SANTIAGO | Helping Creators Turn Attention Into Growth",
    description:
      "Professional video editor specialized in YouTube content, Shorts, Reels, and high-retention storytelling.",
    type: "website",
    images: [metadataAsset("/og.svg")]
  },
  icons: {
    icon: withBasePath("/favicon.svg")
  }
};

export const viewport: Viewport = {
  themeColor: "#03040b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
