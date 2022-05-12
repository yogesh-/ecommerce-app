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
    description:
      "The radiance lives on in the Nike Air Force, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.",
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
    description:
      "One of the best shoes to come out from Adidas till date, It is designed to give you the maximum comfort possible without compromising on the looks and quality",
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
    description:
      " Step into 360° comfortnew PerfectFit Stretch System that hugs your foot for instant flexibility and all-day comfort. ",
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
    description:
      "This 70’s style, shoe is crafted with soft suedes in a variety of vintage-inspired colors, so they’ll match every funky tracksuit or casual outfit you pair it with.",
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
    description:
      "These are the light weight shoes deigned to provide style with comfort, breathable upper keeps your feet dry. Built with keeping the Indian tropical climate in mind and varying seasons. It is built to last and work in all weather conditions.",
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
    description:
      "These are the perfect shoes for playing tennis. We have been innovating on the same design since the last 40 years and it is the shoe of the choice ",
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
    description:
      "The radiance lives on in the Nike Quest, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.",
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
    description:
      "The most lean and mean shoes for the workout in the town. It has the best blend of style, comfort and ruggedness for lifting those heavy weights in the Gym.",
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
    description:
      "One of the best shoes to come out from Adidas till date, It is designed to give you the maximum comfort possible without compromising on the looks and quality",
  },
];
