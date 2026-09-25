export interface ProductItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  modelType: string;
  description: string;
  features: string[];
  metrics: string[];
  techStack: string[];
  badge?: string;
  iconName: "UtensilsCrossed" | "MapPin" | "Barcode" | "Coffee";
  mockupType: "browser" | "mobile" | "pos" | "terminal";
  accentGradient: string;
  image?: string;
  appUrl?: string;
  isComedy?: boolean;
  demoDetails: {
    overview: string;
    modules: string[];
    specs: string[];
  };
}

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "food-delivery-hotel-app",
    title: "QuickDine – Food Delivery & Hotel Suite",
    category: "Hospitality & Food Tech",
    tag: "SaaS & Mobile App Model",
    modelType: "Turnkey Web & Mobile Product",
    description: "Complete restaurant & hotel management system featuring QR digital menus, live Kitchen Display Screen (KDS), split billing, and automated GPS driver delivery tracking.",
    features: [
      "Customer Ordering App (iOS & Android)",
      "Live Kitchen Display Screen (KDS)",
      "QR Code Table Ordering & Waiter Call",
      "Instant GST Billing & WhatsApp Receipt"
    ],
    metrics: ["⚡ < 0.8s Order Sync", "📱 iOS & Android", "🍽️ 50+ Hotels Shipped"],
    techStack: ["React.js", "Node.js", "React Native", "MongoDB", "Socket.io"],
    badge: "Best Seller",
    iconName: "UtensilsCrossed",
    mockupType: "browser",
    accentGradient: "from-emerald-500/15 via-teal-500/10 to-emerald-600/5",
    image: "/projects/orderle.png",
    appUrl: "quickdine.app",
    demoDetails: {
      overview: "QuickDine is a turnkey solution designed for restaurants, cafes, and multi-branch hotel chains. It digitizes food ordering from table QR scans to kitchen preparation and home delivery dispatch.",
      modules: [
        "Customer Web & Mobile App (QR Menu, Cart, Payment Gateway)",
        "Chef Station Kitchen Display System (Real-time KDS Ticket Sync)",
        "Manager Web Dashboard (Sales Analytics, Menu Management, Taxes)",
        "Delivery Rider App (Live GPS Map Tracking & Order Status Update)"
      ],
      specs: [
        "Architecture: Microservices with Socket.io real-time websockets",
        "Payment Integrations: Razorpay, Stripe, UPI & Cash on Delivery",
        "Deployment: Docker + AWS / Vercel cloud ready",
        "White-label: Custom domain, branding logo, and colors included"
      ]
    }
  },
  {
    id: "salesman-tracking-system",
    title: "FieldTrack – Salesman & Field Force System",
    category: "Field Operations & CRM",
    tag: "GPS & Live CRM Model",
    modelType: "Enterprise Sales Force Software",
    description: "Real-time GPS location tracking for field sales representatives with geofenced site check-in, route optimization, mobile order capture, and automated conveyance claim calculations.",
    features: [
      "Live GPS Route & Location Tracking",
      "On-Site Order Booking & Signature",
      "Geofenced Punch-In with Selfie Log",
      "Sales Analytics & Manager Dashboard"
    ],
    metrics: ["📍 Real-Time GPS", "📊 Auto Beat Plan", "🏢 Enterprise Grade"],
    techStack: ["React Native", "Express.js", "MongoDB", "Google Maps API"],
    badge: "Enterprise",
    iconName: "MapPin",
    mockupType: "mobile",
    accentGradient: "from-sky-500/15 via-blue-500/10 to-indigo-600/5",
    image: "/projects/ncbrand.jpg",
    appUrl: "fieldtrack.io",
    demoDetails: {
      overview: "FieldTrack empowers distributors, FMCG brands, and field sales teams with real-time location visibility, automated beat planning, and instant mobile sales order processing.",
      modules: [
        "Sales Executive Mobile App (GPS Punch, Client Visits, Stock Order)",
        "Admin HQ Control Tower (Live Map View, Sales Rep Trail, Beat Route)",
        "Order & Payment Ledger (Invoice booking, collections, signature capture)",
        "Automated Expense Engine (Distance traveled calculation & conveyance)"
      ],
      specs: [
        "Tracking Mode: Background GPS with offline store-and-forward sync",
        "Maps Integration: Google Maps SDK & OpenStreetMap API",
        "Security: JWT Auth, Encrypted GPS Logs, Device ID Lock",
        "Export Formats: PDF Reports, Excel Ledger, ERP Integration"
      ]
    }
  },
  {
    id: "barcode-billing-software",
    title: "StockPos – Barcode Reader & Billing Software",
    category: "Retail & Inventory",
    tag: "Desktop & Web POS Model",
    modelType: "High-Speed Billing & Inventory POS",
    description: "Ultra-fast thermal receipt billing software integrated with barcode scanners, multi-warehouse stock management, GST invoice generation, and customer purchase ledger.",
    features: [
      "Fast Barcode Scan & Thermal Printing",
      "GST Invoicing & Daily Cash Register",
      "Real-Time Stock & Low-Inventory Alerts",
      "Customer Purchase & Loyalty History"
    ],
    metrics: ["⚡ 0.05s Barcode Scan", "🧾 GST Invoicing", "💻 Offline & Cloud"],
    techStack: ["React.js", "Next.js", "PostgreSQL", "Electron POS"],
    badge: "Ultra Fast",
    iconName: "Barcode",
    mockupType: "pos",
    accentGradient: "from-indigo-500/15 via-purple-500/10 to-indigo-600/5",
    image: "/projects/wishlist.jpg",
    appUrl: "stockpos.dev",
    demoDetails: {
      overview: "StockPos is built for retail outlets, supermarkets, and wholesale hubs. It handles high-volume barcode scanning, instant thermal receipt printing, and live multi-store inventory sync.",
      modules: [
        "Cashier POS Interface (Keyboard shortcuts, barcode scan, quick tenders)",
        "Inventory & SKU Manager (Batch numbers, expiry alerts, low-stock warnings)",
        "GST Accounting Module (B2B/B2C invoices, GSTR-1 export, daily cash drawer)",
        "Customer Loyalty Engine (Points ledger, SMS receipt link, purchase history)"
      ],
      specs: [
        "Hardware Support: USB/Bluetooth Barcode Scanners, Thermal Printers, Cash Drawers",
        "Database: PostgreSQL / SQLite with automatic local & cloud sync",
        "Performance: Renders 500+ cart items with sub-millisecond response time",
        "Customization: Custom receipt templates, tax rules, and store logos"
      ]
    }
  }
];
