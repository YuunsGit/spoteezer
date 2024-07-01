import HomeSection from "@/components/home-section";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeSection title="Your top mixes" />
      <HomeSection title="Made for you" />
    </>
  );
}
