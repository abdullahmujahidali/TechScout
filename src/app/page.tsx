import { db } from "@/db";
import Image from "next/image";

export default async function Home() {
  const rooms = await db.query.room.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {rooms?.map((room) => (
        <div
          key={room.id}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-2xl font-bold">{room.id}</h2>
          <p className="text-lg">{room.name}</p>
        </div>
      ))}
    </main>
  );
}
