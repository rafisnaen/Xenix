import { useState, useEffect } from "react";
import { ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "public/profile.jpg";

const Hero = () => {
  // State untuk typewriter judul
  const [titleText, setTitleText] = useState('');
  const [isDeletingTitle, setIsDeletingTitle] = useState(false);
  const [titleLoopNum, setTitleLoopNum] = useState(0);
  const [titleDelta, setTitleDelta] = useState(150 - Math.random() * 50);
  const titlesToRotate = ["Software Engineer", "AI Enthusiast"];
  const titlePeriod = 1200;

  // State untuk typewriter sapaan
  const [greetingText, setGreetingText] = useState('');
  const [isDeletingGreeting, setIsDeletingGreeting] = useState(false);
  const [greetingLoopNum, setGreetingLoopNum] = useState(0);
  const [greetingDelta, setGreetingDelta] = useState(150);
  const greetingsToRotate = ["Hi,", "こんにちは,", "안녕하세요,", "Bonjour,", "Hallo,"];
  const greetingPeriod = 2000;

  // State untuk efek parallax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect untuk typewriter judul
  useEffect(() => {
    let titleTicker = setInterval(() => {
      tickTitle();
    }, titleDelta);
    return () => { clearInterval(titleTicker) };
  }, [titleText]);

  // useEffect untuk typewriter sapaan
  useEffect(() => {
    let greetingTicker = setInterval(() => {
      tickGreeting();
    }, greetingDelta);
    return () => { clearInterval(greetingTicker) };
  }, [greetingText]);

  // Fungsi tick untuk judul
  const tickTitle = () => {
    let i = titleLoopNum % titlesToRotate.length;
    let fullText = titlesToRotate[i];
    let updatedText = isDeletingTitle ? fullText.substring(0, titleText.length - 1) : fullText.substring(0, titleText.length + 1);

    setTitleText(updatedText);

    if (isDeletingTitle) {
      setTitleDelta(prevDelta => prevDelta / 1.5);
    }

    if (!isDeletingTitle && updatedText === fullText) {
      setIsDeletingTitle(true);
      setTitleDelta(titlePeriod);
    } else if (isDeletingTitle && updatedText === '') {
      setIsDeletingTitle(false);
      setTitleLoopNum(titleLoopNum + 1);
      setTitleDelta(250);
    }
  };

  // Fungsi tick untuk sapaan
  const tickGreeting = () => {
    let i = greetingLoopNum % greetingsToRotate.length;
    let fullText = greetingsToRotate[i];
    let updatedText = isDeletingGreeting ? fullText.substring(0, greetingText.length - 1) : fullText.substring(0, greetingText.length + 1);

    setGreetingText(updatedText);

    if (isDeletingGreeting) {
        setGreetingDelta(100);
    }

    if (!isDeletingGreeting && updatedText === fullText) {
      setIsDeletingGreeting(true);
      setGreetingDelta(greetingPeriod);
    } else if (isDeletingGreeting && updatedText === '') {
      setIsDeletingGreeting(false);
      setGreetingLoopNum(greetingLoopNum + 1);
      setGreetingDelta(300);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-cyber opacity-30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            
            {/* --- Ikon Sosial Media (Tooltip Vertikal ke Atas) --- */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://instagram.com/rafisnaen" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="relative group">
                <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-white/10">
                  <img src="/logos/instagram.svg" alt="Instagram" className="h-6 w-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                </Button>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-1 py-2 bg-card/80 rounded-md text-[10px] text-foreground opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none [writing-mode:vertical-rl] tracking-wider">
                  Instagram
                </span>
              </a>
              <a href="https://github.com/rafisnaen" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="relative group">
                <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-white/10">
                  <img src="/logos/github.svg" alt="GitHub" className="h-6 w-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                </Button>
                 <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-1 py-2 bg-card/80 rounded-md text-[10px] text-foreground opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none [writing-mode:vertical-rl] tracking-wider">
                  GitHub
                </span>
              </a>
              <a href="https://linkedin.com/in/rafiisnaen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="relative group">
                <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-white/10">
                  <img src="/logos/linkedin.svg" alt="LinkedIn" className="h-6 w-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                </Button>
                 <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-1 py-2 bg-card/80 rounded-md text-[10px] text-foreground opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none [writing-mode:vertical-rl] tracking-wider">
                  LinkedIn
                </span>
              </a>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <div className="h-[1.2em]">
                <span className="inline-block">{greetingText}</span>
              </div>
              <div>
                I'm <span style={{ color: '#00e5fe' }}>Rafi</span>{' '}
                <span style={{ color: '#00aeff' }}>Isnaen</span>
              </div>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary h-12">
              <span className="border-r-4 border-primary animate-[blink-caret_.75s_step-end_infinite]">
                {titleText}
              </span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Specialized in Software Engineering, passionate about building 
              scalable and intelligent systems. I'm exploring the development of an application and AI to 
              create future-ready digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                A Glimpse of My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Reach Out !
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" /> 
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div 
              className="relative glowing-frame"
              style={{ transform: `translateY(${offsetY * 0.1}px)` }}
            >
              <img
                src={profileImage}
                alt="Rafi Isnaen"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;