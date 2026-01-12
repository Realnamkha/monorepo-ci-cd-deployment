import { prisma } from "db/client";

export const dynamic = "force-dynamic"; // ← THIS IS REQUIRED

export default async function Home() {
  const users = await prisma.user.findMany();
  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
