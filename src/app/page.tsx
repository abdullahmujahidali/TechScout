import { db } from "@/db";
import Image from "next/image";

export default async function Home() {
  const items = await db.query.techScout.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {items?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-2xl font-bold">{item.id}</h2>
          <p className="text-lg">{item.name}</p>
        </div>
      ))}
    </main>
  );
}
