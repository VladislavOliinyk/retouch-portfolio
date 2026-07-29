export type Project = {
  slug: string;

  title: string;

  category:
    | "Beauty"
    | "Fashion"
    | "Editorial"
    | "Commercial"
    | "Portrait"
    | "Jewelry"
    | "Product"
    | "E-commerce";

  client?: string;

  description: string;

  ratio: "portrait" | "landscape" | "square";

  imageCount: number;

};

