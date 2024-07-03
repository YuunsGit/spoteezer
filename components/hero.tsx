import Image from "next/image";
import Link from "next/link";
import { Playlist } from "@/app/types";
import PlayButton from "@/components/play-button";

interface Props {
  playlists: Playlist[];
}

export default function Hero({ playlists }: Props) {
  return (
    <section className="pb-4">
      <h2 className="text-[32px] font-bold leading-tight">Good afternoon</h2>
      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 @md:grid-cols-2 @4xl:grid-cols-3 @4xl:gap-y-4">
        {playlists.map((playlist, i) => (
          <div
            key={i}
            className="group relative flex h-16 overflow-hidden rounded bg-[hsla(0,0%,100%,.1)] transition-colors duration-300 hover:bg-[hsla(0,0%,100%,.2)] @4xl:h-20"
          >
            <Image
              unoptimized
              src={playlist.picture_medium}
              alt="Playlist"
              draggable="false"
              className="shadow-[0_8px_24px_rgb(0_0_0_/_50%)]"
              priority
              width={80}
              height={80}
            />
            <div className="flex w-full items-center justify-between px-4">
              <Link
                href=""
                draggable="false"
                title={playlist.title}
                className="font-bold"
              >
                {playlist.title}
                <span aria-hidden className="absolute inset-0" />
              </Link>
              <PlayButton
                playlistId={playlist.id}
                className="z-10 flex aspect-square size-12 flex-shrink-0 items-center justify-center overflow-visible rounded-full bg-spotigreen opacity-0 shadow-[0_8px_8px_rgb(0_0_0_/_30%)] transition-opacity hover:scale-105 hover:brightness-105 group-hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
