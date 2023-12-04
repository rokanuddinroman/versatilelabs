"use client";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { MyCards } from "@/components/MyCards";
import { TopBar } from "@/components/TopBar";
import { Dock } from "@/components/Dock";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useRef } from "react";
import { SocialSection } from "@/components/SocialSection";
import { Layout } from "@/components/ui/layout";
import { Testimonials } from "@/components/Testimonials";

import { useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion, useTransform } from "framer-motion";

export default function Home() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX ?? 0;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY ?? 0;
  }

  const variants = {
    default: {
      zIndex: 1999,
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "white",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <main ref={ref}>
      {!isMobile && (
        <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div>
      )}

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
        <MyCards
          setCursorText={setCursorText}
          setCursorVariant={setCursorVariant}
        />
        <Testimonials />
        <SocialSection />
      </Layout>
      <Footer />
      <Toaster />
      <Dock />
    </main>
  );
}
