import PlaylistCard from "@/components/playlist-card";
import Link from "next/link";
import { Playlist } from "@/app/types";

interface Props {
  title: string;
  sectionId: string;
  playlists: Playlist[];
}

export default function HomeSection({ title, playlists, sectionId }: Props) {
  return (
    <section className="mt-6 pb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold leading-tight">{title}</h2>
        <Link
          href={`/section/${sectionId}`}
          draggable="false"
          className="text-xs font-bold uppercase tracking-widest text-foreground hover:underline"
        >
          See all
        </Link>
      </div>
      <div className="mt-5 grid grid-cols-2 grid-rows-[1fr_0_0_0_0] gap-x-[18px] overflow-y-hidden @3xl:gap-x-6 @3col:grid-cols-3 @4col:grid-cols-4 @5col:grid-cols-5 @6col:grid-cols-6 @7col:grid-cols-7 @8col:grid-cols-8 @9col:grid-cols-9">
        {playlists.map((pl) => (
          <PlaylistCard key={pl.id} playlist={pl} />
        ))}
      </div>
    </section>
  );
}
