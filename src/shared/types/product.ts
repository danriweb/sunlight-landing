import { StaticImageData } from "next/image";

/** Продукт, который приходит с сервера (API DTO) */
export type ProductDTO = {
  id: string;
  title: string;
  brand: string;
  /** URL изображения */
  imageUrl: string;
  imageAlt: string;
  price: number;
  /** Скидка в процентах (0–100) */
  discount: number;
  /** Количество начисляемых бонусов */
  bonuses: number;
  rating: number;
  reviews: number;
};

/** Продукт с UI-состоянием (избранное, корзина) */
export type Product = ProductDTO & {
  inFavorites: boolean;
  inCart: boolean;
};

export type ProductMock = Omit<Product, "imageUrl"> & { imageUrl: string | StaticImageData };
