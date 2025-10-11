import { useState, useRef, useEffect } from 'react';
import ExperienceTimeline from './ExperienceTimeLine';
import ExperienceCard from './ExperienceCard';
import placeholderImage from '@/assets/Logo.png';

const Experience = () => {
  const experiences = [
    {
      year: 2025,
      title: 'Software Developer',
      company: 'INFEST Hackathon',
      period: 'Oct 2025 – Present',
      description: 'Designed Teman Usaha, an AI-powered investment platform using fraud detection and credit scoring models.',
      image: placeholderImage,
      color: 'primary',
    },
    {
      year: 2025,
      title: 'Web Developer',
      company: 'Hology 2.0 Hackathon',
      period: 'Aug 2025 – Sep 2025',
      description: 'Built BukaPajak, a Web3 tax transparency platform using React and TailwindCSS with real-time data visualization.',
      image: placeholderImage,
      color: 'accent',
    },
    {
      year: 2025,
      title: 'Researcher',
      company: 'ICCSCI 2025',
      period: 'Feb 2025 – Aug 2025',
      description: 'Led leukemia image classification research using CNN, YOLOv11, and Vision Transformers. Built AI pipeline and presented at an international conference.',
      image: placeholderImage,
      color: 'primary',
    },
    {
      year: 2024,
      title: 'Teaching Assistant',
      company: 'BINUS University',
      period: 'Nov 2024 – Jan 2025',
      description: 'Taught programming fundamentals and mentored 145+ students in foundational computer science concepts.',
      image: placeholderImage,
      color: 'secondary',
    },
  ].sort((a, b) => b.year - a.year);

  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setActiveIndex(index);
          }
        });
      },
      {
        root: contentRef.current,
        threshold: 0.6,
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

        <div className="max-w-6xl mx-auto rounded-2xl animate-[glowing-border-animation_4s_infinite_ease-in-out]">
          <div className="bg-card rounded-2xl p-4 flex flex-col md:flex-row h-[420px] md:h-[380px] overflow-hidden">
            <ExperienceTimeline experiences={experiences} activeYear={activeYear} />

            <div
              ref={contentRef}
              className="flex-1 overflow-y-auto pr-4 scroll-smooth scroll-fade"
              style={{ scrollSnapType: 'y mandatory' }}
            >
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  experience={exp}
                  isActive={index === activeIndex}
                  refProp={(el) => (itemRefs.current[index] = el)}
                  index={index}
                />
              ))}
            </div>

            <div className="hidden md:flex w-1/3 p-4 items-center justify-center overflow-hidden">
              <img
                key={activeIndex}
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