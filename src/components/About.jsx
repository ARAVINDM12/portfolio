import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { Tooltip } from "@/components/ui/tooltip"

export default function About() {
  return (
    <>
      {/* About Me Section */}
      <motion.section
        id="about"
        className="min-h-screen px-6 py-24 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left: Text Content */}
        <div className="flex-[1.2] text-center md:text-left flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            About Me
          </h2>

          <p className="text-lg text-muted-foreground leading-8 mb-6">
            Hey, I’m <span className="text-foreground font-semibold">Aravind M</span>.
            <br /><br />I hail from Kerala — God’s Own Country. I am a web and AI developer.
            I build AI-powered web applications that are fast, functional and user-friendly.
            I like to design with my own style—keeping things fresh, simple, and unique.
            <br /><br />
            My vision is to build tech that solves real problems and makes life simpler,
            smarter, and more enjoyable. I love collaborating with people, organizing
            group events and learning on the go. I'm always on the lookout for new tech
            that challenges me and pushes boundaries!
            <br /><br />
            Outside of tech, I enjoy playing chess — I’m a FIDE-rated player (1522)
            and have hosted several online cash-prize tournaments on Lichess.
          </p>

          <Button size="sm" className="gap-2 w-fit">
            <a href="/Aravind_CV.pdf" download className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Right: Image */}
        <motion.div
          className="flex-[0.8] w-full h-full flex items-stretch"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/profile.jpg"
            alt="Aravind"
            className="w-full h-full object-cover shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* Divider */}
      <div className="w-full max-w-6xl mx-auto border-t border-border mb-12" />

      {/* Skills + Education */}
      <motion.section
        className="w-full max-w-6xl px-6 pb-24 mx-auto grid md:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Technologies Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            💻 Tech Stack
          </h3>

          <div className="space-y-6">
            {/* FRONTEND */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML", "CSS", "JavaScript",
                  "React", "TailwindCSS", "ShadCN",
                  "Framer Motion", "Streamlit", "Kivy", "Tkinter"
                ].map((tech, i) => (
                  <Tooltip key={i} content={tech}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 text-sm bg-muted border border-border rounded-md text-foreground hover:border-primary transition cursor-default"
                    >
                      {tech}
                    </motion.div>
                  </Tooltip>
                ))}
              </div>
            </div>

            {/* BACKEND */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Backend & DB</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "MySQL", "SQLite3", "Node.js", "MongoDB", "Firebase", "Git & GitHub"
                ].map((tech, i) => (
                  <Tooltip key={i} content={tech}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 text-sm bg-muted border border-border rounded-md text-foreground hover:border-primary transition cursor-default"
                    >
                      {tech}
                    </motion.div>
                  </Tooltip>
                ))}
              </div>
            </div>

            {/* AI/ML */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">AI / Machine Learning</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "RAG", "NLP", "Langchain", "Scikit-learn",
                  "NumPy", "Pandas", "Matplotlib", "TensorFlow"
                ].map((tech, i) => (
                  <Tooltip key={i} content={tech}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 text-sm bg-muted border border-border rounded-md text-foreground hover:border-primary transition cursor-default"
                    >
                      {tech}
                    </motion.div>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education + Certification */}
        <div className="text-left flex flex-col justify-center space-y-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              🎓 Education
            </h3>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-1">
              <p><strong className="text-foreground">B.Tech in Computer Science Engineering</strong></p>
              <p>Vellore Institute of Technology (VIT), Vellore</p>
              <p>Expected Graduation: 2026</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">🏅 Certification</h3>
            <p className="text-sm text-muted-foreground">
              Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025] — Udemy
            </p>
          </div>
        </div>
      </motion.section>
    </>
  )
}
