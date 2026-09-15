import { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { companyData, getWhatsAppOrderUrl } from '../data/siteData';

export default function LocationSection() {
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    // Check if open right now in Brazil timezone (America/Sao_Paulo)
    // Business hours: Monday to Saturday (1 to 6), 11h to 14h
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        const brazilTimeStr = now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
        const brazilDate = new Date(brazilTimeStr);
        const day = brazilDate.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
        const hour = brazilDate.getHours();
        const minute = brazilDate.getMinutes();
        const timeDecimal = hour + minute / 60;

        const isWorkDay = day >= 1 && day <= 6;
        const isOpenHour = timeDecimal >= 11 && timeDecimal < 14;

        setIsOpenNow(isWorkDay && isOpenHour);
      } catch (e) {
        // Fallback to local time if timezone string fails
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        setIsOpenNow(day >= 1 && day <= 6 && hour >= 11 && hour < 14);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyData.fullAddress)}`;

  return (
    <section id="localizacao" className="py-20 sm:py-24 bg-neutral-950 relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#E67E22] uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#E67E22]" />
            <span>Localização & Atendimento</span>
          </div>
          <h2
            id="location-section-title"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4"
          >
            Venha Almoçar Conosco ou Faça Seu Pedido
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-normal leading-relaxed">
            Localização estratégica no Jardim do Café com estacionamento fácil e entregas diárias rápidas em Arapongas.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Practical Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-neutral-900/70 p-6 sm:p-8 rounded-2xl border border-neutral-800 backdrop-blur-md">
            <div className="space-y-6">
              {/* Status Badge */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                    }`}
                  />
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {isOpenNow ? 'Aberto Agora para Almoço' : 'Fechado no Momento'}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-neutral-400">
                  {isOpenNow ? '11h às 14h' : 'Abre às 11h (Seg-Sáb)'}
                </span>
              </div>

              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#E67E22] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-white mb-1">
                    Endereço Completo
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {companyData.address} - {companyData.neighborhood}
                  </p>
                  <p className="text-neutral-400 text-xs">
                    {companyData.city} - {companyData.state} • CEP {companyData.zipCode}
                  </p>
                </div>
              </div>

              {/* Hours Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#D4AC0D] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-white mb-1">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-neutral-300 text-sm font-medium">
                    {companyData.hoursSummary}
                  </p>
                  <p className="text-neutral-400 text-xs mt-0.5">
                    Almoço presencial no salão, retirada no balcão e delivery.
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#C0392B] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-white mb-1">
                    Telefone & Pedidos WhatsApp
                  </h4>
                  <p className="text-neutral-300 text-sm font-semibold">
                    {companyData.phoneDisplay}
                  </p>
                  <p className="text-neutral-400 text-xs mt-0.5">
                    Atendimento ágil para pedidos individuais e corporativos.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
              <a
                id="maps-directions-btn"
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-750 text-white text-xs sm:text-sm font-semibold transition-all border border-neutral-700"
              >
                <Navigation className="w-4 h-4 text-[#E67E22]" />
                <span>Como Chegar via Maps</span>
              </a>

              <a
                id="location-whatsapp-btn"
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#C0392B] to-[#E67E22] hover:from-[#d13d2f] hover:to-[#f08526] text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Interactive Google Maps Iframe */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 min-h-[380px] sm:min-h-[440px] relative shadow-2xl">
            <iframe
              id="google-maps-embed-frame"
              title="Localização do Restaurante Portugal em Arapongas PR"
              src="https://maps.google.com/maps?q=Rua+Rouxinol,+2403+-+Jardim+do+Caf%C3%A9,+Arapongas+-+PR,+86706-198&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%', display: 'block' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter contrast-[1.05] grayscale-[0.25]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
