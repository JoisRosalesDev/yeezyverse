"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const TypingText = ({ text, speed = 30 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);

    return <span>{displayedText}</span>;
};

const testimonials = [
    {
        quote:
            "Kanye Omari West nació el 8 de junio de 1977 en Atlanta, Georgia, y se trasladó a Chicago, Illinois, con su madre cuando tenía tres años.",
        name: "Nacimiento y primeros años",
        designation: "Fuente: Britannica",
        src: "/young-kanye.webp",
    },
    {
        quote:
            "A finales de los años 90, Kanye comenzó a trabajar como productor musical, produciendo canciones para artistas como Jay-Z, Alicia Keys y Janet Jackson.",
        name: "Inicios en la producción musical",
        designation: "Fuente: Britannica",
        src: "/studio-kanye.webp",
    },
    {
        quote:
            "En 2002, Kanye sufrió un accidente automovilístico que casi le cuesta la vida y le dejó fracturada la mandíbula. Este incidente inspiró su primer sencillo en solitario, 'Through the Wire'.",
        name: "Accidente automovilístico",
        designation: "Fuente: Britannica",
        src: "/crashed-kanye.webp",
    },
    {
        quote:
            "En 2004, lanzó su álbum debut, 'The College Dropout', que recibió elogios de la crítica y el público, marcando su entrada como solista en la industria musical.",
        name: "Debut como solista",
        designation: "Fuente: Britannica",
        src: "/tcd-cover.jpg",
    },
    {
        quote:
            "Su segundo álbum, 'Late Registration' (2005), y su tercer álbum, 'Graduation' (2007), consolidaron su éxito, con éxitos como 'Gold Digger' y 'Stronger'.",
        name: "Éxito continuo",
        designation: "Fuente: Britannica",
        src: "/late-cover.webp"
    },
    {
        quote:
            "En 2009, Kanye interrumpió el discurso de aceptación de Taylor Swift en los MTV Video Music Awards, lo que generó una gran controversia.",
        name: "Incidente en los MTV Video Music Awards",
        designation: "Fuente: Britannica",
        src: "/mtv-kanye.webp"
    },
    {
        quote:
            "Kanye comenzó a trabajar en la moda y lanzó su propia línea de ropa, colaborando con marcas como Nike para diseñar el famoso zapato 'Air Yeezy'.",
        name: "Exploración de la moda",
        designation: "Fuente: Britannica",
        src: "/air-yeezy.webp"
    },
    {
        quote:
            "En 2007, su madre, Donda West, falleció tras una cirugía estética, lo que afectó profundamente a Kanye.",
        name: "Problemas personales",
        designation: "Fuente: Britannica",
        src: "/donda-west.webp"
    },
    {
        quote:
            "En 2010, lanzó 'My Beautiful Dark Twisted Fantasy', considerado uno de sus mejores trabajos y aclamado por la crítica.",
        name: "Álbum aclamado",
        designation: "Fuente: Britannica",
        src: "/mbdtf-cover.jpg"
    },
    {
        quote:
            "En 2020, Kanye anunció su candidatura a la presidencia de los Estados Unidos, aunque finalmente no se presentó oficialmente.",
        name: "Carrera política",
        designation: "Fuente: Britannica",
        src: "/president-kanye.webp"
    },
];

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen font-sans bg-black text-white">
            <Head>
                <title>YeezyVerse</title>
                <meta name="description" content="Trayectoria, discografía y premios de Kanye West" />
            </Head>

            {/* Hero Container */}
            <div className="relative bg-hero flex flex-col">
                {/* Navbar */}
                <nav className="fixed top-0 left-0 w-full bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 z-50">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center space-x-3">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">YeezyVerse</span>
                        </a>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent text-white">
                                <li><a href="#" className="block py-2 px-3 hover:text-gray-300">Home</a></li>
                                <li><a href="#discography" className="block py-2 px-3 hover:text-gray-300">Discografía</a></li>
                                <li><a href="#awards" className="block py-2 px-3 hover:text-gray-300">Premios</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <header className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-6 flex-grow mx-auto pt-32 md:pt-32 lg:pt-32">
                    {/* Texto del Hero */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">YeezyVerse</h2>
                        <p className="text-4xl md:text-5xl lg:text-6xl font-satisfy italic bg-gradient-to-t from-blue-400 via-blue-100 to-blue-600 bg-clip-text text-transparent">
                            &quot;I&apos;m a God&quot;
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl max-w-lg mx-auto md:mx-0">
                            <TypingText text="No es solo hip-hop, no es solo moda. Es una revolución creativa." />
                        </p>
                    </div>

                    {/* Imagen */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-6 lg:mt-4">
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
                    </div>
                </header>

            </div>

            <section id="about" className="py-20 px-4 text-white bg-primary">
                {/* Título de la sección */}
                <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Acerca de Kanye West
                </h3>

                {/* Carrusel de testimonios animados */}
                <AnimatedTestimonials testimonials={testimonials} />
            </section>

            {/* Discografía */}
            <section id="discography" className="bg-secondary py-20 px-4 text-white">
                <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Discografía
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {/* Card - The College Dropout */}
                    <CardContainer className="inter-var w-full flex justify-center">
                        <CardBody className="w-full max-w-[20rem] h-full flex flex-col items-center justify-center bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-4 rounded-2xl text-center border border-zinc-800 shadow-md">
                            <CardItem translateZ={50} className="text-xl font-bold mb-2">
                                The College Dropout
                            </CardItem>
                            <CardItem translateZ={100} rotateX={20} rotateZ={-10} className="flex justify-center">
                                <Image
                                    src="/tcd-cover.jpg"
                                    alt="Kanye West"
                                    width={300}
                                    height={300}
                                    className="w-[300px] h-auto rounded-2xl drop-shadow-xl"
                                />
                            </CardItem>
                            <CardItem as="p" translateZ={60} className="text-gray-300 mt-3 text-sm">
                                2004 - 21 canciones, 1 h 16 min
                            </CardItem>
                            <div className="flex justify-center gap-2 w-full mt-4">
                                <button className="px-4 py-2 w-28 rounded-lg bg-green-600 text-white hover:bg-green-500 text-sm">
                                    <a href="#">Spotify</a>
                                </button>
                                <button className="px-4 py-2 w-28 rounded-lg bg-rose-600 text-white hover:bg-rose-500 text-sm">
                                    <a href="#">Apple Music</a>
                                </button>
                            </div>
                        </CardBody>
                    </CardContainer>

                    {/* Card - My Beautiful Dark Twisted Fantasy */}
                    <CardContainer className="inter-var w-full flex justify-center">
                        <CardBody className="w-full max-w-[20rem] h-full flex flex-col items-center justify-center bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-4 rounded-2xl text-center border border-zinc-800 shadow-md">
                            <CardItem translateZ={50} className="text-xl font-bold mb-2">
                                My Beautiful Dark Twisted Fantasy
                            </CardItem>
                            <CardItem translateZ={100} rotateX={20} rotateZ={-10} className="flex justify-center">
                                <Image
                                    src="/mbdtf-cover.jpg"
                                    alt="Kanye West"
                                    width={300}
                                    height={300}
                                    className="w-[300px] h-auto rounded-2xl drop-shadow-xl"
                                />
                            </CardItem>
                            <CardItem as="p" translateZ={60} className="text-gray-300 mt-3 text-sm">
                                2010 - 13 canciones, 1 h 8 min
                            </CardItem>
                            <div className="flex justify-center gap-2 w-full mt-4">
                                <button className="px-4 py-2 w-28 rounded-lg bg-green-600 text-white hover:bg-green-500 text-sm">
                                    <a href="#">Spotify</a>
                                </button>
                                <button className="px-4 py-2 w-28 rounded-lg bg-rose-600 text-white hover:bg-rose-500 text-sm">
                                    <a href="#">Apple Music</a>
                                </button>
                            </div>
                        </CardBody>
                    </CardContainer>

                    {/* Card - Graduation */}
                    <CardContainer className="inter-var w-full flex justify-center">
                        <CardBody className="w-full max-w-[20rem] h-full flex flex-col items-center justify-center bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-4 rounded-2xl text-center border border-zinc-800 shadow-md">
                            <CardItem translateZ={50} className="text-xl font-bold mb-2">
                                Graduation
                            </CardItem>
                            <CardItem translateZ={100} rotateX={20} rotateZ={-10} className="flex justify-center">
                                <Image
                                    src="/graduation-cover.jpg"
                                    alt="Kanye West"
                                    width={300}
                                    height={300}
                                    className="w-[300px] h-auto rounded-2xl drop-shadow-xl"
                                />
                            </CardItem>
                            <CardItem as="p" translateZ={60} className="text-gray-300 mt-3 text-sm">
                                2021 - 14 canciones, 54 min 29 s
                            </CardItem>
                            <div className="flex justify-center gap-2 w-full mt-4">
                                <button className="px-4 py-2 w-28 rounded-lg bg-green-600 text-white hover:bg-green-500 text-sm">
                                    <a href="#">Spotify</a>
                                </button>
                                <button className="px-4 py-2 w-28 rounded-lg bg-rose-600 text-white hover:bg-rose-500 text-sm">
                                    <a href="#">Apple Music</a>
                                </button>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
            </section>

            {/* Premios */}
            <section id="awards" className="py-20 px-4 bg-primary text-white">
                <h3 className="text-3xl font-bold text-center mb-10">Premios y reconocimientos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-6 rounded-2xl text-center shadow-md transition-transform transform hover:scale-105 border-2 border-zinc-800">
                        <h4 className="text-xl font-bold mb-2">🏆 21 premios Grammy</h4>
                        <p className="text-gray-300">lo que lo convierte en uno de los artistas más premiados en la historia de los Grammys</p>
                    </div>
                    <div className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-6 rounded-2xl text-center shadow-md transition-transform transform hover:scale-105 border-2 border-zinc-800">
                        <h4 className="text-xl font-bold mb-2">🏆 Mejor Álbum de Rap</h4>
                        <p className="text-gray-300">&quot;The College Dropout&quot; (2005), &quot;Late Registration&quot; (2006), &quot;Graduation&quot; (2008), &quot;My Beautiful Dark Twisted Fantasy&quot; (2012), y &quot;Jesus Is King&quot; (2021).</p>
                    </div>
                    <div className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-6 rounded-2xl text-center shadow-md transition-transform transform hover:scale-105 border-2 border-zinc-800">
                        <h4 className="text-xl font-bold mb-2">🏆 Mejor Canción Rap</h4>
                        <p className="text-gray-300">&quot;Jesus Walks&quot; (2005), &quot;Diamonds from Sierra Leone&quot; (2006), &quot;Good Life&quot; (2008), &quot;All of the Lights&quot; (2012), y &quot;Hurricane&quot; (2022).</p>
                    </div>
                    <div className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-6 rounded-2xl text-center shadow-md transition-transform transform hover:scale-105 border-2 border-zinc-800">
                        <h4 className="text-xl font-bold mb-2">🏆 Mejor Interpretación Rap en Solitario</h4>
                        <p className="text-gray-300">&quot;Gold Digger&quot; (2006) y &quot;Stronger&quot; (2008).</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-4 text-center bg-secondary">
                <div>
                    <p className="">Desarrollado por Jois Rosales</p>
                    <p className="text-sm">© 2025 YeezyVerse. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}