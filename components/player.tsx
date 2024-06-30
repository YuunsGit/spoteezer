import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/assets/icons/arrow.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";

export default function Player() {
  return (
    <footer className="bg-spotidark border-secondary z-10 flex h-[90px] w-full items-center border-t px-4 [grid-area:player]">
      <div className="flex flex-1 items-center">
        <div className="group relative flex-shrink-0 shadow-[0_0_10px_rgb(0_0_0_/_30%)]">
          <Image
            src="https://e-cdns-images.dzcdn.net/images/artist/9a627b35477df2ff71300fe4dabec3d8/250x250-000000-80-0-0.jpg"
            draggable="false"
            alt="artist"
            width={56}
            height={56}
          />
          <Link
            href=""
            draggable="false"
            aria-label="Open track page"
            className="absolute inset-0"
          />
          <button
            aria-label="Expand"
            className="absolute right-1 top-1 z-20 flex size-6 cursor-default items-center justify-center rounded-full bg-black bg-opacity-80 opacity-0 hover:scale-110 hover:bg-opacity-70 group-hover:opacity-100"
          >
            <ArrowIcon
              role="img"
              aria-hidden
              className="size-4 -rotate-90 text-white"
            />
          </button>
        </div>
        <div className="flex flex-col gap-1 px-4">
          <Link
            href=""
            draggable="false"
            className="line-clamp-1 overflow-hidden break-all text-sm text-white hover:underline"
          >
            Battle Symphony
          </Link>
          <Link
            href=""
            draggable="false"
            className="line-clamp-1 overflow-hidden break-all text-xs hover:underline"
          >
            Battle Symphony
          </Link>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked="false"
          aria-label="Add to favorites"
          className="flex-shrink-0"
        >
          <FavoriteIcon
            role="img"
            aria-hidden
            className="size-4 hover:text-white"
          />
        </button>
      </div>
      <div className="flex-1 flex-grow"></div>
      <div className="flex-1"></div>
    </footer>
  );
}
