"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Portfolio() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      category: "ui-design",
      image: "/modern-ecommerce-dashboard.png",
      description:
        "A comprehensive admin dashboard for managing online stores with analytics and inventory management.",
      technologies: ["Figma", "React", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "ui-design",
      image: "/mobile-banking-app.png",
      description: "User-friendly mobile banking application with focus on security and accessibility.",
      technologies: ["Figma", "React Native", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "SaaS Landing Page",
      category: "web-dev",
      image: "/modern-saas-landing-page.png",
      description: "High-converting landing page for a B2B SaaS platform with integrated analytics.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Task Management Tool",
      category: "web-dev",
      image: "/task-management-app.png",
      description: "Collaborative project management tool with real-time updates and team features.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Restaurant Website",
      category: "web-dev",
      image: "/restaurant-website.png",
      description: "Elegant restaurant website with online reservation system and menu management.",
      technologies: ["Next.js", "Sanity CMS", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Fitness App Design",
      category: "ui-design",
      image: "/fitness-tracking-app.png",
      description: "Motivational fitness tracking app with social features and workout plans.",
      technologies: ["Figma", "Principle", "After Effects"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ui-design", label: "UI Design" },
    { id: "web-dev", label: "Web Development" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4"
            whileHover={{
              scale: 1.05,
              rotateX: 5,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            My Portfolio
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A selection of projects that showcase my design and development skills across various industries and
            platforms.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="transition-all duration-200 shadow-lg"
              >
                {category.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                }}
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 border-2 border-transparent hover:border-primary/20">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div whileHover={{ scale: 1.2, rotateZ: 360 }} transition={{ duration: 0.3 }}>
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2, rotateZ: -360 }} transition={{ duration: 0.3 }}>
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <motion.h3
                      className="font-heading font-semibold text-xl text-card-foreground mb-2"
                      whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "hsl(var(--accent) / 0.2)",
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
