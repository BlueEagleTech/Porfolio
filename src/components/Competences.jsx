import BackgroundWaves from "./BackgroundWaves"; // ajuste le chemin selon ta structure
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
 
  FaLaravel,
  FaAndroid,
  FaBootstrap
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiC, SiDjango } from "react-icons/si";

export default function Competences() {
   const languages = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "C", icon: <SiC className="text-gray-700" /> },
  ];

  const frameworks = [
   
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "Django", icon: <SiDjango className="text-green-600" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-violet-400" /> },
    { name: "Android Studio", icon: <FaAndroid className="text-green-500" /> },
    { name: "Flutter", icon: <FaFlutter className="text-cyan-600"/> },
  ];

  // Animation variants pour framer-motion
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };


  return (
    <section
      className="relative py-20 px-6 bg-indigo-900 text-white overflow-hidden"
      id="Competences"
    >
      <BackgroundWaves />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl font-extrabold text-center mb-16 text-blue-400 tracking-wide"
      >
        Compétences
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto space-y-20"
      >

        {/* Languages */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-blue-400">Languages</h3>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {languages.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10, boxShadow: "0 10px 20px rgba(0,0,0,0.6)" }}
                className="flex flex-col items-center space-y-3 bg-gray-900 p-6 rounded-3xl cursor-pointer transition-transform duration-300"
              >
                <div className="text-5xl hover:drop-shadow-[0_0_10px_rgb(59,130,246)] transition-shadow duration-300">
                  {skill.icon}
                </div>
                <p className="text-lg font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Frameworks & Tools */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-blue-400">Frameworks & Tools</h3>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {frameworks.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10, boxShadow: "0 10px 20px rgba(0,0,0,0.6)" }}
                className="flex flex-col items-center space-y-3 bg-gray-900 p-6 rounded-3xl cursor-pointer transition-transform duration-300"
              >
                <div className="text-5xl hover:drop-shadow-[0_0_10px_rgb(59,130,246)] transition-shadow duration-300">
                  {skill.icon}
                </div>
                <p className="text-lg font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}







