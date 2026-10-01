import { motion } from "framer-motion";
import { staggerContainer, fadeInLeft, fadeInRight, scrollReveal, viewportSettings } from "@/lib/animations";

const About = () => {
  const skills = [
    "AI agents",
    "LLM evaluation",
    "Automation workflows",
    "Python",
    "React.js",
    "Azure",
    "CI/CD",
    "HL7 FHIR",
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={scrollReveal}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span>About Me</span>
            <div className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              className="md:col-span-2 space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <motion.p className="text-muted-foreground leading-relaxed" variants={fadeInLeft}>
                I build <span className="text-primary">AI-powered applications</span> that solve real problems,
                especially in healthcare. As a Software Developer, I have worked on full-stack applications and
                AI solutions using <span className="text-primary">Large Language Models (LLMs) and AI agents</span>.
              </motion.p>

              <motion.p className="text-muted-foreground leading-relaxed" variants={fadeInLeft}>
                I have built end-to-end automation workflows, evaluated and improved LLMs for real products, and
                delivered secure, scalable applications on <span className="text-primary">Azure</span>. I also work
                with <span className="text-primary">HL7 FHIR</span> and healthcare interoperability, helping tools
                fit into the way health systems share data.
              </motion.p>

              <motion.p className="text-muted-foreground leading-relaxed" variants={fadeInLeft}>
                I am currently pursuing my <span className="text-primary">Master's in Data Science</span> to deepen
                my skills in data and machine learning. I am open to roles as an
                <span className="text-primary"> AI Engineer, Data Scientist, or Full Stack Developer</span>.
                Feel free to connect or message me.
              </motion.p>

              <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>

            <motion.div
              className="relative group"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeInRight}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-primary rounded-lg opacity-20 group-hover:opacity-40 transition-opacity blur-sm" />
                <motion.div
                  className="relative bg-card rounded-lg overflow-hidden border border-border"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="aspect-square bg-gradient-subtle flex items-center justify-center">
                    <div className="text-6xl font-bold text-gradient">
                      <img src="https://github.com/anushadk13/anushakattaya/blob/main/public/1745476489487.jpeg?raw=true" alt="" />
                    </div>
                  </div>
                </motion.div>
                <div className="absolute -inset-2 border-2 border-primary/50 rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
