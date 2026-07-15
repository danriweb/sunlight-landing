import AccrualBonuses from "@components/accrual-bonuses/AccrualBonuses";
import ActionBonuses from "@components/action-bonuses/ActionBonuses";
import Bonuses from "@components/bonuses/Bonuses";
import FeaturesList from "@components/features-list/FeaturesList";
import Hero from "@components/hero/Hero";
import QuickLinks from "@components/quick-links/QuickLinks";

export default function Page() {
  return (
    <main className="mt-5 flex-base flex-col">
      <Hero />
      <FeaturesList />
      <Bonuses />
      <AccrualBonuses />
      <ActionBonuses />
      <QuickLinks />
    </main>
  );
}
