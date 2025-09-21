import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Heart, Lightbulb, Target } from "lucide-react";
import developerPortrait from "@/assets/mohanv.png";

const About = () => {
  const highlights = [
    { icon: Code, text: "Clean Code Advocate", color: "bg-primary/10 text-primary" },
    { icon: Heart, text: "UX Enthusiast", color: "bg-secondary/10 text-secondary" },
    { icon: Lightbulb, text: "Problem Solver", color: "bg-primary/10 text-primary" },
    { icon: Target, text: "Detail Oriented", color: "bg-secondary/10 text-secondary" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="animate-fade-in">
            <Card className="gradient-card border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={developerPortrait} 
                    alt="Mohan Vessam - Frontend Developer" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2">
                      {highlights.map((highlight, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className={`${highlight.color} border-0 font-medium`}
                        >
                          <highlight.icon className="w-3 h-3 mr-1" />
                          {highlight.text}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Section */}
          <div className="animate-fade-in-up space-y-6">
            <Card className="gradient-card border border-border/50 glow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">My Journey</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I have 2+ years of experience in web development, working on projects and applications. My interest in how things work has grown into a passion for building user-friendly and visually engaging interfaces.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4 text-gradient">What Drives Me</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                 I believe great software is all about connecting with users. My focus is on making sure the technology works seamlessly for them.
                </p>
                
                {/* <h3 className="text-2xl font-semibold mb-4 text-gradient">Beyond Code</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, I enjoy exploring design trends, contributing to open-source projects, and helping other developers. I’m always learning and staying up-to-date with the latest technologies.
                </p> */}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="gradient-card border border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="gradient-card border border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">2+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
