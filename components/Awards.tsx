"use client";

import { motion } from "framer-motion";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// Datos de los premios
const awards = [
    {
        title: "🏆 21 premios Grammy",
        description: "Uno de los artistas más premiados en la historia de los Grammys.",
    },
    {
        title: "🏆 Mejor Álbum de Rap",
        description:
            '"The College Dropout" (2005), "Late Registration" (2006), "Graduation" (2008), "MBDTF" (2012) y "Jesus Is King" (2021).',
    },
    {
        title: "🏆 Mejor Canción Rap",
        description:
            '"Jesus Walks" (2005), "Diamonds from Sierra Leone" (2006), "Good Life" (2008), "All of the Lights" (2012), "Hurricane" (2022).',
    },
    {
        title: "🏆 Mejor Interpretación Rap",
        description: '"Gold Digger" (2006) y "Stronger" (2008).',
    },
];

const Awards: React.FC = () => {
    return (
        <section id="awards" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 bg-primary text-white">
            {/* Título */}
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
            >
                Premios y reconocimientos
            </motion.h3>

            {/* Contenedor de premios */}
            <InfiniteMovingCards
                items={awards.map((award) => ({
                    quote: award.description,
                    name: award.title,
                    title: "",
                }))}
                direction="right"
                speed="slow"
                pauseOnHover={true}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            />
        </section>
    );
};

export default Awards;