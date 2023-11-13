import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-[16px] border-x border-[#363636] pb-[100px]">
      <div
        style={{
          paddingTop: "112px",
          paddingBottom: "56px",
          maxWidth: "48rem",
          marginInline: "auto",
          textAlign: "center",
        }}
      >
        <h1 className="text-[40px] font-semibold text-[#f6f6f6]">
          Design <span className="text-[#FF4800]">→</span> Code. Create. Repeat.
          Crafting Digital Brilliance, Simplified.
        </h1>
        <p className="text-[16px] text-[#f6f6f6] pt-[24px]">
          Join the innovation journey! Subscribe to my newsletter for a
          front-row seat to the latest in code, design, and creativity.
        </p>
        <div className="flex items-center gap-2 justify-center pt-[34px]">
          <Input className="w-[432px]" type="email" placeholder="your email" />
          <Button className="h-[40px] w-[184px] rounded-[4px] text-[14px] font-[500]">
            Get Updates
          </Button>
        </div>
        <div className="flex items-center gap-2 justify-center mt-8">
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
            <a
              className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-[#757575] border-2 border-[#2a2a2a] rounded-full hover:bg-[#373737] dark:border-gray-800"
              href="#"
            >
              +99
            </a>
          </div>
          <p>120+ others subscribed</p>
        </div>
      </div>
    </div>
  );
};
