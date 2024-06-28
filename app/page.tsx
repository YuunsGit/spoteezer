import HomeIcon from "@/assets/icons/home.svg";
import SearchIcon from "@/assets/icons/search.svg";
import LibraryIcon from "@/assets/icons/library.svg";
import CreatePlaylistIcon from "@/assets/icons/create-playlist.svg";
import LikedSongsIcon from "@/assets/icons/liked-songs.svg";
import Link from "next/link";

const playlists = [
  "Chill Mix",
  "Insta Hits",
  "Your Top Songs 2021",
  "Mellow Songs",
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

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <header className="sticky max-h-screen w-[310px] bg-black px-8 pt-11">
        <section className="border-b border-[#282828] py-5">
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
                  href="/"
                  className="flex items-center gap-6 text-lg font-bold leading-normal transition-colors hover:text-white"
                >
                  <SearchIcon className="size-8 p-1" />
                  Search
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-6 text-lg font-bold leading-normal transition-colors hover:text-white"
                >
                  <LibraryIcon className="size-8 p-1" />
                  Library
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-11 space-y-5">
            <button className="flex items-center gap-6 text-lg font-bold leading-normal transition-colors hover:text-white">
              <CreatePlaylistIcon className="size-8" />
              Create Playlist
            </button>
            <button className="flex items-center gap-6 text-lg font-bold leading-normal transition-colors hover:text-white">
              <LikedSongsIcon className="size-8" />
              Liked Songs
            </button>
          </div>
        </section>
        <section className="mt-6">
          <ul>
            {playlists.map((playlist) => (
              <li key={playlist} className="mt-4">
                <button className="text-lg leading-normal transition-colors hover:text-white">
                  {playlist}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </header>
      <main className="flex-grow"></main>
      <div className="w-0 max-w-[346px]"></div>
    </div>
  );
}
