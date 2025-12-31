"use client"

import { useEffect } from "react"
import { useUIStore } from "@/lib/store/ui-store"

export default function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useUIStore()

  useEffect(() => {
    function handleStorage(e: StorageEvent) {
      if (e.key === "ui-preferences" && e.newValue) {
        const parsed = JSON.parse(e.newValue)
        if (parsed?.state?.theme) {
          setTheme(parsed.state.theme)
        }
      }
    }

    window.addEventListener("storage", handleStorage)
    return () =>
      window.removeEventListener("storage", handleStorage)
  }, [setTheme])

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    )
  }, [theme])

  return (
    <button
      onClick={toggleTheme}
      className="text-sm border px-3 py-1 rounded"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}
