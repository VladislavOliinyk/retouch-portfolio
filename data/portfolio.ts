export type WorkCategory = "Beauty" | "Fashion" | "Commercial" | "Product";

export type PortfolioItem = {
  title: string;
  category: WorkCategory;
  image: string;
  width: number;
  height: number;
  year: string;
};

export const categories: WorkCategory[] = ["Beauty", "Fashion", "Commercial", "Product"];

export const portfolioItems: PortfolioItem[] = [
  { title: "Nocturne Skin Study", category: "Beauty", image: "/images/work-06.jpg", width: 900, height: 1200, year: "2026" },
  { title: "Atelier Movement", category: "Fashion", image: "/images/work-01.jpg", width: 900, height: 1350, year: "2026" },
  { title: "Velvet Campaign", category: "Commercial", image: "/images/work-02.jpg", width: 900, height: 1125, year: "2025" },
  { title: "Glass Fragrance", category: "Product", image: "/images/work-07.jpg", width: 900, height: 1125, year: "2025" },
  { title: "Editorial Bloom", category: "Beauty", image: "/images/work-04.jpg", width: 900, height: 1200, year: "2025" },
  { title: "Resort Texture", category: "Fashion", image: "/images/work-03.jpg", width: 900, height: 1300, year: "2024" },
  { title: "Studio Cut", category: "Fashion", image: "/images/work-05.jpg", width: 900, height: 1250, year: "2024" },
  { title: "Monochrome Wardrobe", category: "Commercial", image: "/images/work-08.jpg", width: 900, height: 1150, year: "2024" },
];
