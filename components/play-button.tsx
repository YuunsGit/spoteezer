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

export default function PlayButton(props: Props) {
  const currentPlaylistId = usePlayer((state) => state.currentPlaylist);
  const playing = usePlayer((state) => state.playing);

  const stop = usePlayer((state) => state.stop);
  const pause = usePlayer((state) => state.pause);
  const keepPlaying = usePlayer((state) => state.keepPlaying);
  const setTracks = usePlayer((state) => state.setTracks);
  const setPlaylistId = usePlayer((state) => state.setPlaylist);

  const handleClick = () => {
    if (currentPlaylistId === props.playlistId) {
      playing ? pause() : keepPlaying();
    } else {
      playPlaylist();
    }
  };

  const playPlaylist = async () => {
    const tracklist: TracklistResponse = await getTracklist(props.playlistId);
    stop();
    setPlaylistId(props.playlistId);
    setTracks(tracklist.data);
  };

  return (
    <button
      aria-label="Start playing"
      onClick={handleClick}
      {...props}
      className={cn(
        props.className,
        "text-black",
        currentPlaylistId === props.playlistId &&
          playing &&
          "translate-y-0 opacity-100",
      )}
    >
      {currentPlaylistId === props.playlistId && playing ? (
        <PauseIcon role="img" aria-hidden className="size-6" />
      ) : (
        <PlayIcon role="img" aria-hidden className="size-6" />
      )}
    </button>
  );
}
