"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Efecto de escritura
const TypingText: React.FC<{ text: string; speed?: number }> = ({
    text,
    speed = 30,
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);

    return <span>{displayedText}</span>;
};

// Animaciones con Framer Motion
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const imageEffect = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const Hero: React.FC = () => {
    return (
        <header className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-10 flex-grow mx-auto pt-24 md:pt-32 lg:pt-36 bg-hero">
            {/* Texto del Hero */}
            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="w-full md:w-1/2 space-y-6"
            >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">YeezyVerse</h2>
                <p className="text-4xl md:text-5xl lg:text-6xl font-satisfy italic bg-gradient-to-t from-blue-400 via-blue-100 to-blue-600 bg-clip-text text-transparent">
                    &quot;I&apos;m a God&quot;
                </p>
                <p className="text-lg sm:text-xl md:text-2xl max-w-lg mx-auto md:mx-0">
                    <TypingText text="No es solo hip-hop, no es solo moda. Es una revolución creativa." />
                </p>
            </motion.div>

            {/* Imagen con animación */}
            <motion.div
                variants={imageEffect}
                initial="hidden"
                animate="visible"
                className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-6 lg:mt-4"
            >
                <Image
                    src="/kanye-cover2.jpg"
                    alt="Kanye West"
                    width={450}
                    height={450}
                    className="rounded-full"
                    style={{
                        maskImage: "radial-gradient(#0f0f12, transparent, #0f0f12 140%)",
                    }}
                />
            </motion.div>
        </header>
    );
};

export default Hero;