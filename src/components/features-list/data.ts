import { FeatureItem1, FeatureItem2, FeatureItem3, FeatureItem4, FeatureItem5, FeatureItem6 } from "@ui/icons";

import { FeatureItemProps } from "./FeaturesList";

const featureItems: FeatureItemProps[] = [
  {
    Icon: FeatureItem1,
    titleOne: "Каждый бонус",
    titleTwo: "равен рублю",
  },
  {
    Icon: FeatureItem2,
    titleOne: "Получайте бонусы",
    titleTwo: "с каждой покупки",
  },
  {
    Icon: FeatureItem3,
    titleOne: "Оплачивайте бонусами",
    titleTwo: "любую покупку до 50%",
  },
  {
    Icon: FeatureItem4,
    titleOne: "Бонусы начисляются",
    titleTwo: "автоматически",
  },
  {
    Icon: FeatureItem5,
    titleOne: "Начисляем бонусы",
    titleTwo: "за вашу активность",
  },
  {
    Icon: FeatureItem6,
    titleOne: "Ещё больше бонусов",
    titleTwo: "в праздничные дни",
  },
];

export default featureItems;
