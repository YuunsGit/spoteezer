import HomeSection from "@/components/home-section";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <section className="px-4 pt-6 lg:px-8">
      <Hero />
      <HomeSection title="Your top mixes" />
      <HomeSection title="Made for you" />
    </section>
  );
}
