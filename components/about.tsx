"use client"

import { Card } from "@/components/ui/card"
import { Code, Palette, Smartphone, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  const skills = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with a focus on user experience.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Building responsive, performant websites using modern technologies and best practices.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile First",
      description: "Designing and developing with mobile users in mind, ensuring seamless experiences across devices.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Optimizing for speed and efficiency to deliver fast, smooth user experiences.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 18,
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
              color: "hsl(var(--primary))",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a passionate designer and developer with 5+ years of experience creating digital solutions that combine
            beautiful design with robust functionality.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h3
              className="font-heading font-semibold text-2xl text-foreground"
              whileHover={{
                scale: 1.02,
                color: "hsl(var(--primary))",
              }}
              transition={{ duration: 0.2 }}
            >
              Crafting Digital Experiences
            </motion.h3>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              With a background in both design and development, I bridge the gap between creative vision and technical
              implementation. I believe great products are born from the intersection of user needs, business goals, and
              technical possibilities.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              When I'm not designing or coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the design and development community.
            </motion.p>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{
              rotateY: 5,
              rotateX: 5,
              scale: 1.02,
            }}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            <motion.img
              src="/prince.jpeg"
              alt="Alex Morgan"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.7 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                rotateX: 10,
                rotateY: 5,
                scale: 1.05,
              }}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <Card className="p-6 text-center hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 border-2 border-transparent hover:border-primary/20">
                <motion.div
                  className="text-primary mb-4 flex justify-center"
                  whileHover={{
                    scale: 1.2,
                    rotateY: 360,
                    color: "hsl(var(--accent))",
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>
                <motion.h4
                  className="font-heading font-semibold text-lg text-card-foreground mb-2"
                  whileHover={{
                    scale: 1.05,
                    color: "hsl(var(--primary))",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.title}
                </motion.h4>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
