export interface ReviewItem {
  id: string;
  quote: string;
  name: string;
  country: string;
  platform: "Upwork" | "Fiverr (agency)";
  project?: string;
  rating: number;
  date?: string;
}

export const reviews: ReviewItem[] = [
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

