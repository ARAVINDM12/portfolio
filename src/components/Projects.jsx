import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Expense Tracker",
    description: "A cross-platform expense tracker app with SQLite, analytics and Kivy.",
    tags: ["Python", "Kivy", "SQLite"],
    image: "/expense.png",
    github: "https://github.com/ARAVINDM12/EXPENSE-TRACKER-SE",
    demo: "https://drive.google.com/file/d/1YO6Z_RDg7rN2TVk8GV2VtsqLctD0Hxzy/view"
  },
  {
    title: "RAG Chatbot",
    description: "A Retrieval-Augmented Generation chatbot using LangChain and local models.",
    tags: ["RAG", "LangChain", "Streamlit"],
    image: "/rag.jpeg",
    github: "https://github.com/ARAVINDM12/RAG",
    demo: "https://aravindm12-rag-main-xryndf.streamlit.app/"
  },
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React, Tailwind, Framer Motion and ShadCN UI.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "/portfolio.jpg",
    github: "https://github.com/ARAVINDM12/portfolio",
    demo: "#"
  },
  {
    title: "Lead Enrichment Bot",
    description: "An automated tool that scrapes, enriches, and organizes leads using AI.",
    tags: ["Python", "Gemini API","Webscrapping"],
    image: "/lead.png",
    github: "https://github.com/ARAVINDM12/LEAD-ENRICHMENT-BOT",
    demo: "https://lead-enrichment-bot-am12.streamlit.app/"
  }
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen px-6 py-24 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 15px 35px rgba(0,0,0,0.1)"
            }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <Card className="h-full rounded-md overflow-hidden border border-border shadow-md bg-background">
              <img
                src={project.image}
                onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
                alt={project.title}
                className="w-full h-40 object-cover border-b border-border"
              />
              <CardContent className="p-5 md:p-6">
                <span className="text-xs uppercase text-muted-foreground tracking-wider">
                  Featured Project
                </span>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs px-2 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
