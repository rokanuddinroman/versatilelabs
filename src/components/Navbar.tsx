// "use client";
import { ToggleRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Layout } from "./ui/layout";
import useData from "@/hooks/useData";
import { Button } from "./ui/button";

export const Navbar = () => {
  const { NavbarData } = useData();
  return (
    <nav className="h-[90px] border-b border-[#3636368c] sticky top-0 backdrop-blur-[20px] bg-[#020202be] z-[990]">
      <Layout className="h-[90px] flex justify-between items-center px-4">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src={NavbarData.LogoImage}
              height={38}
              width={38}
              alt=""
              className="rounded-full"
            />
            <p className="font-medium text-white text-[16px] hidden md:block">
              {NavbarData.LogoText}
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Button className="bg-[#fff]">Book a Call</Button>
        </div>
      </Layout>
    </nav>
  );
};
