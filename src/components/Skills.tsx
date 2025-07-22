import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Palette, 
  Database, 
  Wrench, 
  Globe, 
  Smartphone,
  FileText,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 90, color: "bg-primary" },
        { name: "TypeScript", level: 85, color: "bg-secondary" },
        { name: "JavaScript", level: 95, color: "bg-primary" },
        { name: "Next.js", level: 80, color: "bg-secondary" },
        { name: "Vue.js", level: 70, color: "bg-primary" },
      ]
    },
    {
      icon: Palette,
      title: "Styling & Design",
      skills: [
        { name: "Tailwind CSS", level: 95, color: "bg-secondary" },
        { name: "CSS3", level: 90, color: "bg-primary" },
        { name: "SASS/SCSS", level: 85, color: "bg-secondary" },
        { name: "Figma", level: 75, color: "bg-primary" },
        { name: "Adobe XD", level: 70, color: "bg-secondary" },
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 75, color: "bg-primary" },
        { name: "Express.js", level: 70, color: "bg-secondary" },
        { name: "MongoDB", level: 65, color: "bg-primary" },
        { name: "PostgreSQL", level: 60, color: "bg-secondary" },
        { name: "REST APIs", level: 80, color: "bg-primary" },
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Workflow",
      skills: [
        { name: "Git", level: 90, color: "bg-secondary" },
        { name: "VS Code", level: 95, color: "bg-primary" },
        { name: "Webpack", level: 75, color: "bg-secondary" },
        { name: "Vite", level: 85, color: "bg-primary" },
        { name: "Jest", level: 70, color: "bg-secondary" },
      ]
    }
  ];

  const certifications = [
    "React Developer Certification",
    "TypeScript Advanced Concepts",
    "AWS Cloud Practitioner",
    "Google UX Design Certificate"
  ];

  const otherSkills = [
    "Responsive Design", "Mobile-First Development", "SEO Optimization",
    "Web Accessibility", "Performance Optimization", "Cross-Browser Compatibility",
    "Agile Methodology", "Team Collaboration", "Code Review",
    "Problem Solving", "Debugging", "Technical Writing"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card border border-border/50 glow-soft animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <category.icon className="w-6 h-6 mr-3 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills and Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Other Skills */}
          <Card className="gradient-card border border-border/50 glow-soft animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Globe className="w-6 h-6 mr-3 text-primary" />
                Additional Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="gradient-card border border-border/50 glow-soft animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <FileText className="w-6 h-6 mr-3 text-secondary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-3 rounded-lg bg-accent/50 border border-border/30">
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30 mr-3">
                    ✓
                  </Badge>
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Learning Section */}
        <Card className="mt-8 gradient-card border border-border/50 glow-soft animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Smartphone className="w-6 h-6 mr-3 text-primary" />
              Currently Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              I believe in continuous learning and staying updated with the latest technologies:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Three.js", "React Native", "GraphQL", "Docker", "Kubernetes"].map((tech, index) => (
                <Badge 
                  key={index} 
                  className="bg-gradient-primary border-0 text-black font-medium animate-glow-pulse"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
