import { create } from "zustand";

interface User {
  uid: string;
  email: string;
  role: string;
}

interface UseStore {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useStore = create<UseStore>((set) => ({
  isLoading: false,
  setLoading: (value: boolean) => set({ isLoading: value }),

  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
