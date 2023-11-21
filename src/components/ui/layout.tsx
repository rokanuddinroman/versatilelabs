import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const Layout = ({ children, className, ...props }: any) => {
  return (
    <div
      className={cn(
        "max-w-screen-xl mx-auto px-[16px] border-[0px] border-[#363636] relative md:border-x",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
