import { create } from "zustand";
import { Track } from "@/app/types";
import { Howl, Howler } from "howler";

interface State {
  player?: any;
  tracks?: Track[];
  pivot?: number;
  currentPlaylist?: number;
  playing?: boolean;
  progress?: number;
  volume?: number;

  play: () => void;
  stop: () => void;
  pause: () => void;
  keepPlaying: () => void;
  setTracks: (tracks: Track[]) => void;
  setPlaylist: (id: number) => void;
  setVolume: (volume: number) => void;
  skipBack: () => void;
  skipForward: () => void;
}

const usePlayer = create<State>((set, get) => ({
  volume: 100,
  setVolume: (volume) => {
    set({ volume });
  },
  setTracks: (tracks) => {
    set({ tracks, pivot: 0 });
    get().play();
  },
  stop: () => {
    get().player?.stop();
    set({ player: undefined });
  },
  pause: () => get().player?.pause(),
  keepPlaying: () => get().player?.play(),
  setPlaylist: (id) => set({ currentPlaylist: id }),
  skipBack: () => {
    if (get().pivot === 0) return;
    set({ pivot: (get().pivot || 0) - 1 });
    get().stop();
    get().play();
  },
  skipForward: () => {
    if (get().pivot === (get().tracks?.length || 1) - 1) return;
    set({ pivot: (get().pivot || 0) + 1 });
    get().stop();
    get().play();
  },
  play: () => {
    const player = new Howl({
      format: ["mp3"],
      autoplay: true,
      volume: 0.5,
      src: [get().tracks?.[get()?.pivot || 0].preview || ""],
      onend: () => {
        if (get().pivot === (get().tracks?.length || 1) - 1) {
          set({
            pivot: 0,
            player: undefined,
            playing: false,
            tracks: undefined,
            currentPlaylist: undefined,
          });
          return;
        }
        set({ pivot: (get().pivot || 0) + 1 });
        get().play();
      },
      onplay: () => {
        set({ playing: true });
      },
      onpause: () => {
        set({ playing: false });
      },
      onloaderror: () => {
        get().skipForward();
      },
      onplayerror: () => {
        get().skipForward();
      },
    });
    player.play();
    set({ player });
  },
}));

export default usePlayer;
