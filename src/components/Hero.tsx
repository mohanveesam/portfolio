import { Button } from "@/components/ui/button";
import { Download, Eye, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/2.jpeg";

const Hero = () => {
  const handleDownloadResume = () => {
    // In a real app, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/mohan_veesam.pdf'; // Add your resume file to public folder
    link.download = '/mohan_veesam.pdf';
    link.click();
  };

  const handleViewResume = () => {
    // In a real app, this would open the resume in a new tab
    window.open('/mohan_veesam.pdf', '_blank');
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with gradient text */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="text-gradient animate-glow-pulse">Mohan Veesam</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
              Frontend Developer passionate about creating clean{" "}
              <span className="text-primary font-medium">UI/UX</span> Designs
            </p>
          </div>
          
          {/* Description */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              2+ years of experience building modern, responsive web applications 
              using Angular and other modern technologies.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center items-center mb-12" style={{animationDelay: '0.6s'}}>
            <Button 
              variant="glow" 
              size="xl" 
              onClick={handleDownloadResume}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            {/* <Button 
              variant="outline-glow" 
              size="xl"
              onClick={handleViewResume}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <Eye className="w-5 h-5" />
              View Resume
            </Button> */}
          </div>
          
          {/* Social Links */}
          <div className="animate-fade-in-up flex justify-center space-x-6" style={{animationDelay: '0.8s'}}>
            <a 
              href="https://github.com/mohan-veesam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohan-veesam-65aa81232" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:mohanveesam143@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
