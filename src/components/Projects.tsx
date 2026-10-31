import { Github, ExternalLink, Code2, Database, Globe, Lightbulb, ArrowRight, ShoppingCart, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "HireFlow AI",
        description: "AI-assisted hiring platform with a Student portal (resume analysis, cover letters, interview prep, career advisor) and an HR portal (JD parsing, resume screening, candidate ranking, assessments, interview scheduling). Powered by Google Gemini with Firebase Auth, Firestore, and Storage.",
        github: "https://github.com/anushadk13/HireFlowAI_version2",
        demo: "https://hire-flow-ai-version2.vercel.app",
        tags: ["React", "FastAPI", "Gemini", "Firebase", "Vite"],
        icon: Briefcase,
        color: "from-sky-500/20 to-violet-500/20"
    },
    {
        title: "Personalized Product Recommendation & Dynamic Merchandising",
        description: "Real-time personalized merchandising engine running 4 ML models (purchase propensity, price elasticity, inventory pressure, demand forecast) with an A/B-testable weighted ranking engine and MMR diversity re-ranking. Served via FastAPI with an MLflow-tracked pipeline, in-memory feature store, drift monitoring, and a Vite dashboard.",
        github: "https://github.com/anushadk13/Product_Recommendation_sysytem",
        tags: ["XGBoost", "LightGBM", "FastAPI", "MLflow", "Causal ML", "Vite"],
        icon: ShoppingCart,
        color: "from-rose-500/20 to-pink-500/20"
    },
    {
        title: "Smart ICU & Remote Monitoring System",
        description: "A comprehensive ICU patient monitoring platform featuring real-time data streaming, ML-driven anomaly detection, and a clinical dashboard.",
        github: "https://github.com/anushadk13/Smart-ICU-System",
        demo: "https://smart-icu-system.vercel.app",
        tags: ["React", "TypeScript", "FastAPI", "ML", "MQTT", "Docker"],
        icon: Database,
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Apple Vision Pro Clone",
        description: "A front-end clone of the Apple Vision Pro landing page, recreating its visuals and layout with HTML, CSS, and JavaScript.",
        github: "https://github.com/anushadk13/Apple-Vision_pro-Clone",
        demo: "https://applevisionclones.netlify.app",
        tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        icon: Globe,
        color: "from-slate-500/20 to-zinc-500/20"
    },
    {
        title: "Customer Purchase Prediction",
        description: "Machine Learning project focused on predicting customer purchase amounts using regression models and stacking techniques.",
        github: "https://github.com/anushadk13/Predicting-Customer-Purchase-Amounts-Using-ML",
        tags: ["Python", "Scikit-learn", "Pandas", "EDA", "Stacking"],
        icon: Lightbulb,
        color: "from-amber-500/20 to-orange-500/20"
    },
    {
        title: "Travel Agency Website",
        description: "A modern, responsive travel agency website featuring destination showcases and adventure packages.",
        github: "https://github.com/anushadk13/Travel-agency-website",
        tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        icon: Globe,
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "AI Virtual Assistant for Vehicle Training",
        description: "AI-powered virtual assistant designed for vehicular troubleshooting and diagnostic assistance.",
        github: "https://github.com/anushadk13/AI-Powered-Virtual-Assistant-For-Vehicular-Troubleshooting",
        tags: ["AI", "Virtual Assistant", "Python", "Diagnostics"],
        icon: Code2,
        color: "from-purple-500/20 to-indigo-500/20"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-card/30">
            <div className="container px-6">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={staggerContainer}
                >
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
                        <div className="flex-1 h-px bg-border" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={fadeInUp}
                                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:-translate-y-1"
                            >
                                {/* Background Glow */}
                                <div className={`absolute -inset-2 bg-gradient-to-br ${project.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} text-primary`}>
                                            <project.icon className="w-8 h-8" />
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            </Button>
                                            {project.demo && (
                                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="w-5 h-5" />
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/5 text-primary/80 border border-primary/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                                        {project.description}
                                    </p>

                                    <div className="pt-6 border-t border-border mt-auto">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link"
                                        >
                                            View Project Details
                                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
