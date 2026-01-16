export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description:
      "premium noise-cancelling wireless headphones with long battery life.",
    image: "/images/headset.jpg",
    category: "Eletronics",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 149.99,
    description:
      "Fitness tracker with heart rate monitoring and sleep analysis.",
    image: "/images/smartwatch.jpg",
    category: "Eletronics",
  },
  {
    id: "3",
    name: "Running Shoes",
    description: "Lightweight running shoes with responsive cushioning.",
    price: 89.99,
    image: "/images/shoes.jpg",
    category: "Sports",
  },
  {
    id: "4",
    name: "Ceramic Mug",
    description: "Handcrafted ceramic mug with minimalist design.",
    price: 24.99,
    image: "/images/mug.jpg",
    category: "Home",
  },
  {
    id: "5",
    name: "Leather Backpack",
    description: "Durable leather backpack with multiple compartments.",
    price: 79.99,
    image: "/images/backpack.jpg",
    category: "Fashion",
  },
];
