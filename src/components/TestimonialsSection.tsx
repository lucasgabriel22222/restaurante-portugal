import { Star, Quote, CheckCircle2, ExternalLink } from 'lucide-react';
import { testimonials, companyData } from '../data/siteData';

export default function TestimonialsSection() {
  return (
    <section id="avaliacoes" className="py-20 sm:py-24 bg-[#101010] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Google Rating Pill */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#D4AC0D] mb-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AC0D] text-[#D4AC0D]" />
              ))}
            </div>
            <span className="text-white font-bold">{companyData.googleRating} no Google</span>
            <span className="text-neutral-400 font-normal">({companyData.googleReviewsCount} avaliações)</span>
          </div>

          <h2
            id="testimonials-title"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4"
          >
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-normal leading-relaxed">
            A opinião honesta de quem almoça diariamente conosco no salão em Arapongas ou recebe seu marmitex no trabalho e em casa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          id="testimonials-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="rounded-2xl p-7 sm:p-8 bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 flex flex-col justify-between transition-all duration-300 hover:bg-neutral-900 shadow-xl"
            >
              <div>
                {/* Header with Quote icon and Star Rating */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < t.rating
                            ? 'fill-[#D4AC0D] text-[#D4AC0D]'
                            : 'fill-neutral-800 text-neutral-800'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-700" />
                </div>

                {/* Comment Text */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 border-t border-neutral-800/90 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                    {t.name}
                  </h4>
                  <span className="text-xs text-neutral-400">
                    Cliente frequente em Arapongas
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-900/60 px-2.5 py-1 rounded-md">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-12 text-center">
          <a
            id="google-maps-reviews-link"
            href="https://www.google.com/maps/search/?api=1&query=Restaurante+Portugal+Rua+Rouxinol+2403+Arapongas+PR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            <span>Ver perfil e avaliações completas no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#E67E22]" />
          </a>
        </div>
      </div>
    </section>
  );
}
