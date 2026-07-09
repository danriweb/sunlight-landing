import { Box, Heart, MapPin, ShoppingCart, Triangle, UserRound } from "lucide-react";

import { NavItemProps } from "@ui/nav-item";

export const leftShortcuts: Array<NavItemProps> = [
  {
    color: "white",
    text: "Санкт-Петербург",
    Icon: MapPin,
    iconStyles: "",
  },
  {
    color: "white",
    text: "Магазины",
  },
  {
    color: "white",
    text: "Доставка",
  },
];

export const rightShortcuts: Array<NavItemProps> = [
  {
    color: "white",
    text: "Подарочные сертификаты",
  },
  {
    color: "white",
    text: "Бонусная программа",
  },
  {
    color: "white",
    text: "Ломбард",
  },
  {
    color: "white",
    styles: "gap-1",
    text: "Помощь",
    Icon: Triangle,
    iconStyles: "rotate-180",
    iconSize: 11,
    iconLocation: "right",
  },
];

export const mainNavigation: Array<NavItemProps> = [
  {
    text: "Заказы",
    styles: "flex-col gap-0",
    Icon: Box,
    iconSize: 24,
  },
  {
    text: "Профиль",
    styles: "flex-col gap-0",
    Icon: UserRound,
    iconSize: 24,
    iconStyles: " stroke-1",
  },
  {
    text: "Избранное",
    styles: "flex-col gap-0",
    Icon: Heart,
    iconSize: 24,
    iconStyles: " stroke-0",
  },
  {
    text: "Корзина",
    styles: "flex-col gap-0",
    Icon: ShoppingCart,
    iconSize: 24,
    iconStyles: "stroke-black stroke-2",
  },
];

export const catalogCategory: Array<NavItemProps> = [
  {
    text: "Кольца",
  },
  {
    text: "Серьги",
  },
  {
    text: "Подвески",
  },
  {
    text: "Часы",
  },
  {
    text: "Браслеты",
  },
  {
    text: "Колье",
  },
  {
    text: "Броши",
  },
  {
    text: "Комплекты",
  },
  {
    text: "Акции",
  },
];
