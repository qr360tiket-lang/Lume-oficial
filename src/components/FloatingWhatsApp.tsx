import React from 'react';
import { PHONE_NUMBER } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Contacto directo por WhatsApp">
      <a
        href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
          '¡Hola LUMÉ! ✨ Me gustaría consultar sobre sus joyas waterproof.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp LUMÉ - 51 986 492 712"
        className="fixed right-5 sm:right-7 bottom-6 z-50 group flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
        title="Contactar por WhatsApp (+51 986 492 712)"
      >
        {/* Animated Ripple Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* WhatsApp Button Container */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center overflow-hidden bg-transparent drop-shadow-xl transition-all duration-300">
          <img
            src="/assets/whatsapp_logo.png"
            alt="WhatsApp LUMÉ"
            className="w-full h-full object-contain filter drop-shadow-md"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://res.cloudinary.com/pdwsqs4f/image/upload/v1793810315/pngwing.com.png';
            }}
          />
        </div>

        {/* Hover Tooltip (left of the right-floating button) */}
        <span className="hidden sm:group-hover:block absolute right-full mr-3.5 px-3 py-1.5 bg-[#382717] text-[#FAF3E9] text-[11px] font-sans whitespace-nowrap rounded-xl shadow-xl tracking-wide uppercase border border-[#E6D8BF]/30 pointer-events-none animate-fadeIn">
          ¿Dudas? Escríbenos al WhatsApp
        </span>
      </a>
    </aside>
  );
};
