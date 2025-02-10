"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const phrases = [
    "I feel like I'm too busy writing history to read it.",
    "My greatest pain in life is that I will never be able to see myself perform live.",
    "Believe in your flyness... conquer your shyness.",
    "We all self-conscious. I'm just the first to admit it.",
    "I'm not a businessman. I'm a business, man.",
    "For me, money is not my definition of success. Inspiring people is a definition of success.",
    "Nobody can tell me where I can and can't go.",
    "I refuse to follow the rules where society tries to control people with low self-esteem.",
    "Would you believe in what you believe in if you were the only one who believed it?",
    "I am a creative genius and there is no other way to word it.",
];

const RandomQuote: React.FC = () => {
    const [currentQuote, setCurrentQuote] = useState(phrases[0]);

    const changeQuote = () => {
        const newQuote = phrases[Math.floor(Math.random() * phrases.length)];
        setCurrentQuote(newQuote);
    };

    return (
        <section id="quote" className="bg-white py-16 px-6 sm:px-12 lg:px-20 text-black text-center">
            {/* Título */}
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
            >
                Frase Icónica
            </motion.h3>

            {/* Frase con animación */}
            <motion.p
                key={currentQuote}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
                className="text-xl sm:text-2xl md:text-3xl font-serif italic text-gray-900 max-w-3xl mx-auto"
            >
                &quot;{currentQuote}&quot;
            </motion.p>

            {/* Botón para cambiar la frase */}
            <motion.button
                onClick={changeQuote}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 text-lg font-medium text-white bg-black rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
            >
                Cambiar Frase
            </motion.button>
        </section>
    );
};

export default RandomQuote;
