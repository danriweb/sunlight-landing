import { Feature1, Feature2, Feature3, Feature4, Feature5, Feature6 } from "@ui/icons";

export type FeatureItemProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  titleOne: string;
  titleTwo: string;
};

const featureItems: FeatureItemProps[] = [
  {
    Icon: Feature1,
    titleOne: "Каждый бонус",
    titleTwo: "равен рублю",
  },
  {
    Icon: Feature2,
    titleOne: "Получайте бонусы",
    titleTwo: "с каждой покупки",
  },
  {
    Icon: Feature3,
    titleOne: "Оплачивайте бонусами",
    titleTwo: "любую покупку до 50%",
  },
  {
    Icon: Feature4,
    titleOne: "Бонусы начисляются",
    titleTwo: "автоматически",
  },
  {
    Icon: Feature5,
    titleOne: "Начисляем бонусы",
    titleTwo: "за вашу активность",
  },
  {
    Icon: Feature6,
    titleOne: "Ещё больше бонусов",
    titleTwo: "в праздничные дни",
  },
];

export default featureItems;
