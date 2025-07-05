import { create } from "zustand";

interface useStore {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}

export const useStore = create<useStore>((set) => ({
  isLoading: false,
  setLoading: (value: boolean) => set({ isLoading: value }),
}));
