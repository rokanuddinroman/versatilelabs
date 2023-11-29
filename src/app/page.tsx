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
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <TopBar />
      <div className="relative overflow-hidden max-w-[2000px] mx-auto">
        <div className="absolute top-0 left-0 z-[991] invisible lg:visible pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1120"
            height="672"
            viewBox="0 0 1120 672"
            fill="none"
          >
            <g filter="url(#filter0_f_123_401)">
              <path
                d="M100 571.5L867.5 -37L1020 -27.5L100 571.5Z"
                fill="white"
                fill-opacity="0.2"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_123_401"
                x="0"
                y="-137"
                width="1120"
                height="808.5"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="50"
                  result="effect1_foregroundBlur_123_401"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute top-0 right-0 z-[991] invisible lg:visible pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1120"
            height="628"
            viewBox="0 0 1120 628"
            fill="none"
          >
            <g filter="url(#filter0_f_120_508)">
              <path
                d="M100 527.5L867.5 -81L1020 -71.5L100 527.5Z"
                fill="white"
                fill-opacity="0.3"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_120_508"
                x="0"
                y="-181"
                width="1120"
                height="808.5"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="50"
                  result="effect1_foregroundBlur_120_508"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute top-[100px] right-[-500px] z-[991] invisible lg:visible pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1120"
            height="628"
            viewBox="0 0 1120 628"
            fill="none"
          >
            <g filter="url(#filter0_f_120_508)">
              <path
                d="M100 527.5L867.5 -81L1020 -71.5L100 527.5Z"
                fill="white"
                fill-opacity="0.3"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_120_508"
                x="0"
                y="-181"
                width="1120"
                height="808.5"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="50"
                  result="effect1_foregroundBlur_120_508"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <Navbar />
        <Layout className="px-0">
          <HeroSection />
        </Layout>
      </div>
      <Layout>
        <MyCards />
        <Testimonials />
        <SocialSection />
      </Layout>
      <Footer />
      <Toaster />
      <Dock />
    </main>
  );
}
