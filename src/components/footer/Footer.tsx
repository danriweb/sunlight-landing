import Link from "next/link";

import { BackgroundLogo } from "@ui/icons";

import { FooterAccordion, FooterAccordionItem } from "./FooterAccordion";
import { AboutCompanyMenu, MainNavigation, RecommendedMenu, SupportMenu, YandexMarketRating } from "./FooterNav";
import { AppDownloads, MediaPromo, SocialLinks } from "./FooterSocial";

const items: FooterAccordionItem[] = [
  { title: "Помощь", content: <SupportMenu hideHeading /> },
  { title: "Наша компания", content: <AboutCompanyMenu hideHeading /> },
  { title: "Рекомендуем", content: <RecommendedMenu hideHeading /> },
];

const Footer = () => {
  return (
    <footer className="mt-[min(27.70vw,108px)] flex-base flex-col sm:mt-[min(7.64vw,110px)]">
      <div className="mr-[calc(50%-50vw)] ml-[calc(50%-50vw)] flex-center w-screen">
        <BackgroundLogo className="h-auto max-h-35 w-full" />
      </div>
      <div className="mt-10 mb-12.5 flex-base flex-col border-t border-t-[#E4E4E4] pt-12.5 pb-15 lg:flex lg:w-full lg:flex-row lg:gap-5">
        {/*Navigation*/}
        <div className="mb-6 flex w-full flex-col gap-4 lg:mb-0 lg:grid lg:grid-cols-[1fr_1fr_1fr_1fr] lg:grid-rows-[auto_auto] lg:gap-x-5">
          <MainNavigation />
          <SupportMenu styles="hidden lg:flex" />
          <AboutCompanyMenu styles="hidden lg:flex" />
          <RecommendedMenu styles="hidden lg:flex" />
          <YandexMarketRating />
        </div>
        {/*Accordion (1024px-)*/}
        <FooterAccordion styles="lg:hidden" items={items} />
        {/*Social*/}
        <div className="mt-6 flex w-full flex-col gap-4 lg:mt-0 lg:w-auto lg:justify-between lg:gap-0 lg:self-stretch">
          <SocialLinks />
          <MediaPromo />
          <AppDownloads />
        </div>
      </div>
      {/*Copyright bar (Bottom)*/}
      <CopyrightBar />
    </footer>
  );
};

export default Footer;

function CopyrightBar() {
  return (
    <div className="absolute bottom-0 flex-base h-auto bg-[#262626] py-4 sm:h-15">
      <div className="flex-base max-w-382.5 justify-between! px-4 text-[18px]/[20px] text-white sm:px-6 md:px-7 lg:px-9 xl:px-12.5">
        <span className="flex flex-col gap-2 sm:inline">
          © Интернет-магазин SUNLIGHT 2023 <span className="hidden sm:inline">· </span>
          <Link href="#" className="block hover:underline active:opacity-70 sm:inline">
            Пользовательские соглашения
          </Link>
        </span>
      </div>
    </div>
  );
}
