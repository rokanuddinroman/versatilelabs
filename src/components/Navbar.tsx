// "use client";
import { ToggleRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="h-[80px] border-b border-[#363636]">
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
        </div>
      </div>
    </nav>
  );
};
