import { PrismaClient } from "./generated/client";
const prisma = new PrismaClient();
const users = await prisma.user.findMany();