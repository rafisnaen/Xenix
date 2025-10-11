import { GraduationCap, Users, Lightbulb, MessageSquare, Target, Clock, BookOpen } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Users, label: "Collaboration" },
    { icon: Lightbulb, label: "Problem-Solving" },
    { icon: MessageSquare, label: "Communication" },
    { icon: Target, label: "Adaptability" },
    { icon: Target, label: "Attention to Detail" },
    { icon: Clock, label: "Time Discipline" },
    { icon: BookOpen, label: "Continuous Learning" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio & Education */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-card p-8 rounded-2xl border border-primary/20 card-glow">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently in my fifth semester at BINUS University, I'm specializing in 
                Software Engineering. I love architecting systems that merge scalability 
                with smart design. My long-term focus is mastering AI and Web3 technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of technology to solve real-world problems and 
                create meaningful impact. Whether it's building intelligent systems or 
                crafting seamless user experiences, I'm always eager to learn and grow.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-secondary/20 card-glow">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold text-secondary">Education</h3>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">B.S. in Computer Science</h4>
                <p className="text-muted-foreground mb-1">Software Engineering Specialization</p>
                <p className="text-primary font-medium mb-1">BINUS University</p>
                <p className="text-sm text-muted-foreground">Expected Graduation: June 2027</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card p-8 rounded-2xl border border-accent/20 card-glow h-full">
              <h3 className="text-2xl font-bold mb-6 text-accent">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.label}
                    className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-muted transition-all group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <skill.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{skill.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-cyber rounded-xl border border-primary/30">
                <p className="text-center text-sm text-muted-foreground">
                  "Always learning, always growing, always innovating"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
