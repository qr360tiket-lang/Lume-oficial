import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

export const PialuCoverHero: React.FC = () => {
  const scrollToShop = () => {
    const el = document.getElementById('tienda');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#6a1533]">
      {/* Full-width Cover Image (Exact from image_c876052b.png) */}
      <div
        onClick={scrollToShop}
        className="relative w-full cursor-pointer group"
      >
        <img
          src="/assets/products/pialu_hero_cover.png"
          alt="Pialü Colección Oficial Portada"
          className="w-full h-auto max-h-[620px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
        />

        {/* Floating circular black WhatsApp button in the bottom-left matching screenshot */}
        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              '¡Hola Pialü! ✨ Me gustaría consultar sobre sus joyas y promociones.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label="Abrir WhatsApp oficial Pialü"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/95 hover:bg-black text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group/wa border border-white/20"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-black group-hover/wa:scale-105 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};
