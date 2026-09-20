# Existing Portfolio Contents & Sections Overview

> **Portfolio Owner:** Aravind A S — Freelance Software Engineer & Web Developer  
> **Location / Region:** Sasthamcotta, Kollam, Pathanamthitta, Kerala, India (Serving worldwide)  
> **Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons  
> **Last Updated:** September 2026  

---

## 1. Page Layout & Structural Breakdown

The main portfolio page ([`app/page.tsx`](file:///d:/Aravind-Works/Portfolio/app/page.tsx)) renders a single-page experience containing **7 core component sections** plus a persistent floating WhatsApp widget:

1. [**Navigation Bar (`Navbar`)**](#1-navigation-bar-navbar)
2. [**Hero Section (`Hero`)**](#2-hero-section-hero)
3. [**Selected Work & Projects (`Projects` & `ProjectCard`)**](#3-selected-work--projects-projects)
4. [**About Section (`About`)**](#4-about-section-about)
5. [**Services / Capabilities (`Services`)**](#5-services--capabilities-services)
6. [**Contact Section & Inquiry Form (`ContactForm`)**](#6-contact-section--inquiry-form-contactform)
7. [**Footer (`Footer`)**](#7-footer-footer)
8. [**Floating WhatsApp Widget (`WhatsAppButton`)**](#8-floating-whatsapp-widget-whatsappbutton)

---

## 2. Detailed Section & Content Breakdown

### 1. Navigation Bar ([`components/Navbar.tsx`](file:///d:/Aravind-Works/Portfolio/components/Navbar.tsx))
* **Logo / Branding:** `ARAVIND A S` (Scrolls to top `#`)
* **Navigation Links:**
  * `Work` → Scrolls to `#work`
  * `About` → Scrolls to `#about`
  * `Services` → Scrolls to `#services`
  * `Contact` → Scrolls to `#contact`
* **Desktop CTA:** `Let's talk ↗` button linking to `#contact`
* **Mobile Navigation:** Responsive hamburger menu drawer (`lucide-react` `Menu` / `X` toggles)

---

### 2. Hero Section ([`components/Hero.tsx`](file:///d:/Aravind-Works/Portfolio/components/Hero.tsx))
* **Visual Effects:** Framer Motion animated radial glow in lime-green (`#c7ff4a`)
* **Eyebrow Badge:** 
  * `ShieldCheck` Icon + `Trustable Freelance Developer · Kerala (Kollam & Pathanamthitta)`
  * `Live Production Work Below ↓` badge
* **Main Headline:** `"Top-rated web development & mobile app developer in Kerala."`
* **Sub-Headline:** `"Helping businesses in Kollam, Pathanamthitta, and across Kerala build high-converting custom websites, e-commerce platforms, and cross-platform mobile apps."`
* **Primary CTAs:**
  * `Explore Live Work` (Smooth scroll to `#work`)
  * `Start a project / Hire ↗` (Smooth scroll to `#contact`)
* **Selected Work Spotlight Bar:** 4 quick live production site badges:
  1. **Noorzah** — E-Commerce Store
  2. **Wishlist by Praveena** — Fashion Store
  3. **NC Brand Fashion** — Storefront
  4. **Aoba** — Web App

---

### 3. Selected Work & Projects ([`components/Projects.tsx`](file:///d:/Aravind-Works/Portfolio/components/Projects.tsx) & [`data/projects.ts`](file:///d:/Aravind-Works/Portfolio/data/projects.ts))
* **Header:**
  * Eyebrow: `Selected work`
  * Title: `"Real products. Real interfaces."`
  * Subtitle: *"A selection of e-commerce and digital experiences. The work below is presented with a focus on product experience and responsive design."*

#### Featured Project (Hero Layout Card)
* **Noorzah** ([`noorzah.com`](https://noorzah.com/))
  * **Category:** E-commerce Platform
  * **Location Context:** `NOORZAH · KOLLAM`
  * **Visual Title:** `"Curated fashion. Made to shop."`
  * **Description:** *"A production e-commerce platform for a fashion business based in Sasthamcotta, Kollam, Kerala. Designed around a clean shopping experience and responsive customer journey."*
  * **CTA:** `View live store ↗`

#### 3-Column Grid Projects
1. **Wishlist by Praveena** ([`wishlistbypraveena.vercel.app`](https://wishlistbypraveena.vercel.app/))
   * **Category:** Fashion / Boutique E-commerce
   * **Visual Title:** `"Fashion e-commerce"`
   * **Description:** *"Fashion-focused online shopping experience."*
2. **NC Brand Fashion** ([`ncbrandfashion.com`](https://www.ncbrandfashion.com))
   * **Category:** Fashion E-commerce
   * **Visual Title:** `"Brand storefront"`
   * **Description:** *"Modern fashion e-commerce storefront."*
3. **Aoba** ([`11aravind.github.io/Aoba`](https://11aravind.github.io/Aoba/))
   * **Category:** Modern Web Experience
   * **Visual Title:** `"Modern digital experience"`
   * **Description:** *"A modern web experience built with a clean, responsive interface."*

#### Selected References Sub-Section
* **Header:** `Selected references` | `"More stores to explore."`
* **Disclaimer:** *"These links are shown separately from my featured work so the portfolio does not imply ownership or authorship without confirmation."*
* **4 Reference Cards:**
  1. **Qimati** (E-commerce) — [`qimati.in`](https://www.qimati.in)
  2. **Pawan Ratna** (Online store) — [`pawanratna.com`](https://pawanratna.com)
  3. **Ugaoo** (E-commerce) — [`ugaoo.com`](https://www.ugaoo.com)
  4. **Nambisans** (Online store) — [`nambisans.in`](https://www.nambisans.in)

---

### 4. About Section ([`components/About.tsx`](file:///d:/Aravind-Works/Portfolio/components/About.tsx))
* **Header:**
  * Eyebrow: `About Aravind A S`
  * Heading: `"Trustable freelance developer engineering with a product mindset."`
* **Bio / Story:**
  * Highlights position as a trusted freelance software engineer based in Sasthamcotta, Kollam, Kerala.
  * Lists regional focus: Kollam, Pathanamthitta, Trivandrum, and worldwide remote clients.
  * Details technical scope: Custom websites, e-commerce stores (Noorzah, Wishlist), web applications, REST APIs, and React Native mobile apps.
* **Tech Stack Pills:**
  * `React` · `Next.js` · `TypeScript` · `Node.js` · `Express` · `MongoDB` · `MySQL` · `React Native`

---

### 5. Services / Capabilities ([`components/Services.tsx`](file:///d:/Aravind-Works/Portfolio/components/Services.tsx) & [`data/services.ts`](file:///d:/Aravind-Works/Portfolio/data/services.ts))
* **Header:**
  * Eyebrow: `What I build`
  * Heading: `"From first idea to launch."`
* **6 Service Offering Cards:**
  1. **Business Websites:** *"Modern, responsive websites designed around clarity and enquiries."*
  2. **E-commerce:** *"Online stores, product experiences and customer-facing shopping flows."*
  3. **Web Applications:** *"Custom dashboards, admin panels and business applications."*
  4. **Mobile Applications:** *"Cross-platform mobile experiences using React Native."*
  5. **API & Backend:** *"REST APIs, authentication, databases and integrations."*
  6. **Website Improvements:** *"Responsive redesigns, UI modernization and feature development."*

---

### 6. Contact Section & Inquiry Form ([`components/ContactForm.tsx`](file:///d:/Aravind-Works/Portfolio/components/ContactForm.tsx))
* **Header:**
  * Eyebrow: `Let's build` (with pulsing indicator)
  * Heading: `"Have an idea worth building?"`
  * Description: *"Let's turn it into a fast, modern and reliable digital product. Reach out directly via WhatsApp, Call, or Email."*
* **Direct Contact Info Cards:**
  * **Email:** `aravindas247@gmail.com`
  * **WhatsApp / Call:** `+91 8848310248`
  * **Direct Phone:** `+91 8129365304`
* **Action CTAs:**
  * `Email me ↗` (`mailto:aravindas247@gmail.com`)
  * `WhatsApp ↗` (`https://wa.me/918848310248...`)
  * `Quick Message Form ↓` (Toggles expand/collapse inline message form)
* **Interactive Quick Inquiry Form:**
  * Inputs: `Your Name *`, `Email / Phone *`, `Project Brief / Goals *`
  * Submitting triggers a pre-filled `mailto:` client prompt and displays a success message badge.

---

### 7. Footer ([`components/Footer.tsx`](file:///d:/Aravind-Works/Portfolio/components/Footer.tsx))
* **Title:** `ARAVIND A S · SOFTWARE ENGINEER`
* **Contact Links:** `aravindas247@gmail.com` • `+91 8848310248` • `+91 8129365304`
* **Copyright Notice:** `© 2026 Aravind A S`

---

### 8. Floating WhatsApp Widget ([`components/WhatsAppButton.tsx`](file:///d:/Aravind-Works/Portfolio/components/WhatsAppButton.tsx))
* **Position:** Fixed floating button on bottom-right (`z-50`)
* **Features:** Official WhatsApp icon, live green theme (`#25D366`), pulsing online status indicator dot, label on desktop (`Chat on WhatsApp`), pre-filled conversation link to `+91 8848310248`.

---

## 3. Data & Asset Organization

| Directory / File | Purpose | Key Content |
| :--- | :--- | :--- |
| [`data/projects.ts`](file:///d:/Aravind-Works/Portfolio/data/projects.ts) | Projects data source | Stores `FEATURED_PROJECT`, `GRID_PROJECTS`, and `SELECTED_REFERENCES` arrays |
| [`data/services.ts`](file:///d:/Aravind-Works/Portfolio/data/services.ts) | Services & Skills data | Stores `SERVICES` array (6 items) and `TECH_PILLS` array (8 technologies) |
| [`app/layout.tsx`](file:///d:/Aravind-Works/Portfolio/app/layout.tsx) | App metadata & SEO | Configures OpenGraph tags, local keywords (Kollam, Pathanamthitta, Kerala), and Schema.org `ProfessionalService` JSON-LD |
| [`app/globals.css`](file:///d:/Aravind-Works/Portfolio/app/globals.css) | Global styling system | Custom CSS variables, background styling `#090a0a`, accent styling `#c7ff4a`, typography rules |
