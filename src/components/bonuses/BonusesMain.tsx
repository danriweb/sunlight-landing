import Image from "next/image";

import pictureBonuses from "@assets/images/picture-bonuses.png";

const BonusesMain = () => {
  return (
    <div className="relative flex-base flex-col rounded-2xl bg-[#F2F2F2] sm:min-h-[min(22.22vw,320px)] sm:flex-row sm:rounded-[20px]">
      {/* Picture */}
      <Image
        src={pictureBonuses}
        className="z-1 mt-[max(45.12px,14.1vw)] h-[53.5vw] max-h-none min-h-42.75 w-auto self-end screen-440:self-auto sm:mt-0 sm:h-[min(28.33vw,408px)]"
        alt="Купите кольцо за 13 490 рублей и получите 400 бонусов в подарок!"
      />
      {/* Ellipses */}
      <div className="@container absolute inset-0 overflow-hidden">
        <div className="absolute -right-7 bottom-[-16.4vw] flex aspect-square w-[83.8cqw] shrink-0 screen-440:bottom-[-18.97cqw] screen-440:left-1/2 screen-440:-translate-x-1/2 sm:top-1/2 sm:right-auto sm:bottom-auto sm:left-[min(3.88vw,56px)] sm:w-[48.05cqw] sm:translate-x-0 sm:-translate-y-1/2">
          <div className="flex w-full rounded-full bg-[#E4E4E4]">
            <div className="m-[15.37%] flex w-full rounded-full bg-[#CDCDCD]"></div>
          </div>
        </div>
      </div>

      {/*Text Content*/}
      <div className="z-1 order-first flex w-full flex-col px-4 pt-6 text-left screen-440:text-center sm:order-last sm:px-0 sm:pt-0 sm:pl-[min(4.51vw,65px)] sm:text-left">
        <h2 className="w-full text-[26px]/[32px] font-semibold screen-440:text-[30px]/[36px] md:text-[34px]/[40px] lg:text-[40px]/[46px] xl:text-[45px]/[50px]">
          Бонусы с каждой <span className="sm:block">покупки</span>
        </h2>
        <p className="w-full text-[16px]/[20px] font-normal screen-440:text-[17px]/[22px] md:text-[18px]/[24px] lg:text-[20px]/[26px] xl:text-[22px]/[28px]">
          Совершите первую покупку и получите <span className="block">бонусы на ваш счёт</span>
        </p>
      </div>
    </div>
  );
};

export default BonusesMain;
