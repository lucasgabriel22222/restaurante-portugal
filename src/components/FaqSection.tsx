import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { faqItems, getWhatsAppOrderUrl } from '../data/siteData';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#101010] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#E67E22] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#E67E22]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2
            id="faq-section-title"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4"
          >
            Perguntas Frequentes
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-normal leading-relaxed">
            Respostas diretas sobre pedidos, entregas de marmitex e atendimento corporativo em Arapongas.
          </p>
        </div>

        {/* Accordion List */}
        <div id="faq-accordion-container" className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="rounded-2xl bg-neutral-900/70 border border-neutral-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  id={`faq-toggle-${item.id}`}
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-neutral-850 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 text-[#E67E22] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-neutral-800 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-neutral-800/60 bg-neutral-900/40">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra support banner */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-0.5">
              Ficou com alguma dúvida específica sobre o almoço de hoje?
            </h4>
            <p className="text-neutral-400 text-xs sm:text-sm">
              Converse diretamente com o balcão pelo WhatsApp. Respondemos em poucos instantes.
            </p>
          </div>
          <a
            id="faq-whatsapp-support-btn"
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs sm:text-sm font-semibold border border-neutral-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#E67E22]" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
