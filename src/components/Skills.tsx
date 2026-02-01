import { Code, Brain, Database, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerContainerFast, scaleIn, scrollReveal, viewportSettings } from "@/lib/animations";

const skillCategories = [
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["Machine Learning", "Natural Language Processing", "Large Language Models (LLMs)", "AI Agents", "Prompt Engineering", "LangChain", "RAG"],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "C++"],
  },
  {
    title: "Data & Cloud",
    icon: Database,
    skills: ["Azure", "Azure Cosmos DB", "Azure Key Vault", "Azure Storage Account", "Docker", "Kubernetes", "CI/CD", "SQL", "ChromaDB"],
  },
  {
    title: "Frontend & Backend",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "FastAPI", "Flask", "REST APIs"],
  }
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
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={scrollReveal}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span>Skills</span>
            <div className="flex-1 h-px bg-border ml-4" />
          </h2>

          <motion.div
            className="grid sm:grid-cols-2 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
                  variants={scaleIn}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-2 rounded-lg bg-gradient-primary text-primary-foreground"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                  >
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-sm text-muted-foreground rounded-md border border-transparent hover:border-primary/30 transition-colors"
                        variants={scaleIn}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Languages */}
          <motion.div
            className="bg-card border border-border rounded-lg p-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={scaleIn}
          >
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <motion.div
              className="flex flex-wrap gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              {languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  className="flex items-center gap-2"
                  variants={scaleIn}
                >
                  <span className="text-foreground font-medium">{lang.name}</span>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {lang.level}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
