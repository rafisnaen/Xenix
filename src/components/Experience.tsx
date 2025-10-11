import { useState, useRef, useEffect } from "react";
import { Briefcase, Calendar } from "lucide-react";

// Mengimpor gambar-gambar yang relevan
import compfest17Image from "@/assets/Profile.jpg";
import compfest16Image from "@/assets/Profile.jpg";
import placeholderImage from "@/assets/Logo.png"; // Gambar placeholder

const Experience = () => {
  // Data pengalaman yang diperbarui dan diurutkan
  const experiences = [
    {
      year: 2025,
      title: "Software Developer",
      company: "INFEST Hackathon",
      period: "Oct 2025 – Present",
      description: "Designed Teman Usaha, an AI-powered investment platform using fraud detection and credit scoring models.",
      image: placeholderImage,
      color: "primary",
    },
    {
      year: 2025,
      title: "Web Developer",
      company: "Hology 2.0 Hackathon",
      period: "Aug 2025 – Sep 2025",
      description: "Built BukaPajak, a Web3 tax transparency platform using React and TailwindCSS with real-time data visualization.",
      image: placeholderImage,
      color: "accent",
    },
    {
      year: 2025,
      title: "Researcher",
      company: "ICCSCI 2025",
      period: "Feb 2025 – Aug 2025",
      description: "Led leukemia image classification research using CNN, YOLOv11, and Vision Transformers. Built AI pipeline and presented at an international conference.",
      image: placeholderImage,
      color: "primary",
    },
    {
      year: 2024,
      title: "Teaching Assistant",
      company: "BINUS University",
      period: "Nov 2024 – Jan 2025",
      description: "Taught programming fundamentals and mentored 145+ students in foundational computer science concepts.",
      image: placeholderImage,
      color: "secondary",
    },
  ].sort((a, b) => b.year - a.year);

  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Menggunakan Intersection Observer untuk mendeteksi item yang aktif saat scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
            setActiveIndex(index);
          }
        });
      },
      {
        root: contentRef.current,
        threshold: 0.6, // Memicu ketika 60% item terlihat
      },
    );

    const currentItemRefs = itemRefs.current;
    currentItemRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentItemRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [experiences]);
  
  const activeYear = experiences[activeIndex]?.year;

  return (
    <section id="experience" className="pt-24 pb-16 bg-muted/20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The <span className="gradient-text">Journey Within</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto rounded-full"></div>
        </div>

        {/* Wrapper luar untuk efek glow */}
        <div className="max-w-6xl mx-auto rounded-2xl animate-[glowing-border-animation_4s_infinite_ease-in-out]">
          {/* Kontainer dalam untuk konten */}
          <div className="bg-card rounded-2xl p-4 flex flex-col md:flex-row h-[420px] md:h-[380px] overflow-hidden">
            {/* Kiri: Timeline */}
            <div className="w-full md:w-[150px] relative p-4 flex flex-row md:flex-col justify-around items-center">
              <div className="absolute top-1/2 md:top-0 left-0 md:left-[38px] w-full md:w-0.5 h-0.5 md:h-full bg-gradient-to-r md:bg-gradient-to-b from-primary via-secondary to-accent"></div>
              {[...new Set(experiences.map((e) => e.year))].map((year) => (
                <div key={year} className="flex md:flex-row flex-col items-center gap-4 z-10">
                  <div
                    className={`w-5 h-5 rounded-full border-4 border-background transition-all duration-300 ${
                      year === activeYear
                        ? `bg-${experiences.find(e => e.year === year)?.color || 'primary'} shadow-glow scale-125`
                        : "bg-muted"
                    }`}
                  ></div>
                  <span
                    className={`font-bold transition-colors duration-300 ${
                      year === activeYear ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {year}
                  </span>
                </div>
              ))}
            </div>

            {/* Tengah: Konten Scroll */}
            <div
              ref={contentRef}
              className="flex-1 overflow-y-auto pr-4 scroll-smooth scroll-fade"
              style={{ scrollSnapType: "y mandatory" }}
            >
              {experiences.map((exp, index) => (
                <div
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  key={index}
                  className={`min-h-full flex flex-col justify-center py-2 transition-all duration-500 ${
                    index === activeIndex ? "opacity-100 blur-0 scale-100" : "opacity-40 blur-sm scale-95"
                  }`}
                  style={{ scrollSnapAlign: "center" }}
                >
                  <div className="bg-muted/30 p-5 rounded-xl">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className={`text-lg font-bold text-${exp.color} mb-1`}>
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Kanan: Gambar */}
            <div className="hidden md:flex w-1/3 p-4 items-center justify-center overflow-hidden">
              <img
                key={activeIndex} // Ganti key untuk memicu animasi saat gambar berubah
                src={experiences[activeIndex].image}
                alt={experiences[activeIndex].title}
                className="rounded-lg shadow-lg object-cover w-full max-h-[300px] animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;