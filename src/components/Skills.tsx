import { Badge } from "@/components/ui/badge";
import { SiAngular, SiNpm, SiMysql, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiBootstrap } from "react-icons/si";
import { 
  Code2, 
  Database, 
  GitBranch,
  Palette,
  Globe,
  Smartphone,
  FileText,
  Wrench
} from "lucide-react";

const Skills = () => {
const frontendSkills = [
  { name: "Angular", icon: <SiAngular className="text-red-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Rxjs", icon: <SiNpm className="text-cyan-400" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-orange-600" /> },
];


  const additionalSkills = [
    "Responsive Design", "Mobile-First Development", "RESTful APIs",
    "State Management (Redux)", "Component Libraries", "Performance Optimization",
    "Cross-Browser Compatibility", "Version Control", "Agile Methodology",
    "Problem Solving", "Team Collaboration", "Code Review"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-5 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Web technologies and tools I use to create amazing user experiences
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-5 animate-fade-in">
          {frontendSkills.map((skill, index) => (
            <div 
              key={index}
              className="gradient-card border border-border/50 rounded-lg p-6 text-center hover:glow-medium transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-accent/30 flex items-center justify-center text-2xl group-hover:bg-accent/50 transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className={`text-lg font-semibold group-hover:text-primary transition-colors duration-300`}>
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Experience Stats */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in"> */}
          {/* <div className="gradient-card border border-border/50 rounded-lg p-6 text-center glow-soft">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">2+</h3>
            <p className="text-muted-foreground">Git</p>
          </div> */}
          
          {/* <div className="gradient-card border border-border/50 rounded-lg p-6 text-center glow-soft">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Globe className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">5+</h3>
            <p className="text-muted-foreground">VS Code</p>
          </div> */}
          
          {/* <div className="gradient-card border border-border/50 rounded-lg p-6 text-center glow-soft">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Frontend</h3>
            <p className="text-muted-foreground">Specialization</p>
          </div> */}
        {/* </div> */}

        {/* Additional Skills */}
{/*         <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="gradient-card border border-border/50 rounded-lg p-6 glow-soft">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-secondary" />
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
        </div> */}

        {/* Currently Learning */}
        <div className="max-w-4xl mx-auto mt-5 animate-fade-in">
          <div className="gradient-card border border-border/50 rounded-lg p-6 glow-soft">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Currently Learning
                </h3>
                <p className="text-sm text-muted-foreground">
                  Expanding my frontend development skills
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Node.js", "Express.js", "React", "MongoDB"].map((tech, index) => (
                <Badge 
                  key={index} 
                  className="bg-gradient-primary border-0 text-black font-medium hover:scale-105 transition-transform duration-300 animate-glow-pulse text-white"
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
