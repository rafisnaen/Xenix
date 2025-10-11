"use client";

import {
  Users,
  Lightbulb,
  MessageSquare,
  Target,
  Clock,
  BookOpen,
  Shuffle,
  TrendingUp,
} from "lucide-react";

const skills = [
  { icon: Users, label: "Collaboration" },
  { icon: Lightbulb, label: "Problem-Solving" },
  { icon: MessageSquare, label: "Communication" },
  { icon: Shuffle, label: "Adaptability" },
  { icon: Target, label: "Attention to Detail" },
  { icon: Clock, label: "Time Discipline" },
  { icon: BookOpen, label: "Continuous Learning" },
  { icon: TrendingUp, label: "Growth Mindset" },
];

const techStack = [
  { name: "Python", src: "/logos/python.svg" },
  { name: "Java", src: "/logos/java.svg" },
  { name: "C", src: "/logos/c.svg" },
  { name: "HTML", src: "/logos/html.svg" },
  { name: "CSS", src: "/logos/css.svg" },
  { name: "Tailwind CSS", src: "/logos/tailwind.svg" },
  { name: "React", src: "/logos/react.svg" },
  { name: "Next.js", src: "/logos/nextjs.svg" },
  { name: "Flutter", src: "/logos/flutter.svg" },
  { name: "TypeScript", src: "/logos/typescript.svg" },
  { name: "MySQL", src: "/logos/mysql.svg" },
  { name: "JavaScript", src: "/logos/javascript.svg" },
  { name: "TensorFlow", src: "/logos/tensorflow.svg" },
  { name: "Git", src: "/logos/git.svg" },
  { name: "GitHub", src: "/logos/github.svg" },
  { name: "Flask", src: "/logos/flask.svg" },
];

const AboutSkills = () => {
  return (
    <div className="bg-card p-6 rounded-2xl border border-accent/20 card-glow h-full flex flex-col">
      <h3 className="text-xl font-bold mb-4 text-accent">Soft Skills</h3>

      {/* Soft Skills */}
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div
            key={skill.label}
            className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-muted transition-all group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <skill.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{skill.label}</span>
          </div>
        ))}
      </div>

      {/* Tech Stack Carousel */}
      <div className="mt-auto pt-6">
        <h4 className="text-base font-bold mb-4 text-center text-accent/80">
          Tech Expertise
        </h4>

        <div className="scroller tech-carousel-glow w-full rounded-2xl p-3">
          <div className="scroller-inner">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="mx-4 flex h-14 w-14 items-center justify-center rounded-xl bg-muted/70 border border-primary/10 shadow-md hover:shadow-[0_0_12px_hsl(var(--primary)/0.4)] transition-all cursor-pointer"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="object-contain w-10 h-10 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;