import { useState, useEffect } from 'react';
import { MessageCircle, ChevronDown, MapPin, Clock, Utensils } from 'lucide-react';
import { getWhatsAppOrderUrl } from '../data/siteData';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Parallax Background Container */}
      <div
        id="hero-parallax-bg"
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.35}px)`,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&q=85"
          alt="Comida caseira tradicional brasileira com carnes grelhadas e tempero especial"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.15]"
          referrerPolicy="no-referrer"
        />
        {/* Layered Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/80 to-[#101010]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101010]/95 via-[#101010]/70 to-transparent" />
        {/* Subtle Warm Gastronomy Glow */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#C0392B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#E67E22]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge Superior */}
        <div
          id="hero-location-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/80 backdrop-blur-md text-xs sm:text-sm font-medium text-[#E67E22] mb-6 shadow-inner"
        >
          <MapPin className="w-3.5 h-3.5 text-[#E67E22]" />
          <span>Almoço & Marmitex em Arapongas - PR</span>
        </div>

        {/* H1 Title */}
        <h1
          id="hero-main-title"
          className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] max-w-4xl mb-6"
        >
          Comida Caseira De Verdade, Fresca e Saborosa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E67E22] via-[#F39C12] to-[#D4AC0D]">Todos os Dias</span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10 text-balance"
        >
          Buffet executivo completo e entrega rápida de marmitex quentinha no Jardim do Café e em toda a cidade de Arapongas. Almoço de segunda a sábado com o autêntico sabor tradicional.
        </p>

        {/* Actions CTA Buttons */}
        <div
          id="hero-cta-actions"
          className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-12"
        >
          <a
            id="hero-primary-whatsapp-btn"
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#C0392B] to-[#E67E22] hover:from-[#d13d2f] hover:to-[#f08526] text-white font-bold text-base shadow-xl shadow-[#C0392B]/25 hover:shadow-[#C0392B]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Pedir no WhatsApp / Ver Cardápio do Dia</span>
          </a>

          <a
            id="hero-secondary-menu-btn"
            href="#cardapio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-neutral-900/80 hover:bg-neutral-850 text-neutral-200 hover:text-white border border-neutral-700/80 hover:border-neutral-600 font-semibold text-base backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-[#E67E22]" />
            <span>Conhecer Nossas Opções</span>
          </a>
        </div>

        {/* Operating hours highlight tag */}
        <div
          id="hero-operating-tag"
          className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 bg-neutral-950/60 backdrop-blur-md px-4 py-2 rounded-lg border border-neutral-800/80"
        >
          <Clock className="w-4 h-4 text-[#D4AC0D]" />
          <span>Atendimento presencial e entregas: Seg a Sáb das 11h às 14h</span>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div
        id="hero-scroll-indicator"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-500 hover:text-neutral-300 transition-colors pointer-events-auto cursor-pointer"
        onClick={() => {
          const statsEl = document.getElementById('estatisticas');
          statsEl?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[11px] tracking-widest uppercase font-medium">Rolar para ver mais</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#E67E22]" />
      </div>
    </section>
  );
}
