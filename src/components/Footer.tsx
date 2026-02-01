import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col items-center gap-4">

          <p className="text-sm text-muted-foreground font-mono">
            Designed & Built by Anusha Dharma Kattaya
          </p>

          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
