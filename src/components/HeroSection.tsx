"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { MembersSuccessResponse } from "@/app/types/Newsletter";
import Confetti from "react-confetti";
import useData from "@/hooks/useData";
import { Bebas_Neue, Oswald } from "next/font/google";

// const Bebas = Oswald({
//   display: "swap",
//   weight: "600",
//   subsets: ["latin"],
// });
export const HeroSection = () => {
  const { HeroSectionData } = useData();

  const { toast } = useToast();
  return (
    <div className="px-[16px] relative overflow-hidden pt-[30px] pb-[95px] md:pb-[150px] bg-[url('/assets/grid.svg')] bg-no-repeat bg-center">
      <div className="pt-[60px] lg:pt-[112px] max-w-[48rem] mx-auto text-center relative">
        <div className="absolute top-[110px] left-[-60px] lg:left-[-180px]  z-[-1]">
          <div className="relative w-[100px] h-[100px] lg:w-[130px] lg:h-[130px]">
            <Image src="/assets/fire-dynamic-premium.svg" alt="" fill />
          </div>
        </div>
        <div className="absolute top-[260px] left-[-60px] lg:left-[-130px]  z-[-1]">
          <div className="relative w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]">
            <Image
              src="/assets/gift-dynamic-premium.svg"
              alt=""
              fill
              className="blur-[1px]"
            />
          </div>
        </div>
        <div className="absolute top-[140px] right-[-60px] lg:right-[-180px]  z-[-1]">
          <div className="relative w-[100px] h-[100px] lg:w-[130px] lg:h-[130px]">
            <Image src="/assets/rocket-dynamic-premium.svg" alt="" fill />
          </div>
        </div>
        <div className="absolute top-[260px] right-[-60px] lg:right-[-130px]  z-[-1]">
          <div className="relative w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] ">
            <Image
              src="/assets/money-bag-dynamic-premium.svg"
              alt=""
              fill
              className="blur-[2px]"
            />
          </div>
        </div>
        <h1
          className={` text-[35px] lg:text-[50px] font-semibold text-[#f6f6f6] image-text grotesk z-10`}
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgb(143, 151, 168) 0%, rgb(255, 255, 255) 100%)",
          }}
        >
          {HeroSectionData.Heading}
        </h1>
        <p className="text-[16px] text-[#f6f6f6aa] pt-[24px] z-10">
          {HeroSectionData.Paragraph}
        </p>
        <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
          <Button className="bg-[#56D806]">Book a Call</Button>
          <Button className="bg-[#020202]" variant={"outline"}>
            Reach Out
          </Button>
        </div>
      </div>
    </div>
  );
};
