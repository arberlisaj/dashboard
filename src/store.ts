import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthStore {
  user: string;
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
  login: (username: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      theme:'dark',
      setTheme: (theme) => set(() => ({ theme })),
      user: '',
      login: (username) => set(() => ({ user: username })),
      logout: () => set(() => ({ user: '' })),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useAuthStore;
