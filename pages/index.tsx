"use client";

import Head from "next/head";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Discography from "@/components/Discography";
import Awards from "@/components/Awards";
import Phrases from "@/components/Phrases";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen font-sans bg-black text-white">
            <Head>
                <title>YeezyVerse</title>
                <meta
                    name="description"
                    content="Trayectoria, discografía y premios de Kanye West"
                />
            </Head>

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Discografía */}
            <Discography />

            {/* Premios */}
            <Awards />

            <Phrases/>

            {/* Footer */}
            <Footer />
        </div>
    );
}
