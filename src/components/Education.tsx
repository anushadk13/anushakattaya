import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scrollReveal, viewportSettings } from "@/lib/animations";

const education = [
  {
    institution: "Dayananda Sagar College of Engineering",
    degree: "Bachelor of Engineering - BE",
    field: "Electronics and Communications Engineering",
    duration: "December 2021 - May 2025",
    location: "Bangalore",
  },
  {
    institution: "Masters Pre-University College",
    degree: "Secondary Education",
    field: "PCMB",
    duration: "2019 - 2021",
    location: "Hassan",
  },
  {
    institution: "United Academy",
    degree: "Primary and High School",
    field: "",
    duration: "2009 - 2019",
    location: "Hassan",
  },
];

const certifications = [
  "Responsive Web Development",
  "Microsoft MySQL",
  "HTML, CSS, JavaScript (Intermediate)",
  "AWS Cloud",
  "Programming in C++",
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={scrollReveal}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span>Education</span>
            <div className="flex-1 h-px bg-border ml-4" />
          </h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:glow-soft group"
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-2 rounded-lg bg-primary/10 text-primary"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="w-5 h-5" />
                  </motion.div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {edu.duration}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {edu.institution}
                </h3>

                <p className="text-primary font-medium mb-1">{edu.degree}</p>

                {edu.field && (
                  <p className="text-sm text-muted-foreground">{edu.field}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
