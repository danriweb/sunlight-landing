import { type LucideIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@lib";

export type HeaderNavItemProps = {
  href?: string;
  color?: "black" | "white";
  styles?: string;
  text: string;
  Icon?: LucideIcon;
  iconStyles?: string;
  iconSize?: number;
  iconLocation?: "left" | "right";
};

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
        "group header-nav-item flex items-center gap-2 text-center hover:underline active:opacity-70",
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
