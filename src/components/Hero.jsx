import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <section className="flex items-center justify-center h-[calc(100vh-80px)] bg-gradient-to-b from-sky-500/100 to-indigo-50 text-black pt-8">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }} // départ invisible et un peu en bas
        animate={{ opacity: 1, y: 0 }} // arrive au centre
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Nom ou titre principal avec effet machine à écrire */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          <TypeAnimation
            sequence={[
              'Tafsir Moctar Bâ', // premier texte
              1500,               // pause 1,5s
              'Développeur Web Back-end', // deuxième texte
              1500,
              'Créateur de solutions élégantes', // troisième texte
              1500
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity} // boucle
          />
        </h1>

        {/* Phrase d'accroche animée */}
        <motion.p
          className="text-lg sm:text-xl mb-6 text-indigo-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Passionné par le code, les interfaces élégantes interactives et les solutions efficaces et durables.
        </motion.p>

        {/* Boutons d'action animés */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a
            href="/public/CV.pdf"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition transform hover:scale-105"
            download
          >
            Télécharger CV
          </a>
          <a
            href="#Contacts"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition transform hover:scale-105"
          >
            Me contacter
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
