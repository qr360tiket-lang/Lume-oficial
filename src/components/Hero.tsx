import React from 'react';
import { Waves, Shield, Sparkles, Truck, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

export const Hero: React.FC = () => {
  const scrollToShop = () => {
    const el = document.getElementById('tienda');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6F0E6] to-[#FAF7F2] pt-8 pb-14 border-b border-[#EAE0D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE7DA] border border-[#DFCFC0] text-[#7A634B] text-[11px] uppercase tracking-widest font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#B28F54]" />
              <span>Colección Oficial Perú 2026</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B2217] leading-[1.12] tracking-tight font-normal text-balance">
              Joyas Waterproof que nunca pierden su brillo.
            </h1>

            <p className="text-sm sm:text-base text-[#6B5A4B] leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Fabricadas en <strong className="font-medium text-[#3B2F23]">acero quirúrgico 316L</strong> y
              enchapadas en <strong className="font-medium text-[#3B2F23]">Oro 18k con tecnología PVD</strong>.
              Resisten ducha, piscina, mar, sudor y lociones sin despintarse ni poner la piel verde.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={scrollToShop}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#3B2F23] hover:bg-[#281F17] text-[#FAF6EE] text-xs uppercase tracking-widest font-medium transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explorar Colección</span>
                <ArrowRight className="w-4 h-4 text-[#C9BAA6] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  '¡Hola Pialü! ✨ Me gustaría consultar sobre las joyas waterproof y disponibilidad.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-widest font-medium transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>WhatsApp: 51 986 492 712</span>
              </a>
            </div>

            {/* Quantitative / Trust Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E8DDCF]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EFE7DA] flex items-center justify-center text-[#7A634B] shrink-0">
                  <Waves className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2B2217]">100% Waterproof</p>
                  <p className="text-[10px] text-[#8C7A68]">Ducha, piscina y mar</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EFE7DA] flex items-center justify-center text-[#7A634B] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2B2217]">Oro 18k PVD</p>
                  <p className="text-[10px] text-[#8C7A68]">10x más duradero</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EFE7DA] flex items-center justify-center text-[#7A634B] shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2B2217]">Acero 316L</p>
                  <p className="text-[10px] text-[#8C7A68]">Garantía de color</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EFE7DA] flex items-center justify-center text-[#7A634B] shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2B2217]">Envíos Perú</p>
                  <p className="text-[10px] text-[#8C7A68]">Lima y provincias</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-[2rem] overflow-hidden shadow-xl border border-[#DFD3C3] bg-[#F2EDE4] group">
              <img
                src="/assets/products/collar_belle_chocker.png"
                alt="Pialü Joyas Waterproof Colección"
                className="w-full aspect-[4/3] object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2217]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#E8DCCB] font-medium">
                  Pieza Destacada
                </span>
                <h3 className="font-serif text-2xl font-normal text-white">Collar Belle Chocker</h3>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-[#DFD3C3]">Gargantilla rígida adaptable · S/ 52</p>
                  <button
                    onClick={scrollToShop}
                    className="text-xs text-white underline underline-offset-4 hover:text-[#D4AF37] transition-colors"
                  >
                    Ver en catálogo →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
