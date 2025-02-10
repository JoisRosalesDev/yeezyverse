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
        <section id="awards" className="bg-white py-16 px-6 sm:px-12 lg:px-20 text-black">
            {/* Título */}
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
            >
                Premios y Reconocimientos
            </motion.h3>

            {/* Contenedor de premios con Infinite Moving Cards */}
            <div className="relative">
                <InfiniteMovingCards
                    items={awards.map((award) => ({
                        quote: award.description,
                        name: award.title,
                        title: "",
                    }))}
                    direction="right"
                    speed="slow"
                    pauseOnHover={true}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                />
            </div>
        </section>
    );
};

export default Awards;