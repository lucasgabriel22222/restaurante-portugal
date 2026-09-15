import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppOrderUrl } from '../data/siteData';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <div
        id="floating-whatsapp-tooltip"
        className={`hidden sm:block px-3.5 py-1.5 rounded-xl bg-neutral-900/95 border border-neutral-700 text-white text-xs font-semibold shadow-2xl backdrop-blur-md transition-all duration-200 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Peça seu almoço aqui!
      </div>

      {/* Button with subtle pulsing glow */}
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppOrderUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir almoço pelo WhatsApp"
        className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all duration-200 group"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 opacity-75 animate-ping group-hover:opacity-100" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-white/10" />
      </a>
    </div>
  );
}
