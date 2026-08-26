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
  github: string;
  screenshot?: string;
  metrics: Record<string, string>;
  workflowSteps: { step: string; detail: string }[];
}

export const projectsData: ProjectItem[] = [
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
      "Transformed WooCommerce into a full laboratory platform with 20+ custom modules via hooks and filters only ? keeping WooCommerce core 100% upgrade-safe. Built dual-mode wholesale/single-kit purchasing with shared inventory, a production Store Credit ledger with admin backend and checkout redemption, variation-based COA document management, and a configurable multi-carrier shipping engine.",
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
    metrics: {
      modules: "20+ custom",
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
    category: "WordPress",
    filterCategory: "Booking & Dynamic Pricing",
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
      "Needed a subscription-based lead distribution system with role-based dashboards, fair weighted lead assignment, and fast query execution under high lead volume.",
    solution:
      "Designed and built a subscription-based lead distribution CRM from scratch with role-based user/admin dashboards, tiered pricing, and weighted lead distribution logic. Resolved a production performance bottleneck caused by inefficient SQL LIKE queries by engineering an indexed lookup table.",
    impact:
      "Fixed a production performance bottleneck (10x faster queries) and shipped a reliable lead distribution system.",
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
    metrics: {
      dashboards: "Role-based",
      pricing: "Tiered subscription",
      perf: "Indexed SQL lookup fix",
    },
    workflowSteps: [
      { step: "1. Lead Intake API", detail: "Sanitized webhook intake parsing high-volume lead parameters" },
      { step: "2. Weighted Distribution", detail: "Algorithmic assignment engine balancing lead count by contractor tier" },
      { step: "3. Indexed Lookup Fix", detail: "Replaced slow SQL LIKE queries with indexed hash map table (10x faster)" },
      { step: "4. Contractor Portal", detail: "Real-time lead inbox with instant SMS/Email notification delivery" },
    ],
  },
  {
    id: "financial-application-automation",
    title: "Financial Application Automation System",
    location: "US Client",
    category: "WordPress",
    filterCategory: "Workflow Automation",
    highlightBadge: "-70% Processing Time",
    clientName: "US Financial Client",
    description:
      "Multi-step financial onboarding platform with automated bank routing and approval tracking.",
    problem:
      "Manual financial application workflows caused slow turnaround times, routing errors, and lack of applicant status transparency.",
    solution:
      "Engineered an automated multi-step application system with conditional branching, secure bank routing verification, automated email notifications, and administrative approval pipelines.",
    impact:
      "Streamlined applicant intake, reduced manual processing time by over 70%, and eliminated routing errors.",
    architecture: "WordPress + PHP + Fluent Forms Pro + REST API + Bank Verification",
    tags: [
      "WordPress",
      "PHP",
      "Fluent Forms Pro",
      "REST API",
      "Bank Routing API",
      "Workflow Automation",
    ],
    url: "",
    github: "",
    metrics: {
      workflow: "Automated routing",
      steps: "Multi-stage onboarding",
      efficiency: "-70% manual time",
    },
    workflowSteps: [
      { step: "1. Multi-Step Form", detail: "Dynamic conditional fields adapting based on applicant business structure" },
      { step: "2. Routing Verification", detail: "Instant bank routing number validation via financial REST API" },
      { step: "3. Document Uploads", detail: "Secure encrypted PDF and tax document upload pipeline" },
      { step: "4. Approval Tracking", detail: "Multi-stage admin workflow status with automated client email triggers" },
    ],
  },
];
