import { Product } from "./types/types";

const products: Product[] = [
  {
    id: 1,
    title: "Smartphone Galaxy S21",
    description:
      "Advanced smartphone with high-resolution display, powerful processor, and dual-camera system.",
    price: 799.99,
    image: "product-1.jpeg",
  },
  {
    id: 2,
    title: "Wireless Noise-Canceling Headphones",
    description:
      "Immerse yourself in music with these premium headphones featuring noise cancellation technology.",
    price: 249.99,
    image: "product-2.jpeg",
  },
  {
    id: 3,
    title: "Laptop MacBook Air",
    description:
      "Ultra-thin and lightweight laptop with Retina display, Apple M1 chip, and all-day battery life.",
    price: 999.99,
    image: "product-3.jpeg",
  },
  {
    id: 4,
    title: "Smartphone Galaxy S21",
    description:
      "Advanced smartphone with high-resolution display, powerful processor, and dual-camera system.",
    price: 799.99,
    image: "product-4.jpeg",
  },
  {
    id: 5,
    title: "Smart TV 4K Ultra HD",
    description:
      "Experience stunning visuals with this 4K UHD Smart TV, equipped with streaming apps and voice control.",
    price: 699.99,
    image: "product-5.jpeg",
  },
  {
    id: 6,
    title: "Fitness Tracker Watch",
    description:
      "Stay active and monitor your health with this fitness tracker watch that tracks steps, heart rate, and more.",
    price: 89.99,
    image: "product-6.jpeg",
  },
];

const flatListData = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
  },
];

export { products, flatListData };
