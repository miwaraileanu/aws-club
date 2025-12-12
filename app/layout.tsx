import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

// Comprehensive SEO metadata for maximum visibility
export const metadata: Metadata = {
  metadataBase: new URL("https://awsclub.ie"),
  title: {
    default: "AWS Community Club Ireland | awsclub.ie - Cloud Computing & AWS Learning Hub",
    template: "%s | AWS Community Club Ireland - awsclub.ie"
  },
  description:
    "AWS Community Club Ireland (awsclub.ie) - Premier cloud computing community in Ireland. Join our free AWS workshops, hands-on projects, certification preparation, and networking events. Learn cloud computing, Amazon Web Services, DevOps, serverless, and more at CCT College Dublin.",
  keywords: [
    "AWS Community Club Ireland",
    "awsclub.ie",
    "AWS Ireland",
    "Cloud Computing Ireland",
    "AWS workshops Dublin",
    "AWS certification Ireland",
    "CCT College AWS",
    "AWS learning community",
    "Cloud computing courses",
    "AWS training Ireland",
    "DevOps Ireland",
    "Serverless computing",
    "AWS events Dublin",
    "Tech community Ireland",
    "AWS student club",
    "Cloud architecture Ireland",
    "AWS Lambda Ireland",
    "EC2 training",
    "S3 workshops",
    "AWS networking Ireland"
  ],
  authors: [{ name: "AWS Community Club Ireland" }],
  creator: "AWS Community Club Ireland",
  publisher: "AWS Community Club Ireland",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://awsclub.ie",
    siteName: "AWS Community Club Ireland",
    title: "AWS Community Club Ireland | awsclub.ie - Cloud Computing & AWS Learning Hub",
    description:
      "Join AWS Community Club Ireland at awsclub.ie - Free AWS workshops, projects, certification prep & networking. Master cloud computing with Ireland's premier AWS community.",
    images: [
      {
        url: "https://awsclub.ie/og-image.png",
        width: 1200,
        height: 630,
        alt: "AWS Community Club Ireland - Cloud Computing Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS Community Club Ireland | awsclub.ie - Cloud Computing Hub",
    description:
      "Join Ireland's premier AWS community at awsclub.ie. Free workshops, projects, and networking for cloud computing enthusiasts.",
    creator: "@awsclub_ie",
    site: "@awsclub_ie",
  },
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
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://awsclub.ie",
  },
  category: "education",
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Structured data for enhanced search results
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://awsclub.ie/#organization",
        name: "AWS Community Club Ireland",
        url: "https://awsclub.ie",
        logo: {
          "@type": "ImageObject",
          url: "https://awsclub.ie/logo.png",
          width: 512,
          height: 512,
        },
        sameAs: [
          "https://twitter.com/awsclub_ie",
          "https://linkedin.com/company/aws-community-club-ireland",
          "https://github.com/aws-club-ireland",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "General Inquiries",
          email: "info@awsclub.ie",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://awsclub.ie/#website",
        url: "https://awsclub.ie",
        name: "AWS Community Club Ireland",
        description:
          "Premier cloud computing community in Ireland offering free AWS workshops, projects, and certification preparation.",
        publisher: {
          "@id": "https://awsclub.ie/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://awsclub.ie/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://awsclub.ie/#educational",
        name: "AWS Community Club Ireland",
        url: "https://awsclub.ie",
        description:
          "Cloud computing education and AWS training community in Ireland",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dublin",
          addressCountry: "IE",
        },
        offers: {
          "@type": "Offer",
          category: "Education",
          price: "0",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://awsclub.ie/#services",
        name: "AWS Community Club Services",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "AWS Workshops",
            description: "Hands-on workshops covering AWS services and cloud computing concepts",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "AWS Certification Preparation",
            description: "Study groups and resources for AWS certification exams",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Cloud Computing Projects",
            description: "Real-world projects to build cloud computing skills",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Networking Events",
            description: "Connect with cloud professionals and AWS enthusiasts in Ireland",
          },
        ],
      },
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Additional meta tags for better discoverability */}
        <meta name="geo.region" content="IE-D" />
        <meta name="geo.placename" content="Dublin" />
        <meta name="geo.position" content="53.349805;-6.260310" />
        <meta name="ICBM" content="53.349805, -6.260310" />
        
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://awsclub.ie" />
        
        {/* Canonical link to prevent duplicate content */}
        <link rel="canonical" href="https://awsclub.ie" />
      </head>
      <body className={`font-sans antialiased`}>
          {children}
          <Analytics />
      </body>
    </html>
  )
}
