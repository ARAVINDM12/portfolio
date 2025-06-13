"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  // Show scroll-to-top after user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.footer
      className="relative w-full border-t border-border bg-background text-muted-foreground py-10 px-6 mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* ABOUT */}
        <div>
          <h4 className="text-base font-semibold text-primary mb-2">
            Aravind M
          </h4>
          <p>
            Passionate developer focused on AI, full-stack apps, and impactful user experiences.
            Loves solving real-world problems with clean design and scalable code.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-base font-semibold text-primary mb-2">
            Quick Links
          </h4>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ARAVINDM12"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="text-base font-semibold text-primary mb-2">
            Connect
          </h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:aravindm4567@gmail.com" className="hover:text-primary transition">
                aravindm4567@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github className="w-4 h-4 text-primary" />
              <a href="https://github.com/ARAVINDM12" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                github.com/ARAVINDM12
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-primary" />
              <a href="https://linkedin.com/in/aravindm12" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                linkedin.com/in/aravindm12
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+919383496183" className="hover:text-primary transition">
                +91 93834 96183
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      {showTop && (
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-primary text-white shadow-lg transition"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Aravind M. All rights reserved.
      </div>
    </motion.footer>
  )
}
