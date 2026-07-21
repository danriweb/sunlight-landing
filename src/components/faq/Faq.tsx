"use client";

import { Minus, Plus } from "lucide-react";

import { cn } from "@lib";
import { useAccordion } from "@ui/accordion/useAccordion";

import { FaqAccordionItemProps, faq } from "./data";

const Faq = () => {
  return (
    <section
      aria-labelledby="faq-title"
      className="mt-[min(14.36vw,56px)] flex w-full flex-col items-center justify-start gap-5 sm:mt-[min(7.78vw,112px)] sm:flex-row sm:items-start sm:justify-between sm:gap-2.5"
    >
      <h2 className="section-title w-full sm:w-auto" id="faq-title">
        Частые вопросы
      </h2>
      <FaqAccordion />
    </section>
  );
};

function FaqAccordion() {
  return (
    <ul className="flex w-full max-w-222 flex-col items-center justify-start gap-3">
      {faq.map((item, index) => {
        return <FaqAccordionItem key={index} {...item} />;
      })}
    </ul>
  );
}

function FaqAccordionItem({ question, answer }: FaqAccordionItemProps) {
  const { isOpen, toggle } = useAccordion();

  return (
    <li
      className={cn(
        "flex w-full flex-col rounded-2xl bg-[#F2F2F2] p-4 transition-[gap] duration-300 ease-in-out sm:rounded-[20px] sm:p-5",
        isOpen ? "gap-5" : "gap-0",
      )}
    >
      <div className="flex w-full flex-row items-center justify-between gap-3 screen-440:gap-7 lg:gap-10">
        {/* Question */}
        <span className="text-[18px]/[22px] font-medium tracking-[0.2px] sm:tracking-[0.3px] md:text-[20px]/[24px] lg:text-[24px]/[28px] xl:text-[26px]/[32px]">
          {question}
        </span>
        {/* Expand Button */}
        <button
          className="flex aspect-square w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#E4E4E4] hover:bg-[#CDCDCD]"
          onClick={toggle}
        >
          <span className="relative size-5.5">
            {/* Plus */}
            <Plus
              size={22}
              className="absolute transition-all duration-300 ease-in-out"
              style={{
                transform: isOpen ? "scaleY(0)" : "scaleY(1)",
              }}
            />
            {/* Minus */}
            <Minus
              size={22}
              className="absolute transition-all duration-300 ease-in-out"
              style={{
                transform: isOpen ? "scaleY(1)" : "scaleY(0)",
              }}
            />
          </span>
        </button>
      </div>
      {/* Answer */}
      <div
        className={cn(
          "grid w-full transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <p className="overflow-hidden text-[18px]/[22px] font-normal md:text-[19px]/[23px] lg:text-[20px]/[24px] xl:text-[22px]/[26px]">
          {answer}
        </p>
      </div>
    </li>
  );
}

export default Faq;
