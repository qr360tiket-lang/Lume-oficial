import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, PhoneCall } from 'lucide-react';

const ANNOUNCEMENTS = [
  {
    icon: Sparkles,
    text: 'ENVÍO GRATIS A TODO EL PERÚ POR COMPRAS MAYORES A S/ 150',
  },
  {
    icon: ShieldCheck,
    text: 'JOYAS 100% WATERPROOF · GARANTÍA DE COLOR DE POR VIDA',
  },
  {
    icon: PhoneCall,
    text: 'ATENCIÓN PERSONALIZADA POR WHATSAPP AL +51 986 492 712',
  },
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = ANNOUNCEMENTS[currentIndex];
  const IconComponent = current.icon;

  return (
    <div className="bg-[#3B2F23] text-[#FAF6EE] text-[11px] font-medium tracking-widest uppercase py-2 px-4 border-b border-[#4D3E30] transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-2">
        <IconComponent className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
        <span className="truncate">{current.text}</span>
      </div>
    </div>
  );
};
