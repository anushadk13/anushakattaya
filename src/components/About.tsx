import { motion } from "framer-motion";
import { staggerContainer, fadeInLeft, fadeInRight, scrollReveal, viewportSettings } from "@/lib/animations";

const About = () => {
  const skills = [
    "Python",
    "SQL",
    "Machine Learning",
    "NLP",
    "YOLOv5",
    "OpenCV",
    "Arduino",
    "Langflow",
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
                Results-driven <span className="text-primary">Software Developer</span> with expertise in building
                AI-powered healthcare solutions and fullstack applications. Specialized in
                <span className="text-primary"> Large Language Models (LLMs), AI agents, and cloud technologies</span> with
                hands-on experience in developing end-to-end automation workflows.
              </motion.p>

              <motion.p className="text-muted-foreground leading-relaxed" variants={fadeInLeft}>
                Proficient in <span className="text-primary">React.js, Python, and Azure ecosystem</span> with a strong
                foundation in HL7 FHIR standards and healthcare interoperability. Demonstrated ability to evaluate
                and optimize LLMs for production environments while delivering scalable, secure applications using
                modern DevOps practices.
              </motion.p>

              <motion.p className="text-muted-foreground leading-relaxed" variants={fadeInLeft}>
                Passionate about leveraging cutting-edge AI technologies to solve real-world problems and
                create meaningful impact. Let's connect and build innovative solutions together!
              </motion.p>

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
