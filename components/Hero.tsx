"use client";

import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const Hero: React.FC = () => {
    return (
        <header id="hero"
            className="relative flex items-center justify-center text-center h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/kanye-hero.webp')" }}
        >
            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="w-full max-w-4xl px-10 md:px-10 mix-blend-difference drop-shadow-md"
            >
                <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
                    YeezyVerse
                </h1>
                <p className="text-4xl md:text-6xl font-satisfy text-white mt-4 drop-shadow-lg">
                    &quot;I&apos;m a God&quot;
                </p>
                <p className="text-2xl md:text-4xl text-white mt-6 max-w-lg mx-auto drop-shadow-lg">
                    No es solo hip-hop, no es solo moda. Es una revolución creativa.
                </p>
            </motion.div>
        </header>
    );
};

export default Hero;