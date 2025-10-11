import React from 'react';

interface Experience {
  year: number;
  color?: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
  activeYear: number | undefined;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences, activeYear }) => {
  const uniqueYears = [...new Set(experiences.map((e) => e.year))];

  return (
    <div className="w-full md:w-[150px] relative p-4 flex flex-row md:flex-col justify-around items-center">
      <div className="absolute top-1/2 md:top-0 left-0 md:left-[38px] w-full md:w-0.5 h-0.5 md:h-full bg-gradient-to-r md:bg-gradient-to-b from-primary via-secondary to-accent"></div>
      {uniqueYears.map((year) => (
        <div key={year} className="flex md:flex-row flex-col items-center gap-4 z-10">
          <div
            className={`w-5 h-5 rounded-full border-4 border-background transition-all duration-300 ${
              year === activeYear
                ? `bg-${experiences.find((e) => e.year === year)?.color || 'primary'} shadow-glow scale-125`
                : 'bg-muted'
            }`}
          ></div>
          <span
            className={`font-bold transition-colors duration-300 ${
              year === activeYear ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {year}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;