import imgAirJordanDmp1Retro from "../../imports/TrangDanhMụcSảnPhẩm/37ba129bdf6a4d73f4390a901eaf9994cd1a6bcd.png";
import imgSecondImageOfAirJordanDmp1Retro from "../../imports/TrangDanhMụcSảnPhẩm/07efb7f17b073299b1a70210f5e78b1e05e14db4.png";
import imgAirJordanDmp1Retro1 from "../../imports/TrangDanhMụcSảnPhẩm/b957fac1f8d50131a15ad42f8f2b097046045ebd.png";
import imgSecondImageOfAirJordanDmp1Retro1 from "../../imports/TrangDanhMụcSảnPhẩm/4874dfb16d99bf2e9456ba848e707ad414d011bd.png";
import imgAirJordanDmp1Retro2 from "../../imports/TrangDanhMụcSảnPhẩm/4b1c34b74d60936ad774c03b3c498bd652a41fe6.png";
import imgSecondImageOfAirJordanDmp1Retro2 from "../../imports/TrangDanhMụcSảnPhẩm/a7b936b34220a460a92070a712a7387af5a2c1d0.png";
import imgAirJordanDmp1Retro3 from "../../imports/TrangDanhMụcSảnPhẩm/c4578f516ba92e38e76844b1b52fe8717c256aec.png";
import imgSecondImageOfAirJordanDmp1Retro3 from "../../imports/TrangDanhMụcSảnPhẩm/73fc0d2451347ee9bb5f678eff480891a836731a.png";
import imgAirJordanDmp1Retro4 from "../../imports/TrangDanhMụcSảnPhẩm/fa25379e812d9dddfb49229861453670e8e99724.png";
import imgSecondImageOfAirJordanDmp1Retro4 from "../../imports/TrangDanhMụcSảnPhẩm/50d9d6e7f76ac128256ec9d7cda69e42629aa79d.png";
import imgAirJordanDmp1Retro5 from "../../imports/TrangDanhMụcSảnPhẩm/c48fa71271af6fd83d4ce1b3f7d28e23cbb78b8e.png";
import imgSecondImageOfAirJordanDmp1Retro5 from "../../imports/TrangDanhMụcSảnPhẩm/e0f6ef6b610a49dbbd15621a5d3c3440b6586ff2.png";
import imgAirJordanDmp1Retro6 from "../../imports/TrangDanhMụcSảnPhẩm/b44c358431d19a15f43a7c99507636e28e745d24.png";
import imgSecondImageOfAirJordanDmp1Retro6 from "../../imports/TrangDanhMụcSảnPhẩm/a0f145316fb65e152cf20165c501a031d15c5303.png";
import imgAirJordanDmp1Retro7 from "../../imports/TrangDanhMụcSảnPhẩm/a5607abb043b2e1a7e8e6152b19d475986f7df7e.png";
import imgSecondImageOfAirJordanDmp1Retro7 from "../../imports/TrangDanhMụcSảnPhẩm/633ef9957ca848ab60ebe55c898df234e1962eda.png";
import imgAirJordanDmp1Retro8 from "../../imports/TrangDanhMụcSảnPhẩm/383ba58bae4cf07f439f6674987d9517105efab0.png";
import imgSecondImageOfAirJordanDmp1Retro8 from "../../imports/TrangDanhMụcSảnPhẩm/8554bb6a56aa668951e6c910f658645f86a73064.png";

export type Product = {
  id: string;
  name: string;
  price: number | null;
  oldPrice: number | null;
  brand: string;
  category: string;
  tags: string[];
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  description: string[];
  details: string[];
  image: string;
  secondaryImage?: string;
  gallery: string[];
};

