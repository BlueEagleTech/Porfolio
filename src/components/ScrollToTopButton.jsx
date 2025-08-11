import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // Icône sympa, si tu as lucide-react

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Surveiller le scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-600 transition z-50"
        aria-label="Retour en haut"
      >
        <ArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
