import PlaylistCard from "@/components/playlist-card";
import Link from "next/link";
import { Playlist } from "@/app/types";

interface Props {
  title: string;
  playlists: Playlist[];
}

export default function HomeSection({ title, playlists }: Props) {
  return (
    <section className="mt-6 pb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold leading-tight">{title}</h2>
        <Link
          href={`/playlists`}
          draggable="false"
          className="text-xs font-bold uppercase tracking-widest text-foreground hover:underline"
        >
          See all
        </Link>
      </div>
      <div className="mt-5 grid grid-cols-9 gap-x-[18px] @3xl:gap-y-6">
        {playlists.map((pl) => (
          <PlaylistCard key={pl.id} playlist={pl} />
        ))}
      </div>
    </section>
  );
}
