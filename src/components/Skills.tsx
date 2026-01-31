import { Code, Brain, Database, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["Machine Learning", "Natural Language Processing", "YOLOv5", "Langflow"],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "C++", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Data & Cloud",
    icon: Database,
    skills: ["SQL", "MySQL", "AWS Cloud"],
  },
  {
    title: "Hardware",
    icon: Cpu,
    skills: ["Arduino Uno", "OpenCV", "Electronics"],
  },
];

const languages = [
  { name: "Kannada", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Limited Working" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">04.</span>
            <span>Skills</span>
            <div className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-primary text-primary-foreground">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-sm text-muted-foreground rounded-md border border-transparent hover:border-primary/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Languages */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-6">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span className="text-foreground font-medium">{lang.name}</span>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
