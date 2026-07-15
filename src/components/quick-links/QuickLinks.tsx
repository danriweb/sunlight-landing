import Link from "next/link";

import { LinkAccrual, LinkPromotions, LinkRules } from "@ui/icons";

const blocks: LinkBlockProps[] = [
  {
    Icon: LinkRules,
    titleOne: "Правила использования",
    titleTwo: "программы лояльности",
    linkName: "Узнать больше",
  },
  {
    Icon: LinkAccrual,
    titleOne: "Начисления",
    titleTwo: "и списания",
    linkName: "Узнать больше",
  },
  {
    Icon: LinkPromotions,
    titleOne: "Акции разового",
    titleTwo: "начисления",
    linkName: "Узнать больше",
  },
];

const QuickLinks = () => {
  return (
    <section className="mt-[min(14.43vw,57px)] flex-base flex-col gap-4 sm:mt-[min(7.78vw,112px)] sm:flex-row sm:items-stretch sm:gap-2.5">
      {/* Link Blocks */}
      {blocks.map((item, index) => {
        return (
          <LinkBlock
            key={index}
            Icon={item.Icon}
            titleOne={item.titleOne}
            titleTwo={item.titleTwo}
            linkName={item.linkName}
          />
        );
      })}
    </section>
  );
};

type LinkBlockProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  titleOne: string;
  titleTwo: string;
  linkName: string;
  href?: string;
};

function LinkBlock({ Icon, titleOne, titleTwo, linkName, href = "#" }: LinkBlockProps) {
  return (
    <div className="flex-base rounded-2xl bg-[#F2F2F2] sm:rounded-[20px]">
      <div className="flex h-full w-full flex-row gap-4 p-4 sm:flex-col sm:items-center sm:justify-start sm:px-[min(2.02vw,29px)] sm:py-[min(2.23vw,32px)]">
        <Icon className="h-16 w-16 shrink-0 sm:h-18 sm:w-18" />
        {/* Text Content */}
        <div className="flex w-full flex-col gap-3 text-left sm:flex-1 sm:items-center sm:justify-between sm:gap-4 sm:text-center">
          <h2 className="text-[22px]/[26px] font-medium sm:section-list-title">
            {titleOne}
            <span className="block">{titleTwo}</span>
          </h2>
          <Link
            href={href}
            className="text-[18px]/[22px] font-normal text-[#8A8A8A] hover:underline active:text-[#6d6d6d]"
          >
            {linkName}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
