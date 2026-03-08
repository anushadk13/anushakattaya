import { Award, Eye, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const certifications = [
    {
        title: "Web Development Specialist",
        issuer: "SheCodes",
        icon: "🌐",
        images: [
            "/images/certificates/ResponsiveWebDev.jpeg",
            "/images/certificates/Webdev.jpeg",
            "/images/certificates/React.jpeg"
        ],
        description: "Comprehensive front-end development workshop certifications covering Responsive Web Design, Advanced JS, and React development.",
    },
    {
        title: "Beginning C++ Programming",
        issuer: "Udemy",
        icon: "⚙️",
        images: ["/images/certificates/C++.jpeg"],
        description: "From Beginner to Beyond - comprehensive C++ programming course.",
    },
    {
        title: "Microsoft SQL Server",
        issuer: "iTroniX Solutions",
        icon: "🗄️",
        images: ["/images/certificates/MySql.jpeg"],
        description: "Certification for completing the Microsoft SQL Server Quiz.",
    },
    {
        title: "Data Analytics",
        issuer: "Certification",
        icon: "📊",
        images: ["/images/certificates/DataAnalytics.jpeg"],
        description: "Proficiency in data analysis and visualization.",
    },
];

const Certifications = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const nextImage = (images: string[]) => {
        setCurrentImgIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (images: string[]) => {
        setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="certifications" className="py-24 bg-background">
            <div className="container px-6">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={staggerContainer}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
                            <Award className="w-8 h-8 text-primary" />
                            <span>Certifications</span>
                        </h2>
                        <div className="flex-1 h-px bg-border" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <Dialog key={cert.title} onOpenChange={(open) => !open && setCurrentImgIndex(0)}>
                                <DialogTrigger asChild>
                                    <motion.div
                                        variants={fadeInUp}
                                        className="relative group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-sm cursor-pointer"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="p-3 rounded-xl bg-primary/10 text-2xl">
                                                    {cert.icon}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {cert.images.length > 1 && (
                                                        <span className="text-[10px] font-bold bg-primary/20 text-primary px-2 py-0.5 rounded-full uppercase">
                                                            {cert.images.length} Certificates
                                                        </span>
                                                    )}
                                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <Maximize2 className="w-5 h-5 text-primary" />
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                                            <p className="text-sm text-primary font-medium mb-3">{cert.issuer}</p>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {cert.description}
                                            </p>
                                        </div>

                                        {/* Hover Overlay with Certificate Image */}
                                        <AnimatePresence>
                                            {hoveredIndex === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    className="absolute inset-0 z-10 p-2 bg-card/95 backdrop-blur-sm flex flex-col"
                                                >
                                                    <div className="relative flex-1 rounded-xl overflow-hidden shadow-2xl border border-border">
                                                        <img
                                                            src={cert.images[0]}
                                                            alt={cert.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                        <div className="absolute bottom-4 left-4 right-4">
                                                            <p className="text-white text-[10px] font-bold uppercase tracking-wider mb-0.5">Click to view all</p>
                                                            <h4 className="text-white text-base font-bold leading-tight">{cert.title}</h4>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </DialogTrigger>

                                <DialogContent className="max-w-4xl w-[95vw] h-fit max-h-[90vh] p-0 overflow-hidden border-none bg-background shadow-none">
                                    <DialogHeader className="sr-only">
                                        <DialogTitle>{cert.title}</DialogTitle>
                                    </DialogHeader>
                                    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="relative w-full max-w-full rounded-lg overflow-hidden shadow-2xl bg-card border border-border flex flex-col"
                                        >
                                            <div className="relative group">
                                                <img
                                                    src={cert.images[currentImgIndex]}
                                                    alt={`${cert.title} - ${currentImgIndex + 1}`}
                                                    className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                                                />

                                                {cert.images.length > 1 && (
                                                    <>
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                prevImage(cert.images);
                                                            }}
                                                        >
                                                            <ChevronLeft className="h-4 w-4" />
                                                        </Button>
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                nextImage(cert.images);
                                                            }}
                                                        >
                                                            <ChevronRight className="h-4 w-4" />
                                                        </Button>

                                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                                                            {cert.images.map((_, i) => (
                                                                <div
                                                                    key={i}
                                                                    className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImgIndex ? "bg-primary w-4" : "bg-primary/30"}`}
                                                                />
                                                            ))}
                                                        </div>
                                                    </>
                                                )}
                                            </div>

                                            <div className="p-4 bg-card border-t border-border flex items-center justify-between">
                                                <div>
                                                    <h3 className="font-bold text-lg">{cert.title}</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {cert.issuer} {cert.images.length > 1 && `(${currentImgIndex + 1} of ${cert.images.length})`}
                                                    </p>
                                                </div>
                                                <DialogTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="rounded-full">
                                                        <X className="w-5 h-5" />
                                                    </Button>
                                                </DialogTrigger>
                                            </div>
                                        </motion.div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
