import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aravind A S — Freelance Software Engineer & Digital Product Developer | Kerala & Worldwide",
  description: "Aravind A S is a top-rated freelance software engineer & web developer in Kerala (Kollam, Pathanamthitta). I build custom websites, e-commerce stores, React Native mobile apps, CRM & business systems from idea to launch.",
  keywords: [
    "Freelance software developer Kerala",
    "Web developer Kerala",
    "Software developer Kollam",
    "Web developer Kollam",
    "Mobile app developer Kerala",
    "E-commerce developer Kerala",
    "Freelance developer India",
    "Custom software development",
    "Web application development",
    "CRM development",
    "Freelancer in Kerala",
    "React Native App Developer Kerala"
  ],
  icons: {
    icon: "/favicon.png",
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
    title: "Aravind A S — Freelance Software Engineer & Digital Product Developer",
    description: "I build digital products from idea to launch. Websites, e-commerce, mobile apps, CRM, business systems and ongoing development support.",
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
    "description": "Top-rated freelance software engineer and digital product partner in Kerala specializing in websites, e-commerce, web applications, CRM, and mobile apps.",
    "telephone": "+918848310248",
    "email": "aravindas247@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sasthamcotta, Kollam",
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
      "Node.js",
      "CRM Development"
    ],
    "sameAs": [
      "https://github.com",
      "https://linkedin.com"
    ]
  };

  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090a0a] dark:text-[#f4f5f2] antialiased selection:bg-emerald-500 selection:text-white dark:selection:bg-[#c7ff4a] dark:selection:text-black transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
