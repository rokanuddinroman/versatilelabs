import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { MyCards } from "@/components/MyCards";
import { TopBar } from "@/components/TopBar";
import { Dock } from "@/components/Dock";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <TopBar />
      <Navbar />
      <HeroSection />
      <MyCards />
      <Footer />
      <Dock />
    </main>
  );
}
