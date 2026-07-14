import Image from "next/image";

import pictureBonusesPlus from "@assets/images/picture-bonuses-plus.png";

const actions: ActionItemProps[] = [
  {
    title: "Заполните ваш профиль всей необходимой информацией",
  },
  {
    title: "Оставляйте отзывы на купленные товары и публикуйте их в социальных сетях",
  },
  {
    title: "Участвуйте в наших акциях и спецпредложениях",
  },
  {
    title: "Получайте увеличенный бонус-бэк в памятные даты и ваш день рождения",
  },
];

const BonusesPlus = () => {
  return (
    <div className="relative flex-base flex-col items-stretch gap-2.5 screen-900:min-h-[min(46.25vw,666px)] screen-900:flex-row">
      {/*Block Left */}
      <div className="flex w-full rounded-2xl bg-[#F2F2F2] sm:rounded-[20px]">
        <div className="flex w-full flex-col gap-5 px-[clamp(16px,6.25vw,90px)] py-[clamp(24px,8.33vw,120px)]">
          {/*Heading */}
          <div className="flex w-full flex-col gap-4">
            <h2 className="section-title font-semibold">1 Бонус = 1 Рубль</h2>
            <p className="section-subtitle font-medium">
              Получайте дополнительные бонусы за следующие действия на сайте или в мобильном приложении:{" "}
            </p>
          </div>
          {/*List Actions */}
          <ul className="flex w-full flex-col gap-4 section-list-title font-normal">
            {actions.map((item, index) => {
              return <ActionItem key={index} title={item.title} />;
            })}
          </ul>
        </div>
      </div>
      {/*Block Right */}
      <div className="relative flex-base rounded-2xl bg-[#F2F2F2] max-screen-900:aspect-358/300 sm:rounded-[20px]">
        {/*Picture */}
        <Image
          src={pictureBonusesPlus}
          alt="Получайте дополнительные бонусы за заполнение профиля и участие в акциях"
          className="absolute right-0 bottom-0 z-1 h-auto w-[max(103.41vw,331px)] max-w-none screen-900:w-[min(51.73vw,745px)]"
        />
        {/* Ellipses */}
        <div className="@container absolute inset-0 overflow-hidden opacity-50">
          <div className="absolute bottom-[-30.32cqw] left-[-24.89cqw] flex aspect-square w-[105cqw] shrink-0 screen-900:right-auto screen-900:-bottom-[min(14.23vw,205px)] screen-900:-left-[min(11.73vw,169px)] screen-900:w-[min(49.72vw,716px)]">
            <div className="flex w-full rounded-full bg-[#E4E4E4]">
              <div className="m-[15.38%] flex w-full rounded-full bg-[#CDCDCD]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusesPlus;

type ActionItemProps = {
  title: string;
};

function ActionItem({ title }: ActionItemProps) {
  return (
    <li>
      <span aria-hidden="true" className="mr-4 inline-block w-6 border-t-2 border-current align-middle sm:w-8" />
      {title}
    </li>
  );
}
