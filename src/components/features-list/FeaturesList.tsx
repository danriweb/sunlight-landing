import React from "react";

import featureItems from "./data";

const FeaturesList = () => {
  return (
    <section aria-label="Преимущества" className="mt-2.5 flex-base">
      <div className="mx-4 mt-14 grid w-full grid-cols-1 gap-x-4 gap-y-6 min-[440px]:grid-cols-2 sm:mx-8 sm:mt-16 sm:gap-x-6 md:mt-18 md:mb-4 lg:mx-14 lg:mt-20 lg:mb-5 lg:gap-8 xl:mx-22.5 xl:mb-6 xl:grid-cols-3 xl:gap-10">
        {featureItems.map((item, index) => {
          return <FeatureItem key={index} Icon={item.Icon} titleOne={item.titleOne} titleTwo={item.titleTwo} />;
        })}
      </div>
    </section>
  );
};

export type FeatureItemProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  titleOne: string;
  titleTwo: string;
};

function FeatureItem({ Icon, titleOne, titleTwo }: FeatureItemProps) {
  return (
    <li className="flex items-center gap-4 min-[440px]:flex-col lg:flex-row">
      <Icon className="h-14 w-14 shrink-0 min-[440px]:h-16 min-[440px]:w-16 lg:h-18 lg:w-18" />
      <div className="text-left text-[18px]/[20px] min-[440px]:text-center min-[440px]:text-[16px]/[22px] sm:text-[18px]/[24px] lg:text-left lg:text-[22px]/[28px]">
        <span className="block">{titleOne}</span>
        <span className="block">{titleTwo}</span>
      </div>
    </li>
  );
}

export default FeaturesList;
