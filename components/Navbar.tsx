"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 z-50 mix-blend-difference">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="#" className="flex items-center space-x-3">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        YeezyVerse
                    </span>
                </Link>

                {/* Botón para abrir/cerrar menú en móviles */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                {/* Menú de navegación */}
                <div className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent text-white">
                        <li>
                            <Link href="#hero" className="block py-2 px-3 hover:text-zinc-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" className="block py-2 px-3 hover:text-zinc-500">
                                Acerca de
                            </Link>
                        </li>
                        <li>
                            <Link href="#discography" className="block py-2 px-3 hover:text-zinc-500">
                                Discografía
                            </Link>
                        </li>
                        <li>
                            <Link href="#awards" className="block py-2 px-3 hover:text-zinc-500">
                                Premios
                            </Link>
                        </li>
                        <li>
                            <Link href="#phrases" className="block py-2 px-3 hover:text-zinc-500">
                                Frase
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;