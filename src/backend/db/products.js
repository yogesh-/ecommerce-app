import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    brand: "Nike",
    title: "Nike Airforce",
    price: 4900,
    original_price: 9999,
    discount: 5099,
    category: "running",
    image: "/assets/nike.png",
    rating: 3.3,
  },
  {
    _id: uuid(),
    brand: "Adidas",
    title: "Adidas Red",
    price: 3200,
    original_price: 5500,
    discount: 2300,
    category: "workout",
    image: "/assets/adidas_red.jpg",
    rating: 4,
  },
  {
    _id: uuid(),
    brand: "Hush",
    title: "Hush Hard",
    price: 1600,
    original_price: 3200,
    discount: 1600,
    category: "running",
    image: "/assets/hushpuppies.jpg",
    rating: 5,
  },

  {
    _id: uuid(),
    brand: "Khadims",
    title: "Brown",
    price: 1190,
    original_price: 2999,
    discount: 1809,
    category: "running",
    image: "/assets/khadims.jpg",
    rating: 1,
  },

  {
    _id: uuid(),
    brand: "Sparx",
    title: "SM-500",
    price: 1999,
    original_price: 2999,
    discount: 1000,
    category: "tennis",
    image: "/assets/sparks.jpeg",
    rating: 2,
  },

  {
    _id: uuid(),
    brand: "Nike",
    title: "Nike Tennis Star",
    price: 4999,
    original_price: 7999,
    discount: 3000,
    category: "tennis",
    image: "/assets/nike-tennis.webp",
    rating: 3,
  },

  {
    _id: uuid(),
    brand: "Nike",
    title: "Nike Quest",
    price: 2999,
    original_price: 4999,
    discount: 2000,
    category: "running",
    image: "/assets/nike quest.jpg",
    rating: 4,
  },

  {
    _id: uuid(),
    brand: "HRX",
    title: "Trainer",
    price: 1999,
    original_price: 2999,
    discount: 1000,
    category: "workout",
    image: "/assets/HRX Gym.webp",
    rating: 3.4,
  },

  {
    _id: uuid(),
    brand: "Adidas",
    title: "Flyton",
    price: 1999,
    original_price: 2999,
    discount: 1000,
    category: "workout",
    image: "/assets/Adida.webp",
    rating: 4,
  },
];
