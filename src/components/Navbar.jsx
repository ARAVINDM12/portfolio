import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Folder, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isDark, setIsDark] = useState(true)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Folder className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ]

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const enabled = savedTheme === "dark" || (!savedTheme && prefersDark)
    setIsDark(enabled)
    document.documentElement.classList.toggle("dark", enabled)
  }, [])

  const toggleTheme = () => {
    const nextTheme = !isDark
    setIsDark(nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme)
    localStorage.setItem("theme", nextTheme ? "dark" : "light")
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 50)
      setLastScrollY(currentScrollY)

      let current = "home"
      for (const item of navItems) {
        const section = document.getElementById(item.id)
        if (section) {
          const offsetTop = section.offsetTop - 100
          const offsetBottom = offsetTop + section.offsetHeight
          if (currentScrollY >= offsetTop && currentScrollY < offsetBottom) {
            current = item.id
            break
          }
        }
      }
      setActiveSection(current)
    }

    const handleMouseMove = (e) => {
      if (e.clientY <= 50) {
        setShowNavbar(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.header
          className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1
              className="text-xl font-bold text-primary cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Aravind M
            </h1>

            <nav className="hidden md:flex items-center gap-4 text-sm">
              {navItems.map(({ id, label, icon }) => (
                <Button
                  key={id}
                  variant={activeSection === id ? "secondary" : "ghost"}
                  className="capitalize flex items-center gap-1"
                  onClick={() => scrollToSection(id)}
                >
                  {icon}
                  {label}
                </Button>
              ))}
              <Button variant="outline" size="icon" onClick={toggleTheme}>
                {isDark ? "🌙" : "☀️"}
              </Button>
            </nav>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden px-6 pb-4 flex flex-col gap-2 bg-background"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {navItems.map(({ id, label, icon }) => (
                  <Button
                    key={id}
                    variant={activeSection === id ? "secondary" : "ghost"}
                    className="justify-start flex gap-2 text-sm"
                    onClick={() => scrollToSection(id)}
                  >
                    {icon}
                    {label}
                  </Button>
                ))}
                <Button variant="outline" size="sm" onClick={toggleTheme}>
                  {isDark ? "🌙 Dark" : "☀️ Light"}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