export const products: Product[] = [
  {
    id: "air-jordan-dmp-1-retro",
    name: "Air Jordan DMP 1 Retro",
    price: 84,
    oldPrice: 99,
    brand: "Nike",
    category: "Running Shoes",
    tags: ["nike", "sneaker", "running"],
    rating: 4,
    reviews: 12,
    sizes: ["38", "39", "40", "41", "42", "43"],
    colors: ["black", "green"],
    description: [
      "Lightweight cushioning for daily training runs.",
      "Breathable upper keeps feet cool while you move.",
      "Responsive foam adds energy return on every step.",
    ],
    details: [
      "MACHINE WASH AT MAX.TEMP. 30 C - NORMAL PROCESS",
      "DO NOT BLEACH",
      "DO NOT TUMBLE DRY",
      "IRON AT MAX. TEMP. OF 110 C WITHOUT STEAM",
      "DO NOT DRY CLEAN",
    ],
    image: imgAirJordanDmp1Retro,
    secondaryImage: imgSecondImageOfAirJordanDmp1Retro,
    gallery: [imgAirJordanDmp1Retro, imgSecondImageOfAirJordanDmp1Retro, imgAirJordanDmp1Retro4],
  },
  {
    id: "calvin-klein-jeans",
    name: "Calvin Klein Jeans",
    price: 90,
    oldPrice: null,
    brand: "Calvin Klein",
    category: "Lifestyle",
    tags: ["casual", "lifestyle"],
    rating: 0,
    reviews: 0,
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["white", "gray"],
    description: [
      "Clean profile made for everyday outfits.",
      "Soft inner lining keeps comfort all day long.",
      "Minimal design works for any season.",
    ],
    details: [
      "Wipe with a damp cloth",
      "Do not machine wash",
      "Air dry only",
    ],
    image: imgAirJordanDmp1Retro1,
    secondaryImage: imgSecondImageOfAirJordanDmp1Retro1,
    gallery: [imgAirJordanDmp1Retro1, imgSecondImageOfAirJordanDmp1Retro1, imgAirJordanDmp1Retro5],
  },
  {
    id: "canvas-mens-sneakers",
    name: "Canvas Men's Sneakers",
    price: 86,
    oldPrice: null,
    brand: "Converse",
    category: "Skate",
    tags: ["canvas", "skate"],
    rating: 3,
    reviews: 4,
    sizes: ["37", "38", "39", "40", "41", "42"],
    colors: ["black", "white"],
    description: [
      "Durable canvas upper with reinforced stitching.",
      "Grippy outsole for board feel and control.",
      "Classic silhouette with modern comfort.",
    ],
    details: [
      "Spot clean only",
      "Do not bleach",
      "Keep away from heat sources",
    ],
    image: imgAirJordanDmp1Retro2,
    secondaryImage: imgSecondImageOfAirJordanDmp1Retro2,
    gallery: [imgAirJordanDmp1Retro2, imgSecondImageOfAirJordanDmp1Retro2, imgAirJordanDmp1Retro6],
  },
  {
    id: "converse-run-star-hike",
    name: "Converse Run Star Hike",
    price: 88,
    oldPrice: null,
    brand: "Converse",
    category: "Lifestyle",
    tags: ["platform", "lifestyle"],
    rating: 4,
    reviews: 1,
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["white", "black"],
    description: [
      "Chunky platform adds bold style.",
      "OrthoLite insole for everyday cushioning.",
      "Lightweight traction for city moves.",
    ],
    details: [
      "Remove insole before cleaning",
      "Use a soft brush",
    ],
    image: imgAirJordanDmp1Retro3,
    secondaryImage: imgSecondImageOfAirJordanDmp1Retro3,
    gallery: [imgAirJordanDmp1Retro3, imgSecondImageOfAirJordanDmp1Retro3, imgAirJordanDmp1Retro7],
  },
  {
    id: "converse-run-star-motion",
    name: "Converse Run Star Motion",
    price: 88,
    oldPrice: 98,
    brand: "Converse",
    category: "Running Shoes",
    tags: ["motion", "running"],
    rating: 4,
    reviews: 2,
    sizes: ["38", "39", "40", "41", "42", "43"],
    colors: ["beige", "black"],
    description: [
      "Soft foam midsole supports long wear.",
      "Angular outsole brings extra grip.",
      "Bold styling with everyday comfort.",
    ],
    details: [
      "Hand wash only",
      "Do not tumble dry",
    ],
    image: imgAirJordanDmp1Retro4,
    secondaryImage: imgSecondImageOfAirJordanDmp1Retro4,
    gallery: [imgAirJordanDmp1Retro4, imgSecondImageOfAirJordanDmp1Retro4, imgAirJordanDmp1Retro8],
  },
  {
    id: "jordan-luka-1-basketball",
    name: "Jordan Luka 1 Basketball",
    price: 90,
    oldPrice: null,
    brand: "Jordan",
    category: "Men",
    tags: ["basketball", "performance"],
    rating: 5,
    reviews: 9,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["black", "red"],
    description: [
      "Stable base for quick cuts and stops.",
      "Zoom cushioning for responsive takeoffs.",
      "Locked-in fit through the midfoot.",
    ],
    details: [
      "Do not machine wash",
      "Wipe clean",
    ],
    image: imgAirJordanDmp1Retro5,
    secondaryImage: imgSecondImageOfAirJordanDmp1Retro5,
    gallery: [imgAirJordanDmp1Retro5, imgSecondImageOfAirJordanDmp1Retro5, imgAirJordanDmp1Retro1],
  },
  {
    id: "air-jordan-dmp-2-retro",
    name: "Air Jordan DMP 2 Retro",
    price: 92,
    oldPrice: 120,
    brand: "Nike",
    category: "Running Shoes",
    tags: ["retro", "running"],
    rating: 4,
    reviews: 6,
    sizes: ["38", "39", "40", "41", "42"],
    colors: ["green", "black"],
    description: [
      "Retro look with updated comfort.",
      "Durable outsole for daily wear.",
      "Supportive heel counter keeps you steady.",
    ],
    details: [
      "Keep dry",
      "Use shoe trees after wear",
    ],
    image: imgAirJordanDmp1Retro6,
    secondaryImage: imgSecondImageOfAirJordanDmp1Retro6,
    gallery: [imgAirJordanDmp1Retro6, imgSecondImageOfAirJordanDmp1Retro6, imgAirJordanDmp1Retro2],
  },
  {
    id: "air-jordan-dmp-3-retro",
    name: "Air Jordan DMP 3 Retro",
    price: 96,
    oldPrice: 110,
    brand: "Nike",
    category: "Running Shoes",
    tags: ["retro", "sneaker"],
    rating: 4,
    reviews: 3,
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["gray", "black"],
    description: [
      "Everyday cushioning and a classic shape.",
      "Textured overlays for extra durability.",
      "Comfort collar for easy wear.",
    ],
    details: [
      "Brush off dirt after use",
      "Do not bleach",
    ],
    image: imgAirJordanDmp1Retro7,
    secondaryImage: imgSecondImageOfAirJordanDmp1Retro7,
    gallery: [imgAirJordanDmp1Retro7, imgSecondImageOfAirJordanDmp1Retro7, imgAirJordanDmp1Retro3],
  },
  {
    id: "air-jordan-dmp-4-retro",
    name: "Air Jordan DMP 4 Retro",
    price: 104,
    oldPrice: null,
    brand: "Nike",
    category: "Lifestyle",
    tags: ["retro", "lifestyle"],
    rating: 5,
    reviews: 8,
    sizes: ["37", "38", "39", "40", "41"],
    colors: ["white", "green"],
    description: [
      "Premium leather feel and classic lines.",
      "Soft foam midsole for daily comfort.",
      "Grippy outsole for reliable traction.",
    ],
    details: [
      "Use a damp cloth to clean",
      "Avoid direct sunlight when drying",
    ],
    image: imgAirJordanDmp1Retro8,
    secondaryImage: imgSecondImageOfAirJordanDmp1Retro8,
    gallery: [imgAirJordanDmp1Retro8, imgSecondImageOfAirJordanDmp1Retro8, imgAirJordanDmp1Retro4],
  },
];

export function formatPrice(value: number | null) {
  if (value == null) {
    return null;
  }

  return `$${value.toFixed(2)}`;
}

export function getProductById(id: string | undefined) {
  if (!id) {
    return products[0];
  }

  return products.find((product) => product.id === id) ?? products[0];
}
