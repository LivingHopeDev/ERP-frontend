// store/useAuthStore.ts
import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  role: "admin" | "employee" | null;
  token: string | null;
  login: (token: string, role: "admin" | "employee") => void;
  logout: () => void;
  hydrate: () => void;
  loading: boolean;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  role: null,
  token: null,
  loading: true,
  login: (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    set({ isAuthenticated: true, role, token, loading: false });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    set({ isAuthenticated: false, role: null, token: null, loading: false });
  },

  hydrate: () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role") as "admin" | "employee" | null;
    if (token && role) {
      set({ isAuthenticated: true, token, role, loading: false });
    } else {
      set({ loading: false });
    }
  },
}));

export default useAuthStore;
