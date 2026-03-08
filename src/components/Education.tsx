import { GraduationCap, Calendar, MapPin, Award, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, scrollReveal, viewportSettings } from "@/lib/animations";

const education = [
  {
    institution: "University of Adelaide",
    degree: "Master of Science",
    field: "Data Science (Data Analytics, Machine Learning, AI)",
    duration: "Feb 2026 – Nov 2027",
    location: "Adelaide, South Australia, Australia",
    highlight: true,
  },
  {
    institution: "Dayananda Sagar College of Engineering",
    degree: "Bachelor of Engineering — BE",
    field: "Electronics & Communications Engineering",
    duration: "Dec 2021 – May 2025",
    location: "Bangalore,Karnataka,India",
    highlight: false,
  },
  {
    institution: "Masters Pre-University College",
    degree: "Secondary Education (PUC)",
    field: "Physics · Chemistry · Mathematics · Biology",
    duration: "2019 – 2021",
    location: "Hassan,Karnataka, India",
    highlight: false,
  },
  {
    institution: "United Academy",
    degree: "Primary & High School",
    field: "",
    duration: "2009 – 2019",
    location: "Hassan, Karnataka,India",
    highlight: false,
  },
];


const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={scrollReveal}
        >
          {/* Section heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-14 flex items-center gap-4">
            <span>Education</span>
            <div className="flex-1 h-px bg-border ml-4" />
          </h2>

          {/* ── Timeline ── */}
          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden md:block" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  className="relative flex gap-6 group"
                  variants={fadeInLeft}
                  custom={index}
                >
                  {/* Timeline node */}
                  <div className="hidden md:flex flex-col items-center">
                    <motion.div
                      className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0
                        ${edu.highlight
                          ? "bg-gradient-primary text-primary-foreground"
                          : "bg-card border-2 border-border text-primary group-hover:border-primary/60 transition-colors"
                        }`}
                      whileHover={{ scale: 1.15, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    className={`flex-1 bg-card border rounded-xl p-6 transition-all duration-300 group-hover:border-primary/40
                      ${edu.highlight ? "border-primary/30 shadow-md shadow-primary/5" : "border-border"}`}
                    whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className={`text-lg font-bold leading-snug group-hover:text-primary transition-colors
                          ${edu.highlight ? "text-primary" : "text-foreground"}`}>
                          {edu.institution}
                        </h3>
                        <p className="text-base font-semibold text-foreground/80 mt-0.5">{edu.degree}</p>
                      </div>

                      {edu.highlight && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/25 whitespace-nowrap self-start">
                          <BadgeCheck className="w-3 h-3" />
                          Most Recent
                        </span>
                      )}
                    </div>

                    {/* Field of study */}
                    {edu.field && (
                      <p className="text-sm text-primary/80 font-medium mb-3">{edu.field}</p>
                    )}

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary/60" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary/60" />
                        {edu.location}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Education;
