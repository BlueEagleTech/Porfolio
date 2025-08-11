import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { motion, AnimatePresence } from "framer-motion";

function Contacts() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nom || !email || !objet || !message) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "messages"), {
        nom,
        email,
        objet,
        message,
        date: new Date(),
      });
      setSuccess("Message envoyé avec succès !");
      setNom("");
      setEmail("");
      setObjet("");
      setMessage("");
    } catch (error) {
      alert("Erreur lors de l'envoi : " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#0f0f0f] p-10 rounded-3xl shadow-2xl w-full max-w-xl border border-blue-600"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-extrabold text-blue-500 mb-8 text-center tracking-wide"
        >
          Contacte BET 🦅
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mb-10 text-gray-400 text-lg"
        >
          Une question, un projet, une idée ? Laisse un message à ton aigle bleu.
        </motion.p>
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/** Champs avec animation hover et focus */}
          {[
            { label: "Ton blaze", type: "text", placeholder: "BET, Luffy, ou autre", value: nom, setter: setNom },
            { label: "Adresse email", type: "email", placeholder: "exemple@email.com", value: email, setter: setEmail },
            { label: "Objet", type: "text", placeholder: "Sujet du message", value: objet, setter: setObjet },
          ].map(({ label, type, placeholder, value, setter }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block mb-2 text-sm text-gray-300 font-semibold">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                className="w-full p-4 bg-black border border-blue-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-blue-700 transition"
                value={value}
                onChange={(e) => setter(e.target.value)}
                required
              />
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
            <label className="block mb-2 text-sm text-gray-300 font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Dis-moi tout..."
              className="w-full p-4 bg-black border border-blue-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-blue-700 transition resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </motion.div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 py-4 rounded-2xl font-bold text-white shadow-lg flex justify-center items-center gap-3 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading && (
              <svg
                className="animate-spin h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 010 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                ></path>
              </svg>
            )}
            {loading ? "Envoi en cours..." : "Envoyer le message"}
          </button>
          <AnimatePresence>
            {success && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                className="mt-6 text-green-400 text-center font-semibold"
              >
                {success}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
}

export default Contacts;
