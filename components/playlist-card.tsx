import Image from "next/image";
import Link from "next/link";
import PlayNowIcon from "@/assets/icons/play-now.svg";
import { Playlist } from "@/app/types";

interface Props {
  playlist: Playlist;
}

export default function PlaylistCard({ playlist }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-md bg-spotidark p-4 transition-colors duration-300 hover:bg-secondary">
      <div className="relative mb-4 w-fit overflow-hidden rounded shadow-[0_8px_24px_rgb(0_0_0_/_50%)]">
        <Image
          src={playlist.picture_medium}
          alt="Playlist"
          draggable="false"
          priority
          width={200}
          height={200}
        />
        <button
          aria-label="Start playing"
          className="absolute bottom-2 right-2 z-10 flex size-12 translate-y-2 cursor-default items-center justify-center rounded-full bg-spotigreen opacity-0 shadow-[0_8px_8px_rgb(0_0_0_/_30%)] transition-all hover:scale-105 hover:brightness-105 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <PlayNowIcon role="img" aria-hidden className="size-6 text-black" />
        </button>
      </div>
      <div className="flex min-h-16 justify-between">
        <Link
          href=""
          draggable="false"
          title={playlist.title}
          className="font-bold"
        >
          <p className="line-clamp-1 overflow-hidden break-all">
            {playlist.title}
          </p>
          <p className="mt-1 line-clamp-2 overflow-hidden break-all text-sm font-normal text-foreground">
            {playlist.user.name}
          </p>
          <span aria-hidden className="absolute inset-0" />
        </Link>
      </div>
    </div>
  );
}
