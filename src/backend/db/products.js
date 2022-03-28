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
    price: "4900",
    original_price: "9999",
    category: "Running",
    image: "/assets/nike.png",
  },
  {
    _id: uuid(),
    brand: "Adidas",
    title: "Adidas Red",
    price: "3200",
    original_price: "5500",
    category: "Workout",
    image: "/assets/adidas_red.jpg",
  },
  {
    _id: uuid(),
    brand: "Hush",
    title: "Hush Hard",
    price: "1600",
    original_price: "3200",
    category: "Running",
    image: "/assets/hushpuppies.jpg",
  },

  {
    _id: uuid(),
    brand: "Khadims",
    title: "Brown",
    price: "490",
    original_price: "999",
    category: "Running",
    image: "/assets/khadims.jpg",
  },

  {
    _id: uuid(),
    brand: "Sparx",
    title: "SM-500",
    price: "1999",
    original_price: "2999",
    category: "Tennis",
    image: "/assets/sparks.jpeg",
  },

  {
    _id: uuid(),
    brand: "Nike",
    title: "Nike Tennis Star",
    price: "4999",
    original_price: "7999",
    category: "Tennis",
    image: "/assets/nike-tennis.webp",
  },

  {
    _id: uuid(),
    brand: "Nike",
    title: "Nike Quest",
    price: "2999",
    original_price: "4999",
    category: "Running",
    image: "/assets/nike quest.jpg",
  },

  {
    _id: uuid(),
    brand: "HRX",
    title: "Trainer",
    price: "1999",
    original_price: "2999",
    category: "Workout",
    image: "/assets/HRX Gym.webp",
  },

  {
    _id: uuid(),
    brand: "Adidas",
    title: "Flyton",
    price: "1999",
    original_price: "2999",
    category: "Workout",
    image: "/assets/Adida.webp",
  },
];
