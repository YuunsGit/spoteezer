import Image from "next/image";
import Link from "next/link";
import PlayNowIcon from "@/assets/icons/play-now.svg";

export default function Home() {
  return (
    <section className="px-8 pt-6">
      <h2 className="text-[32px] font-bold leading-tight">Good afternoon</h2>
      <div className="@4xl:gap-y-4 @4xl:grid-cols-3 mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="@4xl:h-20 group relative flex h-16 overflow-hidden rounded bg-[hsla(0,0%,100%,.1)] transition-colors duration-300 hover:bg-[hsla(0,0%,100%,.2)]"
            >
              <Image
                src="https://e-cdns-images.dzcdn.net/images/playlist/3f37965cca5eb8ab006ae60183ab81ab/250x250-000000-80-0-0.jpg"
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
                  title="Chill Mix"
                  className="font-bold"
                >
                  Chill Mix
                  <div aria-hidden className="absolute inset-0" />
                </Link>
                <button className="bg-spotigreen z-10 flex size-12 cursor-default items-center justify-center rounded-full opacity-0 shadow-[0_8px_8px_rgb(0_0_0_/_30%)] transition-opacity hover:scale-105 hover:brightness-105 group-hover:opacity-100">
                  <PlayNowIcon
                    role="img"
                    aria-hidden
                    className="size-6 text-black"
                  />
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
