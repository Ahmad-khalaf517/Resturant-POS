
import { env } from "prisma/config";
console.log( env("DATABASE_URL") );

import { PrismaClient } from "./generated/prisma/index";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({ adapter });

async function main() {
  // Example usage of the Prisma client
  const users = await prisma.user.findMany();
  console.log(users);
}

main();