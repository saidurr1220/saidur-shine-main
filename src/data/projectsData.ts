export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: string;
  filterCategory: string;
  highlightBadge: string;
  clientName: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  architecture: string;
  tags: string[];
  url: string;
  configuratorUrl?: string;
  github: string;
  screenshot?: string;
  image?: string;
  ctaText?: string;
  metrics: Record<string, string>;
  workflowSteps: { step: string; detail: string }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "bybit-bitget-mirror-engine",
    title: "Mirror Control - Bybit to Bitget Real-Time Trade Mirror & Ops Engine",
    location: "International Trading Desk",
    category: "FinTech & Trading",
    filterCategory: "FinTech & Trading",
    highlightBadge: "$7,000 USD Production Build - Active 24/7",
    clientName: "Proprietary Trading Desk",
    description:
      "Enterprise Bybit-to-Bitget real-time trade mirroring engine, automated position parity reconciliation, and low-latency operational dashboard controlling over $500k+ USDT margin.",
    problem:
      "A high-volume crypto trading desk executed live manual strategies on Bybit UTA and required automated, sub-second 1:1 trade replication to Bitget UTA in hedge mode with isolated margin. The workflow demanded strict per-symbol quantity multipliers, zero duplicate execution risk, deterministic client order IDs, and failsafe operator control without risking position desynchronization during network latency or exchange restarts.",
    solution:
      "Architected and deployed a production-grade Node.js / TypeScript trading infrastructure service with PostgreSQL persistence. Engineered WebSocket real-time fill ingestion on Bybit (strictly read-only), deterministic Bitget clientOid generation, multi-stage idempotency fencing, per-symbol dynamic quantity multipliers (multiplier_epochs), and automatic position reconciliation. Developed the Mirror Control real-time ops dashboard with live margin monitoring, per-instrument status, and instant emergency stop drills.",
    impact:
      "Successfully delivered and running 24/7 in live production ($7,000 milestone project delivered through FB International BD). Maintains 100% position parity across all active instruments (BTC, ETH, SOL, BNB, NEAR, HYPE, SUI) with zero execution drift, protecting over $500,000+ USDT in trading margin.",
    architecture: "Node.js (TypeScript) + PostgreSQL + WebSockets + Bybit UTA + Bitget UTA REST/WS API",
    tags: [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "FinTech",
      "Crypto Trading",
      "WebSockets",
      "Bybit API",
      "Bitget UTA",
      "High Availability",
      "Real-Time Mirroring",
    ],
    url: "",
    github: "",
    screenshot: "/screenshots/mirror-control.png",
    ctaText: "Discuss a similar project",
    metrics: {
      contract: "$7,000 USD",
      status: "Running 24/7 Live",
      margin: "$500k+ USDT",
    },
    workflowSteps: [
      { step: "1. Real-Time Fill Ingestion", detail: "Bybit WebSocket stream captures executed fills with sub-50ms latency under strict read-only enforcement" },
      { step: "2. Idempotency & Fencing", detail: "Deterministic clientOid generation and state fencing prevent double execution or race conditions" },
      { step: "3. Multiplier & Order Dispatch", detail: "Per-symbol position multipliers (multiplier_epochs) calculate exact quantity before Bitget UTA market dispatch" },
      { step: "4. Parity Reconciliation & Ops", detail: "Continuous position matching and Mirror Control dashboard with 1-click failsafe emergency stop" },
    ],
  },
  {
    id: "vault-labs-research",
    title: "Vault Labs Research - Laboratory Research Commerce Platform",
    location: "US Client",
    category: "WordPress",
    filterCategory: "WooCommerce",
    highlightBadge: "20+ Custom Modules",
    clientName: "Nick",
    description:
      "Custom laboratory research product management and commerce platform built on WooCommerce.",
    problem:
      "Standard WooCommerce could not support wholesale/single-kit purchasing, store credit ledgers, or per-variation compliance documentation (COA) for laboratory research products.",
    solution:
      "Transformed WooCommerce into a full laboratory platform with 20+ custom modules via hooks and filters only - keeping WooCommerce core 100% upgrade-safe. Built dual-mode wholesale/single-kit purchasing with shared inventory, a production Store Credit ledger with admin backend and checkout redemption, variation-based COA document management, and a configurable multi-carrier shipping engine.",
    impact:
      "Enabled complex B2B/B2C purchasing flows and compliance documentation at scale while preserving future WooCommerce core updates.",
    architecture: "WordPress + WooCommerce + PHP (OOP) + ACF Pro + REST API",
    tags: [
      "WordPress",
      "WooCommerce",
      "PHP (OOP)",
      "JavaScript",
      "MySQL",
      "AJAX",
      "ACF Pro",
      "WP REST API",
      "ATUM Inventory",
      "LiteSpeed Cache",
    ],
    url: "https://vaultlabsresearch.net",
    github: "",
    screenshot: "/screenshots/vault-labs.png",
    ctaText: "Discuss a similar project",
    metrics: {
      modules: "20+",
      inventory: "Shared dual-mode",
      compliance: "Variation COA PDFs",
    },
    workflowSteps: [
      { step: "1. Dual-Mode Catalog", detail: "Single-kit vs wholesale bulk pricing with single shared inventory count" },
      { step: "2. Store Credit Hook", detail: "Checkout fee discount hooked into woocommerce_cart_calculate_fees" },
      { step: "3. COA Compliance", detail: "Dynamic batch testing certificates bound to individual product variations" },
      { step: "4. Multi-Carrier Engine", detail: "Rule-based hazardous material shipping dispatch calculations" },
    ],
  },
  {
    id: "onroute-couriers",
    title: "OnRoute Couriers - Custom Booking & Dynamic Pricing Platform",
    location: "UK Client",
    category: "WordPress",
    filterCategory: "Booking & Dynamic Pricing",
    highlightBadge: "Distance Matrix + GTM Dedup",
    clientName: "Shahbaz",
    description:
      "Multi-step courier booking platform with dynamic pricing, Stripe checkout, and full conversion tracking.",
    problem:
      "Needed a booking-to-checkout flow with real-time formula-based pricing, reliable payment handling, and accurate marketing conversion data without double-counting cancelled bookings.",
    solution:
      "Built a multi-step booking and instant-quote system from quote generation through confirmation, with a dynamic pricing engine (Distance x Service x Vehicle) via Google Distance Matrix API. Integrated Stripe Checkout with webhook-based payment status handling, VAT calculation, and promo logic. Implemented GTM, GA4, and Google Ads conversion tracking with Stripe-aware deduplication using transaction identifiers.",
    impact:
      "Delivered a reliable quote-to-checkout flow with accurate, deduplicated conversion tracking the client can trust for ad spend decisions.",
    architecture: "WordPress + PHP (OOP) + Custom Plugin + Google Maps API + GTM/GA4",
    tags: [
      "WordPress",
      "PHP (OOP)",
      "Google Maps API",
      "Distance Matrix",
      "Stripe Webhooks",
      "GTM",
      "GA4",
      "Google Ads",
      "Conversion Dedup",
    ],
    url: "https://www.onroutecouriers.com",
    github: "",
    screenshot: "/screenshots/onroute.png",
    ctaText: "Discuss a similar project",
    metrics: {
      pricing: "Dynamic formula",
      tracking: "GTM/GA4 + dedup",
      payments: "Stripe webhooks",
    },
    workflowSteps: [
      { step: "1. Route Calculation", detail: "Google Distance Matrix API calculates precise road distance & drive time" },
      { step: "2. Dynamic Pricing Engine", detail: "Formula applied: Distance x Service Tier x Vehicle Class + Surcharges" },
      { step: "3. Stripe Webhooks", detail: "Asynchronous webhook verification for instant booking confirmation" },
      { step: "4. Conversion Dedup", detail: "Transaction-ID bound GTM/GA4/Google Ads tracking preventing duplicate ad metrics" },
    ],
  },
  {
    id: "california-landlords-union",
    title: "California Landlords Union - Member Dashboard & Union AI Assistant",
    location: "US Client",
    category: "WordPress",
    filterCategory: "Membership & LMS",
    highlightBadge: "Member Dashboard & AI Assistant",
    clientName: "Mr. Parvez Manzuri",
    description:
      "SaaS-style member portal with custom Union AI Assistant, 3-tier membership, and automated training modules.",
    problem:
      "Took over a partially-built membership platform under a live launch deadline with broken registration and the need for an integrated Union AI Assistant for landlord legal assistance.",
    solution:
      "Engineered the complete SaaS member dashboard (Astra child theme) with tabbed navigation across 6 modules: Training Academy, Legal Forms, Protection Center, Intake Support, Monthly Briefing, and Billing. Integrated the custom Union AI Assistant popup workflow with property-specific habitability assistance, 3-tier Paid Memberships Pro, and Tutor LMS.",
    impact:
      "Shipped on a live launch deadline with a fully functional SaaS member portal and Union AI Assistant.",
    architecture: "WordPress + Custom Dashboard + Union AI Assistant + PMPro + Tutor LMS",
    tags: [
      "WordPress",
      "Union AI Assistant",
      "Member Dashboard",
      "PHP (OOP)",
      "Paid Memberships Pro",
      "Tutor LMS",
      "Fluent Forms",
      "Stripe",
    ],
    url: "https://californialandlordsunion.com",
    github: "",
    screenshot: "/screenshots/california-ai.png",
    ctaText: "Discuss a similar project",
    metrics: {
      membership: "3-tier PMPro",
      aiIntegration: "Union AI Assistant",
      dashboard: "6 Custom Modules",
    },
    workflowSteps: [
      { step: "1. SaaS Member Dashboard", detail: "Engineered 6-module member portal with profile completion tracking" },
      { step: "2. Union AI Assistant", detail: "Integrated conversational legal assistance popup with property data binding" },
      { step: "3. Tutor LMS Hook", detail: "Tier-based course access restrictions synced with PMPro member levels" },
      { step: "4. Auto Member IDs", detail: "Unique incremental alphanumeric member ID generated on user registration" },
    ],
  },
  {
    id: "labeng",
    title: "LaBeng - Local Business Discovery & Booking Platform",
    location: "UK Client",
    category: "Booking & Custom Theme",
    filterCategory: "Booking & Custom Theme",
    highlightBadge: "Async Email Pipeline Bugfix",
    clientName: "UK Client",
    description:
      "Fully custom bespoke WordPress theme with dual authentication and appointment booking.",
    problem:
      "Needed a custom-built discovery and booking platform with separate customer/business flows and fast, reliable registration without timeouts.",
    solution:
      "Built a fully custom WordPress theme from scratch (no page builders) with dual customer/business authentication systems, a responsive appointment booking system with dynamic availability, and a mobile-first booking calendar. Diagnosed and eliminated a registration timeout bug by redesigning synchronous email processing into an asynchronous WP-Cron queue workflow.",
    impact:
      "Eliminated registration timeouts and delivered a reliable, mobile-first booking experience.",
    architecture: "WordPress Bespoke Theme + PHP + MySQL + JavaScript (jQuery) + AJAX",
    tags: [
      "WordPress",
      "Custom Theme",
      "PHP",
      "MySQL",
      "JavaScript (jQuery)",
      "AJAX",
      "Google Workspace SMTP",
      "LiteSpeed Cache",
    ],
    url: "https://labeng.co.uk",
    github: "",
    screenshot: "/screenshots/labeng.png",
    ctaText: "Discuss a similar project",
    metrics: {
      theme: "100% Bespoke",
      auth: "Dual customer/business",
      bugfix: "Async email queue",
    },
    workflowSteps: [
      { step: "1. Bespoke Theme", detail: "Clean bespoke theme coded from scratch without page builder bloat" },
      { step: "2. Dual Role Auth", detail: "Separate registration & portal pipelines for clients vs businesses" },
      { step: "3. Async Mail Queue", detail: "Decoupled SMTP email delivery from HTTP response to prevent timeouts" },
      { step: "4. Dynamic Booking", detail: "Real-time calendar slot calculation based on provider working hours" },
    ],
  },
  {
    id: "welding-leads",
    title: "Welding Leads - SaaS Lead CRM System",
    location: "US Client",
    category: "WordPress",
    filterCategory: "Lead CRM & SaaS",
    highlightBadge: "Indexed SQL Lookup Fix",
    clientName: "Kody",
    description:
      "Subscription-based lead distribution CRM built from scratch on WordPress.",
    problem:
      "Manage the full member lifecycle (apply, approve, subscribe, allocate leads, notify, renew) on a live system with paying Stripe subscribers and thousands of lead records. Every change touched billing or lead delivery, so accuracy and safe deployment mattered more than speed.",
    solution:
      "Built a custom membership system, a Stripe subscription engine with webhook handling and invoice-level idempotency, and a multi-factor lead allocation engine that prevents double-allocation under race conditions. Maintained separate dev, staging and production environments, deployed via staged zip builds with file hash verification, and ran a 53-point security test suite covering staff and member roles.",
    impact:
      "Ran on live production for months with zero lost subscriber records, zero billing double-charges, and zero unauthorized data exposure across staff, member and applicant roles.",
    architecture: "WordPress + PHP (OOP) + MySQL Indexing + Custom Plugin Architecture",
    tags: [
      "WordPress",
      "PHP (OOP)",
      "MySQL Indexing",
      "Custom CRM",
      "JavaScript",
      "Custom Plugin",
    ],
    url: "https://www.weldingleads.com",
    github: "",
    screenshot: "/screenshots/weldingleads.png",
    ctaText: "Discuss a similar project",
    metrics: {
      leadsRecovered: "98",
      securityTests: "53/53",
      bulkEmails: "167",
      filesVerified: "83",
    },
    workflowSteps: [
      { step: "1. Lead Ingestion", detail: "Lead submitted via form or CSV import -> validated -> inserted into custom lead table with pending status" },
      { step: "2. Idempotency & Lock", detail: "Allocation engine acquires exclusive lock on the lead row -> checks member quota and tier balance" },
      { step: "3. Multi-Factor Allocation", detail: "Lead assigned to member based on state preference, remaining allocation and tier priority -> marked delivered" },
      { step: "4. Notification & Delivery", detail: "Async notification sent to member dashboard -> email dispatched with lead details -> audit log entry recorded" },
    ],
  },
  {
    id: "financial-application-automation",
    title: "White Horse Financing - Business Funding & Application System",
    location: "US Client",
    category: "WordPress",
    filterCategory: "Workflow Automation",
    highlightBadge: "Bank Verification & Routing",
    clientName: "White Horse Capital LLC",
    description:
      "Multi-step commercial funding application platform with conditional applicant branching, bank routing validation, and automated underwriting pipelines.",
    problem:
      "Manual financial application intake created processing bottlenecks, bank routing data errors, and lack of applicant status visibility for small-to-medium business funding.",
    solution:
      "Engineered an automated multi-step business funding application platform with conditional branching, secure bank routing number validation, document upload pipelines, and administrative review workflows.",
    impact:
      "Streamlined applicant intake, improved routing data accuracy, and automated notifications across the funding evaluation lifecycle.",
    architecture: "WordPress + PHP + Fluent Forms Pro + REST API + Bank Verification",
    tags: [
      "WordPress",
      "PHP",
      "Fluent Forms Pro",
      "REST API",
      "Bank Routing API",
      "Workflow Automation",
      "Application Pipeline",
    ],
    url: "https://www.whitehorsefinancing.com",
    github: "",
    screenshot: "/screenshots/whitehorse-financing.png",
    ctaText: "Discuss a similar project",
    metrics: {
      fundingTime: "4-6 hrs",
      approvalRate: "80%",
      creditScore: "500+ Min",
      amounts: "Custom",
    },
    workflowSteps: [
      { step: "1. Multi-Step Form", detail: "Dynamic conditional fields adapting based on applicant business structure and capital requirements" },
      { step: "2. Routing Verification", detail: "Instant bank routing number validation via financial REST API before submission" },
      { step: "3. Document Uploads", detail: "Secure encrypted financial document and bank statement upload pipeline" },
      { step: "4. Approval Tracking", detail: "Multi-stage administrative review status with automated status notifications" },
    ],
  },
  {
    id: "emuwing-warehouse-pick-sheet",
    title: "Emuwing - Custom WooCommerce Warehouse Pick Sheet Automation System",
    location: "Australian Client",
    category: "WordPress",
    filterCategory: "WooCommerce",
    highlightBadge: "BOM & PDF Automation",
    clientName: "Emuwing",
    description:
      "Custom WooCommerce warehouse fulfillment plugin that automates pick sheet generation, BOM expansion, and email notifications based on order status.",
    problem:
      "Manual warehouse fulfillment workflows caused processing delays, component mapping errors for complex product Bill of Materials (BOM), and duplicate email notifications during concurrent status changes.",
    solution:
      "Developed a custom WooCommerce warehouse fulfillment plugin that expands variation-specific BOMs into structured, warehouse-ready multi-page PDF pick sheets. Implemented execution guards, job deduplication via Action Scheduler, database locking, and email-sent checks to eliminate race conditions and repeated processing.",
    impact:
      "Automated warehouse pick sheet delivery for eligible paid orders, eliminated manual BOM lookup errors, and ensured zero duplicate PDF generations or emails across production fulfillment.",
    architecture: "WordPress + WooCommerce + PHP (OOP) + Action Scheduler + PDF Generation Engine",
    tags: [
      "WordPress",
      "WooCommerce",
      "PHP (OOP)",
      "Custom Plugin",
      "PDF Generation",
      "Action Scheduler",
      "BOM Management",
      "Email Automation",
    ],
    url: "https://www.emuwing.com.au/",
    github: "",
    screenshot: "/screenshots/emuwing.png",
    ctaText: "Discuss a similar project",
    metrics: {
      bom: "Multi-Kit BOM",
      pdf: "Automated Multi-Page",
      scheduler: "Action Scheduler Lock",
      dispatch: "Zero Duplicate Sends",
    },
    workflowSteps: [
      { step: "1. Order Status Qualification", detail: "Listens for eligible paid orders while strictly excluding cancelled or pending orders" },
      { step: "2. BOM Expansion Engine", detail: "Traverses variation-specific Bill of Materials, mapping component SKUs and multi-kit packaging" },
      { step: "3. Structured PDF Generation", detail: "Generates warehouse-ready pick sheets preserving approved layout with individual pages per kit" },
      { step: "4. Deduplication & Dispatch", detail: "Database locks and sent-status flags prevent duplicate runs before automated warehouse dispatch" },
    ],
  },
  {
    id: "xo-sweden-boat-configurator",
    title: "XO Sweden Boat Configurator - Interactive Marine Configuration Engine",
    location: "Swedish Client",
    category: "WordPress",
    filterCategory: "Custom Systems",
    highlightBadge: "Interactive Configurator",
    clientName: "XO Sweden",
    description:
      "Step-by-step interactive boat configurator for XO Sweden, enabling prospective marine buyers to configure models, select equipment options, and submit dealer inquiries.",
    problem:
      "Prospective marine buyers needed an intuitive way to explore boat models and available equipment options before contacting the Swedish dealer. The reference site rendered visual assets dynamically through JavaScript, limiting direct access to raw image files. Furthermore, public product pricing had to remain concealed per dealer requirements, and equipment options required manageable configuration within WordPress.",
    solution:
      "Engineered a dedicated XO Configurator WordPress plugin with an interactive multi-step selection interface, dynamic live 'YOUR CHOICES' summary tray, and dealer inquiry submission pipeline. Built full WP-Admin management for boat models, option categories (engines, comfort, exterior, interior, safety, navigation), standard equipment lists, and submission tracking across desktop, tablet, and mobile.",
    impact:
      "Delivered a structured, intuitive configuration journey that organizes complex marine equipment options, hides public pricing per dealer policy, and routes qualified build specifications directly to sales staff without relying on external SaaS tools.",
    architecture: "WordPress + Custom Plugin + PHP (OOP) + JavaScript + AJAX + WP-Admin Management",
    tags: [
      "WordPress",
      "Custom Plugin",
      "JavaScript",
      "PHP (OOP)",
      "Interactive Configurator",
      "AJAX",
      "WP-Admin",
      "Responsive UI",
    ],
    url: "https://xosweden.se/",
    configuratorUrl: "https://xosweden.se/configurator/",
    github: "",
    screenshot: "/screenshots/xo-sweden.png",
    ctaText: "Discuss a similar project",
    metrics: {
      modelFlow: "Step-by-Step Models",
      categories: "Engines to Avionics",
      pricing: "Hidden Dealer Pricing",
      adminControl: "Full WP-Admin",
    },
    workflowSteps: [
      { step: "1. Interactive Model Selection", detail: "Prospective buyers explore available XO boat models and select their base hull" },
      { step: "2. Step-by-Step Configuration", detail: "Guided selection across engines, comfort, exterior, interior, safety, and navigation categories" },
      { step: "3. Live 'YOUR CHOICES' Summary", detail: "Dynamic tray tracks and updates active configuration selections in real time without page reload" },
      { step: "4. Dealer Inquiry Submissions", detail: "Direct submission of buyer preferences and specifications to the dealer inbox without public price disclosure" },
    ],
  },
];
