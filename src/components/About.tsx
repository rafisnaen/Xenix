import { GraduationCap } from "lucide-react";
import AboutSkills from "./AboutSkills";

const About = () => {
  return (
    <section id="about" className="pt-24 pb-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            CoDeR <span className="gradient-text">Profile</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bio & Education */}
          <div className="space-y-6 animate-slide-up">
            <div className="bg-card p-6 rounded-2xl border border-primary/20 card-glow">
              <h3 className="text-xl font-bold mb-4 text-primary">
                My Journey
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                With over 2 years of experience creating digital solutions
                that solve problems, loving to architect systems that merge
                scalability with smart design.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I believe in the power of technology to solve real-world
                problems and create meaningful impact.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-secondary/20 card-glow">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-7 h-7 text-secondary" />
                <h3 className="text-xl font-bold text-secondary">Education</h3>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  B.S. in Computer Science
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  Software Engineering Specialization
                </p>
                <p className="text-primary text-sm font-medium mb-1">
                  BINUS University
                </p>
                <p className="text-sm text-muted-foreground">
                  Expected Graduation: June 2027
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <AboutSkills />
        </div>
      </div>
    </section>
  );
};

export default About;