import Image from "next/image";
import React from "react";

export const Testimonials = () => {
  return (
    <div className="py-[120px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
      <div>
        <Image
          src="/assets/pfp.jpg"
          alt=""
          width={70}
          height={70}
          className="rounded-full"
        />
        <p className="text-[#929292] text-[16px] my-2">@rokanuddin</p>
        <h2 className="text-[40px] font-[600] leading-[48px] my-6">
          &quot;Linkup is a better Linktree alternative that helped my coversion
          2x&quot;
        </h2>
        <p className="text-[#929292] mt-4 lg:mt-12">
          People are loving my templates, here are some comment
        </p>
        <button className="bg-[#E73621] rounded-full h-[40px] px-6 text-[#020202] font-[500] mt-6">
          Get Linkup -&gt;
        </button>
      </div>
      <div className="gap-4 flex flex-col">
        <div className="grid grid-cols-[40px,1fr] gap-8">
          <Image
            src="/assets/pfp.jpg"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="bg-[#0F0F0F] p-4 min-[100px] rounded-[8px] relative">
            <div className="absolute top-1 -left-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="39"
                viewBox="0 0 21 39"
                fill="none"
              >
                <path
                  d="M0.740984 20.2181C0.335562 19.8252 0.335562 19.1748 0.740984 18.7819L19.3041 0.791972C19.9384 0.177209 21 0.626713 21 1.51008L21 37.4899C21 38.3733 19.9384 38.8228 19.3041 38.208L0.740984 20.2181Z"
                  fill="#0F0F0F"
                />
              </svg>
            </div>
            <p className="text-[#D5D5D5]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p className="text-[#929292] text-[14px] mt-2">@rokanuddin</p>
          </div>
        </div>
        <div className="grid grid-cols-[40px,1fr] gap-8">
          <Image
            src="/assets/pfp.jpg"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="bg-[#0F0F0F] p-4 min-[100px] rounded-[8px] relative">
            <div className="absolute top-1 -left-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="39"
                viewBox="0 0 21 39"
                fill="none"
              >
                <path
                  d="M0.740984 20.2181C0.335562 19.8252 0.335562 19.1748 0.740984 18.7819L19.3041 0.791972C19.9384 0.177209 21 0.626713 21 1.51008L21 37.4899C21 38.3733 19.9384 38.8228 19.3041 38.208L0.740984 20.2181Z"
                  fill="#0F0F0F"
                />
              </svg>
            </div>
            <p className="text-[#D5D5D5]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p className="text-[#929292] text-[14px] mt-2">@rokanuddin</p>
          </div>
        </div>
        <div className="grid grid-cols-[40px,1fr] gap-8">
          <Image
            src="/assets/pfp.jpg"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="bg-[#0F0F0F] p-4 min-[100px] rounded-[8px] relative">
            <div className="absolute top-1 -left-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="39"
                viewBox="0 0 21 39"
                fill="none"
              >
                <path
                  d="M0.740984 20.2181C0.335562 19.8252 0.335562 19.1748 0.740984 18.7819L19.3041 0.791972C19.9384 0.177209 21 0.626713 21 1.51008L21 37.4899C21 38.3733 19.9384 38.8228 19.3041 38.208L0.740984 20.2181Z"
                  fill="#0F0F0F"
                />
              </svg>
            </div>
            <p className="text-[#D5D5D5]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p className="text-[#929292] text-[14px] mt-2">@rokanuddin</p>
          </div>
        </div>
      </div>
    </div>
  );
};
