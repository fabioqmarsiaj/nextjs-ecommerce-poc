import { PrismaClient, Product } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const electronics = await prisma.category.create({
    data: {
      name: "Electronics",
      slug: "electronics",
    },
  });

  const clothing = await prisma.category.create({
    data: {
      name: "Clothing",
      slug: "clothing",
    },
  });

  const home = await prisma.category.create({
    data: {
      name: "Home",
      slug: "home",
    },
  });

  const products: Product[] = [
    {
      id: "1",
      name: "Wireless Headphones",
      description:
        "premium noise-cancelling wireless headphones with long battery life.",
      price: 199.99,
      image: "/images/headset.jpg",
      slug: "wireless-headphones",
      categoryId: electronics.id,
    },
    {
      id: "2",
      name: "Smart Watch",
      description:
        "Fitness tracker with heart rate monitoring and sleep analysis.",
      price: 149.99,
      image: "/images/smartwatch.jpg",
      slug: "smart-watch",
      categoryId: electronics.id,
    },
    {
      id: "3",
      name: "Running Shoes",
      price: 89.99,
      description: "Lightweight running shoes with responsive cushioning.",
      image: "/images/shoes.jpg",
      slug: "running-shoes",
      categoryId: clothing.id,
    },
    {
      id: "4",
      name: "Ceramic Mug",
      price: 24.99,
      description: "Handcrafted ceramic mug with minimalist design.",
      image: "/images/mug.jpg",
      slug: "ceramic-mug",
      categoryId: home.id,
    },
    {
      id: "5",
      name: "Leather Backpack",
      price: 79.99,
      description: "Durable leather backpack with multiple compartments.",
      image: "/images/backpack.jpg",
      slug: "leather-backpack",
      categoryId: clothing.id,
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }
}

main()
  .then(async () => {
    console.log("Seeding completed successfully");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
