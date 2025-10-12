import { useState, useRef, useEffect } from 'react';
import ExperienceTimeline from './ExperienceTimeline';
import ExperienceCard from './ExperienceCard';
import { experiences } from '@/data/experiences';

const Experience = () => {
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
  }, []);

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
                  key={exp.title}
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