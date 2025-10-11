import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 Rafi Isnaen.</span>
            <Code2 className="w-4 h-4 text-primary animate-pulse" />
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;