export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface WhoIHelpItem {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface OnePartnerPoint {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const WHO_I_HELP: WhoIHelpItem[] = [
  {
    id: "businesses",
    title: "Businesses",
    description: "Modern websites, e-commerce stores, and high-converting digital presence."
  },
  {
    id: "startups",
    title: "Startups",
    description: "MVPs, web apps, and mobile products built from scratch."
  },
  {
    id: "growing-businesses",
    title: "Growing Businesses",
    description: "CRM, dashboards, automation, and custom internal business tools."
  },
  {
    id: "existing-products",
    title: "Existing Products",
    description: "UI/UX redesigns, feature updates, performance fixes, and ongoing dev support."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "websites",
    title: "Websites",
    description: "Modern, high-converting, and responsive business websites."
  },
  {
    id: "e-commerce",
    title: "E-commerce",
    description: "Custom online stores, payment flows, and seamless shopping experiences."
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Scalable web apps, portals, and cloud-based platforms."
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description: "Cross-platform iOS & Android mobile apps using React Native."
  },
  {
    id: "crm-business-systems",
    title: "CRM & Business Systems",
    description: "Custom CRM, admin dashboards, internal portals, and workflow tools."
  },
  {
    id: "backend-integrations",
    title: "Backend & Integrations",
    description: "REST APIs, database design, authentication, and third-party integrations."
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    description: "High-converting landing pages, SEO optimization, and digital growth support."
  },
  {
    id: "ongoing-development",
    title: "Ongoing Development",
    description: "Feature development, continuous improvements, maintenance, and technical support."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "DISCUSS",
    description: "Understand your business goals, target audience, and project requirements."
  },
  {
    step: "02",
    title: "PLAN",
    description: "Define product scope, architecture, technology choices, and timelines."
  },
  {
    step: "03",
    title: "DESIGN",
    description: "Craft clean, modern user interfaces and responsive user experiences."
  },
  {
    step: "04",
    title: "BUILD",
    description: "Develop fast, reliable code for your website, web app, or mobile app."
  },
  {
    step: "05",
    title: "LAUNCH",
    description: "Rigorous testing, optimization, deployment, and making your project live."
  },
  {
    step: "06",
    title: "SUPPORT",
    description: "Ongoing updates, feature enhancements, maintenance, and growth support."
  }
];

export const ONE_PARTNER_POINTS: OnePartnerPoint[] = [
  {
    title: "Business-first Approach",
    description: "Focus on what your digital product needs to achieve for your business."
  },
  {
    title: "End-to-End Ownership",
    description: "Planning, design, development, deployment, and ongoing post-launch support."
  },
  {
    title: "Direct Communication",
    description: "Work directly with the software engineer who is actually writing your code."
  },
  {
    title: "Long-term Partner",
    description: "Continued support to update, expand, and scale your product after launch."
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

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What kind of projects do you take on?",
    answer: "I work on business websites, e-commerce stores, custom web applications, React Native mobile apps, CRM & internal admin systems, and ongoing technical support."
  },
  {
    question: "Can you build a project from scratch?",
    answer: "Yes! I manage the full lifecycle—from initial strategy and UI design to full-stack development, database setup, deployment, and post-launch maintenance."
  },
  {
    question: "Can you improve or update an existing website or application?",
    answer: "Absolutely. I can refactor existing codebases, modernize outdated user interfaces, add new features, fix performance bottlenecks, and integrate new APIs."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes. I offer continuous development support, regular maintenance, server management, security updates, and iterative feature development for clients."
  },
  {
    question: "How do I start a project with you?",
    answer: "Simply submit a project inquiry through the form on this site, or reach out directly on WhatsApp or Email. We will discuss your goals and put together a project plan."
  }
];
