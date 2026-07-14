import BonusesMain from "./BonusesMain";
import BonusesPlus from "./BonusesPlus";

const Bonuses = () => {
  return (
    <section aria-label="Бонусы" className="mt-14 flex-base flex-col gap-2.5 sm:mt-[min(6.80vw,98px)]">
      <BonusesMain />
      <BonusesPlus />
    </section>
  );
};

export default Bonuses;
