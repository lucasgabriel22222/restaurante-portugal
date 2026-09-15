import { Utensils, MapPin, Phone, Clock, Instagram, ArrowUp } from 'lucide-react';
import { companyData, getWhatsAppOrderUrl } from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0c0c0c] border-t border-neutral-800 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C0392B] to-[#E67E22] flex items-center justify-center text-white shadow-md">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-black text-xl text-white tracking-tight">
                RESTAURANTE PORTUGAL
              </span>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              {companyData.tagline}. Comida caseira autêntica servida fresca todos os dias em Arapongas.
            </p>
            {/* Dynamic Instagram link */}
            {companyData.instagramUrl && (
              <div className="pt-2">
                <a
                  id="footer-instagram-link"
                  href={companyData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-[#E67E22] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#E67E22]" />
                  <span>Siga nosso Instagram</span>
                </a>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-white transition-colors">
                  Cardápio & Especialidades
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">
                  Avaliações do Google
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização & Horário
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-4">
              Atendimento & Horários
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E67E22] shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-200 block font-medium">Segunda a Sábado</span>
                  <span className="text-neutral-400">11h às 14h (Almoço, Retirada e Delivery)</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E67E22] shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-200 block font-medium">WhatsApp / Telefone</span>
                  <a
                    href={getWhatsAppOrderUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white transition-colors underline-offset-2 hover:underline"
                  >
                    {companyData.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-4">
              Endereço
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E67E22] shrink-0 mt-0.5" />
                <div className="text-neutral-300 leading-relaxed">
                  <span className="block font-medium">{companyData.address}</span>
                  <span>{companyData.neighborhood}</span>
                  <span className="block">{companyData.city} - {companyData.state}</span>
                  <span className="block text-neutral-400">CEP {companyData.zipCode}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyData.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AC0D] hover:underline"
                >
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {currentYear} {companyData.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">Arapongas - Paraná, Brasil</span>
            <button
              id="back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Topo</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
