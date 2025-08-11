import Hero from './components/Hero';
import About from './components/About';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';
import Competences from './components/Competences';
import Footer from './components/Footer';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <main >
      <section id="Hero"  ><Hero /></section>
      <section id='Competences'> <Competences/></section>
      <section id="Projects"><Projects /></section>
      <section id="Contacts"><Contacts /></section>
      <section id="About"><About /></section>
      <section id="Footer"><Footer /></section>
      
    </main>
    <ScrollToTopButton/>
    
  </>
  );
}

export default App;