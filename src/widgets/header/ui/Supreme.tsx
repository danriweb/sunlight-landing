import { Menu, SearchIcon } from "lucide-react";
import Image from "next/image";

import { NavItem } from "@ui/nav-item";

import { mainNavigation } from "../model/data";

const Supreme = () => {
  return (
    <div className="flex w-full items-center gap-3 py-5 sm:gap-5 md:gap-6 lg:gap-9 xl:gap-12">
      {/*Logo*/}
      <Image src="/logo.svg" className="cursor-pointer max-md:hidden" alt="SUNLIGHT" width={210} height={20} />
      {/*HeaderSearch*/}
      <div className="flex w-full items-center">
        <CatalogPopover />
        <Search />
      </div>
      {/*MainNavigation*/}
      <nav className="hidden gap-9 xl:flex-center">
        {mainNavigation.map((el, i) => {
          return <NavItem key={i} {...el} />;
        })}
      </nav>
      <Burger />
    </div>
  );
};

function CatalogPopover() {
  return (
    <button className="hidden h-10.5 cursor-pointer items-center justify-center gap-2 rounded-l-lg bg-black px-5 py-3 text-[16px] text-white transition-opacity duration-300 ease-in-out hover:opacity-80 xl:flex">
      <Menu strokeWidth={3} size={20} />
      Каталог
    </button>
  );
}

function Search() {
  return (
    <div className="flex h-10.5 w-full flex-row-reverse items-center justify-center rounded-r-lg border border-y-[#B1B1B1] border-r-[#B1B1B1] max-xl:rounded-l-lg max-xl:border-l-[#B1B1B1] md:flex-row">
      {/*SearchInput - Desktop 768px+*/}
      <input
        type="text"
        id="search-desktop"
        name="search"
        placeholder="Украшение, бренд, артикул..."
        className="hidden h-full w-full bg-transparent py-1.5 font-[16px] focus:outline-none md:flex md:py-2.5 md:pl-4"
      />
      {/*SearchInput - Mobile 768px-*/}
      <input
        type="text"
        id="search-mobile"
        name="search"
        placeholder="Поиск..."
        className="h-full w-full bg-transparent py-1.5 font-[16px] focus:outline-none md:hidden md:py-2.5 md:pl-4"
      />
      {/*SearchButton*/}
      <button className="flex-center aspect-square h-full w-auto">
        <SearchIcon size={20} />
      </button>
    </div>
  );
}

function Burger() {
  return (
    <button className="flex-center aspect-square h-10.5 xl:hidden">
      <Menu strokeWidth={3} size={24} />
    </button>
  );
}

export default Supreme;
