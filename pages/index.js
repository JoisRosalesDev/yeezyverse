import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen font-sans bg-black text-white">
            <Head>
                <title>YeezyVerse</title>
                <meta name="description" content="Trayectoria, discografía y premios de Kanye West" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto:ital,wght@0,100..900;1,100..900&family=Satisfy&display=swap"
                    rel="stylesheet"
                />
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

            {/* About Section */}
            <section id="about" className="py-20 px-6 text-white bg-primary">
                {/* Título */}
                <h3 className="text-4xl md:text-5xl font-bold font-sans text-center mb-16">
                    Acerca de Kanye West
                </h3>

                {/* Contenedor para la imagen y las cards de información */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Imagen con sombra de gradiente */}
                    <div className="order-1 w-full md:w-auto relative rounded-2xl overflow-hidden shadow-[0px_0px_10px_5px_#76606a]">
                        <Image
                            src="/kanye-grammy.webp"
                            alt="Kanye West"
                            width={300}
                            height={300}
                            className="w-full md:w-auto h-auto rounded-2xl mx-auto bg-opacity-80 backdrop-blur"
                        />
                    </div>

                    {/* Cards con información */}
                    <div className="order-2 w-full flex flex-col space-y-6">
                        <div className="bg-gray-500 bg-opacity-10 backdrop-blur p-6 rounded-2xl border border-zinc-800">
                            <p className="text-left">
                                Kanye West (nacido el 8 de junio de 1977 en Atlanta, Georgia) es un rapero, productor musical, diseñador de moda y empresario estadounidense. Reconocido por su innovación en la industria musical, ha sido una figura clave en la evolución del hip-hop y la cultura popular contemporánea.
                            </p>
                        </div>
                        <div className="bg-gray-500 bg-opacity-10 backdrop-blur p-6 rounded-2xl border border-zinc-800">
                            <p className="text-left">
                                West inició su carrera como productor en la escena de Chicago, ganando reconocimiento a principios de los 2000 por su trabajo con artistas como Jay-Z. En 2004, debutó como solista con <em>The College Dropout</em>, un álbum aclamado por la crítica que lo estableció como un artista versátil y creativo.
                            </p>
                        </div>
                        <div className="bg-gray-500 bg-opacity-10 backdrop-blur p-6 rounded-2xl border border-zinc-800">
                            <p className="text-left">
                                Más allá de la música, ha incursionado en la moda con su línea Yeezy, en colaboración con Adidas, revolucionando el mercado de la ropa y el calzado deportivo. También ha generado polémica por sus declaraciones públicas y su incursión en la política, incluyendo su candidatura presidencial en 2020.
                            </p>
                        </div>
                        <div className="bg-gray-500 bg-opacity-10 backdrop-blur p-6 rounded-2xl border border-zinc-800">
                            <p className="text-left">
                                Con múltiples premios Grammy y un impacto cultural significativo, Kanye West sigue siendo una de las figuras más influyentes del siglo XXI, dejando una huella tanto en la música como en la moda y el entretenimiento.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Discografía */}
            <section id="discography" className="bg-secondary py-20 px-4 text-white">
                <h3 className="text-4xl md:text-5xl font-bold font-sans text-center mb-16">Discografía</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                    <div className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-4 rounded-2xl text-center transition-transform transform hover:scale-105 border-2 border-zinc-800">
                        <h4 className="text-xl font-bold mb-4">The College Dropout</h4>
                        <Image src="/tcd-cover.jpg" alt="Kanye West" width={300} height={300} className="w-xl h-auto rounded-2xl place-self-center drop-shadow-xl" />
                        <p className="mt-2">2004 - 21 canciones, 1 h 16 min</p>
                        <div className="flex justify-center gap-3 mt-3">
                            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg transition hover:from-green-600 hover:to-green-500">
                                <a href="#">Spotify</a>
                            </button>
                            <button className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-2 rounded-lg hover:from-rose-600 hover:to-rose-500 transition">
                                <a href="#">Apple Music</a>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-4 rounded-2xl text-center transition-transform transform hover:scale-105 border-2 border-zinc-800">
                        <h4 className="text-xl font-bold mb-4">My Beautiful Dark Twisted Fantasy</h4>
                        <Image src="/mbdtf-cover.jpg" alt="Kanye West" width={300} height={300} className="w-xl h-auto rounded-2xl place-self-center drop-shadow-xl" />
                        <p className="mt-2">2010 - 13 canciones, 1 h 8 min</p>
                        <div className="flex justify-center gap-3 mt-3">
                            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg transition hover:from-green-600 hover:to-green-500">
                                <a href="#">Spotify</a>
                            </button>
                            <button className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-2 rounded-lg hover:from-rose-600 hover:to-rose-500 transition">
                                <a href="#">Apple Music</a>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-4 rounded-2xl text-center transition-transform transform hover:scale-105 border-2 border-zinc-800">
                        <h4 className="text-xl font-bold mb-4">Graduation</h4>
                        <Image src="/graduation-cover.jpg" alt="Kanye West" width={300} height={300} className="w-xl h-auto rounded-2xl place-self-center drop-shadow-xl" />
                        <p className="mt-2">2021 - 14 canciones, 54 min 29 s</p>
                        <div className="flex justify-center gap-3 mt-3">
                            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg transition hover:from-green-600 hover:to-green-500">
                                <a href="#">Spotify</a>
                            </button>
                            <button className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-2 rounded-lg hover:from-rose-600 hover:to-rose-500 transition">
                                <a href="#">Apple Music</a>
                            </button>
                        </div>
                    </div>
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
            <footer className="p-10 text-center bg-blue-700">
                <div>
                    <p className="">Desarrollado por Jois Rosales</p>
                    <p className="text-sm">© 2025 YeezyVerse. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}