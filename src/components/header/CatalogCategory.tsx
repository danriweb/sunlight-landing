import Image from "next/image";

import premiumRing from "@assets/images/premium-ring.png";

import HeaderNavItem from "./HeaderNavItem";
import { catalogCategory } from "./data";

const CatalogCategory = () => {
  return (
    <div className="hidden min-w-0 justify-between! gap-15 py-1 xl:flex-base">
      {/*PremiumCategory*/}
      <div className="flex-center shrink-0 cursor-pointer gap-1 rounded-md bg-[#F8F8F8] py-1 pr-3.5 pl-0.5">
        <Image src={premiumRing} className="max-h-9 w-auto" alt="Премиум" />
        <span className="select-none">Премиум</span>
      </div>
      {/*CatalogCategory*/}
      <div className="flex-base min-w-0 justify-between!">
        {catalogCategory.map((el, i) => {
          return <HeaderNavItem key={i} {...el} />;
        })}
      </div>
    </div>
  );
};

export default CatalogCategory;
