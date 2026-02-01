import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hi, my name is
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">Anusha </span>
            <span className="text-gradient">Dharma Kattaya</span>
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Software Developer & AI Enthusiast
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
            I'm an MS in Data Science student passionate about AI, Machine Learning, and the data-driven insights that power intelligent systems. My focus lies at the intersection of advanced analytics and ML, where I leverage statistical methods, deep learning frameworks, and big data technologies to extract meaningful patterns from complex datasets. I'm driven by exploring innovative approaches that solve real-world problems and uncover insights that create tangible impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            {/* <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              <a href="#experience">View My Work</a>
            </Button> */}
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a
              href="mailto:anushadharma1@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/anushadk2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/anushadk13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
