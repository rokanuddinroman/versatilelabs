"use client";
import { Dock } from "@/components/Dock";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/ui/layout";
import {
  ArrowElbowUpLeft,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

function ProductPage() {
  const pathname = usePathname();
  const category = pathname.split("/")[1];
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const limitedTiltValue = scrollY >= 40 ? 40 : scrollY;
    controls.start({
      transform: `perspective(1000px) rotateX(${
        40 - limitedTiltValue
      }deg) rotateY(0deg)`,
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [blurScrollY, setBlurScrollY] = useState(0);
  useEffect(() => {
    const handleBlurScroll = () => {
      setBlurScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleBlurScroll);

    return () => {
      window.removeEventListener("scroll", handleBlurScroll);
    };
  }, []);

  const blurValue = blurScrollY >= 200 ? 2 : 0;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "380%"]);
  return (
    <div>
      <TopBar />
      <Navbar />

      <Layout
        ref={ref}
        className="relative pt-[150px] overflow-hidden hidden lg:block"
      >
        <motion.div
          style={{
            y: textY,
            filter: `blur(${blurValue}px`,
            transition: "filter 0.3s ease-out",
          }}
        >
          <div className="flex justify-center pb-2">
            <Link
              className="px-4 rounded-full border border-[#5757574d] text-[14px] leading-6 flex items-center gap-1 text-[#5C626E]"
              href="/templates"
            >
              <ArrowLeft weight="bold" color="rgb(107 114 128)" size={14} />
              Templates
            </Link>
          </div>
          <h1
            className="text-[35px] lg:text-[45px] font-semibold text-[#f6f6f6] image-text grotesk z-10 text-center"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgb(143, 151, 168) 0%, rgb(255, 255, 255) 100%)",
            }}
          >
            Linkup - Multipurpose Linktree Alternative
          </h1>
          <p className="text-center mx-auto text-[18px] w-[800px] text-gray-500">
            Elevate your online presence with this Framer template – a versatile
            Linktree alternative designed for streamlined organization of links,
            projects, products, and more.
          </p>
          <div className="flex items-center justify-center gap-2 mt-10">
            <Link href="https://www.buymeacoffee.com/rokanuddin/e/173543">
              <Button className="bg-[#56D806]">
                Get the template
                <ArrowRight size={18} className="ml-1" weight="bold" />
              </Button>
            </Link>
            <Link href="https://linkup.framer.website">
              <Button variant="outline">
                Live Preview
                <ArrowUpRight
                  size={18}
                  color="#ffffff"
                  className="ml-1"
                  weight="bold"
                />
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center flex-col gap-2 mt-8">
            <p className="text-[14px] text-gray-500">
              Rated 4.5 by 100+ people
            </p>
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <Image
                className=" border-2 border-[#2a2a2a] rounded-full dark:border-gray-800"
                src="/assets/pfp.jpg"
                alt=""
                width={32}
                height={32}
              />
              <Image
                className=" border-2 border-[#2a2a2a] rounded-full dark:border-gray-800"
                src="/assets/pfp.jpg"
                alt=""
                width={32}
                height={32}
              />
              <Image
                className=" border-2 border-[#2a2a2a] rounded-full dark:border-gray-800"
                src="/assets/pfp.jpg"
                alt=""
                width={32}
                height={32}
              />
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-[#757575] border-2 border-[#2a2a2a] rounded-full hover:bg-[#373737] dark:border-gray-800">
                +99
              </div>
            </div>
          </div>
        </motion.div>
        <div className="mt-14">
          <motion.div
            animate={controls}
            className="card-page-thumbnail"
            style={{
              aspectRatio: "16/9",
              position: "relative",
            }}
          >
            <Image
              src="https://i.ibb.co/fMHwwTT/Mac-Book-Pro-16.png"
              alt=""
              fill={true}
              loading="lazy"
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </motion.div>
        </div>
      </Layout>
      <Layout
        className="relative 
        grid-cols-1 lg:grid-cols-[1fr,450px] pb-8 pt-14 hidden lg:grid"
      >
        <div className="lg:pr-4">
          <h2 className="text-[36px] font-[700] leading-[42px] text-[#ededed] py-2">
            Overview
          </h2>
          <div className="relative aspect-video mb-4">
            <Image
              src="https://i.ibb.co/TbhrsTv/Slide-16-9-7.png"
              fill
              alt=""
            />
          </div>
          <div className="relative aspect-video mb-4">
            <Image
              src="https://i.ibb.co/TbhrsTv/Slide-16-9-7.png"
              fill
              alt=""
            />
          </div>
        </div>
        <div className="lg:pl-4">
          <div className=" lg:pr-4 lg:sticky top-[80px]">
            <h2 className="text-[36px] font-[700] leading-[42px] text-[#ededed] py-2">
              Features
            </h2>
            <div>
              <div className="flex items-center justify-between py-2 border-b border-[#363636]">
                <p className="text-[14px] text-[#888888]">Technology</p>
                <p className="text-[14px] text-[#888888]">Framer</p>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#363636]">
                <p className="text-[14px] text-[#888888]">Use Case</p>
                <p className="text-[14px] text-[#888888]">Portfolio, SaaS</p>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#363636]">
                <p className="text-[14px] text-[#888888]">Technology</p>
                <p className="text-[14px] text-[#888888]">Framer</p>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#363636]">
                <p className="text-[14px] text-[#888888]">Use Case</p>
                <p className="text-[14px] text-[#888888]">Portfolio, SaaS</p>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#363636]">
                <p className="text-[14px] text-[#888888]">Technology</p>
                <p className="text-[14px] text-[#888888]">Framer</p>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#363636]">
                <p className="text-[14px] text-[#888888]">Use Case</p>
                <p className="text-[14px] text-[#888888]">Portfolio, SaaS</p>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#363636]">
                <p className="text-[14px] text-[#888888]">Technology</p>
                <p className="text-[14px] text-[#888888]">Framer</p>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#363636]">
                <p className="text-[14px] text-[#888888]">Use Case</p>
                <p className="text-[14px] text-[#888888]">Portfolio, SaaS</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-8">
              <Button variant="styled">Get the template</Button>
              <Button variant="outline">Live Preview</Button>
            </div>
          </div>
        </div>
      </Layout>

      {/* --------------- Mobile Below --------------- */}

      <Layout className="border-b border-[#5757574d] block lg:hidden">
        <Link
          href={`/${category}`}
          className="inline-flex items-center gap-1 h-[60px]"
        >
          <ArrowElbowUpLeft size={20} color="#ffffff" weight="bold" />
          <p>{category}</p>
        </Link>
      </Layout>
      <Layout
        className="relative  grid lg:hidden 
        grid-cols-1 lg:grid-cols-[450px,1fr] pb-8"
      >
        <div className="lg:border-r border-[#363636] py-4 lg:pr-4 lg:sticky top-0">
          <h2 className="text-[36px] font-[700] leading-[42px] text-[#ededed] py-8">
            Linkup V1 Framer Template
          </h2>
          <p className="text-[#888888]">
            Tailwind CSS, Postgres, and Auth set up.
          </p>
          <div className="grid grid-cols-1 gap-2 mt-4">
            <Button variant="styled">Get the template</Button>
            <Button variant="outline">Live Preview</Button>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between py-2 border-b border-[#363636]">
              <p className="text-[14px] text-[#888888]">Technology</p>
              <p className="text-[14px] text-[#888888]">Framer</p>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#363636]">
              <p className="text-[14px] text-[#888888]">Use Case</p>
              <p className="text-[14px] text-[#888888]">Portfolio, SaaS</p>
            </div>
          </div>
        </div>
        <div className=" lg:py-4 lg:pl-4">
          <div
            style={{
              aspectRatio: "4/3",
              position: "relative",
            }}
          >
            <Image
              src="https://i.ibb.co/ZSvRm9W/image.png"
              alt=""
              fill={true}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </Layout>

      <Footer />
      <Dock />
    </div>
  );
}

export default ProductPage;
