import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <AnimatePresence>
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </AnimatePresence>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;