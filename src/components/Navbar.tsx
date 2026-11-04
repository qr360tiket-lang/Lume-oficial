import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onSearchClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  onSearchClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#ECE2D2] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#3B2F23] hover:text-[#8C6D46] transition-colors focus:outline-hidden"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Brand Zone (Single clean luxury wordmark) */}
        <a
          href="#"
          className="flex flex-col items-center justify-center shrink-0 group focus:outline-hidden"
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-[0.28em] uppercase text-[#2B2217] font-normal group-hover:text-[#8C6D46] transition-colors">
            PIALÜ
          </span>
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#8C7A68] -mt-1 font-sans">
            Waterproof Jewelry
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-[#5C4D3E]">
          <button
            onClick={() => scrollTo('tienda')}
            className="hover:text-[#B28F54] transition-colors focus:outline-hidden cursor-pointer"
          >
            Colección
          </button>
          <button
            onClick={() => scrollTo('waterproof')}
            className="hover:text-[#B28F54] transition-colors focus:outline-hidden cursor-pointer"
          >
            Acero 316L
          </button>
          <button
            onClick={() => scrollTo('como-pedir')}
            className="hover:text-[#B28F54] transition-colors focus:outline-hidden cursor-pointer"
          >
            Cómo Pedir
          </button>
          <button
            onClick={() => scrollTo('nosotros')}
            className="hover:text-[#B28F54] transition-colors focus:outline-hidden cursor-pointer"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollTo('contacto')}
            className="hover:text-[#B28F54] transition-colors focus:outline-hidden cursor-pointer"
          >
            Contacto
          </button>
        </nav>

        {/* Right Zone: Search & Mi Pedido Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onSearchClick}
            className="p-2 text-[#5C4D3E] hover:text-[#2B2217] hover:bg-[#F2ECE1] rounded-full transition-colors cursor-pointer"
            title="Buscar joyas"
            aria-label="Buscar joyas"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenCart}
            className="flex items-center gap-2.5 bg-[#3B2F23] hover:bg-[#281F17] text-[#FAF6EE] px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all shadow-xs active:scale-95 cursor-pointer"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 text-[#D8C6AE]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#25D366] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">Mi Pedido</span>
            {cartCount > 0 && (
              <span className="hidden sm:inline font-serif font-normal text-sm border-l border-[#5C4B39] pl-2 text-[#E8DCCB] tabular-nums">
                S/ {cartTotal}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#ECE2D2] px-6 py-5 space-y-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-3 text-xs uppercase tracking-widest font-medium text-[#5C4D3E]">
            <button
              onClick={() => scrollTo('tienda')}
              className="text-left py-2 hover:text-[#B28F54] transition-colors"
            >
              Colección (Tienda)
            </button>
            <button
              onClick={() => scrollTo('waterproof')}
              className="text-left py-2 hover:text-[#B28F54] transition-colors"
            >
              Tecnología Acero 316L
            </button>
            <button
              onClick={() => scrollTo('como-pedir')}
              className="text-left py-2 hover:text-[#B28F54] transition-colors"
            >
              Cómo Pedir por WhatsApp
            </button>
            <button
              onClick={() => scrollTo('nosotros')}
              className="text-left py-2 hover:text-[#B28F54] transition-colors"
            >
              Sobre Pialü
            </button>
            <button
              onClick={() => scrollTo('contacto')}
              className="text-left py-2 hover:text-[#B28F54] transition-colors"
            >
              Contacto & WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
