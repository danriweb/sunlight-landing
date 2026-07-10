import Link from "next/link";

import { cn } from "@lib";

type FooterNavItemProps = {
  href?: string;
  title: string;
  type?: "main" | "secondary";
};

const FooterNavItem = ({ href = "#", title, type = "secondary" }: FooterNavItemProps) => {
  const textSize = type === "main" ? "footer-main-nav-item" : "footer-secondary-nav-item";
  return (
    <li>
      <Link href={href} className={cn("hover:text-brand-primary", textSize)}>
        {title}
      </Link>
    </li>
  );
};

export default FooterNavItem;
