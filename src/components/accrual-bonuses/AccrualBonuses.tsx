import Image from "next/image";

import pictureAccrualBonuses from "@assets/images/picture-accrual-bonuses.png";

const accrualFeatures: AccrualFeaturesItemProps[] = [
  {
    title: "3% бонус-бэк",
    description: "с каждой покупки вернём бонусами",
  },
  {
    title: "До 50%",
    description: "оплата заказа бонусами",
  },
  {
    title: "Через 14 дней после покупки",
    description: "бонусы станут активными",
  },
  {
    title: "90 дней",
    description: "срок жизни бонусов",
  },
];

const AccrualBonuses = () => {
  return (
    <section
      aria-labelledby="accrual-title"
      className="mt-[min(14.36vw,56px)] flex-base flex-col gap-6 screen-440:mt-[min(7.77vw,112px)] screen-440:min-h-[min(47.91vw,690px)] screen-440:flex-row screen-440:gap-2.5"
    >
      {/* Picture */}
      <div className="flex-base h-full">
        <Image
          src={pictureAccrualBonuses}
          alt="Получайте начисление бонусов и их списание при покупке"
          className="h-[min(117vw,456px)] w-auto screen-440:h-full md:px-[min(4.24vw,61px)]"
        />
      </div>

      {/* Text Content */}
      <div className="order-first flex-base flex-col gap-5 screen-440:order-last screen-440:gap-8 screen-440:py-[min(7.57vw,109px)] md:pr-[min(7.78vw,112px)]">
        {/* Heading */}
        <h2 className="section-title" id="accrual-title">
          Начисление и списание <span className="block">бонусов при покупке</span>
        </h2>
        {/* Accrual Features */}
        <ul className="flex-base flex-col gap-5 screen-440:gap-5">
          {accrualFeatures.map((item, index) => {
            return <AccrualFeaturesItem key={index} title={item.title} description={item.description} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default AccrualBonuses;

type AccrualFeaturesItemProps = {
  title: string;
  description: string;
};

function AccrualFeaturesItem({ title, description }: AccrualFeaturesItemProps) {
  return (
    <li className="flex w-full flex-col gap-1">
      <span className="section-features">{title}</span>
      <span className="section-list-title">{description}</span>
    </li>
  );
}
