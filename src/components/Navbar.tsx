import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import CV from "@/assets/curriculumvitae_muhammadrafiisnaen_internship.pdf";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      let currentSection = "";
      if (scrollPosition + windowHeight >= documentHeight - 10) { 
        currentSection = "contact";
      } else {
        for (let i = navLinks.length - 1; i >= 0; i--) {
          const link = navLinks[i];
          const section = document.getElementById(link.href.substring(1));
  
          if (section) {
            const sectionTop = section.offsetTop;
            if (scrollPosition >= sectionTop - windowHeight / 3) {
              currentSection = section.id;
              break; 
            }
          }
        }
      }
      
      setActiveSection(currentSection || 'home');
    };

    window.addEventListener("scroll", handleScroll);
    
    
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]); 

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              Rafi.dev
            </a>
            <span className="text-muted-foreground hidden sm:inline">///</span>
            <a
              href={CV}
              download="CV_MuhammadRafiIsnaen.pdf"
              className="hidden sm:inline"
            >
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-primary hover:bg-transparent h-auto p-0"
              >
                Download CV
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary after:w-full'
                    : 'text-foreground/80 hover:text-primary after:w-0'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-muted text-primary'
                    : 'text-foreground/80 hover:text-primary hover:bg-muted'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CV}
              download="CV_MuhammadRafiIsnaen.pdf"
              className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-all"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;