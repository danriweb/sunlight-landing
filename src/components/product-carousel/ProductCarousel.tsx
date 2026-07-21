"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import { cn } from "@lib";
import ProductCard from "@ui/product-card/ProductCard";

import { productsMock } from "./data.mock";

const ProductCarousel = () => {
  const carouselRef = useRef<HTMLUListElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragged, setDragged] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth > 1024 ? 350 : 250;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setDragged(false);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    setDragged(true);
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (dragged) {
      e.stopPropagation();
      e.preventDefault();
      setDragged(false);
    }
  };

  return (
    <section
      aria-labelledby="product-carousel-title"
      className="mt-[min(14.43vw,57px)] flex-base flex-col gap-4 sm:mt-[min(7.78vw,112px)] sm:gap-[clamp(20px,3.34vw,48px)]"
    >
      {/* Heading */}
      <h2 className="section-title text-left sm:text-center" id="product-carousel-title">
        Получайте бонусы и покупайте украшения со скидкой
      </h2>
      {/* Carousel */}
      <div className="flex-base flex-col gap-2.5 sm:gap-4">
        {/* Carousel Header */}
        <div className="flex w-full items-end justify-between">
          {/* Title */}
          <div className="flex w-full">
            <p className="text-left text-[18px]/[22px] font-medium sm:text-center sm:text-[20px]/[24px] lg:text-[24px]/[28px] xl:text-[32px]/[38px]">
              Смотреть все рекомендации
            </p>
          </div>
          {/* Prev/Next Buttons */}
          <div className="hidden gap-4 lg:flex">
            <button
              onClick={() => scroll("left")}
              className="flex aspect-square w-8 cursor-pointer items-center justify-center rounded-full border transition-colors hover:bg-black hover:text-white"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex aspect-square w-8 cursor-pointer items-center justify-center rounded-full border transition-colors hover:bg-black hover:text-white"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        {/* Carousel Cards */}
        <ul
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onClickCapture={handleClickCapture}
          onDragStart={(e) => e.preventDefault()}
          className={cn(
            "scrollbar-hide -mt-5 -mb-40 flex-base scrollbar-none items-start justify-start gap-3 overflow-x-auto pt-5 pb-40 [-ms-overflow-style:none] sm:gap-2.5 [&::-webkit-scrollbar]:hidden",
            isDragging ? "cursor-grabbing" : "cursor-grab snap-x snap-mandatory scroll-smooth",
          )}
        >
          {productsMock.map((item) => {
            return <ProductCard key={item.id} {...item} isMock={true} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProductCarousel;
