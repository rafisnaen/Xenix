import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Researcher",
      company: "ICCSCI 2025",
      period: "Feb 2025 – Aug 2025",
      description: "Led leukemia image classification research using CNN, YOLOv11, and Vision Transformers. Built AI pipeline and presented at an international conference.",
      color: "primary",
    },
    {
      title: "Teaching Assistant",
      company: "BINUS University",
      period: "Nov 2024 – Jan 2025",
      description: "Taught programming fundamentals and mentored 145+ students in foundational computer science concepts.",
      color: "secondary",
    },
    {
      title: "Web Developer",
      company: "Hology 2.0 Hackathon",
      period: "Aug 2025 – Sep 2025",
      description: "Built BukaPajak, a Web3 tax transparency platform using React and TailwindCSS with real-time data visualization.",
      color: "accent",
    },
    {
      title: "Software Developer",
      company: "INFEST Hackathon",
      period: "Oct 2025 – Present",
      description: "Designed Teman Usaha, an AI-powered investment platform using fraud detection and credit scoring models.",
      color: "primary",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 top-6 w-5 h-5 rounded-full bg-${exp.color} border-4 border-background shadow-glow hidden md:block`}></div>

                  <div className="md:ml-20 bg-card p-6 rounded-2xl border border-primary/20 card-glow">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className={`text-xl font-bold text-${exp.color} mb-1`}>
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
