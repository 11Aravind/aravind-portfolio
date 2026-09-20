export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Modern, responsive websites designed around clarity and enquiries."
  },
  {
    id: "e-commerce",
    title: "E-commerce",
    description: "Online stores, product experiences and customer-facing shopping flows."
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Custom dashboards, admin panels and business applications."
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description: "Cross-platform mobile experiences using React Native."
  },
  {
    id: "api-backend",
    title: "API & Backend",
    description: "REST APIs, authentication, databases and integrations."
  },
  {
    id: "website-improvements",
    title: "Website Improvements",
    description: "Responsive redesigns, UI modernization and feature development."
  }
];

export const TECH_PILLS: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "React Native"
];
