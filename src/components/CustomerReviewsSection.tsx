import React from 'react';
import { Sparkles, Heart, Sun } from 'lucide-react';

export const CustomerReviewsSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-[#FAF3E9] border-t border-[#E6D8BF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Story Hero Block (Lumé significa luz) */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-[#FAF9F7] border border-[#E6D8BF] text-[#B8935A] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8935A]" />
            <span className="text-[11px] sm:text-xs tracking-[0.32em] uppercase font-medium font-sans">
              SOBRE NOSOTROS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] text-[#4A3820] font-normal leading-[1.15]">
            Lumé <span className="italic font-serif text-[#B8935A]">significa luz</span>
          </h2>

          <div className="relative max-w-2xl mx-auto pt-2">
            <span className="text-4xl sm:text-5xl text-[#B8935A]/30 font-serif select-none absolute -top-5 left-0">“</span>
            <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#4A3820] leading-relaxed font-normal px-6">
              Elegimos este nombre porque creemos que cada mujer merece brillar con su propia luz, todos los días, en cada gesto simple. Para quien encuentra elegancia en el día a día y no necesita ocasiones especiales para sentirse especial.
            </p>
            <span className="text-4xl sm:text-5xl text-[#B8935A]/30 font-serif select-none absolute -bottom-8 right-0">”</span>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3.5 pt-6">
            <span className="w-16 sm:w-24 h-px bg-[#E6D8BF]" />
            <span className="text-xs text-[#B8935A]">✦</span>
            <span className="w-16 sm:w-24 h-px bg-[#E6D8BF]" />
          </div>
        </div>

        {/* 3 Pillars of Lumé */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-[#FAF9F7] p-8 rounded-3xl border border-[#E6D8BF] shadow-xs text-center space-y-3.5 hover:border-[#B8935A] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#F3E9DA] mx-auto flex items-center justify-center text-[#B8935A]">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#4A3820]">Brilla con tu propia luz</h3>
            <p className="text-xs sm:text-sm text-[#8A7A66] font-light leading-relaxed font-sans">
              Joyas diseñadas para potenciar tu esencia natural, sin ostentación, con una sofisticación limpia y moderna.
            </p>
          </div>

          <div className="bg-[#FAF9F7] p-8 rounded-3xl border border-[#E6D8BF] shadow-xs text-center space-y-3.5 hover:border-[#B8935A] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#F3E9DA] mx-auto flex items-center justify-center text-[#B8935A]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#4A3820]">Elegancia sin esfuerzo</h3>
            <p className="text-xs sm:text-sm text-[#8A7A66] font-light leading-relaxed font-sans">
              No guardes tus joyas para una fiesta. Vístelas con un polo blanco, en la oficina o en la playa.
            </p>
          </div>

          <div className="bg-[#FAF9F7] p-8 rounded-3xl border border-[#E6D8BF] shadow-xs text-center space-y-3.5 hover:border-[#B8935A] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#F3E9DA] mx-auto flex items-center justify-center text-[#B8935A]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#4A3820]">Calidad 24/7</h3>
            <p className="text-xs sm:text-sm text-[#8A7A66] font-light leading-relaxed font-sans">
              Hechas de acero quirúrgico 316L y Oro 18k PVD para que nunca tengas que quitártelas para nada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
