import { keywords } from "./keywords";
import type { Metadata } from "next";

export const meta = {
  metadataBase: new URL("https://chiho.zip"),
  /** OpenGraph */
  openGraph: {
    siteName: "Chiho.zip",
    url: "https://chiho.zip",
    locale: "en_US",
    images: "https://chiho.zip/og.png",
    creators: ["@usernamechiho"],
    description:
      "A CLI to scaffold your react custom hooks, with a focus on performance, reusability, and type-safety.",
  },
  twitter: {
    title: "Chiho.zip",
    card: "summary_large_image",
    creator: "@usernamechiho",
    site: "https://chiho.zip",
    images: "https://chiho.zip/og.png",
    description:
      "A CLI to scaffold your react custom hooks, with a focus on performance, reusability, and type-safety.",
  },
  /** OpenGraph */

  /** PWA */
  applicationName: "Rehooks",
  appleWebApp: {
    statusBarStyle: "default",
    title: "Rehooks",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  formatDetection: {
    telephone: false,
  },
  /** PWA */

  title: {
    default: "Chiho.zip",
    template: "%s | Chiho.zip",
  },
  description:
    "A CLI to scaffold your react custom hooks, with a focus on performance, reusability, and type-safety.",
  creator: "usernamechiho",
  authors: {
    url: "https://github.com/usernamechiho",
    name: "usernamechiho",
  },
  keywords: keywords,

  /** Icons  */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  /** Icons  */

  /** Robots */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE ?? undefined,
  },
  /** Robots */
} satisfies Metadata;
