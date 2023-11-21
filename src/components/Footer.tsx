"use client";
import React from "react";
import Link from "next/link";
import {
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Layout } from "./ui/layout";

const Footer = () => {
  let bangladeshTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Dhaka",
    hourCycle: "h24",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="bg-[#E73521] text-[#131317]">
      <Layout className="p-4 flex justify-between items-start flex-col md:flex-row md:items-center">
        <p style={{ fontSize: "120px" }}>{bangladeshTime}</p>
        <div className="flex flex-col">
          <Link href="">Home</Link>
          <Link href="">Templates</Link>
          <Link href="">Blogs</Link>
          <Link href="">Work</Link>
        </div>
      </Layout>
      <div className="h-[80px] border-t border-[#131317]">
        <Layout className="h-[100%] flex items-center justify-between">
          <p>Made by Rokan | ©2023 Rokan.tech</p>
          <div className="flex items-center gap-2">
            <Link href="#">
              <TwitterLogo size={24} color="#131317" weight="fill" />
            </Link>
            <Link href="#">
              <YoutubeLogo size={24} color="#131317" weight="fill" />
            </Link>
            <Link href="#">
              <LinkedinLogo size={24} color="#131317" weight="fill" />
            </Link>
            <Link href="#">
              <InstagramLogo size={24} color="#131317" weight="fill" />
            </Link>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Footer;
