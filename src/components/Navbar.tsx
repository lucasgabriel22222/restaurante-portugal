import { useState, useEffect } from 'react';
import { Utensils, MessageCircle, Menu, X, Phone } from 'lucide-react';
import { companyData, getWhatsAppOrderUrl } from '../data/siteData';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-neutral-950/90 border-b border-neutral-800/90 py-3 shadow-xl'
          : 'backdrop-blur-sm bg-neutral-950/70 border-b border-neutral-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="navbar-brand-logo"
          href="#inicio"
          onClick={() => handleLinkClick('#inicio')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C0392B] to-[#E67E22] flex items-center justify-center text-white shadow-md shadow-[#C0392B]/20 group-hover:scale-105 transition-transform duration-200">
            <Utensils className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#E67E22] transition-colors">
              RESTAURANTE PORTUGAL
            </span>
            <span className="text-[10px] tracking-widest uppercase font-medium text-neutral-400">
              Arapongas • PR
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="px-3 py-1.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* WhatsApp CTA and Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            id="navbar-whatsapp-cta"
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C0392B] to-[#E67E22] hover:from-[#d13d2f] hover:to-[#f08526] text-white text-xs md:text-sm font-semibold tracking-wide shadow-lg shadow-[#C0392B]/20 hover:shadow-[#C0392B]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Pedir Marmitex / Cardápio</span>
          </a>

          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
            aria-label="Abrir Menu de Navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden border-t border-neutral-800/80 bg-neutral-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="px-3 py-2.5 text-base font-medium text-neutral-200 hover:text-[#E67E22] hover:bg-neutral-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              id="mobile-drawer-whatsapp-btn"
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#C0392B] to-[#E67E22] text-white font-semibold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir Marmitex / Cardápio</span>
            </a>

            <a
              id="mobile-drawer-call-btn"
              href={`tel:${companyData.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-medium border border-neutral-800"
            >
              <Phone className="w-3.5 h-3.5 text-[#E67E22]" />
              <span>Ligar: {companyData.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
