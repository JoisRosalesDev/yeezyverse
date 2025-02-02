import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const TypingText = ({ text, speed = 50 }) => {
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
        <div className="min-h-screen font-mono bg-black text-white">
            <Head>
                <title>YeezyVerse</title>
                <meta name="description" content="Trayectoria, discografía y premios de Kanye West" />
            </Head>

            {/* Hero Container */}
            <div className="relative h-[80vh] bg-hero">
                {/* Navbar */}
                <nav className="fixed top-0 left-0 w-full bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 z-50">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center space-x-3">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">YeezyVerse</span>
                        </a>
                        <button onClick={() => setMenuOpen(!menuOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-blue-900 rounded-lg bg-blue-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent text-white">
                                <li><a href="#" className="block py-2 px-3 hover:text-gray-300">Home</a></li>
                                <li><a href="#discography" className="block py-2 px-3 hover:text-gray-300">Discografía</a></li>
                                <li><a href="#awards" className="block py-2 px-3 hover:text-gray-300">Premios</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <header className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center font-sans">
                    <div className="relative rounded-lg max-w-2xl mx-auto">
                        <h2 className="text-6xl md:text-7xl font-bold">YeezyVerse</h2>
                        <p className="text-4xl italic md:text-5xl mt-3 max-w-lg bg-gradient-to-t from-blue-400 via-blue-100 to-blue-600 bg-clip-text text-transparent">
                            &quot;I&apos;m a God&quot;
                        </p>
                    </div>
                    <div>
                        <p className='mt-20 max-w-lg mx-auto text-lg md:text-xl font-mono'>
                            <TypingText text="No es solo hip-hop, no es solo moda. Es una revolución creativa." />
                        </p>
                    </div>
                </header>
            </div>

            {/* Discografía */}
            <section id="discography" className="bg-discography py-20 px-4 text-white">
                <h3 className="text-4xl md:text-5xl font-bold font-sans text-center mb-16">Discografía</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                    <div className="bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-4 rounded-2xl text-center transition-transform transform hover:scale-105">
                        <h4 className="text-xl font-bold mb-4">The College Dropout</h4>
                        <Image src="/tcd-cover.jpg" alt="Kanye West" width={300} height={300} className='w-xl h-auto rounded-2xl place-self-center drop-shadow-xl' />
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
                    <div className="bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-4 rounded-2xl text-center transition-transform transform hover:scale-105">
                        <h4 className="text-xl font-bold mb-4">My Beautiful Dark Twisted Fantasy</h4>
                        <Image src="/mbdtf-cover.jpg" alt="Kanye West" width={300} height={300} className='w-xl h-auto rounded-2xl place-self-center drop-shadow-xl' />
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
                    <div className="bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-4 rounded-2xl text-center transition-transform transform hover:scale-105">
                        <h4 className="text-xl font-bold mb-4">Graduation</h4>
                        <Image src="/graduation-cover.jpg" alt="Kanye West" width={300} height={300} className='w-xl h-auto rounded-2xl place-self-center drop-shadow-xl' />
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
            <section id="awards" className="py-60 px-4 bg-awards text-white">
                <h3 className="text-3xl font-bold text-center">Premios</h3>
                <ul className="mt-5 space-y-3 text-center">
                    <li>🏆 Grammy al Mejor Álbum de Rap (2005)</li>
                    <li>🏆 Grammy al Mejor Álbum de Rap (2012)</li>
                    <li>🏆 MTV Video Music Award (2016)</li>
                </ul>
            </section>

            {/* Footer */}
            <footer className="p-5 text-center bg-gray-200 text-gray-700 border-t border-gray-300">
                © 2025 YeezyVerse | Proyecto de aprendizaje con Next.js
            </footer>
        </div>
    );
}
