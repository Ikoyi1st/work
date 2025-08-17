"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.1,
            y: mousePosition.y * 0.1,
            scale: [1, 1.2, 1],
          }}
          transition={{
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            x: { duration: 0.3 },
            y: { duration: 0.3 },
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-96 h-96 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 0.05,
            y: -mousePosition.y * 0.05,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            x: { duration: 0.4 },
            y: { duration: 0.4 },
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.08,
            y: mousePosition.y * 0.08,
            scale: [1, 1.3, 1],
          }}
          transition={{
            scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            x: { duration: 0.5 },
            y: { duration: 0.5 },
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1
              className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl text-foreground"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Hi, I'm{" "}
              <motion.span
                className="text-primary inline-block"
                whileHover={{
                  rotateY: 10,
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Akowe Prince
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              UI/UX Designer & Web Developer crafting beautiful, functional digital experiences
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
                <a href="#portfolio">View My Work</a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateX: -5,
                rotateY: -5,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button variant="outline" size="lg" className="shadow-lg bg-transparent">
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { icon: Github, href: "https://github.com/Ikoyi1st" },
              
              { icon: Mail, href: "mailto:princeik.akowe@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-muted-foreground hover:text-accent transition-colors"
                whileHover={{
                  scale: 1.2,
                  rotateY: 360,
                  color: "hsl(var(--accent))",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  rotateY: { duration: 0.6 },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transition: "color 0.3s ease" }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, -10, 0],
          rotateX: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.2,
          rotateY: 180,
        }}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
