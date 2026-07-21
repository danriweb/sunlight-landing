import Link from "next/link";

import { cn } from "@lib";

import { HeaderNavItemProps } from "./data";

const HeaderNavItem = ({
  href = "#",
  color = "black",
  styles,
  text,
  Icon,
  iconStyles,
  iconSize,
  iconLocation = "left",
}: HeaderNavItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-2 text-center header-nav-item hover:underline active:opacity-70",
        color === "black" ? "text-black" : "text-white",
        iconLocation === "right" && "flex-row-reverse",
        styles,
      )}
    >
      {Icon && (
        <Icon
          size={iconSize ?? 18}
          className={cn(color === "white" ? "text-black" : "text-white", iconStyles, "group-hover:opacity-70")}
          fill={cn(color)}
        />
      )}
      {text}
    </Link>
  );
};

export default HeaderNavItem;
