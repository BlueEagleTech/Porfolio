import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-sky-400 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Texte copyright */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm select-none"
        >
          © {new Date().getFullYear()} BET - Blue Eagle Tech. Tous droits réservés.
        </motion.p>

        {/* Liens sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex space-x-8 text-2xl"
        >
          <a
            href="https://github.com/tonprofil" target="_blank" rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tonprofil" target="_blank" rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/tonprofil" target="_blank" rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
