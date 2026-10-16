// src/data/testimonials.ts
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number; // out of 5
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    location: 'Bangalore, India',
    rating: 5,
    text: 'Living in a Sri Parinithee project has exceeded our expectations – premium quality and thoughtful design.',
    image: '../assets/testimonial1.png',
  },
  {
    id: 2,
    name: 'Anita Sharma',
    location: 'Chennai, India',
    rating: 5,
    text: 'The community feels safe and vibrant, and the construction quality is top‑notch.',
    image: '../assets/testimonial2.png',
  },
];
