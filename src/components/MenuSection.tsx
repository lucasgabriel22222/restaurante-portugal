import { useState } from 'react';
import { MessageCircle, UtensilsCrossed, CheckCircle2 } from 'lucide-react';
import { menuItems, getWhatsAppOrderUrl } from '../data/siteData';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'todos' | 'executivo' | 'marmitex' | 'acompanhamentos' | 'bebidas'>('todos');

  const categories = [
    { key: 'todos', label: 'Todos os Itens' },
    { key: 'executivo', label: 'Pratos Executivos' },
    { key: 'marmitex', label: 'Marmitex & Entrega' },
    { key: 'acompanhamentos', label: 'Acompanhamentos' },
    { key: 'bebidas', label: 'Bebidas' },
  ] as const;

  const filteredItems = activeTab === 'todos'
    ? menuItems
    : menuItems.filter((item) => item.category === activeTab);

  return (
    <section id="cardapio" className="py-20 sm:py-24 bg-[#101010] relative">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#C0392B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#E67E22]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#E67E22] uppercase tracking-wider mb-4">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#E67E22]" />
            <span>Cardápio & Especialidades</span>
          </div>
          <h2
            id="menu-section-title"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4"
          >
            Opções de Almoço & Especialidades
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-normal leading-relaxed">
            Preparados diariamente com tempero caseiro autêntico e ingredientes frescos. Escolha seus pratos favoritos para saborear no local ou receber quentinho no conforto de casa ou na empresa.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          id="menu-filter-tabs"
          className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12"
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                id={`tab-btn-${cat.key}`}
                onClick={() => setActiveTab(cat.key)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#C0392B] to-[#E67E22] text-white shadow-lg shadow-[#C0392B]/25 scale-[1.02]'
                    : 'bg-neutral-900/90 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dishes Grid */}
        <div
          id="menu-items-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`menu-card-${item.id}`}
              className="group rounded-2xl bg-neutral-900/80 border border-neutral-800/90 hover:border-[#E67E22]/60 hover:bg-neutral-900 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60"
            >
              <div>
                {/* Image Container with Zoom */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/30" />
                  
                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-neutral-950/85 backdrop-blur-md border border-[#E67E22]/50 text-[#E67E22] text-xs font-semibold tracking-wide shadow-md">
                      {item.badge}
                    </div>
                  )}

                  {/* Portion pill on top right */}
                  <div className="absolute bottom-3 right-3.5 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-neutral-700 text-neutral-300 text-[11px] font-medium">
                    {item.portion}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-[#E67E22] transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.priceNote && (
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AC0D] bg-neutral-950/70 px-2.5 py-1 rounded-md border border-neutral-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AC0D]" />
                      <span>{item.priceNote}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-neutral-800/60 mt-auto">
                <a
                  id={`order-btn-${item.id}`}
                  href={getWhatsAppOrderUrl(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-800/90 hover:bg-gradient-to-r hover:from-[#C0392B] hover:to-[#E67E22] text-neutral-200 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 border border-neutral-700/80 hover:border-transparent cursor-pointer shadow-sm group/btn"
                >
                  <MessageCircle className="w-4 h-4 text-[#E67E22] group-hover/btn:text-white transition-colors" />
                  <span>Pedir pelo WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Note */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-1">
              Deseja consultar o cardápio executivo de hoje em tempo real?
            </h4>
            <p className="text-neutral-400 text-xs sm:text-sm">
              Nossa equipe envia a lista das carnes e pratos especiais preparados nesta manhã direto no seu WhatsApp.
            </p>
          </div>
          <a
            id="menu-bottom-whatsapp-cta"
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C0392B] to-[#E67E22] text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ver Cardápio do Dia</span>
          </a>
        </div>
      </div>
    </section>
  );
}
