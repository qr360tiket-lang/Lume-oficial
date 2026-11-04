import React, { useState } from 'react';
import { PHONE_NUMBER } from '../data/products';
import { BookOpen, X, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isClaimsModalOpen, setIsClaimsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#382717] text-[#C9BAA7] pt-16 pb-10 px-5 sm:px-8 lg:px-14 text-xs sm:text-[13px] font-sans font-light border-t border-[#4E3924]">
      <div className="max-w-7xl mx-auto">
        {/* Top 4-Column Grid matching user reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block">
              <span className="font-serif text-3xl sm:text-[34px] tracking-[0.14em] text-[#D8B37A] font-normal block leading-none">
                LUMÉ<sup className="text-sm font-sans ml-1 text-[#D8B37A]">✦</sup>
              </span>
              <span className="text-[10px] tracking-[0.38em] uppercase text-[#A99781] block mt-1.5 font-sans">
                BY CIN · JEWELRY
              </span>
            </div>
            <p className="text-xs sm:text-[13px] text-[#B5A48F] leading-relaxed max-w-sm font-light">
              Joyas waterproof e hipoalergénicas de acero 316L con enchapado en oro 18k PVD. Everyday elegance.
            </p>
          </div>

          {/* Col 2: Catálogo (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] sm:text-xs font-sans tracking-[0.28em] uppercase text-[#D8B37A] font-medium">
              CATÁLOGO
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B5A48F]">
              <li>
                <button
                  onClick={() => scrollToSection('tienda')}
                  className="hover:text-[#FAF3E9] transition-colors cursor-pointer"
                >
                  Collares
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tienda')}
                  className="hover:text-[#FAF3E9] transition-colors cursor-pointer"
                >
                  Pulseras
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tienda')}
                  className="hover:text-[#FAF3E9] transition-colors cursor-pointer"
                >
                  Aretes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tienda')}
                  className="hover:text-[#FAF3E9] transition-colors cursor-pointer"
                >
                  Anillos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tienda')}
                  className="hover:text-[#FAF3E9] transition-colors cursor-pointer"
                >
                  Sets
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Ayuda (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-[11px] sm:text-xs font-sans tracking-[0.28em] uppercase text-[#D8B37A] font-medium">
              AYUDA
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B5A48F]">
              <li>
                <button
                  onClick={() => scrollToSection('como-pedir')}
                  className="hover:text-[#FAF3E9] transition-colors cursor-pointer"
                >
                  Cómo pedir
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('cuidados')}
                  className="hover:text-[#FAF3E9] transition-colors cursor-pointer"
                >
                  Cuidados
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('waterproof')}
                  className="hover:text-[#FAF3E9] transition-colors cursor-pointer"
                >
                  Materiales
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto y Redes (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] sm:text-xs font-sans tracking-[0.28em] uppercase text-[#D8B37A] font-medium">
              CONTACTO Y REDES
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B5A48F]">
              <li>
                <a
                  href={`https://wa.me/${PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF3E9] transition-colors"
                >
                  WhatsApp: 986 492 712
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/lume_by_cin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF3E9] transition-colors"
                >
                  Instagram: @lume_by_cin
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@lum.by.cin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF3E9] transition-colors"
                >
                  TikTok: @lum.by.cin
                </a>
              </li>
              <li className="pt-1 flex items-center gap-1.5 text-[#D8B37A]">
                <span>Envíos a todo el Perú</span>
                <span className="text-[10px] font-semibold border border-[#D8B37A]/60 px-1 py-0.2 rounded font-sans">
                  PE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-[#4E3924] pt-8 pb-8 flex justify-center">
          {/* Libro de Reclamaciones Card matching user image */}
          <button
            onClick={() => setIsClaimsModalOpen(true)}
            className="bg-[#FAF9F7] text-[#382717] rounded-xl px-6 sm:px-8 py-3.5 shadow-md border border-[#E6D8BF] hover:shadow-lg hover:border-[#D8B37A] transition-all cursor-pointer flex items-center gap-4 text-left group"
          >
            {/* Book icon */}
            <div className="w-10 h-10 rounded-lg bg-[#382717] text-[#D8B37A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>

            <div>
              <span className="font-serif text-xs sm:text-sm font-semibold tracking-wider uppercase block text-[#382717]">
                LIBRO DE RECLAMACIONES
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#7A6A58] block font-sans">
                LUMÉ BY CIN · TIENDA VIRTUAL
              </span>
              <span className="text-[10px] text-[#A67C41] font-medium block mt-0.5 group-hover:underline font-sans">
                Políticas de cambios, devoluciones y envíos →
              </span>
            </div>
          </button>
        </div>

        {/* Bottom Bar: Copyright (Diseño web por wha.pe removed as requested) */}
        <div className="border-t border-[#4E3924] pt-6 flex flex-col sm:flex-row items-center justify-center text-center text-[11px] text-[#9E8E7A]">
          <p>© 2026 Lumé by Cin. Todos los derechos reservados.</p>
        </div>
      </div>

      {/* Modal Libro de Reclamaciones & Políticas */}
      {isClaimsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4">
          <div className="bg-[#FAF9F7] text-[#382717] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E6D8BF] shadow-2xl relative">
            <button
              onClick={() => setIsClaimsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EFE8DD] text-[#382717] flex items-center justify-center hover:bg-[#382717] hover:text-white transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#382717] text-[#D8B37A] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#382717] font-semibold">
                  Libro de Reclamaciones Virtual
                </h3>
                <p className="text-xs text-[#7A6A58]">LUMÉ BY CIN · RUC / Tienda Virtual Perú</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-[#5C4A38] leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                Conforme a lo establecido en el Código de Protección y Defensa del Consumidor (Ley N° 29571), ponemos a tu disposición nuestro canal de atención directa y registro de quejas o reclamos.
              </p>
              <div className="p-3 bg-[#F3E9DA] rounded-xl border border-[#E6D8BF] space-y-1">
                <p className="font-medium text-[#382717]">Atención directa e inmediata:</p>
                <p>WhatsApp: +51 986 492 712</p>
                <p>Email: soporte@lume.pe</p>
                <p>Horario: Lunes a Sábado de 9:00 am a 8:00 pm</p>
              </div>
              <p>
                <strong>Políticas de Cambios y Devoluciones:</strong> Las piezas cuentan con garantía de color de por vida por defectos de fabricación en su recubrimiento PVD en oro 18k.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E6D8BF] flex justify-end">
              <button
                onClick={() => setIsClaimsModalOpen(false)}
                className="px-5 py-2.5 rounded-full bg-[#382717] text-[#FAF3E9] text-xs uppercase tracking-wider font-medium hover:bg-[#D8B37A] hover:text-[#382717] transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
