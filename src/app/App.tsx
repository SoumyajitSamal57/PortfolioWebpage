import { ThemeProvider } from './contexts/ThemeContext';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
        <ThemeToggle />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
