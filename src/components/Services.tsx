import { Code2, Brain, Smartphone, Sparkles, MessageSquareCode, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layers,
      title: "Software Engineering",
      description: "Designing scalable, reliable software systems with modern architecture patterns and best practices.",
      color: "primary",
    },
    {
      icon: Brain,
      title: "AI Integration & Solutions",
      description: "Building AI pipelines and integrating APIs like Gemini or OpenAI for intelligent applications.",
      color: "secondary",
    },
    {
      icon: Code2,
      title: "Front-End Development",
      description: "Crafting responsive, elegant, and dynamic web interfaces with React, Next.js, and modern frameworks.",
      color: "accent",
    },
    {
      icon: Smartphone,
      title: "Application Development",
      description: "Cross-platform app creation using Flutter for seamless mobile experiences.",
      color: "primary",
    },
    {
      icon: MessageSquareCode,
      title: "Prompt Engineering",
      description: "Structuring optimized AI prompts for better results and more accurate outputs.",
      color: "secondary",
    },
    {
      icon: Sparkles,
      title: "Web3 Solutions",
      description: "Implementing blockchain and decentralized technologies for transparent digital solutions.",
      color: "accent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What I Can Do <span className="gradient-text">For You</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I offer comprehensive development services from ideation to deployment,
            combining technical expertise with creative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card p-6 rounded-2xl border border-primary/20 card-glow group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-${service.color}/10 border border-${service.color}/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-6 h-6 text-${service.color}`} />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-sm text-primary font-medium group-hover:translate-x-1 inline-block transition-transform">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
