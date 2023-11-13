"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ALLCARDS = [
  {
    category: "Templates",
    title: "Linkup v1.0 - Linktree Alternative",
    slug: "linkup-linktree-alternative",
    image: "https://i.ibb.co/9T94XHt/image.png",
    isFree: false,
    price: "49",
  },
  {
    category: "Templates",
    title: "Linkup v1.0 - Linktree Alternative",
    image: "https://i.ibb.co/9T94XHt/image.png",
    slug: "linkup-linktree-alternative-2",
    isFree: true,
    price: "49",
  },
  {
    category: "Templates",
    title: "Linkup v1.0 - Linktree Alternative",
    image: "https://i.ibb.co/9T94XHt/image.png",
    slug: "linkup-linktree-alternative-3",
    isFree: false,
    price: "49",
  },
  {
    category: "Products",
    title: "Linkup v1.0 - Linktree Alternative",
    image: "https://i.ibb.co/9T94XHt/image.png",
    slug: "linkup-linktree-alternative-4",
    isFree: true,
    price: "49",
  },
  {
    category: "Resources",
    title: "Linkup v1.0 - Linktree Alternative",
    image: "https://i.ibb.co/9T94XHt/image.png",
    slug: "linkup-linktree-alternative-5",
    isFree: false,
    price: "49",
  },
];

const allCategories = ALLCARDS.map((card) => card.category);

function onlyUnique(value: any, index: any, array: string | any[]) {
  return array.indexOf(value) === index;
}

const uniqueCategories = allCategories.filter(onlyUnique);

console.log(uniqueCategories);

export function MyCards() {
  const [selectedTab, setSelectedTab] = useState("Templates");
  const haha = ALLCARDS.filter((category) => category.category === selectedTab);
  console.log(haha);
  return (
    <div className="max-w-screen-xl mx-auto px-[16px] border-x border-[#363636] pb-8">
      <Tabs defaultValue="Templates" className="w-full">
        <TabsList className="flex items-center gap-4">
          {uniqueCategories?.map((card) => (
            <TabsTrigger
              key={card}
              value={card}
              onClick={() => setSelectedTab(card)}
            >
              {card}
            </TabsTrigger>
          ))}
        </TabsList>
        {uniqueCategories.map((category) => (
          <TabsContent
            key={category}
            value={category}
            className="grid grid-cols-1 gap-[20px] md:grid-cols-3"
          >
            {ALLCARDS.filter(
              (cardCategory) => cardCategory.category === selectedTab
            ).map((card) => (
              <div
                key={card.title}
                className="bg-[#1A1A1A] border border-[#242424] rounded-[8px]"
              >
                <Link href={`/${card.category}/${card.slug}`}>
                  <div
                    style={{
                      aspectRatio: "4/3",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill={true}
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <span className="text-[12px] text-gray-400">
                    {card.category}
                  </span>
                  <p className="text-[20px] font-[600] leading-[24px] pt-2">
                    {card.title}
                  </p>
                </div>
                <div className="p-4 border-t border-[#363636] flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-[20px] font-[700]">
                      {card.isFree ? "FREE" : card.price}
                    </p>
                    <sup className="text-[10px] pl-[1px]">
                      {!card.isFree && "USD"}
                    </sup>
                  </div>
                  <Link
                    href={`/${card.category}/${card.slug}`}
                    className="flex items-center"
                  >
                    <p className="text-[12px] font-[600] pr-[6px]">
                      View Product
                    </p>
                    <ArrowRight size={16} color="#ffffff" weight="bold" />
                  </Link>
                </div>
              </div>
            ))}
          </TabsContent>
        ))}

        <div className="flex justify-center mt-8">
          <Link
            href={`/${selectedTab}`}
            className="font-[500] border-b-2 border-white flex text-center pb-1 gap-1 items-center"
          >
            View all {selectedTab}
            <ArrowUpRight size={20} color="#ffffff" weight="bold" />
          </Link>
        </div>
      </Tabs>
    </div>
  );
}
