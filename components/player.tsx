"use client";

import Image from "next/image";
import Link from "next/link";
import * as Slider from "@radix-ui/react-slider";
import usePlayer from "@/app/store";
import { Howler } from "howler";

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
import PauseIcon from "@/assets/icons/pause.svg";
import UnknownTrack from "@/assets/icons/unknown-track.svg?url";
import { useEffect, useRef, useState } from "react";

export default function Player() {
  const [progress, setProgress] = useState(0);
  const progressTracker = useRef<ReturnType<typeof setInterval>>();

  const player = usePlayer((state) => state.player);
  const volume = usePlayer((state) => state.volume);
  const currentPlaylistId = usePlayer((state) => state.currentPlaylist);
  const playing = usePlayer((state) => state.playing);
  const tracks = usePlayer((state) => state.tracks);
  const pivot = usePlayer((state) => state.pivot);

  const setVolume = usePlayer((state) => state.setVolume);
  const keepPlaying = usePlayer((state) => state.keepPlaying);
  const pause = usePlayer((state) => state.pause);
  const skipBack = usePlayer((state) => state.skipBack);
  const skipForward = usePlayer((state) => state.skipForward);

  const handlePlayButton = () => {
    if (playing) {
      pause();
    } else if (currentPlaylistId) {
      keepPlaying();
    }
  };

  useEffect(() => {
    if (player) {
      setProgress(0);
      progressTracker.current = setInterval(() => {
        setProgress(Math.round((player.seek() / player.duration()) * 100));
      }, 1000);
    }
    return () => clearInterval(progressTracker.current);
  }, [pivot, player]);

  useEffect(() => {
    if (volume !== undefined) Howler.volume(volume / 100);
  }, [volume]);

  useEffect(() => {
    const handleSpacebarPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        handlePlayButton();
      }
    };

    window.addEventListener("keydown", handleSpacebarPress);
    return () => {
      window.removeEventListener("keydown", handleSpacebarPress);
    };
  }, [playing, currentPlaylistId, pause, keepPlaying, handlePlayButton]);

  return (
    <footer
      aria-label="Player controls"
      className="relative z-10 flex h-[90px] w-full items-center border-t border-secondary bg-spotidark px-4 [grid-area:player]"
    >
      <div className="flex flex-1 items-center">
        {currentPlaylistId && (
          <>
            <div className="group relative flex-shrink-0 shadow-[0_0_10px_rgb(0_0_0_/_30%)]">
              <Image
                src={tracks?.[pivot || 0]?.album.cover_medium || UnknownTrack}
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
                className="absolute right-1 top-1 z-20 flex size-6 items-center justify-center rounded-full bg-black bg-opacity-80 opacity-0 hover:scale-110 hover:bg-opacity-70 disabled:pointer-events-none disabled:opacity-50 group-hover:opacity-100"
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
                {tracks?.[pivot || 0]?.title || ""}
              </Link>
              <Link
                href=""
                draggable="false"
                className="line-clamp-1 overflow-hidden break-all text-xs hover:underline"
              >
                {tracks?.[pivot || 0]?.artist.name || ""}
              </Link>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked="false"
              aria-label="Add to favorites"
              className="flex size-8 flex-shrink-0 items-center justify-center hover:text-white disabled:pointer-events-none disabled:opacity-50"
            >
              <FavoriteIcon role="img" aria-hidden className="size-4" />
            </button>
          </>
        )}
      </div>
      <div className="w-2/5 max-w-[722px] flex-shrink-0">
        <div className="mb-2 flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <button
              role="switch"
              aria-checked="false"
              aria-label="Shuffle"
              className="flex size-8 items-center justify-center text-[hsla(0,0%,100%,.7)] hover:text-white disabled:pointer-events-none disabled:opacity-50"
            >
              <ShuffleIcon role="img" aria-hidden className="size-4" />
            </button>
            <button
              disabled={
                !currentPlaylistId ||
                !tracks?.length ||
                pivot === null ||
                pivot === 0
              }
              onClick={skipBack}
              role="switch"
              aria-checked="false"
              aria-label="Skip back"
              className="flex size-8 items-center justify-center text-[hsla(0,0%,100%,.7)] outline-none ring-0 hover:text-white disabled:pointer-events-none disabled:opacity-50"
            >
              <SkipBackIcon role="img" aria-hidden className="size-4" />
            </button>
          </div>
          <button
            onClick={handlePlayButton}
            disabled={
              !currentPlaylistId ||
              !tracks?.length ||
              pivot === null ||
              pivot === tracks.length - 1
            }
            aria-label="Play"
            className="flex size-8 items-center justify-center rounded-full bg-white text-black outline-none ring-0 hover:scale-105 disabled:pointer-events-none disabled:opacity-50"
          >
            {playing ? (
              <PauseIcon role="img" aria-hidden className="size-5" />
            ) : (
              <PlayIcon role="img" aria-hidden className="size-5" />
            )}
          </button>
          <div className="flex items-center justify-center gap-2">
            <button
              disabled={!currentPlaylistId || !tracks?.length || pivot === null}
              onClick={skipForward}
              role="switch"
              aria-checked="false"
              aria-label="Skip forward"
              className="flex size-8 items-center justify-center text-[hsla(0,0%,100%,.7)] outline-none ring-0 hover:text-white disabled:pointer-events-none disabled:opacity-50"
            >
              <SkipForwardIcon role="img" aria-hidden className="size-4" />
            </button>
            <button
              role="switch"
              aria-checked="false"
              aria-label="Repeat"
              className="flex size-8 items-center justify-center text-[hsla(0,0%,100%,.7)] hover:text-white disabled:pointer-events-none disabled:opacity-50"
            >
              <RepeatIcon role="img" aria-hidden className="size-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs">
            {player
              ? new Date(Math.round(player?.seek()) * 1000)
                  .toISOString()
                  .substr(14, 5)
              : "00:00"}
          </span>
          <Slider.Root
            className="group relative flex h-1 w-full touch-none select-none items-center disabled:pointer-events-none"
            name="Progress"
            disabled={!currentPlaylistId || !tracks?.length || pivot === null}
            value={[progress]}
            defaultValue={[0]}
            max={100}
            step={0.1}
          >
            <Slider.Track className="relative h-1 grow rounded-full bg-[hsla(0,0%,100%,.3)]">
              <Slider.Range className="absolute h-full rounded-full bg-white group-hover:bg-spotigreen" />
            </Slider.Track>
            {currentPlaylistId && tracks && pivot !== null && (
              <Slider.Thumb
                className="hover:bg-violet3 block size-3 rounded-[10px] bg-white opacity-0 shadow-[0_2px_4px_0_rgb(0_0_0_/_50%)] focus:outline-none group-hover:opacity-100"
                aria-label="Volume"
              />
            )}
          </Slider.Root>
          <span className="text-xs">00:30</span>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <button
          aria-label="Queue"
          className="flex size-8 items-center justify-center hover:text-white disabled:pointer-events-none disabled:opacity-50"
        >
          <QueueIcon role="img" aria-hidden className="size-4" />
        </button>
        <button
          aria-label="Device"
          className="flex size-8 items-center justify-center hover:text-white disabled:pointer-events-none disabled:opacity-50"
        >
          <DeviceIcon role="img" aria-hidden className="size-4" />
        </button>
        <div className="flex items-center">
          <button
            aria-label="Mute"
            onClick={() => setVolume(volume === 0 ? 100 : 0)}
            className="flex size-8 items-center justify-center hover:text-white disabled:pointer-events-none disabled:opacity-50"
          >
            {volume === 0 ? (
              <MuteIcon role="img" aria-hidden className="size-4" />
            ) : (
              <VolumeIcon role="img" aria-hidden className="size-4" />
            )}
          </button>
          <Slider.Root
            className="group relative flex h-1 w-24 touch-none select-none items-center"
            name="Volume"
            onValueChange={(value) => setVolume(value[0])}
            value={[volume === undefined ? 100 : volume]}
            defaultValue={[100]}
            max={100}
            min={0}
            step={1}
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
