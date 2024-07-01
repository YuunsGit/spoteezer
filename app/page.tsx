import HomeSection from "@/components/home-section";
import Hero from "@/components/hero";
import { ChartPlaylistsResponse } from "@/app/types";

export default async function Home() {
  const [response1, response2] = await Promise.all([
    fetch(process.env.NEXT_PUBLIC_API_URL + "/chart/0/playlists/&limit=15"),
    fetch(process.env.NEXT_PUBLIC_API_URL + "/chart/16/playlists/&limit=9"),
  ]);

  const mainMix: ChartPlaylistsResponse = await response1.json();
  const forYou: ChartPlaylistsResponse = await response2.json();

  return (
    <>
      <Hero playlists={mainMix.data.slice(0, 6)} />
      <HomeSection
        title="Your top mixes"
        playlists={mainMix.data.slice(6, 15)}
      />
      <HomeSection title="Made for you" playlists={forYou.data} />
    </>
  );
}
