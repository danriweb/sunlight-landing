import Bonuses from "@components/bonuses/Bonuses";
import FeaturesList from "@components/features-list/FeaturesList";
import Hero from "@components/hero/Hero";

export default function Page() {
  return (
    <main className="mt-5 flex-base flex-col">
      <Hero />
      <FeaturesList />
      <Bonuses />
    </main>
  );
}
