import { useState } from "react";
import { Mail, Linkedin, Github, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "rafi.isnaen@example.com",
      href: "mailto:rafi.isnaen@example.com",
      color: "primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rafiisnaen",
      href: "https://linkedin.com/in/rafiisnaen",
      color: "secondary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rafisnaen",
      href: "https://github.com/rafisnaen",
      color: "accent",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "t.me/Emptymoonnn",
      href: "https://t.me/Emptymoonnn",
      color: "primary",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out
            through any of these channels or send me a message below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            <div className="bg-card p-8 rounded-2xl border border-primary/20 card-glow">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-muted transition-all group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-${contact.color}/10 border border-${contact.color}/30 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <contact.icon className={`w-6 h-6 text-${contact.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {contact.label}
                      </p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-cyber p-8 rounded-2xl border border-primary/30">
              <h4 className="text-xl font-bold mb-4">Let's Build Something Amazing</h4>
              <p className="text-muted-foreground">
                Whether you need a fullstack application, AI integration, or just
                want to discuss the future of technology, I'm always excited to
                connect with fellow innovators.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl border border-primary/20 card-glow space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted border-primary/20 focus:border-primary glow-border"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted border-primary/20 focus:border-primary glow-border"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-muted border-primary/20 focus:border-primary glow-border resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group"
              >
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
