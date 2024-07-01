import HomeSection from "@/components/home-section";
import Hero from "@/components/hero";

export default async function Home() {
  const [mainMix, yourMixes, forYou] = await Promise.all([
    fetch(process.env.NEXT_PUBLIC_API_URL + "/chart/0/playlists/&limit=6").then(
      (res) => res.json(),
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/chart/85/playlists/&limit=10`,
    ).then((res) => res.json()),
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/chart/113/playlists/&limit=10`,
    ).then((res) => res.json()),
  ]);

  return (
    <>
      <Hero playlists={mainMix.data.slice(0, 6)} />
      <HomeSection
        title="Your top mixes"
        sectionId="85"
        playlists={yourMixes.data.slice(0, 9)}
      />
      <HomeSection
        title="Made for you"
        sectionId="113"
        playlists={forYou.data.slice(0, 9)}
      />
    </>
  );
}
