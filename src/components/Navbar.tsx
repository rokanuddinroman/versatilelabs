// "use client";
import { ToggleRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="h-[80px] border-b border-[#363636] sticky top-0 backdrop-blur-[20px] z-10 bg-[#161616be]">
      <div
        style={{
          height: "80px",
          maxWidth: "1280px",
          marginInline: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderInline: "1px solid #363636",
          paddingInline: "16px",
        }}
      >
        <Link href="/">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Image
              src="/assets/pfp.jpg"
              height={38}
              width={38}
              alt=""
              className="rounded-full"
            />
            <p className="font-medium text-white text-[16px] ">Rokan Tech</p>
          </div>
        </Link>
        <div>
          {/* <ToggleRight size={32} color="#ffffff" weight="fill" /> */}
          <span className="text-[13px] font-[500] flex items-center gap-2">
            search
            <div className="h-[25px] w-[25px] rounded-[4px] bg-[hsla(0,0%,100%,.1)] text-[hsla(0,0%,100%,.6)] font-[600] text-[11px] flex items-center justify-center">
              ⌘J
            </div>
          </span>
        </div>
      </div>
    </nav>
  );
};
