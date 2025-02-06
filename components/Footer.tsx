"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer: React.FC = () => {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-16 text-center bg-secondary text-white"
    >
      <div>
        <p className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">
          Desarrollado por Jois Rosales
        </p>
        <p className="text-xs sm:text-sm lg:text-base opacity-80">
          © 2025 YeezyVerse. Todos los derechos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;