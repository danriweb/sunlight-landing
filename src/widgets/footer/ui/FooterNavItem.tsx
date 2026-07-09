import Link from "next/link";

import { cn } from "@styles";

type FooterNavItemProps = {
  href?: string;
  title: string;
  type?: "main" | "secondary";
};

const FooterNavItem = ({ href = "#", title, type = "secondary" }: FooterNavItemProps) => {
  const textSize =
    type === "main"
      ? "text-[21px]/[24px] md:text-[22px]/[25px] font-medium"
      : "text-[17px]/[19px] md:text-[18px]/[20px] font-normal";
  return (
    <li>
      <Link href={href} className={cn("hover:text-red-500", textSize)}>
        {title}
      </Link>
    </li>
  );
};

export default FooterNavItem;
