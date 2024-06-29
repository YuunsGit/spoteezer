import Link from "next/link";
import HomeIcon from "@/assets/icons/home.svg";
import SearchIcon from "@/assets/icons/search.svg";
import LibraryIcon from "@/assets/icons/library.svg";
import CreatePlaylistIcon from "@/assets/icons/create-playlist.svg";
import LikedSongsIcon from "@/assets/icons/liked-songs.svg";

const playlists = [
  "Chill Mix",
  "Insta Hits",
  "Your Top Songs 2021",
  "Mellow Songs",
  "ratatatatatatatautitotatatatatamutiotatata",
  "Anime Lofi & Chillhop Music",
  "BG Afro “Select” Vibes",
  "Afro “Select” Vibes",
  "Happy Hits!",
  "Deep Focus",
  "Instrumental Study",
  "OST Compilations",
  "Nostalgia for old souled mill...",
  "Mixed Feelings",
];

export default function LeftSidebar() {
  return (
    <section className="flex w-[310px] flex-col overflow-hidden bg-black pt-11 [grid-area:left-sidebar]">
      <div className="mx-8 border-b border-[#282828] py-5">
        <nav>
          <ul className="space-y-5">
            <li>
              <Link
                href="/"
                className="flex items-center gap-6 text-lg font-bold leading-normal transition-colors hover:text-white"
              >
                <HomeIcon className="size-8 p-1" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className="flex items-center gap-6 text-lg font-bold leading-normal transition-colors hover:text-white"
              >
                <SearchIcon className="size-8 p-1" />
                Search
              </Link>
            </li>
            <li>
              <Link
                href="/library"
                className="flex items-center gap-6 text-lg font-bold leading-normal transition-colors hover:text-white"
              >
                <LibraryIcon className="size-8 p-1" />
                Library
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-11 space-y-5">
          <Link
            href=""
            className="flex items-center gap-6 text-lg font-bold leading-normal transition-colors hover:text-white"
          >
            <CreatePlaylistIcon className="size-8" />
            Create Playlist
          </Link>
          <Link
            href=""
            className="flex items-center gap-6 text-lg font-bold leading-normal transition-colors hover:text-white"
          >
            <LikedSongsIcon className="size-8" />
            Liked Songs
          </Link>
        </div>
      </div>
      <ul className="pretty-scroll mt-6 overflow-y-auto overscroll-contain transition-all">
        {playlists.map((playlist) => (
          <li
            key={playlist}
            className="mx-8 mb-4 overflow-hidden [overflow-wrap:anywhere]"
          >
            <Link
              href=""
              className="line-clamp-1 text-lg leading-normal transition-colors hover:text-white"
            >
              {playlist}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
