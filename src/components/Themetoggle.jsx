// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  )

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains("dark")) {
      html.classList.remove("dark")
      setIsDark(false)
    } else {
      html.classList.add("dark")
      setIsDark(true)
    }
  }

  useEffect(() => {
    // Set dark as default on initial load
    document.documentElement.classList.add("dark")
    setIsDark(true)
  }, [])

  return (
    <Button onClick={toggleTheme} variant="outline">
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </Button>
  )
}
