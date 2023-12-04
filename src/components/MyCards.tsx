"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useCards from "@/hooks/useCards";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CursorFunctions {
  setCursorText: (text: string) => void;
  setCursorVariant: (variant: string) => void;
}

export function MyCards({ setCursorText, setCursorVariant }: CursorFunctions) {
  const { myCards } = useCards();
  const ALLCARDS = myCards;
  const allCategories = ALLCARDS.map((card) => card.category);
  function onlyUnique(value: any, index: any, array: string | any[]) {
    return array.indexOf(value) === index;
  }
  const uniqueCategories = allCategories.filter(onlyUnique);
  const [selectedTab, setSelectedTab] = useState("Templates");

  // -------------- For Cursors --------------
  function projectEnter() {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave() {
    setCursorText("");
    setCursorVariant("default");
  }
  return (
    <div className="pb-8">
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
                className="
                bg-[#a1a1a112]
                 border border-[#242424a6] rounded-[8px]"
              >
                <Link href={`/${card.category}/${card.slug}`}>
                  <div
                    style={{
                      aspectRatio: "4/3",
                      position: "relative",
                    }}
                    className="project"
                    onMouseEnter={projectEnter}
                    onMouseLeave={projectLeave}
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
                  <p className="text-[20px] font-[600] leading-[24px] pt-2 text-[#EDEDED]">
                    {card.title}
                  </p>
                </div>
                <div className="p-4 border-t border-[#242424fe] flex items-center justify-between">
                  <div className="flex items-center">
                    <p
                      className={`text-[20px] font-[700] ${
                        card.isFree && "text-[#E73621]"
                      }`}
                    >
                      {card.isFree ? "Free" : card.price}
                    </p>
                    <sup className="text-[10px] pl-[1px]">
                      {!card.isFree && "USD"}
                    </sup>
                  </div>
                  <Link
                    href={`/${card.category}/${card.slug}`}
                    className="flex items-center"
                  >
                    <p
                      className="text-[12px] font-[600] pr-[6px] project"
                      onMouseEnter={projectEnter}
                      onMouseLeave={projectLeave}
                    >
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
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
            href={`/${selectedTab.toLowerCase()}`}
            className="project font-[500] border-b-2 border-white flex text-center pb-1 gap-1 items-center"
          >
            View all {selectedTab}
            <ArrowUpRight size={20} color="#ffffff" weight="bold" />
          </Link>
        </div>
      </Tabs>
    </div>
  );
}
