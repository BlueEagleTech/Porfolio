import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projets = [
    {
      titre: "E-commerce",
      description: "Application e-commerce complète avec Django.",
      lien: "https://github.com/BlueEagleTech/e_commerce",
      image: "https://gaynako.com/wp-content/uploads/2021/12/commerce-electronique-au-Senegal-1024x576.jpg"
    },
    {
      titre: "Immobilier (GitHub)",
      description: "Site immobilier développé avec Django.",
      lien: "https://github.com/BlueEagleTech/Immobilier",
      image: "https://topequipementmaison.com/wp-content/uploads/2022/08/limmobilier.jpg"
    },
    {
      titre: "Authentification double",
      description: "Système d'authentification avec Django et JWT.",
      lien: "https://github.com/BlueEagleTech/Django-auth-project",
      image: "https://cdn.prod.website-files.com/5fbfbca2132839a6a22e1ecc/6481c7cd1e583cd05d7b5d0a_authent.jpeg"
    },
    {
      titre: "Immobilier WordPress",
      description: "Site immobilier sous WordPress, hébergé sur Pantheon.",
      lien: "https://dev-senimo.pantheonsite.io/",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-indigo-50 text-black">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mes Projets
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projets.map((p, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)"
            }}
          >
            <img
              src={p.image}
              alt={p.titre}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">{p.titre}</h3>
              <p className="text-gray-700 mb-4">{p.description}</p>
              <motion.a
                href={p.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir le projet
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
