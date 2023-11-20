"use client";
import { Dock } from "@/components/Dock";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Script from "next/script";
import React from "react";

const WorkPage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto border-x border-[#363636] pb-[100px] relative holds-the-iframe">
        <iframe
          data-tally-src="https://tally.so/embed/3NXMgp?alignLeft=1&hideTitle=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="100"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Let's work together 🚀"
        ></iframe>
        <Script src="https://tally.so/widgets/embed.js"></Script>
        {/* <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-[#D8D8D8] border-0 " />
          <span className="absolute px-3 font-medium text-[#D8D8D8] -translate-x-1/2 bg-[#161616] left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span>
        </div>
        <div className="flex items-center justify-center py-20">
          <button className="text-[50px] font-[500] px-[100px] py-[50px] border-2 border-[#F7F7F7] rounded-full">
            Book a Call
          </button>
        </div> */}
      </div>
      <Footer />
      <Dock />
    </div>
  );
};

export default WorkPage;
