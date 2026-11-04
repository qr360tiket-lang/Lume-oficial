import React, { useState } from 'react';

interface PialuHeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onSearchClick: () => void;
  onSelectCategory?: (category: string) => void;
}

export const PialuHeader: React.FC<PialuHeaderProps> = ({
  cartCount,
  onOpenCart,
  onSearchClick,
  onSelectCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleColeccionClick = () => {
    if (onSelectCategory) {
      onSelectCategory('all');
    }
    scrollToSection('tienda');
  };

  return (
    <div className="w-full bg-[#FAF9F7]">
      {/* Header Grid (.hd in template: 1fr auto 1fr) */}
      <header className="grid grid-cols-3 items-center px-4 sm:px-[2.2vw] pt-3.5 pb-2 border-0 bg-[#FAF9F7]">
        {/* Left: Search button (.hs in template) + Mobile Hamburger toggle */}
        <div className="justify-self-start flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-[#111] hover:text-[#E0206F] cursor-pointer"
            aria-label="Abrir menú"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#111"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <button
            onClick={onSearchClick}
            className="flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg bg-transparent border-0 text-[#111] hover:text-[#E0206F] transition-colors cursor-pointer p-0"
            aria-label="Búsqueda"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#111"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.500-4.500" />
            </svg>
            <span className="hidden sm:inline font-sans font-light">Búsqueda</span>
          </button>
        </div>

        {/* Center: LUMÉ Official Gold Logo */}
        <div className="justify-self-center text-center flex items-center justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center hover:opacity-90 transition-opacity py-1"
            aria-label="LUMÉ Jewelry"
          >
            <img
              src="/assets/lume_logo.png"
              alt="LUMÉ Jewelry"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[200px] sm:max-w-[270px] object-contain drop-shadow-xs"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://res.cloudinary.com/pdwsqs4f/image/upload/v1793242774/Logotipo_dorado_LUM%C3%89_con_brillo_de_joyer%C3%ADa.png';
              }}
            />
          </a>
        </div>

        {/* Right: Actions - ONLY Shopping Cart (Heart removed as requested) */}
        <div className="justify-self-end flex items-center gap-3">
          <button
            onClick={onOpenCart}
            className="relative bg-transparent border-0 flex items-center p-2 text-[#4A3820] hover:text-[#B8935A] transition-colors cursor-pointer group"
            aria-label="Carrito de compras"
            title="Mi pedido"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              viewBox="0 0 24 24"
              className="transition-transform group-hover:scale-105"
            >
              <path d="M3 9h18l-2 11H5L3 9Zm5-1 3-5m5 5-3-5" />
            </svg>
            <i
              id="cnt"
              className="absolute -top-1 -right-1 bg-[#4A3820] text-[#FAF3E9] text-[10px] font-semibold w-[20px] h-[20px] rounded-full flex items-center justify-center not-italic font-sans border-2 border-[#FAF9F7] shadow-xs group-hover:bg-[#B8935A] transition-colors"
            >
              {cartCount}
            </i>
          </button>
        </div>
      </header>

      {/* Main Menu Navigation: Exactly Colección, Acero 316, Nosotros, Cómo pedir, Cuidados */}
      <nav className="hidden lg:flex items-center justify-center gap-10 xl:gap-14 py-3.5 px-4 text-xs sm:text-[14px] xl:text-[15px] tracking-[0.06em] text-[#111] border-b border-[#EEE] font-normal font-sans">
        <a
          href="#tienda"
          onClick={(e) => {
            e.preventDefault();
            handleColeccionClick();
          }}
          className="hover:text-[#E0206F] transition-colors cursor-pointer"
        >
          Colección
        </a>
        <a
          href="#waterproof"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('waterproof');
          }}
          className="hover:text-[#B8935A] transition-colors cursor-pointer"
        >
          Acero 316
        </a>
        <a
          href="#nosotros"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('nosotros');
          }}
          className="hover:text-[#B8935A] transition-colors cursor-pointer"
        >
          Nosotros
        </a>
        <a
          href="#como-pedir"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('como-pedir');
          }}
          className="hover:text-[#B8935A] transition-colors cursor-pointer"
        >
          Cómo pedir
        </a>
        <a
          href="#cuidados"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('cuidados');
          }}
          className="hover:text-[#B8935A] transition-colors cursor-pointer"
        >
          Cuidados
        </a>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E6D8BF] px-6 py-4 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2.5 text-xs uppercase tracking-wider text-neutral-800 font-sans">
            <a
              href="#tienda"
              onClick={(e) => {
                e.preventDefault();
                handleColeccionClick();
              }}
              className="py-1.5 hover:text-[#B8935A] font-medium"
            >
              Colección
            </a>
            <a
              href="#waterproof"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('waterproof');
              }}
              className="py-1.5 hover:text-[#B8935A] font-medium"
            >
              Acero 316
            </a>
            <a
              href="#nosotros"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('nosotros');
              }}
              className="py-1.5 hover:text-[#B8935A] font-medium"
            >
              Nosotros
            </a>
            <a
              href="#como-pedir"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('como-pedir');
              }}
              className="py-1.5 hover:text-[#B8935A] font-medium"
            >
              Cómo pedir
            </a>
            <a
              href="#cuidados"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('cuidados');
              }}
              className="py-1.5 hover:text-[#B8935A] font-medium"
            >
              Cuidados
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
