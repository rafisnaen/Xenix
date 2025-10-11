import { Mail, Linkedin, Github, MessageCircle, Instagram } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "Message Me !",
      href: "mailto:rafi.isnaen07@gmail.com",
      color: "primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Let's Connect !",
      href: "https://linkedin.com/in/rafiisnaen",
      color: "secondary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Unwrap Space !",
      href: "https://github.com/rafisnaen",
      color: "accent",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "Chat Telegram !",
      href: "t.me/Emptymoonnn",
      color: "primary",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@rafisnaen",
      href: "https://instagram.com/rafisnaen",
      color: "secondary",
    },
  ];

  return (
    <section id="contact" className="pt-24 pb-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out
            through any of these channels.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="bg-card p-8 rounded-2xl border border-transparent animate-[glowing-border-animation_4s_infinite_ease-in-out]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {contacts.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center gap-4 p-4 bg-muted/50 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-muted transition-all group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-${contact.color}/10 border border-${contact.color}/30 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <contact.icon
                      className={`w-8 h-8 text-${contact.color}`}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">
                      {contact.label}
                    </p>
                    <p className="text-sm text-muted-foreground break-all">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;