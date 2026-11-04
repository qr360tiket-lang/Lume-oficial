import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Droplets, CheckCircle2 } from 'lucide-react';

export const TemplateHero: React.FC = () => {
  const scrollToTienda = () => {
    const el = document.getElementById('tienda');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7EFE3] via-[#FAF3E9] to-[#F3E9DA] text-[#4A3820] border-y border-[#E6D8BF]">
      {/* Background Subtle Warm Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 65% 35%, rgba(184, 147, 90, 0.25), transparent 70%)',
        }}
      />

      {/* Floating Sparkle Background Star matching catalog */}
      <div className="absolute right-[5%] top-[10%] text-[160px] lg:text-[220px] text-[#B8935A]/10 font-serif select-none pointer-events-none">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Text Content (Exact catalog colors and typography) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Catalog Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-[#FAF9F7] border border-[#E6D8BF] text-[#B8935A] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B8935A]" />
              <span className="text-[11px] sm:text-xs tracking-[0.28em] uppercase font-medium font-sans">
                Joyas Waterproof del Perú
              </span>
            </div>

            {/* Headline in Playfair Display and Espresso Brown */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#4A3820] font-normal leading-[1.12] tracking-tight">
              El color no se va.
            </h1>

            {/* Description in catalog muted taupe */}
            <p className="text-sm sm:text-base text-[#8A7A66] max-w-xl mx-auto lg:mx-0 font-light leading-relaxed font-sans">
              Acero inoxidable 316L con enchapado en Oro 18k PVD. 100% resistentes a la ducha, mar y piscina.
              Diseñadas para acompañarte todos los días sin perder su brillo tipo espejo.
            </p>

            {/* Value Props Row in catalog styling */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-[#4A3820] font-sans">
              <div className="flex items-center gap-1.5 bg-[#FAF9F7] px-3.5 py-1.5 rounded-full border border-[#E6D8BF]">
                <Droplets className="w-3.5 h-3.5 text-[#B8935A]" />
                <span className="font-medium">100% Waterproof</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#FAF9F7] px-3.5 py-1.5 rounded-full border border-[#E6D8BF]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8935A]" />
                <span className="font-medium">Acero 316L · Oro 18k PVD</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#FAF9F7] px-3.5 py-1.5 rounded-full border border-[#E6D8BF]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8935A]" />
                <span className="font-medium">Hipoalergénico</span>
              </div>
            </div>

            {/* Only "Ver colección" button */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start">
              <button
                onClick={scrollToTienda}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#4A3820] hover:bg-[#B8935A] text-[#FAF3E9] font-medium text-xs tracking-[0.25em] uppercase transition-all shadow-md hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center justify-center gap-2.5 group font-sans"
              >
                <span>Ver colección</span>
                <ArrowRight className="w-4 h-4 text-[#FAF3E9] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Showcase Arched Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div
              onClick={scrollToTienda}
              className="relative max-w-sm sm:max-w-md w-full cursor-pointer group flex flex-col items-center"
              title="Ver colección completa"
            >
              {/* Soft decorative glow behind arch */}
              <div className="absolute -inset-6 bg-gradient-to-t from-[#B8935A]/20 via-[#B8935A]/10 to-transparent rounded-full filter blur-2xl opacity-60 group-hover:opacity-90 transition-opacity" />

              <img
                src="/assets/portada_arco.png"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792019380/Retrato_en_arco_sobre_fondo_transparente.png';
                }}
                alt="LUMÉ Portada Joyas Waterproof"
                className="relative z-10 w-full max-h-[460px] sm:max-h-[520px] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Elegant floating badge */}
              <div className="absolute bottom-2 z-20 bg-[#FAF9F7]/95 backdrop-blur-xs border border-[#E6D8BF] px-4 py-1.5 rounded-full shadow-md flex items-center gap-2 group-hover:border-[#B8935A] transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#B8935A] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-[#4A3820] font-medium">
                  ✦ Joyería Fina Waterproof ✦
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
