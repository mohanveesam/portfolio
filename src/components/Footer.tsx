import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/mohan-veesam",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohan-veesam-65aa81232",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:mohanveesam143@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-t from-background via-background to-background/50">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left section - Branding */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-2">Mohan Veesam</div>
            <p className="text-muted-foreground">
              Frontend Developer crafting beautiful web experiences
            </p>
          </div>

          {/* Center section - Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent/50 border border-border/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Right section - Back to top */}
          <div className="text-center md:text-right">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-border/50 hover:border-primary/50 hover:bg-primary/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            © {currentYear} Mohan Veesam. Made with{" "}
            <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
            and lots of coffee.
          </p>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-primary animate-pulse">
          <ArrowUp className="w-5 h-5 text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
