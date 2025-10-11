import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceCardProps {
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
    color: string;
  };
  isActive: boolean;
  refProp: (el: HTMLDivElement | null) => void;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isActive, refProp, index }) => {
  return (
    <div
      ref={refProp}
      data-index={index}
      className={`min-h-full flex flex-col justify-center py-2 transition-all duration-500 ${
        isActive ? 'opacity-100 blur-0 scale-100' : 'opacity-40 blur-sm scale-95'
      }`}
      style={{ scrollSnapAlign: 'center' }}
    >
      <div className="bg-muted/30 p-5 rounded-xl">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
          <div>
            <h3 className={`text-lg font-bold text-${experience.color} mb-1`}>{experience.title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase className="w-4 h-4" />
              <span className="font-medium">{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
            <Calendar className="w-3 h-3" />
            <span>{experience.period}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{experience.description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;