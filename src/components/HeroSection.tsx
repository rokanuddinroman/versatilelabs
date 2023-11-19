"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { MembersSuccessResponse } from "@/app/types/Newsletter";
import Confetti from "react-confetti";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] =
    useState<MembersSuccessResponse>();
  const [errorMessage, setErrorMessage] = useState("");
  const [isMember, setIsMember] = useState("");

  const handleEmailSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/addSubscription", {
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const data = await res.json();

    setIsMember(data?.res?.title);

    console.log(data.error);

    if (data.error) {
      setErrorMessage("Hey, you are already subscribed!");
      setSuccessMessage(undefined);
      return;
    }

    setSuccessMessage(data.res);
    setErrorMessage("");
  };

  const dismissMessages = () => {
    setSuccessMessage(undefined);
    setErrorMessage("");
  };

  const { toast } = useToast();
  return (
    <div className="max-w-screen-xl mx-auto px-[16px] border-x border-[#363636] pb-[100px] relative overflow-hidden">
      <div className="hero-light-effect"></div>
      <div
        style={{
          paddingTop: "112px",
          maxWidth: "48rem",
          marginInline: "auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div className="absolute top-[110px] left-[-60px] lg:left-[-180px]  z-[-1]">
          <div className="relative w-[100px] h-[100px] lg:w-[130px] lg:h-[130px]">
            <Image
              src="/assets/fire-dynamic-premium.svg"
              alt=""
              fill
              className=""
            />
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
            <Image
              src="/assets/rocket-dynamic-premium.svg"
              alt=""
              fill
              className=""
            />
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
          className="text-[35px] lg:text-[45px] font-semibold text-[#f6f6f6] image-text grotesk z-10"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgb(143, 151, 168) 0%, rgb(255, 255, 255) 100%)",
          }}
        >
          Design <span className="text-[#FF4800]">→ </span> Code. Create.
          Repeat. Crafting Digital Brilliance, Simplified.
        </h1>
        <p className="text-[16px] text-[#f6f6f6] pt-[24px] z-10">
          Join the innovation journey! Subscribe to my newsletter for a
          front-row seat to the latest in code, design, and creativity.
        </p>
        <form
          onSubmit={handleEmailSubmit}
          className="flex items-center flex-col gap-2 justify-center pt-[34px] md:flex-row"
        >
          <Input
            className="w-full md:w-[432px]"
            placeholder="your email"
            type="email"
            required
            autoCapitalize="off"
            autoCorrect="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="w-full h-[40px] md:w-[184px] rounded-[4px] text-[14px] font-[500]"
            onClick={() => {
              // successMessage &&
              toast({
                title: "Yay! 🥳",
                description: successMessage
                  ? `We have added ${successMessage.email_address} to our waitlist. We will let you know when we launch!`
                  : "You are already added to our waitlist. We will let you know when we launch!",
              });

              setSuccessMessage(undefined);
            }}
          >
            Subscribe for 0$
          </Button>
        </form>
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
  );
};
