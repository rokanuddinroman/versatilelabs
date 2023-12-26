import useData from "@/hooks/useData";
import Link from "next/link";
import React from "react";

export const TopBar = () => {
  const { TopbarData } = useData();
  return (
    <div className="wrapper">
      <div className="marquee">
        <div className="h-[50px] bg-[#56D806] text-[#131317] flex items-center">
          <Link href={TopbarData.URL} className="text-lg font-bold">
            {TopbarData.text} \ {TopbarData.text} \ {TopbarData.text} \{" "}
            {TopbarData.text} \ {TopbarData.text} \ {TopbarData.text} \
          </Link>
          <Link href={TopbarData.URL} className="text-lg font-bold">
            {TopbarData.text} \ {TopbarData.text} \ {TopbarData.text} \{" "}
            {TopbarData.text} \ {TopbarData.text} \ {TopbarData.text} \
          </Link>
          <Link href={TopbarData.URL} className="text-lg font-bold">
            {TopbarData.text} \ {TopbarData.text} \ {TopbarData.text} \{" "}
            {TopbarData.text} \ {TopbarData.text} \ {TopbarData.text} \
          </Link>
          <Link href={TopbarData.URL} className="text-lg font-bold">
            {TopbarData.text} \ {TopbarData.text} \ {TopbarData.text} \{" "}
            {TopbarData.text} \ {TopbarData.text} \ {TopbarData.text} \
          </Link>
        </div>
      </div>
    </div>
  );
};
