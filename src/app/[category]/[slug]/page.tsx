"use client";
import { Dock } from "@/components/Dock";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { ArrowElbowUpLeft } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function ProductPage() {
  const pathname = usePathname();
  const category = pathname.split("/")[1];
  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-[16px] border-x border-b border-[#363636]">
        <Link
          href={`/${category}`}
          className="inline-flex items-center gap-1 h-[60px]"
        >
          <ArrowElbowUpLeft size={20} color="#ffffff" weight="bold" />
          <p>{category}</p>
        </Link>
      </div>
      <div
        className="max-w-screen-xl mx-auto px-[16px] border-x border-[#363636] relative"
        style={{ display: "grid", gridTemplateColumns: "450px 1fr" }}
      >
        <div className="border-r border-[#363636] py-4 pr-4 sticky top-0">
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
        <div className=" py-4 pl-4">
          <div
            style={{
              aspectRatio: "4/3",
              position: "relative",
            }}
          >
            <Image
              src="https://i.ibb.co/9T94XHt/image.png"
              alt=""
              fill={true}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </div>
      <Footer />
      <Dock />
    </div>
  );
}

export default ProductPage;
