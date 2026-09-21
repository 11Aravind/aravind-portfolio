export interface Project {
  id: string;
  name: string;
  category: string;
  locationContext?: string;
  url: string;
  description: string;
  tag?: string;
  visualTitle?: string;
  visualSub?: string;
  badge?: string;
  image?: string;
}

export interface SelectedReference {
  id: string;
  name: string;
  category: string;
  url: string;
}

export interface CaseStudyData {
  id: string;
  projectName: string;
  category: string;
  locationContext: string;
  liveUrl: string;
  challenge: string;
  whatIBuilt: string;
  myRole: string;
}

export const FEATURED_PROJECT: Project = {
  id: "noorzah",
  name: "Noorzah",
  category: "E-commerce Platform",
  tag: "Featured project · E-commerce",
  locationContext: "NOORZAH · KOLLAM",
  url: "https://noorzah.com/",
  description: "A production e-commerce platform for a fashion business based in Sasthamcotta, Kollam, Kerala. Designed around a clean shopping experience and responsive customer journey.",
  visualTitle: "Curated fashion.\nMade to shop.",
  visualSub: "E-COMMERCE PLATFORM",
  image: "/projects/noorzah.jpg"
};

export const NOORZAH_CASE_STUDY: CaseStudyData = {
  id: "noorzah",
  projectName: "Noorzah",
  category: "E-commerce Platform",
  locationContext: "Sasthamcotta, Kollam, Kerala",
  liveUrl: "https://noorzah.com/",
  challenge: "The brand required a modern, highly responsive online storefront to showcase curated fashion products and streamline digital customer inquiries and sales.",
  whatIBuilt: "Custom full-stack e-commerce storefront with optimized mobile layout, product galleries, fast page loads, and direct customer conversion pathways.",
  myRole: "End-to-End Freelance Software Engineer & Web Developer — UI Design, Frontend Development, Responsiveness Optimization, and Storefront Deployment."
};

export const GRID_PROJECTS: Project[] = [
  {
    id: "wishlist-by-praveena",
    name: "Wishlist by Praveena",
    category: "Fashion / Boutique E-commerce",
    url: "https://wishlistbypraveena.vercel.app/",
    description: "Fashion-focused online shopping experience built for seamless product browsing and modern mobile shopping.",
    locationContext: "WISHLIST BY PRAVEENA",
    visualTitle: "Fashion\ne-commerce",
    image: "/projects/wishlist.jpg"
  },
  {
    id: "nc-brand-fashion",
    name: "NC Brand Fashion",
    category: "Fashion E-commerce",
    url: "https://www.ncbrandfashion.com",
    description: "Modern fashion e-commerce storefront engineered for brand identity and clean customer navigation.",
    locationContext: "NC BRAND FASHION",
    visualTitle: "Brand\nstorefront",
    image: "/projects/ncbrand.jpg"
  },
  {
    id: "aoba",
    name: "Aoba",
    category: "Modern Web Experience",
    url: "https://11aravind.github.io/Aoba/",
    description: "A modern web application experience built with a clean, highly responsive interface and custom interaction flow.",
    locationContext: "AOBA",
    visualTitle: "Modern\ndigital experience",
    image: "/projects/aoba.jpg"
  }
];

export const SELECTED_REFERENCES: SelectedReference[] = [
  {
    id: "qimati",
    name: "Qimati",
    category: "E-commerce",
    url: "https://www.qimati.in"
  },
  {
    id: "pawan-ratna",
    name: "Pawan Ratna",
    category: "Online store",
    url: "https://pawanratna.com"
  },
  {
    id: "ugaoo",
    name: "Ugaoo",
    category: "E-commerce",
    url: "https://www.ugaoo.com"
  },
  {
    id: "nambisans",
    name: "Nambisans",
    category: "Online store",
    url: "https://www.nambisans.in"
  }
];
