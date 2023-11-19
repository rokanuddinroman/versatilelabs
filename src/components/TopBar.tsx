import Link from "next/link";
import React from "react";

export const TopBar = () => {
  return (
    <div className="wrapper">
      <div className="marquee">
        <div className="h-[50px] bg-[#E73521] text-[#131317] flex items-center">
          <Link href="" className="text-lg font-bold">
            Get this template \ Get this template \ Get this template \ Get this
            template \ Get this template \ Get this template \
          </Link>
          <Link href="" className="text-lg font-bold">
            Get this template \ Get this template \ Get this template \ Get this
            template \ Get this template \ Get this template \
          </Link>
          <Link href="" className="text-lg font-bold">
            Get this template \ Get this template \ Get this template \ Get this
            template \ Get this template \ Get this template \
          </Link>
          <Link href="" className="text-lg font-bold">
            Get this template \ Get this template \ Get this template \ Get this
            template \ Get this template \ Get this template \
          </Link>
        </div>
      </div>
    </div>
  );
};
