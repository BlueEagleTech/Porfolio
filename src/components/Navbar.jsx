import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Accueil", href: "#Hero" },
    { label: "Compétences", href: "#Competences" },
    { label: "Projets", href: "#Projects" },
    { label: "À propos", href: "#About" },
    { label: "Contact", href: "#Contacts" },
  ];

  const linkClasses = "relative group";
  const underlineClasses =
    "absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full";

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 z-50 shadow-md transition-all duration-300 ${
        isScrolled ? "bg-sky-500/95 backdrop-blur-md" : "bg-sky-500/100"
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo BET"
            className="w-48 h-24 object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.href} className={linkClasses}>
              <a href={link.href} className="hover:text-gray-200 transition">
                {link.label}
              </a>
              <span className={underlineClasses}></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu with framer-motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-0 right-0 w-64 h-full bg-black text-white shadow-lg z-50 p-6 flex flex-col space-y-6"
          >
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg hover:text-blue-400 transition"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
