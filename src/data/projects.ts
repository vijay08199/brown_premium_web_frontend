// src/data/projects.ts
export interface Project {
  id: number;
  title: string;
  location: string;
  price: string;
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sunset Residences",
    location: "Bangalore, India",
    price: "₹ 2.5 Cr",
    tags: ["Luxury", "Gated Community"],
    image: "../assets/project1.png",
  },
  {
    id: 2,
    title: "Emerald Heights",
    location: "Chennai, India",
    price: "₹ 3.1 Cr",
    tags: ["Eco-friendly", "Modern"],
    image: "../assets/project2.png",
  },
  {
    id: 3,
    title: "Azure Villa",
    location: "Hyderabad, India",
    price: "₹ 4.0 Cr",
    tags: ["Villa", "Pool"],
    image: "../assets/project3.png",
  },
];
