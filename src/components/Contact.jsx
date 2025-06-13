"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import emailjs from "emailjs-com"
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        "service_12uibas",
        "template_ang22jm",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message
        },
        "U3Q8sLUoidsBm07WM"
      )
      .then(() => {
        toast({ title: "Success", description: "Message sent successfully!" })
        setForm({ name: "", email: "", message: "" })
        setLoading(false)
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Something went wrong.",
          variant: "destructive"
        })
        setLoading(false)
      })
  }

  const contactItems = [
    {
      icon: Mail,
      label: "aravindm4567@gmail.com",
      link: "mailto:aravindm4567@gmail.com"
    },
    {
      icon: Phone,
      label: "+91 9383496183",
      link: "tel:+919383496183"
    },
    {
      icon: Linkedin,
      label: "linkedin.com/in/aravindm12",
      link: "https://linkedin.com/in/aravindm12"
    },
    {
      icon: Github,
      label: "github.com/ARAVINDM12",
      link: "https://github.com/ARAVINDM12"
    }
  ]

  return (
    <motion.section
      id="contact"
      className="min-h-screen px-6 py-24 bg-background flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* LEFT */}
        <motion.div
          className="flex flex-col gap-y-6 p-4 md:p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I’m always open to discussing new opportunities, creative ideas,
              or collaborations. Drop a message and I’ll get back to you soon.
            </p>
          </div>

          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            {contactItems.map(({ icon: Icon, label, link }, idx) => (
              <motion.a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-6 h-6 text-primary"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <span>{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="bg-muted/20 rounded-xl p-8 shadow-sm h-fit"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold mb-2 text-primary">
            Contact Me
          </h3>
          <p className="text-muted-foreground mb-6">
            Fill out the form below and I’ll reach out to you.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                required
              />
            </div>
            <Button type="submit" disabled={loading} className="mt-2">
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>

      {/* MAP */}
      <motion.div
        className="w-full max-w-6xl space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-4 rounded-xl shadow-lg bg-gradient-to-br from-muted/30 via-background to-muted/10 border border-white/10 backdrop-blur-md">
          <h4 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Location
          </h4>
          <p className="text-muted-foreground text-sm mb-4">
            This is me — Based in Kozhikode, Kerala, India
          </p>
          <div className="overflow-hidden rounded-lg border h-64 md:h-80">
            <iframe
              title="Location Map"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=11.289569088981207,75.80871517121919&z=16&output=embed"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
