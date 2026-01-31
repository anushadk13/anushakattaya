import { Mail, Linkedin, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-mono mb-4">05. What's Next?</p>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm currently looking for new opportunities and would love to hear from you! 
            Whether you have a question, a project idea, or just want to say hi, 
            feel free to reach out. I'll do my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="mailto:anushadharma1@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              anushadharma1@gmail.com
            </a>
            
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Bengaluru, Karnataka, India
            </span>
            
            <a
              href="https://anushadkportfolioo.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
