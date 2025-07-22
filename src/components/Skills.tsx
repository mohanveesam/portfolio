import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Code2, 
  TestTube2, 
  Settings, 
  Cloud,
  Terminal,
  PlayCircle,
  GitBranch,
  Wrench,
  Monitor,
  Shield,
  Database,
  Container,
  Gauge,
  Zap,
  Bot,
  Server
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      id: "scripting",
      icon: Code2,
      title: "Scripting Languages",
      description: "Programming languages for automation and scripting",
      skills: [
        { name: "Python", level: 95, icon: Terminal },
        { name: "JavaScript/Node.js", level: 85, icon: Code2 },
        { name: "Shell/Bash", level: 90, icon: Terminal },
        { name: "PowerShell", level: 75, icon: Terminal },
        { name: "TypeScript", level: 80, icon: Code2 },
      ]
    },
    {
      id: "testing",
      icon: TestTube2,
      title: "Testing Tools",
      description: "Automated testing frameworks and tools",
      skills: [
        { name: "Selenium", level: 90, icon: Bot },
        { name: "Playwright", level: 85, icon: PlayCircle },
        { name: "Cypress", level: 80, icon: TestTube2 },
        { name: "Jest", level: 85, icon: TestTube2 },
        { name: "Pytest", level: 90, icon: TestTube2 },
        { name: "Robot Framework", level: 75, icon: Bot },
      ]
    },
    {
      id: "cicd",
      icon: Settings,
      title: "CI/CD & DevOps",
      description: "Continuous integration, deployment, and infrastructure automation",
      skills: [
        { name: "GitHub Actions", level: 90, icon: GitBranch },
        { name: "Jenkins", level: 85, icon: Settings },
        { name: "Docker", level: 88, icon: Container },
        { name: "Kubernetes", level: 75, icon: Container },
        { name: "Terraform", level: 70, icon: Server },
        { name: "Ansible", level: 80, icon: Settings },
      ]
    },
    {
      id: "cloud",
      icon: Cloud,
      title: "Cloud & Monitoring",
      description: "Cloud platforms and monitoring solutions",
      skills: [
        { name: "AWS", level: 85, icon: Cloud },
        { name: "Azure", level: 75, icon: Cloud },
        { name: "Grafana", level: 80, icon: Monitor },
        { name: "Prometheus", level: 75, icon: Gauge },
        { name: "ELK Stack", level: 70, icon: Database },
        { name: "DataDog", level: 65, icon: Monitor },
      ]
    }
  ];

  const additionalSkills = [
    "API Testing", "Performance Testing", "Load Testing", "Security Testing",
    "Test Data Management", "Test Environment Setup", "Agile/Scrum",
    "Git/Version Control", "Linux Administration", "Network Automation",
    "Database Testing", "Mobile Test Automation", "Cross-browser Testing"
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automation engineering expertise across scripting, testing, CI/CD, and cloud technologies
          </p>
        </div>

        {/* Skills Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="multiple" className="space-y-6 animate-fade-in">
            {skillCategories.map((category, index) => (
              <AccordionItem 
                key={category.id} 
                value={category.id}
                className="gradient-card border border-border/50 rounded-lg overflow-hidden glow-soft hover:glow-medium transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center space-x-4 text-left w-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.description}
                      </p>
                    </div>
                    <Badge variant="outline" className="ml-4 border-primary/30 text-primary">
                      {category.skills.length} skills
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="p-4 rounded-lg bg-accent/30 border border-border/30 hover:bg-accent/50 hover:border-border/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <skill.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-accent/50"
                        />
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Skills */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="gradient-card border border-border/50 rounded-lg p-6 glow-soft">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Additional Expertise
                </h3>
                <p className="text-sm text-muted-foreground">
                  Supporting skills and methodologies
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {additionalSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-secondary/20 hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300 hover:scale-105"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="max-w-4xl mx-auto mt-8 animate-fade-in">
          <div className="gradient-card border border-border/50 rounded-lg p-6 glow-soft">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Currently Learning
                </h3>
                <p className="text-sm text-muted-foreground">
                  Expanding expertise in emerging technologies
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {["AI/ML Testing", "Blockchain Testing", "Edge Computing", "Service Mesh", "GitOps"].map((tech, index) => (
                <Badge 
                  key={index} 
                  className="bg-gradient-primary border-0 text-black font-medium hover:scale-105 transition-transform duration-300 animate-glow-pulse"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;