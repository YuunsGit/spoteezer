/* eslint-disable react-hooks/rules-of-hooks */
import { create } from "zustand";

interface State {
  user?: {
    name: string;
    picture: string;
  };
  setUser: (user: State["user"]) => void;
}

const useAppStore = create<State>((set) => ({
  setUser: (user) => {
    set({ user });
  },
}));

export default useAppStore;
