"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const aboutData = [
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
        src: "/late-cover.webp",
    },
    {
        quote:
            "En 2009, Kanye interrumpió el discurso de aceptación de Taylor Swift en los MTV Video Music Awards, lo que generó una gran controversia.",
        name: "Incidente en los MTV Video Music Awards",
        designation: "Fuente: Britannica",
        src: "/mtv-kanye.webp",
    },
    {
        quote:
            "Kanye comenzó a trabajar en la moda y lanzó su propia línea de ropa, colaborando con marcas como Nike para diseñar el famoso zapato 'Air Yeezy'.",
        name: "Exploración de la moda",
        designation: "Fuente: Britannica",
        src: "/air-yeezy.webp",
    },
    {
        quote:
            "En 2007, su madre, Donda West, falleció tras una cirugía estética, lo que afectó profundamente a Kanye.",
        name: "Problemas personales",
        designation: "Fuente: Britannica",
        src: "/donda-west.webp",
    },
    {
        quote:
            "En 2010, lanzó 'My Beautiful Dark Twisted Fantasy', considerado uno de sus mejores trabajos y aclamado por la crítica.",
        name: "Álbum aclamado",
        designation: "Fuente: Britannica",
        src: "/mbdtf-cover.jpg",
    },
    {
        quote:
            "En 2020, Kanye anunció su candidatura a la presidencia de los Estados Unidos, aunque finalmente no se presentó oficialmente.",
        name: "Carrera política",
        designation: "Fuente: Britannica",
        src: "/president-kanye.webp",
    },
];

const About: React.FC = () => {
    return (
        <section id="about" className="py-40 px-10 sm:px-12 lg:px-20 bg-white text-black">
            {/* Título */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
                El Mundo de Kanye
            </h3>

            {/* Carrusel de Testimonios */}
            <div className="max-w-5xl mx-auto">
                <AnimatedTestimonials testimonials={aboutData} />
            </div>
        </section>
    );
};

export default About;