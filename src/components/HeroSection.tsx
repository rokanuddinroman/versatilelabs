"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
// import "/api/subscribe";

export const HeroSection = () => {
  const [emailInput, setEmailInput] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!emailInput) {
      // return toast({
      //   description: 'Email is required',
      //   status: 'error'
      // });
      alert("Email is required");
    }
    setButtonLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: emailInput }),
      });
      const data = await res.json();
      if (data.success) {
        //  toast({
        //   title: 'Joined successfully.',
        //   description: "Thank you for joining the waitlist!",
        //   status: 'success'
        // });
        alert("Joined successfully.");
      } else {
        throw new Error(
          data?.error || "Something went wrong, please try again later"
        );
      }
    } catch (e) {
      //  toast({
      //    description: (e as Error).message,
      //    status: 'error'
      //  });
      alert((e as Error).message);
    }
    setEmailInput("");
    setButtonLoading(false);
  };
  return (
    <div className="max-w-screen-xl mx-auto px-[16px] border-x border-[#363636] pb-[100px] relative">
      <div className="hero-light-effect"></div>
      <div
        style={{
          paddingTop: "112px",
          paddingBottom: "56px",
          maxWidth: "48rem",
          marginInline: "auto",
          textAlign: "center",
        }}
      >
        <h1
          className="text-[40px] font-semibold text-[#f6f6f6] image-text"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgb(143, 151, 168) 0%, rgb(255, 255, 255) 100%)",
          }}
        >
          Design <span className="text-[#FF4800]">→ </span> Code. Create.
          Repeat. Crafting Digital Brilliance, Simplified.
        </h1>
        <p className="text-[16px] text-[#f6f6f6] pt-[24px]">
          Join the innovation journey! Subscribe to my newsletter for a
          front-row seat to the latest in code, design, and creativity.
        </p>
        <form
          onSubmit={handleFormSubmit}
          className="flex items-center flex-col gap-2 justify-center pt-[34px] md:flex-row"
        >
          <Input
            className="w-full md:w-[432px]"
            placeholder="your email"
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="w-full h-[40px] md:w-[184px] rounded-[4px] text-[14px] font-[500]"
          >
            Subscribe for 0$
          </Button>
        </form>
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
