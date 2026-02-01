import { Mail, Linkedin, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn, viewportSettings } from "@/lib/animations";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.p className="text-primary font-mono mb-4" variants={fadeInUp}>
            What's Next?
          </motion.p>

          <motion.h2 className="text-3xl md:text-5xl font-bold mb-6" variants={fadeInUp}>
            Get In Touch
          </motion.h2>

          <motion.p className="text-muted-foreground mb-10 leading-relaxed" variants={fadeInUp}>
            I'm currently looking for new opportunities and would love to hear from you!
            Whether you have a question, a project idea, or just want to say hi,
            feel free to reach out. I'll do my best to get back to you!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
              >
                <a href="mailto:anushadharma1@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Say Hello
                </a>
              </Button>
            </motion.div>

            <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                <a
                  href="https://www.linkedin.com/in/anushadk2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            variants={staggerContainer}
          >
            <motion.a
              href="mailto:anushadharma1@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              variants={scaleIn}
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="w-4 h-4" />
              anushadharma1@gmail.com
            </motion.a>

            <motion.span className="flex items-center gap-2" variants={scaleIn}>
              <MapPin className="w-4 h-4" />
              Bengaluru, Karnataka, India
            </motion.span>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
