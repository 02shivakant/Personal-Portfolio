import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Splash shows for 3.2 seconds, then fades out
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => setLoading(false), 600);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={exiting ? 'splash-exit' : ''}>
        <SplashScreen />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
