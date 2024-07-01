"use client";

import PlayIcon from "@/assets/icons/play-now.svg";
import PauseIcon from "@/assets/icons/pause.svg";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { getTracklist } from "@/app/actions";
import usePlayer from "@/app/store";
import { TracklistResponse } from "@/app/types";
import { cn } from "@/lib/utils";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  playlistId: number;
}

export default function PlayButton({ playlistId, ...rest }: Props) {
  const currentPlaylistId = usePlayer((state) => state.currentPlaylist);
  const playing = usePlayer((state) => state.playing);

  const stop = usePlayer((state) => state.stop);
  const pause = usePlayer((state) => state.pause);
  const keepPlaying = usePlayer((state) => state.keepPlaying);
  const setTracks = usePlayer((state) => state.setTracks);
  const setPlaylistId = usePlayer((state) => state.setPlaylist);

  const handleClick = () => {
    if (currentPlaylistId === playlistId) {
      playing ? pause() : keepPlaying();
    } else {
      playPlaylist();
    }
  };

  const playPlaylist = async () => {
    const tracklist: TracklistResponse = await getTracklist(playlistId);
    stop();
    setPlaylistId(playlistId);
    setTracks(tracklist.data);
  };

  return (
    <button
      aria-label="Start playing"
      onClick={handleClick}
      {...rest}
      className={cn(
        rest.className,
        "text-black",
        currentPlaylistId === playlistId &&
          playing &&
          "translate-y-0 opacity-100",
      )}
    >
      {currentPlaylistId === playlistId && playing ? (
        <PauseIcon role="img" aria-hidden className="size-6" />
      ) : (
        <PlayIcon role="img" aria-hidden className="size-6" />
      )}
    </button>
  );
}
