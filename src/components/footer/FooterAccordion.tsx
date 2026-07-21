"use client";

import { ChevronDown } from "lucide-react";

import { cn } from "@lib";
import { useAccordion } from "@ui/accordion/useAccordion";

type FooterAccordionProps = {
  styles: string;
  items: FooterAccordionItem[];
};

export function FooterAccordion({ items, styles }: FooterAccordionProps) {
  return (
    <div className={cn("flex w-full flex-col", styles)}>
      {items.map((item, index) => (
        <FooterAccordionItem key={index} index={index} {...item} />
      ))}
    </div>
  );
}

export type FooterAccordionItem = {
  title: string;
  content: React.ReactNode;
};

function FooterAccordionItem({ index, title, content }: FooterAccordionItem & { index: number }) {
  const { isOpen, toggle } = useAccordion();

  return (
    <div className={cn("flex flex-col border-b border-[#E4E4E4] py-4", index === 0 && "border-t")}>
      {/* Expand Button */}
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between text-left font-medium"
        onClick={toggle}
      >
        {title}
        <ChevronDown
          className={cn("h-5 w-5 text-gray-500 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>
      {/* Content */}
      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">{content}</div>
      </div>
    </div>
  );
}
