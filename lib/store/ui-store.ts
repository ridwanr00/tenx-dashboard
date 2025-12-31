import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme = "light" | "dark"

type UIState = {
  sidebarOpen: boolean
  theme: Theme
  toggleSidebar: () => void
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarOpen: true,
      theme: "light",

      toggleSidebar: () =>
        set((s) => ({ sidebarOpen: !s.sidebarOpen })),

      toggleTheme: () =>
        set((s) => ({
          theme: s.theme === "light" ? "dark" : "light",
        })),

      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "ui-preferences",
    }
  )
)
