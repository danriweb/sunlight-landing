import { Heart, MessageSquare, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Product, ProductMock } from "@shared/types/product";

import { cn } from "@lib";
import { Coin } from "@ui/icons";

const ProductCard = ({
  id,
  title,
  brand,
  imageUrl,
  imageAlt,
  price,
  discount,
  bonuses,
  rating,
  reviews,
  inFavorites,
  inCart,
  isMock = false,
}: (Product | ProductMock) & { isMock?: boolean }) => {
  const finalPrice = Math.ceil(price / discount).toLocaleString("ru-RU");

  return (
    <li className="group/card relative z-0 flex h-auto w-56 shrink-0 snap-start flex-col select-none sm:hover:z-10 lg:w-81.75">
      <div className="relative flex w-full flex-col gap-3 rounded-[10px] bg-white transition-all duration-300 sm:group-hover/card:rounded-b-none sm:group-hover/card:drop-shadow-[0px_20px_40px_rgba(0,0,0,0.16)]">
        {/* Image Container */}
        <div className="relative flex aspect-square w-full flex-col overflow-hidden rounded-t-[10px]">
          {/* Bonuses */}
          <div className="absolute top-2 right-2 z-2 flex items-center justify-center gap-1 rounded-lg bg-[#FF0000] px-4 py-0.5 text-white sm:top-3 sm:right-3">
            <span className="text-[18px]/[22px] font-medium">{bonuses}</span>
            <Coin />
          </div>
          {/* Favorites Button */}
          <div className="group/heart absolute right-2 bottom-2 z-2 flex aspect-square w-10.5 cursor-pointer items-center justify-center text-[#CDCDCD] hover:text-black sm:right-3 sm:bottom-5.25">
            <Heart size={24} className={cn("group-hover/heart:fill-black", inFavorites ? "fill-black" : "fill-none")} />
          </div>
          {/* Image */}
          <Link className="relative h-full w-full" href={isMock ? "#" : `/${id}`}>
            <div className="absolute z-1 h-full w-full bg-black/3"></div>
            <Image src={imageUrl} alt={imageAlt} className="h-auto w-full p-5.5 sm:p-9.75" />
          </Link>
        </div>
        {/* Info Container */}
        <div className="flex-base flex-col gap-3 px-4 sm:pb-4">
          <div className="flex w-full flex-col justify-start gap-1 sm:justify-center">
            <div className="flex w-full justify-start gap-2 text-left sm:justify-center sm:gap-0 sm:text-center">
              <span className="text-[18px]/[22px] font-medium">{`${finalPrice} ₽`}</span>
              <span className="text-[16px]/[20px] font-normal text-[#8A8A8A] line-through">{price}</span>
            </div>
            <div className="flex-base flex-col text-left text-[16px]/[20px] font-normal sm:text-center">
              <span className="w-full">{title}</span>
              <span className="block w-full text-[#8A8A8A]">{brand}</span>
            </div>
          </div>
        </div>
        {/* Extra Content */}
        <div className="flex flex-col gap-3 px-4 pb-4 sm:invisible sm:absolute sm:top-full sm:left-0 sm:w-full sm:rounded-b-[10px] sm:bg-white sm:pt-0 sm:opacity-0 sm:group-hover/card:visible sm:group-hover/card:opacity-100">
          {/* Rating & Reviews */}
          <div className="flex-base justify-start gap-2.5 sm:justify-center">
            <div className="flex gap-0.5">
              <Star size={20} fill="#FFCC00" color="#FFCC00" />
              <span className="text-[14px]/[18px] font-medium text-[#8A8A8A] sm:group-hover/card:text-black">
                {rating}
              </span>
            </div>
            <div className="flex gap-0.5 text-[#8A8A8A] sm:group-hover/card:text-black">
              <MessageSquare size={20} className=" " />
              <span className="text-[14px]/[18px] font-medium">{reviews}</span>
            </div>
          </div>
          {/* Cart Button */}
          <div className="hidden cursor-pointer gap-3 rounded-lg bg-black py-2.25 pt-2.5 text-[16px]/[20px] font-medium text-white sm:flex sm:items-center sm:justify-center">
            <ShoppingCart size={24} />
            {inCart ? "В корзине" : "Добавить в корзину"}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
