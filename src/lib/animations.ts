// Reusable Framer Motion animation variants and configurations

export const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const // Custom easing for smooth motion
        }
    }
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
};

// Stagger container for sequential animations
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const staggerContainerFast = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

// Hover effects
export const hoverScale = {
    scale: 1.05,
    transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
    }
};

export const hoverLift = {
    y: -8,
    transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
    }
};

// Scroll reveal settings
export const scrollReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
};

// Spring configurations
export const springConfig = {
    type: "spring",
    stiffness: 260,
    damping: 20
};

export const bouncySpring = {
    type: "spring",
    stiffness: 300,
    damping: 15
};

// Viewport settings for scroll animations
export const viewportSettings = {
    once: true, // Animation triggers only once
    amount: 0.3, // Trigger when 30% of element is visible
    margin: "0px 0px -100px 0px" // Start animation slightly before element enters viewport
};
