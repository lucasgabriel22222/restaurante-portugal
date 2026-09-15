import { MessageCircle, Clock, Utensils } from 'lucide-react';
import { getWhatsAppOrderUrl, companyData } from '../data/siteData';

export default function CtaSection() {
  return (
    <section id="cta-final" className="py-20 sm:py-24 bg-neutral-950 relative overflow-hidden border-t border-neutral-800/80">
      {/* Culinary background accent glows */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gradient-to-b from-[#C0392B]/20 via-[#E67E22]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          id="cta-card-wrapper"
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 shadow-2xl text-center overflow-hidden"
        >
          {/* Subtle warm decorative top line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C0392B] via-[#E67E22] to-[#D4AC0D]" />

          {/* Icon Header */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C0392B] to-[#E67E22] mx-auto mb-6 flex items-center justify-center text-white shadow-xl shadow-[#C0392B]/30">
            <Utensils className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h2
            id="cta-title"
            className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4 max-w-2xl mx-auto"
          >
            Bateu a fome para o almoço?
          </h2>

          {/* Subtitle */}
          <p
            id="cta-subtitle"
            className="text-neutral-300 text-base sm:text-lg md:text-xl font-normal max-w-xl mx-auto mb-8 leading-relaxed"
          >
            Consulte o cardápio do dia e peça sua marmitex ou venha almoçar com a gente.
          </p>

          {/* Pulsing Large WhatsApp Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              id="cta-final-whatsapp-btn"
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-5 rounded-2xl bg-gradient-to-r from-[#C0392B] to-[#E67E22] hover:from-[#d13d2f] hover:to-[#f08526] text-white font-extrabold text-base sm:text-lg shadow-2xl shadow-[#C0392B]/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              {/* Outer pulsing ping animation */}
              <span className="absolute -inset-1 rounded-2xl bg-[#E67E22]/30 opacity-75 animate-ping group-hover:opacity-100" />
              <MessageCircle className="w-6 h-6 text-white relative z-10" />
              <span className="relative z-10">Pedir pelo WhatsApp Agora</span>
            </a>
          </div>

          {/* Information badge */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
            <Clock className="w-4 h-4 text-[#D4AC0D]" />
            <span>Almoço de {companyData.daysOpen}, das 11h às 14h • {companyData.phoneDisplay}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
