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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span>
            <span>About Me</span>
            <div className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hi, I'm Anusha — a recent graduate from Dayananda Sagar University, Bangalore, 
                with a growing passion for Artificial Intelligence and its real-world impact. 
                I'm particularly interested in <span className="text-primary">AI, Machine Learning, 
                and Natural Language Processing</span>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I have good knowledge of Python, SQL, and concepts in ML and NLP. 
                I've built a custom AI bot for vehicle troubleshooting and recently explored 
                <span className="text-primary"> no-code development using Langflow</span> to 
                quickly create intelligent prototypes.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I enjoy learning by doing and am always excited to build solutions that make 
                a difference. Let's connect and collaborate on all things AI!
              </p>

              <div className="pt-6">
                <p className="text-foreground font-medium mb-4">Technologies I work with:</p>
                <ul className="grid grid-cols-2 gap-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-muted-foreground text-sm"
                    >
                      <span className="text-primary font-mono">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-primary rounded-lg opacity-20 group-hover:opacity-40 transition-opacity blur-sm" />
                <div className="relative bg-card rounded-lg overflow-hidden border border-border">
                  <div className="aspect-square bg-gradient-subtle flex items-center justify-center">
                    <div className="text-6xl font-bold text-gradient">AD</div>
                  </div>
                </div>
                <div className="absolute -inset-2 border-2 border-primary/50 rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
