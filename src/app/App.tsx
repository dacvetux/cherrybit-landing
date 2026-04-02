import { LanguageProvider } from '../i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Services } from './components/Services';
import { WhyCherryBit } from './components/WhyCherryBit';
import { Process } from './components/Process';
import { ContactForm } from './components/ContactForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <ValueProposition />
        <Services />
        <WhyCherryBit />
        <Process />
        <ContactForm />
        {/* <FinalCTA />
        <Footer /> */}
      </div>
    </LanguageProvider>
  );
}
