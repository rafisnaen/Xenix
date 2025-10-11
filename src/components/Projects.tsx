import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "BukaPajak",
      description: "A Web3 tax transparency platform with real-time data visualization.",
      tech: ["React", "Next.js", "TailwindCSS", "Web3"],
      category: "Web",
      color: "primary",
    },
    {
      title: "SocMedVA",
      description: "An AI-integrated voice assistant app for elderly social media users.",
      tech: ["Flutter", "Python", "Google AI Studio"],
      category: "Mobile",
      color: "secondary",
    },
    {
      title: "Chattipus Bottotipus",
      description: "An advanced chatbot with customizable LLM settings and auto-summarization.",
      tech: ["Python", "LangChain", "OpenRouter"],
      category: "AI",
      color: "accent",
    },
    {
      title: "Tunaskarsa",
      description: "A gamified parental screen-time management app.",
      tech: ["Flutter"],
      category: "Mobile",
      color: "primary",
    },
    {
      title: "LogTech",
      description: "Database architecture for a digital logistics system transformation.",
      tech: ["MySQL"],
      category: "Research",
      color: "secondary",
    },
    {
      title: "Teman Usaha",
      description: "AI-powered investment platform with fraud detection and credit scoring.",
      tech: ["Python", "Machine Learning", "Flask"],
      category: "AI",
      color: "accent",
    },
  ];

  const categories = ["All", "Web", "Mobile", "AI", "Research"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`${
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "border-primary/30 hover:bg-primary/10"
              } transition-all`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card p-6 rounded-2xl border border-primary/20 card-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`px-3 py-1 bg-${project.color}/10 border border-${project.color}/30 rounded-full text-sm text-${project.color}`}>
                  {project.category}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-muted text-xs rounded-md border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
