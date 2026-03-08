import { ArrowDown, Github, Linkedin, Mail, Sparkles, MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn, fadeInLeft, fadeInRight, scrollReveal, viewportSettings } from "@/lib/animations";
import { useState, useRef, useEffect } from "react";

// ── Quick Summary Modal ──────────────────────────────────────────────────────
const QuickSummaryModal = ({ onClose, onOpenChat }: { onClose: () => void; onOpenChat: () => void }) => (
    <AnimatePresence>
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Backdrop */}
            <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Card */}
            <motion.div
                className="relative z-10 max-w-lg w-full bg-card border border-border rounded-2xl p-8 shadow-2xl"
                initial={{ scale: 0.85, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 30 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                {/* Glow accent */}
                <div className="absolute -inset-px bg-gradient-primary rounded-2xl opacity-10 blur-sm pointer-events-none" />

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-xs text-primary font-mono uppercase tracking-widest">Quick Summary</p>
                        <h3 className="text-xl font-bold">Anusha Dharma Kattaya</h3>
                    </div>
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground">
                    {[
                        { label: "🎓 Education", value: "MS in Data Science" },
                        { label: "💼 Role", value: "Software Developer & AI Enthusiast" },
                        { label: "🧠 Expertise", value: "LLMs, AI Agents, Machine Learning, NLP, Cloud (Azure)" },
                        { label: "🛠 Stack", value: "Python, React.js, SQL, YOLOv5, OpenCV, Langflow" },
                        { label: "🏥 Domain", value: "AI-powered Healthcare & Full-stack Applications" },
                        { label: "🌏 Standards", value: "HL7 FHIR, Healthcare Interoperability, DevOps" },
                        { label: "✨ Passion", value: "Building innovative, data-driven solutions with real-world impact" },
                    ].map(({ label, value }) => (
                        <li key={label} className="flex gap-2 items-start">
                            <span className="font-semibold text-foreground whitespace-nowrap">{label}:</span>
                            <span>{value}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-6 flex gap-3">
                    <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90 flex items-center gap-2"
                        onClick={() => { onClose(); onOpenChat(); }}
                    >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Ask Eliza Chatbot
                    </Button>
                    <Button asChild size="sm" variant="outline" className="flex-1">
                        <a href="#about" onClick={onClose}>Learn More</a>
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    </AnimatePresence>
);

// ── Chatbot ──────────────────────────────────────────────────────────────────
type Message = { role: "user" | "bot"; text: string };

interface ChatRule {
    patterns: string[];
    response: string;
}

const CHAT_RULES: ChatRule[] = [
    {
        patterns: ["hello", "hi", "hey", "greetings"],
        response: "Hello! 👋 I'm Anusha's portfolio assistant. Ask me anything about her skills, experience, projects, or how to get in touch!",
    },
    {
        patterns: ["skill", "tech", "stack", "language", "coding", "proficient", "know"],
        response: "Anusha is proficient in Python, SQL, React.js, and Machine Learning. She also works with NLP, YOLOv5, OpenCV, Azure, and Langflow. She loves building intelligent systems!",
    },
    {
        patterns: ["experience", "work", "job", "career", "history", "role", "llm", "agent"],
        response: "She has experience building AI-powered healthcare solutions and full-stack apps. She's worked extensively with LLMs, AI agents, and cloud technologies like Azure, and understands HL7 FHIR standards.",
    },
    {
        patterns: ["education", "degree", "study", "university", "college", "masters", "ms", "data science"],
        response: "Anusha is currently pursuing her MS in Data Science. She has a strong foundation in statistics, deep learning, and advanced data analytics.",
    },
    {
        patterns: ["contact", "email", "reach", "linkedin", "message", "talk", "github"],
        response: "You can reach Anusha via email at anushadharma1@gmail.com. You can also find her on [LinkedIn](https://linkedin.com/in/anushadk2) or check her code on [GitHub](https://github.com/anushadk13)!",
    },
    {
        patterns: ["project", "portfolio", "build", "create", "demo", "app", "icu", "purchase"],
        response: "Anusha has worked on diverse projects: from a Smart ICU monitoring system to ML models for purchase prediction and AI virtual assistants. You can scroll down to the Projects section to see more!",
    },
    {
        patterns: ["who", "anusha", "about"],
        response: "Anusha is a Software Developer and AI enthusiast specializing in Data Science. She loves turning complex data into actionable insights and building innovative AI solutions!",
    }
];

function getBotReply(input: string): string {
    const lowerInput = input.toLowerCase();

    // Find a rule that matches any of the patterns
    const matchedRule = CHAT_RULES.find(rule =>
        rule.patterns.some(pattern => lowerInput.includes(pattern))
    );

    if (matchedRule) {
        return matchedRule.response;
    }

    return "That's an interesting question! I might not have a specific answer for that, but feel free to ask about Anusha's skills, experience, education, or her exciting AI projects! 😊";
}

const Chatbot = ({ onClose }: { onClose: () => void }) => {
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", text: "Hi! I'm Anusha's portfolio assistant 🤖 You can ask me about her skills, experience, education, or how to get in touch!" },
    ]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typing]);

    const send = () => {
        const text = input.trim();
        if (!text) return;
        setMessages((prev) => [...prev, { role: "user", text }]);
        setInput("");
        setTyping(true);
        setTimeout(() => {
            setMessages((prev) => [...prev, { role: "bot", text: getBotReply(text) }]);
            setTyping(false);
        }, 800);
    };

    return (
        <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-primary text-primary-foreground">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                </div>
                <div className="flex-1">
                    <p className="font-semibold text-sm">Portfolio Assistant</p>
                    <p className="text-xs opacity-75">Ask me anything about Anusha</p>
                </div>
                <button onClick={onClose} aria-label="Close chat" className="opacity-75 hover:opacity-100 transition-opacity">
                    <X className="w-4 h-4" />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72">
                {messages.map((msg, i) => (
                    <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        {msg.role === "bot" && (
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <Bot className="w-3 h-3 text-primary" />
                            </div>
                        )}
                        <div
                            className={`max-w-[75%] px-3 py-2 rounded-xl text-sm leading-relaxed ${msg.role === "user"
                                ? "bg-primary text-primary-foreground rounded-br-sm"
                                : "bg-muted text-foreground rounded-bl-sm"
                                }`}
                        >
                            {msg.text}
                        </div>
                        {msg.role === "user" && (
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <User className="w-3 h-3 text-primary" />
                            </div>
                        )}
                    </div>
                ))}
                {typing && (
                    <div className="flex gap-2 justify-start">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <Bot className="w-3 h-3 text-primary" />
                        </div>
                        <div className="bg-muted rounded-xl rounded-bl-sm px-4 py-3">
                            <div className="flex gap-1">
                                {[0, 0.2, 0.4].map((d) => (
                                    <motion.div
                                        key={d}
                                        className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ duration: 0.6, repeat: Infinity, delay: d }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <div ref={bottomRef} />
            </div>

            {/* Quick prompts */}
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
                {["Skills", "Experience", "Contact", "Projects"].map((q) => (
                    <button
                        key={q}
                        onClick={() => {
                            setMessages((prev) => [...prev, { role: "user", text: q }]);
                            setTyping(true);
                            setTimeout(() => {
                                setMessages((prev) => [...prev, { role: "bot", text: getBotReply(q) }]);
                                setTyping(false);
                            }, 800);
                        }}
                        className="text-xs px-2 py-1 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                        {q}
                    </button>
                ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 p-3 border-t border-border bg-background/50">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="Ask me something…"
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                    onClick={send}
                    disabled={!input.trim()}
                    className="w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity"
                    aria-label="Send"
                >
                    <Send className="w-3.5 h-3.5" />
                </button>
            </div>
        </motion.div>
    );
};

// ── HeroAbout (combined) ─────────────────────────────────────────────────────
const HeroAbout = () => {
    const [showSummary, setShowSummary] = useState(false);
    const [showChat, setShowChat] = useState(false);

    return (
        <>
            {/* ── HERO ── */}
            <section
                id="home"
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                {/* Background gradient orbs */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                <div className="container relative z-10 px-6 py-20">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.p className="text-primary font-mono text-sm md:text-base mb-4" variants={fadeInUp}>
                            Hi, my name is
                        </motion.p>

                        <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4" variants={fadeInUp}>
                            <span className="text-foreground">Anusha </span>
                            <span className="text-gradient">Dharma Kattaya</span>
                        </motion.h1>

                        <motion.h2
                            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-6"
                            variants={fadeInUp}
                        >
                            Software Developer &amp; AI Enthusiast
                        </motion.h2>

                        <motion.p
                            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
                            variants={fadeInUp}
                        >
                            MS in Data Science student passionate about AI, Machine Learning, and using data analytics to build intelligent systems and extract meaningful insights from complex datasets.

                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                            variants={fadeInUp}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
                                >
                                    <a href="#contact">Get In Touch</a>
                                </Button>
                            </motion.div>

                            {/* ✨ Quick Summary button (Aliza-style) */}
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="flex items-center gap-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all"
                                    onClick={() => setShowSummary(true)}
                                    id="quick-summary-btn"
                                >
                                    <Sparkles className="w-4 h-4 text-primary" />
                                    Quick Summary
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Social icons */}
                        <motion.div className="flex items-center justify-center gap-6" variants={staggerContainer}>
                            <motion.a
                                href="mailto:anushadharma1@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors p-2"
                                aria-label="Email"
                                variants={scaleIn}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Mail className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/anushadk2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors p-2"
                                aria-label="LinkedIn"
                                variants={scaleIn}
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Linkedin className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://github.com/anushadk13"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors p-2"
                                aria-label="GitHub"
                                variants={scaleIn}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github className="w-6 h-6" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                            <ArrowDown className="w-6 h-6" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ── ABOUT ── */}
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
                            {/* Text content */}
                            <motion.div
                                className="md:col-span-2 space-y-4"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                            >
                                <motion.p className="text-muted-foreground leading-relaxed" variants={fadeInLeft}>
                                    Results-driven{" "}
                                    <span className="text-primary">Software Developer</span> with expertise in
                                    building AI-powered healthcare solutions and fullstack applications. Specialized in{" "}
                                    <span className="text-primary">
                                        Large Language Models (LLMs), AI agents, and cloud technologies
                                    </span>{" "}
                                    with hands-on experience in developing end-to-end automation workflows.
                                </motion.p>

                                <motion.p className="text-muted-foreground leading-relaxed" variants={fadeInLeft}>
                                    Proficient in{" "}
                                    <span className="text-primary">React.js, Python, and Azure ecosystem</span> with a
                                    strong foundation in HL7 FHIR standards and healthcare interoperability.
                                    Demonstrated ability to evaluate and optimize LLMs for production environments
                                    while delivering scalable, secure applications using modern DevOps practices.
                                </motion.p>

                                <motion.p className="text-muted-foreground leading-relaxed" variants={fadeInLeft}>
                                    Passionate about leveraging cutting-edge AI technologies to solve real-world
                                    problems and create meaningful impact. Let's connect and build innovative solutions
                                    together!
                                </motion.p>
                            </motion.div>

                            {/* Profile photo */}
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
                                                <img
                                                    src="https://github.com/anushadk13/anushakattaya/blob/main/public/1745476489487.jpeg?raw=true"
                                                    alt="Anusha Dharma Kattaya"
                                                />
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

            {/* ── Quick Summary Modal ── */}
            {showSummary && <QuickSummaryModal onClose={() => setShowSummary(false)} onOpenChat={() => setShowChat(true)} />}

            {/* ── Chatbot ── */}
            <AnimatePresence>{showChat && <Chatbot onClose={() => setShowChat(false)} />}</AnimatePresence>

            {/* ── Floating Chat Button ── */}
            <motion.button
                id="chat-toggle-btn"
                onClick={() => setShowChat((v) => !v)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-primary text-primary-foreground shadow-lg flex items-center justify-center glow-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={showChat ? "Close chat" : "Open chat"}
            >
                <AnimatePresence mode="wait">
                    {showChat ? (
                        <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <X className="w-6 h-6" />
                        </motion.span>
                    ) : (
                        <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <MessageCircle className="w-6 h-6" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </>
    );
};

export default HeroAbout;
