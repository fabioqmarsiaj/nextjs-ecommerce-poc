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
];
