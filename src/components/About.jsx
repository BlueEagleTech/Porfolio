import { motion } from "framer-motion";

function About() {
  return (
    <section className="bg-gradient-to-b from-black via-slate-900 to-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:flex-1 text-center md:text-left"
        >
          <h2 className="text-5xl font-extrabold mb-4 text-sky-400 tracking-wide relative inline-block">
            À propos
            <motion.span
              layoutId="underline"
              className="block h-1 w-20 bg-sky-400 rounded-full mt-1"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>

          <p className="text-lg leading-relaxed">
            Je suis Tafsir{" "}
            <span className="text-sky-300 font-semibold">Blue Eagle Tech</span>.
            Un développeur full-stack au cœur tranquille et à l'esprit en feu.
            Gentil, discret mais avec une volonté d'impact aussi forte que le
            vol d'un aigle.
          </p>
          <p className="text-lg leading-relaxed mt-6">
            Mon univers c'est celui du{" "}
            <span className="text-sky-300 font-medium">noir profond</span> et du{" "}
            <span className="text-sky-300 font-medium">bleu de la mer</span>.
          </p>
          <p className="text-lg leading-relaxed mt-6">
            Inspiré par le phénix, je crois à la renaissance par l'effort, la
            patience et l'évolution. Chaque projet est une mue, chaque ligne un
            battement d'aile vers quelque chose de plus grand.
          </p>
          <p className="text-lg mt-8 italic text-sky-400 font-semibold tracking-wide">
            "Code Evolution" - ma devise, mon chemin, mon identité
          </p>
        </motion.div>

        {/* Image + texte BET */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:flex-1 flex flex-col items-center"
        >
          <motion.img
            src="/logo.png"
            alt="Logo BET"
            className="h-72 w-auto mb-6 cursor-pointer"
            whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 10px rgb(14 165 233))" }}
            transition={{ type: "spring", stiffness: 250 }}
          />
          <h2 className="text-4xl font-bold tracking-widest text-sky-400 select-none">B E T</h2>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
