import Image from "next/image";
import Link from "next/link";
import PlayNowIcon from "@/assets/icons/play-now.svg";

export default function PlaylistCard() {
  return (
    <div className="hover:bg-secondary bg-spotidark group relative w-fit overflow-hidden rounded-md p-4 transition-colors duration-300">
      <div className="relative mb-4 overflow-hidden rounded shadow-[0_8px_24px_rgb(0_0_0_/_50%)]">
        <Image
          src="https://e-cdns-images.dzcdn.net/images/playlist/3f37965cca5eb8ab006ae60183ab81ab/250x250-000000-80-0-0.jpg"
          alt="Playlist"
          draggable="false"
          width={200}
          height={200}
        />
        <button
          aria-label="Start playing"
          className="bg-spotigreen absolute bottom-2 right-2 z-10 flex size-12 translate-y-2 cursor-default items-center justify-center rounded-full opacity-0 shadow-[0_8px_8px_rgb(0_0_0_/_30%)] transition-all hover:scale-105 hover:brightness-105 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <PlayNowIcon role="img" aria-hidden className="size-6 text-black" />
        </button>
      </div>
      <div className="flex w-full items-center justify-between">
        <Link href="" draggable="false" title="Chill Mix" className="font-bold">
          <p>Chill Mix</p>
          <p className="mt-2 text-sm font-normal text-foreground">
            Julia Wolf, Khalid, ayokay and more
          </p>
          <span aria-hidden className="absolute inset-0" />
        </Link>
      </div>
    </div>
  );
}
