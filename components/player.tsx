import Image from "next/image";
import Link from "next/link";
import * as Slider from "@radix-ui/react-slider";

import ArrowIcon from "@/assets/icons/arrow.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";
import PlayIcon from "@/assets/icons/play-now.svg";
import ShuffleIcon from "@/assets/icons/shuffle.svg";
import SkipBackIcon from "@/assets/icons/skip-back.svg";
import SkipForwardIcon from "@/assets/icons/skip-forward.svg";
import RepeatIcon from "@/assets/icons/repeat.svg";
import QueueIcon from "@/assets/icons/queue.svg";
import DeviceIcon from "@/assets/icons/device.svg";
import VolumeIcon from "@/assets/icons/volume.svg";
import MuteIcon from "@/assets/icons/mute.svg";

export default function Player() {
  return (
    <footer className="z-10 flex h-[90px] w-full items-center border-t border-secondary bg-spotidark px-4 [grid-area:player]">
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
          className="flex size-8 flex-shrink-0 items-center justify-center hover:text-white"
        >
          <FavoriteIcon role="img" aria-hidden className="size-4" />
        </button>
      </div>
      <div className="w-2/5 max-w-[722px] flex-shrink-0">
        <div className="mb-2 flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <button
              role="switch"
              aria-checked="false"
              aria-label="Shuffle"
              className="flex size-8 items-center justify-center text-[hsla(0,0%,100%,.7)] hover:text-white"
            >
              <ShuffleIcon role="img" aria-hidden className="size-4" />
            </button>
            <button
              role="switch"
              aria-checked="false"
              aria-label="Skip back"
              className="flex size-8 items-center justify-center text-[hsla(0,0%,100%,.7)] hover:text-white"
            >
              <SkipBackIcon role="img" aria-hidden className="size-4" />
            </button>
          </div>
          <button className="flex size-8 items-center justify-center rounded-full bg-white hover:scale-105">
            <PlayIcon role="img" aria-hidden className="size-5 text-black" />
          </button>
          <div className="flex items-center justify-center gap-2">
            <button
              role="switch"
              aria-checked="false"
              aria-label="Skip forward"
              className="flex size-8 items-center justify-center text-[hsla(0,0%,100%,.7)] hover:text-white"
            >
              <SkipForwardIcon role="img" aria-hidden className="size-4" />
            </button>
            <button
              role="switch"
              aria-checked="false"
              aria-label="REpeat"
              className="flex size-8 items-center justify-center text-[hsla(0,0%,100%,.7)] hover:text-white"
            >
              <RepeatIcon role="img" aria-hidden className="size-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs">0:00</span>
          <Slider.Root
            className="group relative flex h-1 w-full touch-none select-none items-center"
            name="Progress"
            defaultValue={[0]}
            max={100}
            step={0.1}
          >
            <Slider.Track className="relative h-1 grow rounded-full bg-[hsla(0,0%,100%,.3)]">
              <Slider.Range className="absolute h-full rounded-full bg-white group-hover:bg-spotigreen" />
            </Slider.Track>
            <Slider.Thumb
              className="hover:bg-violet3 block size-3 rounded-[10px] bg-white opacity-0 shadow-[0_2px_4px_0_rgb(0_0_0_/_50%)] focus:outline-none group-hover:opacity-100"
              aria-label="Volume"
            />
          </Slider.Root>
          <span className="text-xs">3:46</span>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <button
          aria-label="Queue"
          className="flex size-8 items-center justify-center hover:text-white"
        >
          <QueueIcon role="img" aria-hidden className="size-4" />
        </button>
        <button
          aria-label="Device"
          className="flex size-8 items-center justify-center hover:text-white"
        >
          <DeviceIcon role="img" aria-hidden className="size-4" />
        </button>
        <div className="flex items-center">
          <button
            aria-label="Mute"
            className="flex size-8 items-center justify-center hover:text-white"
          >
            <VolumeIcon role="img" aria-hidden className="size-4" />
            <MuteIcon role="img" aria-hidden className="hidden size-4" />
          </button>
          <Slider.Root
            className="group relative flex h-1 w-24 touch-none select-none items-center"
            name="Volume"
            defaultValue={[0]}
            max={100}
            step={0.1}
          >
            <Slider.Track className="relative h-1 grow rounded-full bg-[hsla(0,0%,100%,.3)]">
              <Slider.Range className="absolute h-full rounded-full bg-white group-hover:bg-spotigreen" />
            </Slider.Track>
            <Slider.Thumb
              className="hover:bg-violet3 block size-3 rounded-[10px] bg-white opacity-0 shadow-[0_2px_4px_0_rgb(0_0_0_/_50%)] focus:outline-none group-hover:opacity-100"
              aria-label="Volume"
            />
          </Slider.Root>
        </div>
      </div>
    </footer>
  );
}
