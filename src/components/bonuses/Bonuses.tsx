import Image from "next/image";

import pictureBonuses from "@assets/images/picture-bonuses.png";

const Bonuses = () => {
  return (
    <div className="relative mt-14 flex-base flex-col bg-[#F2F2F2] sm:mt-[clamp(0px,6.80vw,98px)] sm:min-h-[clamp(0px,22.22vw,320px)] sm:max-[800px]:py-10 lg:flex-row">
      {/* Ellipses */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-7 bottom-[-16.4vw] flex aspect-square w-[clamp(0px,76.92vw,300px)] shrink-0 screen-440:-bottom-22 screen-440:left-1/2 screen-440:h-85 screen-440:w-85 screen-440:-translate-x-1/2 sm:top-1/2 sm:right-auto sm:bottom-auto sm:left-[clamp(0px,3.88vw,56px)] sm:h-[clamp(0px,44.72vw,644px)] sm:w-[clamp(0px,44.72vw,644px)] sm:translate-x-0 sm:-translate-y-1/2">
          <div className="flex w-full rounded-full bg-[#E4E4E4]">
            <div className="sm:m-[clamp(0px, 6.875vw, 99px)] m-11.5 flex w-full rounded-full bg-[#CDCDCD]"></div>
          </div>
        </div>
      </div>
      {/* Picture */}
      <Image
        src={pictureBonuses}
        className="z-1 mt-[14.1vw] w-[clamp(0px,91.79vw,358px)] self-end screen-440:w-95.5 screen-440:self-auto sm:absolute sm:bottom-0 sm:left-0 sm:mt-0 sm:h-auto sm:w-[clamp(0px,48.61vw,700px)]"
        alt="Купите кольцо за 13 490 рублей и получите 400 бонусов в подарок!"
      ></Image>

      {/*Text Content*/}
      <div className="order-first flex w-full flex-col px-4 pt-6 text-left screen-440:text-center sm:order-last sm:px-0 sm:pt-0 sm:pl-[clamp(0px,53.125vw,765px)] sm:text-left">
        <div className="w-full text-[26px]/[32px] font-medium screen-440:text-[30px]/[36px] md:text-[34px]/[40px] lg:text-[40px]/[46px] xl:text-[45px]/[50px]">
          Бонусы с каждой <span className="sm:block">покупки</span>
        </div>
        <div className="w-full text-[16px]/[20px] font-normal screen-440:text-[17px]/[22px] md:text-[18px]/[24px] lg:text-[20px]/[26px] xl:text-[22px]/[28px]">
          Совершите первую покупку и получите <span className="block">бонусы на ваш счёт</span>
        </div>
      </div>
    </div>
  );
};

export default Bonuses;
