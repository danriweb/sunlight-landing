"use client";

import { ChevronDown } from "lucide-react";
import { JSX, useState } from "react";

import { cn } from "@styles";

export type AccordionItemType = {
  title: React.ReactNode;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItemType[];
  styles?: string;
};

const Accordion = ({ items, styles }: AccordionProps) => {
  return (
    <div className={cn("flex w-full flex-col", styles)}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} className={index === 0 ? "border-y" : "border-b"}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

type AccordionItemProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

const AccordionItem = ({ title, children, className }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("flex flex-col border-b border-[#E4E4E4] py-4", className)}>
      <button
        type="button"
        className="flex w-full items-center justify-between text-left font-medium"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
        <ChevronDown
          className={cn("h-5 w-5 text-gray-500 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
