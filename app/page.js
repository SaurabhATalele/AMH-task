import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Home/Home";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen  justify-between">
      <Navbar />
      <Hero />
    </main>
  );
}
