"use client"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, MessageCircle } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "princeik.akowe@gmail.com",
      href: "mailto:princeik.akowe@gmail.com",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      content: "+234 806 578 9274",
      href: "https://wa.me/2348065789274",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "San Francisco, CA",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Reach out via email or WhatsApp and let's discuss how we
            can bring your ideas to life.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-card-foreground mb-6 text-center">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-center">
                I'm always interested in new opportunities and exciting projects. Whether you're a startup looking to
                build your first product or an established company wanting to refresh your digital presence, I'd love to
                help.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <Button asChild size="lg" className="h-16 bg-primary hover:bg-primary/90">
                <a href="mailto:princeik.akowe@gmail.com" className="flex items-center justify-center space-x-3">
                  <Mail className="h-6 w-6" />
                  <span>Send Email</span>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-16 border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
              >
                <a
                  href="https://wa.me/2348065789274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center justify-center space-x-4">
                  <div className="text-primary">{info.icon}</div>
                  <div className="text-center">
                    <div className="font-medium text-card-foreground">{info.title}</div>
                    <a href={info.href} className="text-muted-foreground hover:text-accent transition-colors">
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 text-center">
              <h4 className="font-heading font-semibold text-lg text-card-foreground mb-4">Response Time</h4>
              <p className="text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent projects, feel free to reach out via
                WhatsApp directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
