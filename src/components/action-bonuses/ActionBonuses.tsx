import { ActionBonuses1, ActionBonuses2, ActionBonuses3, ActionBonuses4 } from "@ui/icons";

const actionItem: ActionItemProps[] = [
  {
    Icon: ActionBonuses1,
    title: "+ 100 бонусов",
    descriptionOne: "За подтверждение ",
    descriptionTwo: "личных данных",
  },
  {
    Icon: ActionBonuses2,
    title: "+ 100 бонусов",
    descriptionOne: "За публикацию отзыва ",
    descriptionTwo: "в социальных сетях",
  },
  {
    Icon: ActionBonuses3,
    title: "+ 100 бонусов",
    descriptionOne: "За выполнение ",
    descriptionTwo: "еженедельных заданий",
  },
  {
    Icon: ActionBonuses4,
    title: "+ 100 бонусов",
    descriptionOne: "За полное заполнение ",
    descriptionTwo: "профиля",
  },
];

const ActionBonuses = () => {
  return (
    <section
      aria-labelledby="action-title"
      className="mt-[min(14.43vw,57px)] flex-base flex-col gap-5 sm:mt-[min(7.78vw,112px)] sm:gap-[clamp(30px,3.34vw,48px)]"
    >
      <h2 className="section-title text-left sm:text-center" id="action-title">
        Начислим бонусы за действия
      </h2>
      <ul className="flex-base flex-col gap-5 sm:flex-row sm:items-start sm:gap-[clamp(25px,2.78vw,40px)] lg:px-[min(2.78vw,40px)] xl:px-[min(6.25vw,90px)]">
        {actionItem.map((item, index) => {
          return (
            <ActionItem
              key={index}
              Icon={item.Icon}
              title={item.title}
              descriptionOne={item.descriptionOne}
              descriptionTwo={item.descriptionTwo}
            />
          );
        })}
      </ul>
    </section>
  );
};

type ActionItemProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  descriptionOne: string;
  descriptionTwo?: string;
};

function ActionItem({ Icon, title, descriptionOne, descriptionTwo }: ActionItemProps) {
  return (
    <li className="flex-base flex-row gap-4 sm:flex-col sm:gap-3">
      <Icon className="h-16 w-16 shrink-0 sm:h-18 sm:w-18" />
      <div className="flex w-full flex-col gap-2 text-left sm:items-center sm:justify-center sm:text-center">
        <span className="text-[22px]/[26px] font-medium sm:section-list-title">{title}</span>
        <span className="text-[20px]/[24px] font-normal sm:text-[clamp(14px,1.39vw,20px)]">
          {descriptionOne} <span className="block">{descriptionTwo}</span>
        </span>
      </div>
    </li>
  );
}

export default ActionBonuses;
