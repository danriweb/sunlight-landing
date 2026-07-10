import { Star } from "lucide-react";
import Image from "next/image";

import yandexMarket from "@assets/images/yandex-market.png";
import { cn } from "@lib";

import FooterNavItem from "./FooterNavItem";
import { aboutCompanyNavItems, mainNavItems, recommendedNavItems, supportNavItems } from "./data";

export function MainNavigation() {
  return (
    <nav aria-label="Основное меню" className="flex w-full">
      <ul className="flex flex-col gap-3">
        {mainNavItems.map((title, index) => {
          return <FooterNavItem key={index} title={title} type="main" />;
        })}
      </ul>
    </nav>
  );
}

type SecondaryMenuProps = {
  heading: string;
  hideHeading?: boolean;
  items: string[];
  styles?: string;
};

function SecondaryMenu({ heading, hideHeading = false, items, styles }: SecondaryMenuProps) {
  return (
    <nav aria-label={heading} className={cn("flex flex-col gap-5", styles)}>
      <h2 className={cn("footer-nav-heading", hideHeading && "hidden")}>{heading}</h2>
      <ul className={cn("flex flex-col gap-4", hideHeading && "opacity-90")}>
        {items.map((title, index) => {
          return <FooterNavItem key={index} title={title} />;
        })}
      </ul>
    </nav>
  );
}

export function SupportMenu({ hideHeading, styles }: Pick<SecondaryMenuProps, "hideHeading" | "styles">) {
  return (
    <SecondaryMenu
      heading="Помощь"
      hideHeading={hideHeading}
      items={supportNavItems}
      styles={cn("row-span-2", styles)}
    />
  );
}
export function AboutCompanyMenu({ hideHeading, styles }: Pick<SecondaryMenuProps, "hideHeading" | "styles">) {
  return (
    <SecondaryMenu
      heading="Наша компания"
      hideHeading={hideHeading}
      items={aboutCompanyNavItems}
      styles={cn("row-span-2", styles)}
    />
  );
}

export function RecommendedMenu({ hideHeading, styles }: Pick<SecondaryMenuProps, "hideHeading" | "styles">) {
  return (
    <SecondaryMenu
      heading="Рекомендуем"
      hideHeading={hideHeading}
      items={recommendedNavItems}
      styles={cn("row-span-2", styles)}
    />
  );
}

export function YandexMarketRating() {
  return (
    <div className="col-start-1 row-start-2 flex w-full flex-col gap-2.5 self-end">
      <Image src={yandexMarket} alt="Яндекс Маркет" width={124} height={25} />
      {/*Rating */}
      <div className="flex gap-2">
        <div className="text-[14px]/[20px]">4.8</div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-[#FFCC00] text-[#FFCC00]" />
          ))}
        </div>
      </div>
    </div>
  );
}
