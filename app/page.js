import Image from "next/image";
import Hero from "./_components/Hero";
import GameSection from "./_components/GameSection";
export default function Home() {
  return (
    <div>
      <Hero />
      <GameSection />
    </div>
  );
}
