import { create } from "zustand";

interface State {}

const useAppStore = create<State>((set) => ({}));

export default useAppStore;
