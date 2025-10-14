import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { projects } from "@/data/projects"; // Mengimpor data dari file terpisah

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web", "Mobile", "AI & Data"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleGithubClick = (project) => {
    if (!project.isGithubAvailable) {
      toast({
        title: <span className="text-primary">Notification 🔔</span>,
        description: "GitHub for this project is not available yet.",
        duration: 3000,
      });
    } else {
      window.open(project.github, "_blank");
    }
  };

  return (
    <section id="projects" className="pt-24 pb-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Uncover <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto rounded-full"></div>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-slide-up">
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

        {/* Grid Proyek */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card p-5 rounded-2xl border border-primary/20 card-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 bg-black/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between mb-3">
                <div className={`px-2.5 py-0.5 bg-${project.color}/10 border border-${project.color}/30 rounded-full text-xs text-${project.color}`}>
                  {project.category}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10"
                    onClick={() => handleGithubClick(project)}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10"
                    onClick={() => window.open(project.projectLink, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
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