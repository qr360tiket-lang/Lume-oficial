import React, { useState, useEffect } from 'react';
import { Truck, Sparkles, Gift } from 'lucide-react';

export const CountdownBanner: React.FC = () => {
  // Urgency timer for discounts
  const [secondsRemaining, setSecondsRemaining] = useState(4800);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 4800));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(slideTimer);
  }, []);

  const f = (n: number) => String(n).padStart(2, '0');
  const h = Math.floor(secondsRemaining / 3600);
  const m = Math.floor((secondsRemaining % 3600) / 60);
  const s = secondsRemaining % 60;
  const timeFormatted = `${f(h)}:${f(m)}:${f(s)}`;

  const scrollToTienda = () => {
    const el = document.getElementById('tienda');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-[#FAF3E9] py-2 sm:py-2.5 px-3 sm:px-6 select-none border-b border-[#2A241C] relative z-40 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Desktop / Tablet View: All 3 items visible side-by-side with gold star dividers */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 text-[11px] lg:text-xs tracking-[0.16em] uppercase font-medium">
          {/* Item 1: Envíos a todo el Perú */}
          <div className="flex items-center gap-2 text-[#FAF3E9]">
            <Truck className="w-4 h-4 text-[#B8935A] shrink-0" />
            <span>Envíos a todo el Perú</span>
          </div>

          <span className="text-[#B8935A]/60 select-none text-xs">✦</span>

          {/* Item 2: DESCUBRE NUESTROS DESCUENTOS */}
          <button
            onClick={scrollToTienda}
            className="flex items-center gap-2 text-[#FAF3E9] hover:text-[#B8935A] transition-colors cursor-pointer group"
            title="Ir a los descuentos de la tienda"
          >
            <Sparkles className="w-4 h-4 text-[#B8935A] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="font-semibold tracking-[0.16em] underline decoration-[#B8935A]/50 underline-offset-4 group-hover:decoration-[#B8935A]">
              DESCUBRE NUESTROS DESCUENTOS
            </span>
            <span className="bg-[#B8935A]/25 border border-[#B8935A]/40 text-[#FAF3E9] text-[10px] px-2 py-0.5 rounded-full font-mono tracking-normal font-normal">
              {timeFormatted}
            </span>
          </button>

          <span className="text-[#B8935A]/60 select-none text-xs">✦</span>

          {/* Item 3: REGALO */}
          <div className="flex items-center gap-2 text-[#FAF3E9]">
            <Gift className="w-4 h-4 text-[#B8935A] shrink-0" />
            <span className="font-semibold text-[#B8935A]">REGALO</span>
          </div>
        </div>

        {/* Mobile View: Rotating Carousel of the 3 items with indicators */}
        <div className="flex md:hidden items-center justify-between gap-2 text-[11px] sm:text-xs tracking-wider uppercase font-medium">
          <div className="flex-1 flex items-center justify-center min-h-[24px]">
            {mobileIndex === 0 && (
              <div className="flex items-center gap-2 text-[#FAF3E9]">
                <Truck className="w-3.5 h-3.5 text-[#B8935A] shrink-0" />
                <span>Envíos a todo el Perú</span>
              </div>
            )}
            {mobileIndex === 1 && (
              <button
                onClick={scrollToTienda}
                className="flex items-center gap-1.5 text-[#FAF3E9] hover:text-[#B8935A] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B8935A] shrink-0" />
                <span className="font-semibold">DESCUBRE NUESTROS DESCUENTOS</span>
                <span className="bg-[#B8935A]/25 text-[#FAF3E9] text-[9px] px-1.5 py-0.2 rounded font-mono font-normal">
                  {timeFormatted}
                </span>
              </button>
            )}
            {mobileIndex === 2 && (
              <div className="flex items-center gap-2 text-[#FAF3E9]">
                <Gift className="w-3.5 h-3.5 text-[#B8935A] shrink-0" />
                <span className="font-semibold text-[#B8935A]">REGALO</span>
              </div>
            )}
          </div>

          {/* 3 mini indicator dots */}
          <div className="flex items-center gap-1 shrink-0">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setMobileIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  mobileIndex === idx
                    ? 'bg-[#B8935A] w-3.5'
                    : 'bg-white/30 w-1.5 hover:bg-white/60'
                }`}
                aria-label={`Anuncio ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
