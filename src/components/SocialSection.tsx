import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { InstagramLogo } from "@phosphor-icons/react";
import Link from "next/link";

export const SocialSection = () => {
  return (
    <div className="relative pb-[00px]">
      <div className="overflow-hidden flex flex-col justify-center items-center rounded-[30px] pt-[00px]">
        <h1
          className="text-[30px] max-w-[768px] md:text-[35px] lg:text-[45px] font-semibold text-[#f6f6f6] image-text grotesk z-10 pb-2 text-center px-4"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgb(143, 151, 168) 0%, rgb(255, 255, 255) 100%)",
          }}
        >
          Master development and design with this essential guide.
        </h1>
        <p className="pb-8 text-[#6b7280] text-[14px] md:text-[18px] max-w-[48rem] text-center px-4">
          Master the art of creating cool ui with quick tips and tricks to boost
          your efficiency.
        </p>
        <Link
          className="mb-10"
          href="https://www.instagram.com/rokan.tech"
          target="_/"
        >
          <Button>
            <InstagramLogo size={18} className="mr-1" weight="bold" />
            Instagram
          </Button>
        </Link>
        <div className="relative h-[250px] md:h-[400px] lg:h-[500px] min-w-[200px] md:min-w-[300px] lg:min-w-[400px] flex justify-center items-center -mb-20">
          <img
            src="/assets/1.png"
            alt=""
            className="object-cover aspect-[1169/1461] w-[200px] md:w-[300px] lg:w-[400px] absolute left-0 bottom-0 z-10 hover:rotate-1 transition-all"
          />
          <img
            src="/assets/1.png"
            alt=""
            className="object-cover aspect-[1169/1461] w-[150px] md:w-[250px] lg:w-[350px] absolute left-[-50px] md:left-[-100px] bottom-0 -rotate-3 hover:-rotate-6 hover:scale-[105%] transition-all z-[5]"
          />
          <img
            src="/assets/1.png"
            alt=""
            className="object-cover aspect-[1169/1461] w-[150px] md:w-[250px] lg:w-[350px] absolute right-[-50px] md:right-[-100px] bottom-0 rotate-3 hover:rotate-6 hover:scale-[105%] transition-all z-[5]"
          />
          <img
            src="/assets/1.png"
            alt=""
            className="object-cover aspect-[1169/1461] w-[100px] md:w-[200px] lg:w-[300px] absolute left-[-80px] md:left-[-200px] bottom-0 -rotate-6 hover:-rotate-12 hover:scale-[105%] transition-all"
          />
          <img
            src="/assets/1.png"
            alt=""
            className="object-cover aspect-[1169/1461] w-[100px] md:w-[200px] lg:w-[300px] absolute right-[-80px] md:right-[-200px] bottom-0 rotate-6 hover:rotate-12 hover:scale-[105%] transition-all"
          />
        </div>
      </div>
    </div>
  );
};
