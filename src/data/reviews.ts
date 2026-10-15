export interface ReviewItem {
  id: string;
  quote: string;
  name: string;
  country: string;
  platform: "Upwork" | "Fiverr (agency)" | "Direct Client";
  project?: string;
  rating: number;
  date?: string;
}

export const reviews: ReviewItem[] = [
  // Direct / Agency Platform Clients
  {
    id: "kody-welding-leads",
    quote:
      "Resolved our database query performance bottleneck by engineering an indexed SQL lookup table and built our subscription CRM logic from scratch. Deep WordPress expertise and fast turnaround.",
    name: "Kody",
    country: "United States",
    platform: "Direct Client",
    project: "Welding Leads",
    rating: 5.0,
    date: "2026",
  },
  {
    id: "parvez-california-landlords",
    quote:
      "Saidur engineered our complete 6-module SaaS member dashboard and integrated the custom Union AI Assistant for landlord legal assistance. Shipped with precision under a strict live launch deadline.",
    name: "Mr. Parvez Manzuri",
    country: "United States",
    platform: "Direct Client",
    project: "California Landlords Union",
    rating: 5.0,
    date: "2026",
  },
  {
    id: "nick-vault-labs",
    quote:
      "Transformed WooCommerce into a full laboratory research commerce platform. Built 20+ custom modules via hooks and filters only - keeping core 100% upgrade-safe. Dual-mode wholesale inventory and store credit checkout work seamlessly.",
    name: "Nick",
    country: "United States",
    platform: "Direct Client",
    project: "Vault Labs Research",
    rating: 5.0,
    date: "2026",
  },
  {
    id: "shahbaz-onroute",
    quote:
      "Saidur built our multi-step courier quote calculator and Stripe checkout from scratch. The dynamic pricing formula is fast, and the GTM conversion tracking with deduplication solved our ad spend reporting completely.",
    name: "Shahbaz",
    country: "United Kingdom",
    platform: "Direct Client",
    project: "OnRoute Couriers",
    rating: 5.0,
    date: "2026",
  },

  // Upwork Verified Contracts
  {
    id: "upwork-michael-b",
    quote:
      "I was being given the run around trying to migrate a WordPress website. MD Saidur managed to do this and get the website functioning in a few hours. Reliable, committed to quality, and a clear communicator.",
    name: "Michael B.",
    country: "United States",
    platform: "Upwork",
    project: "WordPress Backup & Migration",
    rating: 5.0,
    date: "August 2026",
  },
  {
    id: "upwork-jav-c",
    quote:
      "Md Saidur delivered an excellent service from start to finish. My website had been affected by malware and he handled the entire cleanup with real expertise. Accountable for outcomes and solution oriented.",
    name: "Jav C.",
    country: "United Kingdom",
    platform: "Upwork",
    project: "WordPress Security & Malware Removal",
    rating: 5.0,
    date: "November 2025",
  },
  {
    id: "upwork-long-term",
    quote:
      "Great guy, Used MD now for a long time and he is always quick to respond and happy to help in every way. Can't recommend him enough.",
    name: "Long-Term Client",
    country: "United Kingdom",
    platform: "Upwork",
    project: "Website Updates & Maintenance",
    rating: 5.0,
    date: "December 2018",
  },
  {
    id: "upwork-iurii-p",
    quote:
      "One of a kind. Very persistent and driven to result. I'm more than satisfied with his work. Thank you!",
    name: "Iurii P.",
    country: "United States",
    platform: "Upwork",
    project: "WordPress Bug Fixes",
    rating: 5.0,
    date: "September 2018",
  },
  {
    id: "upwork-nick-q",
    quote:
      "Great job done by MD would highly recommend and will be using him again when my website needs updating. Thank you.",
    name: "Nick Q.",
    country: "United Kingdom",
    platform: "Upwork",
    project: "Simple 3-Page Website Build",
    rating: 5.0,
    date: "April 2018",
  },

  // Fiverr (Agency Projects via FB International BD)
  {
    id: "tamas-hungary-1",
    quote:
      "Very professional and highly skilled developer. The work was completed quickly and accurately, communication was excellent, and he was always responsive. He understood the requirements perfectly and delivered exactly what I needed. I'm very satisfied with the result and would definitely work with him again. Highly recommended!",
    name: "Tamas (tamscservenk)",
    country: "Hungary",
    platform: "Fiverr (agency)",
    project: "$7,000 milestone project",
    rating: 5.0,
  },
  {
    id: "tamas-hungary-2",
    quote:
      "Highly professional, responsive, and committed throughout the project. He worked hard to solve complex technical issues and delivered a strong final result. Highly recommended.",
    name: "Tamas (tamscservenk)",
    country: "Hungary",
    platform: "Fiverr (agency)",
    project: "Phase 1 delivery",
    rating: 5.0,
  },
];
