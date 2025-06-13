"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.section
      className="pt-28 px-4 flex flex-col items-center text-center relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hello text */}
      <motion.p
        className="text-lg text-muted-foreground mb-2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hello, this is
      </motion.p>

      {/* Image Container with Gradient Overlay */}
      <div className="relative w-full max-w-3xl h-[105vh] mt-2 mb-6">
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none" />

        {/* Name half-in/half-out of image */}
        <motion.h1
          className="absolute -top-7 left-1/3 -translate-x-1/2 text-5xl md:text-6xl font-bold text-white z-20"
          style={{ textShadow: "0 4px 15px rgba(0, 0, 0, 0.7)" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ARAVIND
        </motion.h1>

        {/* Image */}
        <motion.div
          className="w-full h-full overflow-hidden border-[4px] border-white shadow-xl"

          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <img
            src="/aravind.jpg"
            alt="Aravind M"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Description inside image at bottom */}
        <motion.p
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-base md:text-lg text-white px-4 py-2 bg-black/50 rounded-md max-w-md z-30"
          style={{ backdropFilter: "blur(4px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Full-stack & AI-focused developer passionate about building powerful, intuitive apps across web and mobile.
        </motion.p>
      </div>

      {/* View Projects button */}
      <motion.div
        className="mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button size="lg" onClick={scrollToProjects}>
          View Projects
        </Button>
      </motion.div>
    </motion.section>
  )
}
