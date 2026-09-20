import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aravind A S — Trustable Freelance Web & Mobile App Developer in Kerala, Kollam, Pathanamthitta",
  description: "Aravind A S is a top-rated freelance software engineer & web development partner in Kerala (Kollam, Pathanamthitta). Specializing in custom websites, e-commerce platforms, React Native mobile apps, and website revamps.",
  keywords: [
    "Freelancer in Kerala",
    "Freelance Web Developer Kollam",
    "Web Developer Pathanamthitta",
    "Trustable Freelancer Kerala",
    "Best Website Developer Kerala",
    "Web Development Company Kollam",
    "Mobile App Developer Kerala",
    "Custom Website Design Kollam",
    "E-commerce Developer Kerala",
    "React Native App Developer Kerala",
    "Website Revamp Services Kollam",
    "Noorzah E-commerce Developer",
    "Full-Stack Software Engineer Kerala",
    "Website Design Pathanamthitta",
    "Reliable Freelance Programmer Kerala"
  ],
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  authors: [{ name: "Aravind A S" }],
  creator: "Aravind A S",
  publisher: "Aravind A S",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://aravind.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aravind A S — Trustable Freelance Developer in Kerala (Kollam & Pathanamthitta)",
    description: "Building production-ready custom websites, e-commerce stores, and mobile apps. Trusted freelance engineering partner for Kerala businesses.",
    url: "https://aravind.dev",
    siteName: "Aravind A S Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Aravind A S Logo Favicon",
      },
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Aravind A S — Freelance Software Engineer & Web Developer",
    "url": "https://aravind.dev",
    "logo": "https://aravind.dev/favicon.png",
    "image": "https://aravind.dev/favicon.png",
    "description": "Top-rated freelance software engineer and web app developer in Kerala, Kollam, and Pathanamthitta specializing in e-commerce, web applications, and mobile apps.",
    "telephone": "+918848310248",
    "email": "aravindas247@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ayathil, Kollam",
      "addressRegion": "Kerala",
      "addressCountry": "India"
    },
    "areaServed": [
      "Kerala",
      "Kollam",
      "Pathanamthitta",
      "Trivandrum",
      "Cochin",
      "India",
      "Worldwide Remote"
    ],
    "priceRange": "$$",
    "knowsAbout": [
      "Web Development",
      "E-Commerce Development",
      "Mobile App Development",
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Node.js"
    ],
    "sameAs": [
      "https://github.com",
      "https://linkedin.com"
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#090a0a] text-[#f4f5f2] antialiased selection:bg-[#c7ff4a] selection:text-black">
        {children}
      </body>
    </html>
  );
}
