"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// Datos de la discografía
const albums = [
    {
        title: "The College Dropout",
        year: "2004 - 21 canciones, 1 h 16 min",
        cover: "/tcd-cover.jpg",
        spotifyLink: "https://open.spotify.com/intl-es/album/4Uv86qWpGTxf7fU7lG5X6F?si=_PvmWzyRRDivV_y4Bwix_w", // Enlace de Spotify
        appleMusicLink: "https://music.apple.com/cl/album/the-college-dropout/1412872568", // Enlace de Apple Music
    },
    {
        title: "My Beautiful Dark Twisted Fantasy",
        year: "2010 - 13 canciones, 1 h 8 min",
        cover: "/mbdtf-cover.jpg",
        spotifyLink: "https://open.spotify.com/intl-es/album/20r762YmB5HeofjMCiPMLv?si=GoEKGi0eTaOPrApq47eqiw", // Enlace de Spotify
        appleMusicLink: "https://music.apple.com/cl/album/my-beautiful-dark-twisted-fantasy/1440742903", // Enlace de Apple Music
    },
    {
        title: "Graduation",
        year: "2021 - 14 canciones, 54 min 29 s",
        cover: "/graduation-cover.jpg",
        spotifyLink: "https://open.spotify.com/intl-es/album/4SZko61aMnmgvNhfhgTuD3?si=KUq2ivE3TN6-ePJZfYn9MA", // Enlace de Spotify
        appleMusicLink: "https://music.apple.com/cl/album/graduation/1451901307", // Enlace de Apple Music
    },
];

// Animación para cada Card
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Discography: React.FC = () => {
    return (
        <section id="discography" className="bg-secondary py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 text-white">
            {/* Título */}
            <motion.h3
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
            >
                Discografía
            </motion.h3>

            {/* Contenedor de Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <CardContainer className="inter-var w-full flex justify-center">
                            <CardBody className="w-full max-w-[20rem] sm:max-w-[22rem] lg:max-w-[24rem] h-auto flex flex-col items-center justify-center bg-gray-500 bg-opacity-10 backdrop-blur p-6 rounded-2xl text-center border border-zinc-800 shadow-md overflow-hidden">
                                {/* Título del álbum */}
                                <CardItem translateZ={50} className="text-xl sm:text-2xl font-bold mb-3">
                                    {album.title}
                                </CardItem>

                                {/* Portada del álbum */}
                                <CardItem translateZ={100} rotateX={20} rotateZ={-10} className="w-full flex justify-center">
                                    <Image
                                        src={album.cover}
                                        alt={album.title}
                                        width={300}
                                        height={300}
                                        className="w-full h-auto rounded-2xl drop-shadow-xl"
                                    />
                                </CardItem>

                                {/* Año y detalles del álbum */}
                                <CardItem as="p" translateZ={60} className="text-gray-300 mt-4 text-sm sm:text-base">
                                    {album.year}
                                </CardItem>

                                {/* Botones */}
                                <div className="flex justify-center gap-3 w-full mt-6">
                                    <a
                                        href={album.spotifyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 w-28 sm:w-32 rounded-lg bg-green-600 text-white hover:bg-green-500 text-sm sm:text-base text-center"
                                    >
                                        Spotify
                                    </a>
                                    <a
                                        href={album.appleMusicLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 w-28 sm:w-32 rounded-lg bg-rose-600 text-white hover:bg-rose-500 text-sm sm:text-base text-center"
                                    >
                                        Apple Music
                                    </a>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Discography;