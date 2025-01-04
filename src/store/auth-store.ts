// store/useAuthStore.ts
import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  role: "admin" | "employee" | null;
  token: string | null;
  login: (token: string, role: "admin" | "employee") => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  role: null,
  token: null,
  login: (token, role) => set({ isAuthenticated: true, role, token }),
  logout: () => set({ isAuthenticated: false, role: null, token: null }),
}));

export default useAuthStore;
