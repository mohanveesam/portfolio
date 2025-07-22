import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      period: "Jan 2023 - Present",
      type: "Full-time",
      description: "Leading frontend development for enterprise-level applications, mentoring junior developers, and implementing modern design systems.",
      achievements: [
        "Increased application performance by 40% through optimization techniques",
        "Led a team of 4 developers in rebuilding the main dashboard",
        "Implemented comprehensive testing strategy reducing bugs by 60%",
        "Mentored 3 junior developers, improving team productivity by 25%"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL", "Jest"],
      link: "https://techflow.com"
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc.",
      location: "Austin, TX",
      period: "Jun 2022 - Dec 2022",
      type: "Full-time",
      description: "Developed responsive web applications and collaborated with cross-functional teams to deliver high-quality user experiences.",
      achievements: [
        "Built 5+ responsive web applications from scratch",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Improved code quality through implementation of ESLint and Prettier",
        "Reduced initial load time by 30% through code splitting and lazy loading"
      ],
      technologies: ["React", "JavaScript", "SASS", "Node.js", "MongoDB", "Git"],
      link: "https://digitalinnovations.com"
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      period: "Q3 2023",
      description: "Complete frontend overhaul of a major e-commerce platform serving 100K+ users",
      impact: "35% increase in conversion rate",
      technologies: ["React", "TypeScript", "Redux", "Stripe API"]
    },
    {
      title: "Real-time Analytics Dashboard",
      period: "Q1 2023",
      description: "Built a comprehensive analytics dashboard with real-time data visualization",
      impact: "Improved decision-making speed by 50%",
      technologies: ["Vue.js", "D3.js", "WebSocket", "Chart.js"]
    },
    {
      title: "Mobile-First Design System",
      period: "Q4 2022",
      description: "Created a comprehensive design system and component library",
      impact: "Reduced development time by 40%",
      technologies: ["React", "Storybook", "Styled Components", "Figma"]
    }
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