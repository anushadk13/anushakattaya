import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInLeft, fadeInRight, scrollReveal, viewportSettings } from "@/lib/animations";

const experiences = [
  {
    company: "Skypoint",
    role: "Software Developer",
    duration: "March 2025 - Present",
    location: "Bengaluru, Karnataka, India",
    description: "Working on innovative software solutions and AI-powered applications.",
  },
  {
    company: "Nexus",
    role: "SDE Intern",
    duration: "December 2023 - March 2024",
    location: "Coimbatore, Tamil Nadu, India",
    description: "Gained hands-on experience in software development and learned industry best practices.",
  },
  {
    company: "IEDC DSCE",
    role: "Member",
    duration: "May 2022 - April 2023",
    location: "Bangalore, Karnataka",
    description: "Active member of the Innovation and Entrepreneurship Development Cell, participating in tech events and hackathons.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card/50">
      <div className="container px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={scrollReveal}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span>Experience</span>
            <div className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="relative">
            {/* Timeline line with draw-in animation */}
            <motion.div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewportSettings}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className={`relative mb-12 last:mb-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                  }`}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline dot with pulse */}
                <motion.div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary glow-primary ${index % 2 === 0
                    ? "left-0 md:left-auto md:-right-2"
                    : "left-0 md:-left-2"
                    }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportSettings}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(var(--primary-rgb), 0.4)",
                      "0 0 0 10px rgba(var(--primary-rgb), 0)",
                    ],
                  }}
                  // @ts-ignore
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />

                <div
                  className={`pl-8 md:pl-0 ${index % 2 !== 0 ? "md:pl-0" : ""}`}
                >
                  <motion.div
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className={`flex items-center gap-2 text-primary mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Briefcase className="w-4 h-4" />
                      <span className="font-mono text-sm">{exp.company}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>

                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
