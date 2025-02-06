"use client";

import { motion } from "framer-motion";

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

// Animaciones
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }, // Animación más rápida
};

const hoverEffect = {
    scale: 1.05,
    rotateZ: 2,
    boxShadow: "0px 10px 20px rgba(255, 215, 0, 0.5)", // Sombra dorada
    transition: { duration: 0.2, ease: "easeInOut" }, // Transición más rápida
};

const clickEffect = {
    scale: 0.95,
    rotateZ: 0,
    transition: { type: "spring", stiffness: 300, damping: 10 },
};

const Awards: React.FC = () => {
    return (
        <section id="awards" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 bg-primary text-white">
            {/* Título */}
            <motion.h3
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
            >
                Premios y reconocimientos
            </motion.h3>

            {/* Contenedor de premios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {awards.map((award, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={hoverEffect}
                        whileTap={clickEffect}
                        className="bg-gray-500 bg-opacity-10 backdrop-blur p-4 sm:p-6 rounded-2xl text-center border border-zinc-800 shadow-lg transition-all duration-200 ease-in-out hover:shadow-[0_10px_20px_rgba(255,215,0,0.5)]" // Sombra dorada al hacer hover
                    >
                        <h4 className="text-lg sm:text-xl font-bold mb-2">{award.title}</h4>
                        <p className="text-sm sm:text-base text-gray-300">{award.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Awards;