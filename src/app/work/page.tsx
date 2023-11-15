"use client";
import { Dock } from "@/components/Dock";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";
import React from "react";

export const WorkPage = () => {
  //   Tally.loadEmbeds();
  // if (Tally) {
  //   Tally.loadEmbeds();
  // }
  return (
    <body>
      <Head>
        <script src="https://tally.so/widgets/embed.js"></script>
      </Head>
      <Navbar />
      <div className="max-w-screen-xl mx-auto  border-x border-[#363636] pb-[100px] relative">
        <iframe
          data-tally-src="https://tally.so/embed/3NXMgp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="eager"
          width="100%"
          height="100"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Let's work together 🚀"
        ></iframe>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </div>
      <Footer />
      <Dock />
    </body>
  );
};

export default WorkPage;
