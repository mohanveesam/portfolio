import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Smartify Software Solutions",
      location: "Remote",
      period: "October 2022 – Present",
      type: "Full-time",
      description: "Developing responsive web applications and implementing modern frontend solutions using Angular, TypeScript, and modern CSS frameworks.",
      achievements: [
        "Successfully completed 2+ frontend projects with modern tech stack",
        "Implemented responsive designs that work across all device types",
        "Collaborated with backend developers to integrate REST APIs",
        "Improved application performance through code optimization"
      ],
      technologies: ["Angular", "TypeScript", "JavaScript", "Bootstrap", "HTML5", "CSS3", "Git"],
      link: "https://smartifysol.com/"
    }
  ];

  const projects = [
    {
      title: "Enterprise Application Development",
      period: "2025",
      description: "Developed an enterprise application with role-based authorization, real-time data processing, and streamlined business operations.",
      impact: "Improved operational efficiency and secured access control for different user roles.",
      technologies: ["Angular", "TypeScript", "Bootstrap", "REST API", "Responsive Design"]
    },
    {
      title: "IETM Application Development",
      period: "2024",
      description: "Developed an IETM application with features like saving pages, adding annotations, glossary management, and a hierarchical three-level page structure for easy navigation.",
      impact: "Enhanced user experience with easy document management, quick navigation, and personalized annotations.",
      technologies: ["Angular", "TypeScript", "Bootstrap", "REST API", "Responsive Design"]
    },
    {
      title: "Portfolio Website",
      period: "2025",
      description: "Created a modern, responsive portfolio website showcasing projects and skills",
      impact: "Professional online presence",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"]
    },
    // {
    //   title: "Weather Dashboard",
    //   period: "2022",
    //   description: "Built a weather dashboard using external APIs with real-time data",
    //   impact: "User-friendly weather information display",
    //   technologies: ["JavaScript", "API Integration", "CSS3", "HTML5"]
    // },
    // {
    //   title: "Landing Page Design",
    //   period: "2022",
    //   description: "Created responsive landing pages for various business clients",
    //   impact: "Increased client conversion rates",
    //   technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    // }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional career, highlighting key achievements and growth.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="gradient-card border border-border/50 glow-soft animate-fade-in">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                        {exp.link && (
                          <a 
                            href={exp.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-1 text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-secondary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-secondary/10 text-secondary border-secondary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notable Projects */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">
            Notable <span className="text-gradient">Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="gradient-card border border-border/50 hover:glow-primary transition-all duration-300 animate-fade-in group">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.period}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <span className="text-sm font-medium text-primary">Impact: </span>
                    <span className="text-sm text-muted-foreground">{project.impact}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="text-xs border-border/30 hover:border-primary/30 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
