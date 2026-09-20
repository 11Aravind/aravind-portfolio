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
}

export interface SelectedReference {
  id: string;
  name: string;
  category: string;
  url: string;
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
  visualSub: "E-COMMERCE PLATFORM"
};

export const GRID_PROJECTS: Project[] = [
  {
    id: "wishlist-by-praveena",
    name: "Wishlist by Praveena",
    category: "Fashion / Boutique E-commerce",
    url: "https://wishlistbypraveena.vercel.app/",
    description: "Fashion-focused online shopping experience.",
    locationContext: "WISHLIST BY PRAVEENA",
    visualTitle: "Fashion\ne-commerce"
  },
  {
    id: "nc-brand-fashion",
    name: "NC Brand Fashion",
    category: "Fashion E-commerce",
    url: "https://www.ncbrandfashion.com",
    description: "Modern fashion e-commerce storefront.",
    locationContext: "NC BRAND FASHION",
    visualTitle: "Brand\nstorefront"
  },
  {
    id: "aoba",
    name: "Aoba",
    category: "Modern Web Experience",
    url: "https://11aravind.github.io/Aoba/",
    description: "A modern web experience built with a clean, responsive interface.",
    locationContext: "AOBA",
    visualTitle: "Modern\ndigital experience"
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
