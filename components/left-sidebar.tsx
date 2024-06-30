import Link from "next/link";
import CreatePlaylistIcon from "@/assets/icons/create-playlist.svg";
import LikedSongsIcon from "@/assets/icons/liked-songs.svg";
import SidebarTabs from "@/components/sidebar-tabs";

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

export default function LeftSidebar() {
  return (
    <section
      aria-label="Left sidebar"
      className="flex w-[310px] flex-col overflow-hidden bg-black pt-6 [grid-area:left-sidebar]"
    >
      <div>
        <SidebarTabs />
        <div className="mt-6 px-2">
          <button
            type="button"
            className="flex h-10 items-center gap-4 px-4 text-sm font-bold leading-normal transition-colors hover:text-white"
          >
            <CreatePlaylistIcon role="img" aria-hidden className="size-6" />
            Create Playlist
          </button>
          <Link
            href=""
            draggable={false}
            className="flex h-10 items-center gap-4 px-4 text-sm font-bold leading-normal transition-colors hover:text-white"
          >
            <LikedSongsIcon role="img" aria-hidden className="size-6" />
            Liked Songs
          </Link>
        </div>
      </div>
      <hr className="border-secondary mx-6 mt-2" />
      <ul className="pretty-scroll mt-6 overflow-y-auto overscroll-contain transition-all">
        {playlists.map((playlist) => (
          <li key={playlist} className="px-2">
            <Link
              href=""
              draggable={false}
              className="line-clamp-1 overflow-hidden break-all px-4 text-sm leading-8 transition-colors hover:text-white"
            >
              {playlist}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
