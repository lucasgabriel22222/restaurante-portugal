import { useState, useEffect } from 'react';
import { Star, Users, Clock, Truck } from 'lucide-react';
import { companyData } from '../data/siteData';

export default function StatsBanner() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    {
      id: 'stat-google-rating',
      icon: Star,
      iconColor: 'text-[#D4AC0D]',
      value: `${companyData.googleRating} / 5.0`,
      label: 'Nota no Google',
      sublabel: 'Avaliações comprovadas',
    },
    {
      id: 'stat-google-reviews',
      icon: Users,
      iconColor: 'text-[#E67E22]',
      value: `+${companyData.googleReviewsCount}`,
      label: 'Avaliações Reais',
      sublabel: 'Clientes satisfeitos no PR',
    },
    {
      id: 'stat-lunch-hours',
      icon: Clock,
      iconColor: 'text-[#C0392B]',
      value: '11h às 14h',
      label: 'Almoço Diário',
      sublabel: 'De Segunda a Sábado',
    },
    {
      id: 'stat-fast-delivery',
      icon: Truck,
      iconColor: 'text-[#E67E22]',
      value: 'Entrega Rápida',
      label: 'Marmitex Quentinha',
      sublabel: 'Direto pelo WhatsApp',
    },
  ];

  return (
    <section
      id="estatisticas"
      className="relative py-14 overflow-hidden border-y border-neutral-800/80 bg-neutral-950"
    >
      {/* Background Parallax Texture */}
      <div
        id="stats-parallax-bg"
        className="absolute inset-0 w-full h-[150%] -top-[25%] pointer-events-none opacity-20 will-change-transform"
        style={{
          transform: `translateY(${offsetY * 0.12}px)`,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80"
          alt="Textura de churrasqueira e fogão caseiro"
          className="w-full h-full object-cover object-center filter grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-neutral-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="stats-grid-container"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                id={stat.id}
                className="group relative rounded-2xl p-6 bg-neutral-900/60 backdrop-blur-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/90 transition-all duration-300 flex flex-col items-center text-center shadow-lg"
              >
                {/* Accent subtle top glow line on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-transparent group-hover:bg-[#E67E22] transition-colors duration-300 rounded-full" />
                
                <div className="w-12 h-12 rounded-xl bg-neutral-950/90 border border-neutral-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-1">
                  {stat.value}
                </span>
                
                <span className="text-sm font-semibold text-neutral-200 mb-0.5">
                  {stat.label}
                </span>
                
                <span className="text-xs text-neutral-400 font-normal">
                  {stat.sublabel}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
