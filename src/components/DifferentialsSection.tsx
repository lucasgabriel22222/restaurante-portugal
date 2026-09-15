import { CookingPot, Truck, Building2, Clock, ShieldCheck, ThumbsUp, CheckCircle } from 'lucide-react';
import { differentials } from '../data/siteData';

export default function DifferentialsSection() {
  const iconMap = {
    CookingPot,
    ShieldCheck,
    Clock,
    Building2,
    ThumbsUp,
    Truck,
  };

  return (
    <section id="diferenciais" className="py-20 sm:py-24 bg-neutral-950 relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#E67E22] uppercase tracking-wider mb-4">
            <CheckCircle className="w-3.5 h-3.5 text-[#E67E22]" />
            <span>Por Que Escolher o Restaurante Portugal</span>
          </div>
          <h2
            id="differentials-title"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4"
          >
            Diferenciais Práticos Para o Seu Almoço
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-normal leading-relaxed">
            Sem promessas vazias: nosso compromisso diário é entregar comida fresca, farta e saborosa no horário exato da sua pausa.
          </p>
        </div>

        {/* Grid of Differentials */}
        <div
          id="differentials-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {differentials.map((item) => {
            const Icon = iconMap[item.iconName] || CookingPot;
            return (
              <div
                key={item.id}
                id={`diff-card-${item.id}`}
                className="group relative rounded-2xl p-7 sm:p-8 bg-neutral-900/60 backdrop-blur-md border border-neutral-800 hover:border-[#E67E22]/50 hover:bg-neutral-900 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#E67E22] group-hover:bg-[#E67E22] group-hover:text-white transition-all duration-300 mb-6 shadow-md">
                    <Icon className="w-7 h-7 transition-transform group-hover:scale-110" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#E67E22] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center text-xs font-semibold text-neutral-400 group-hover:text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-[#E67E22] mr-2" />
                  <span>Padrão de qualidade Restaurante Portugal</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
