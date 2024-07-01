import { ChartPlaylistsResponse } from "@/app/types";
import PlaylistCard from "@/components/playlist-card";

export default async function ListAll({ params }: { params: { id: string } }) {
  const playlists: ChartPlaylistsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/chart/${params.id}/playlists/&limit=16`,
  ).then((res) => res.json());

  return (
    <>
      <h2 className="text-2xl font-bold leading-tight">
        {params.id === "85" && "Your top mixes"}
        {params.id === "113" && "Made for you"}
      </h2>
      <div className="mt-5 grid grid-cols-2 gap-[18px] @3xl:gap-6 @3col:grid-cols-3 @4col:grid-cols-4 @5col:grid-cols-5 @6col:grid-cols-6 @7col:grid-cols-7 @8col:grid-cols-8 @9col:grid-cols-9">
        {playlists.data.map((pl) => (
          <PlaylistCard playlist={pl} key={pl.id} />
        ))}
      </div>
    </>
  );
}
