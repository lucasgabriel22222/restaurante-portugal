import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import MenuSection from './components/MenuSection';
import DifferentialsSection from './components/DifferentialsSection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationSection from './components/LocationSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="restaurante-portugal-app" className="min-h-screen bg-[#101010] text-[#E5E5E5] flex flex-col font-sans selection:bg-[#E67E22] selection:text-white">
      {/* Scroll Progress Bar at the absolute top */}
      <ScrollProgressBar />

      {/* 1. Navbar Header Fixo */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Page Sections in exact requested order */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Seção de Estatísticas e Destaques (Banner Parallax) */}
        <StatsBanner />

        {/* 4. Seção Cardápio & Opções do Dia */}
        <MenuSection />

        {/* 5. Seção Diferenciais */}
        <DifferentialsSection />

        {/* 6. Seção de Prova Social (Avaliações do Google) */}
        <TestimonialsSection />

        {/* 7. Seção de Localização & Horário */}
        <LocationSection />

        {/* 8. Seção FAQ (Perguntas Frequentes) */}
        <FaqSection />

        {/* 9. CTA Final */}
        <CtaSection />
      </main>

      {/* 10. Footer Rodapé */}
      <Footer />

      {/* 11. Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
