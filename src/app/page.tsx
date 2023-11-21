"use client";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { MyCards } from "@/components/MyCards";
import { TopBar } from "@/components/TopBar";
import { Dock } from "@/components/Dock";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { SocialSection } from "@/components/SocialSection";
import { Layout } from "@/components/ui/layout";

export default function Home() {
  return (
    <main className="relative">
      <TopBar />
      <Navbar />

      <Layout className="px-0">
        <HeroSection />
      </Layout>

      <Layout>
        <MyCards />
        <SocialSection />
      </Layout>
      <Footer />
      <Toaster />
      <Dock />
    </main>
  );
}
