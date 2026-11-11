import React, { useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';

export type CategoryFilter = 'all' | 'collares' | 'pulseras' | 'aretes' | 'anillos' | 'sets';

interface StoreSectionProps {
  onSelectProduct: (product: Product) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory?: CategoryFilter;
  onCategoryChange?: (category: CategoryFilter) => void;
}

export const StoreSection: React.FC<StoreSectionProps> = ({
  onSelectProduct,
  searchQuery,
  setSearchQuery,
  selectedCategory = 'all',
  onCategoryChange,
}) => {
  const activeCategory = selectedCategory;

  // The 5 official categories (NO "Todo" button)
  const categoriesList: { id: 'collares' | 'pulseras' | 'aretes' | 'anillos' | 'sets'; label: string }[] = [
    { id: 'collares', label: 'Collares' },
    { id: 'pulseras', label: 'Pulseras' },
    { id: 'aretes', label: 'Aretes' },
    { id: 'anillos', label: 'Anillos' },
    { id: 'sets', label: 'Sets' },
  ];

  const countForCategory = (catId: 'collares' | 'pulseras' | 'aretes' | 'anillos' | 'sets') => {
    return PRODUCTS.filter((p) => p.category === catId).length;
  };

  const handleCategoryClick = (catId: 'collares' | 'pulseras' | 'aretes' | 'anillos' | 'sets') => {
    if (onCategoryChange) {
      onCategoryChange(catId);
    }
    const el = document.getElementById(`cat-${catId}`);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Filtered products when search is active
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return PRODUCTS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.specification.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const renderProductCard = (p: Product, i: number) => (
    <div
      key={p.id}
      onClick={() => onSelectProduct(p)}
      className="cursor-pointer group flex flex-col animate-cardUp transition-transform duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${i * 40}ms` }}
    >
      {/* Product Photo (.ph in template) */}
      <div className="relative aspect-square rounded-[22px] sm:rounded-[24px] overflow-hidden border border-[#E6D8BF] bg-[#ECE4D8] shadow-xs group-hover:shadow-lg transition-all duration-500">
        {/* Badge (.badge in template) */}
        {p.badge && (
          <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 bg-[#FAF3E9]/95 backdrop-blur-xs rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#8A7A66] font-medium shadow-xs">
            {p.badge}
          </span>
        )}

        {/* Main image */}
        <img
          src={p.image}
          alt={p.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-104 ${
            p.images && p.images.length > 1 ? 'group-hover:opacity-0 transition-opacity duration-500' : ''
          }`}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src !== p.cloudinaryUrl) {
              target.src = p.cloudinaryUrl;
            }
          }}
        />

        {/* Second image on hover if available */}
        {p.images && p.images.length > 1 && (
          <img
            src={p.images[1]}
            alt={`${p.name} detalle`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-104"
            loading="lazy"
          />
        )}

        {/* Multiple images indicator */}
        {p.images && p.images.length > 1 && (
          <span className="absolute bottom-3 right-3 z-20 bg-[#FAF3E9]/90 backdrop-blur-xs text-[#4A3820] text-[9px] font-sans font-medium px-2 py-0.5 rounded-full border border-[#E6D8BF] shadow-xs">
            2 fotos
          </span>
        )}
      </div>

      {/* Title & Price Row (.row in template) */}
      <div className="flex justify-between items-baseline mt-3.5 gap-2">
        <h3 className="font-serif text-lg sm:text-[21px] text-[#4A3820] font-normal leading-tight group-hover:text-[#B8935A] transition-colors truncate">
          {p.name}
        </h3>
        <span className="font-serif text-base sm:text-[19px] text-[#4A3820] font-normal shrink-0 tabular-nums">
          S/ {p.price}
        </span>
      </div>

      {/* Metadata (.meta in template) */}
      <div className="text-[12px] sm:text-[13px] tracking-[0.06em] text-[#A8997F] mt-1 font-light truncate">
        {p.categoryLabel} · Enchapado en Oro 18k PVD
      </div>
    </div>
  );

  return (
    <section id="tienda" className="max-w-[1240px] mx-auto pt-10 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Catálogo Header matching user reference image */}
      <div className="text-center max-w-2xl mx-auto pt-2 pb-12 sm:pb-14">
        <span className="text-[11px] sm:text-xs font-sans tracking-[0.35em] uppercase text-[#B8935A] font-medium block mb-3.5">
          CATÁLOGO
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#4A3820] font-normal leading-[1.2] mb-4 tracking-tight">
          Nuestra primera <span className="italic text-[#B8935A]">colección</span>
        </h2>
        <p className="text-sm sm:text-base text-[#8A7A66] font-light leading-relaxed max-w-xl mx-auto font-sans">
          Piezas pensadas para usarse a diario. Elige tus favoritas, arma tu pedido y te lo enviamos por WhatsApp.
        </p>

        {/* Decorative Divider with centered diamond/star matching reference image */}
        <div className="flex items-center justify-center gap-3.5 mt-7">
          <span className="w-16 sm:w-28 h-px bg-[#E6D8BF]" />
          <span className="text-xs text-[#B8935A] font-serif">✦</span>
          <span className="w-16 sm:w-28 h-px bg-[#E6D8BF]" />
        </div>
      </div>

      {/* Top Filter and Search Bar (NO "Todo" button) */}
      <div className="flex flex-wrap gap-3 items-center pb-7 border-b border-[#E6D8BF]">
        {/* Category Chips: Collares, Pulseras, Aretes, Anillos, Sets */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none no-scrollbar">
          {categoriesList.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = countForCategory(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`rounded-full px-5 py-3 text-xs tracking-[0.22em] uppercase font-sans font-normal transition-all duration-300 flex items-center shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#4A3820] text-[#FAF3E9] border border-[#4A3820] shadow-xs'
                    : 'bg-transparent text-[#4A3820] border border-[#E6D8BF] hover:border-[#B8935A]'
                }`}
                aria-label={`Ir a categoría ${cat.label}`}
              >
                <span>{cat.label}</span>
                <sup
                  className={`ml-1 text-[9px] font-sans ${
                    isActive ? 'text-[#E3C58F]' : 'text-[#B8935A]'
                  }`}
                >
                  {count}
                </sup>
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="ml-auto flex items-center gap-2.5 border border-[#E6D8BF] rounded-full px-5 h-[48px] sm:h-[52px] min-w-[240px] flex-1 sm:flex-initial sm:w-[300px] bg-transparent">
          <Search className="w-4 h-4 text-[#8A7A66] shrink-0" />
          <input
            id="search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar una joya…"
            className="w-full bg-transparent border-0 outline-hidden font-sans text-xs sm:text-sm text-[#4A3820] placeholder-[#8A7A66]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#8A7A66] hover:text-[#4A3820] cursor-pointer"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Products Display */}
      {searchQuery.trim() !== '' ? (
        // Search Results View
        searchResults.length === 0 ? (
          <div className="text-center py-20 text-[#8A7A66] space-y-3 font-sans">
            <p className="font-serif text-2xl text-[#4A3820]">No encontramos esa joya.</p>
            <p className="text-xs">Prueba buscando con otro término o explora las categorías del catálogo.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-6 py-2.5 rounded-full bg-[#4A3820] text-[#FAF3E9] text-xs uppercase tracking-wider font-sans cursor-pointer hover:bg-[#B8935A] transition-colors"
            >
              Ver todas las joyas
            </button>
          </div>
        ) : (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E6D8BF]">
              <p className="text-sm text-[#8A7A66] font-sans">
                Resultados para &ldquo;<span className="text-[#4A3820] font-medium">{searchQuery}</span>&rdquo; ({searchResults.length})
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#B8935A] hover:underline cursor-pointer font-sans"
              >
                Limpiar búsqueda
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-7">
              {searchResults.map((p, i) => renderProductCard(p, i))}
            </div>
          </div>
        )
      ) : (
        // Full Categorized View showing all 14 products grouped by respective category
        <div className="space-y-14 sm:space-y-16 pt-8">
          {categoriesList.map((cat) => {
            const categoryProducts = PRODUCTS.filter((p) => p.category === cat.id);
            if (categoryProducts.length === 0) return null;

            return (
              <div
                key={cat.id}
                id={`cat-${cat.id}`}
                className="scroll-mt-24 space-y-6"
              >
                {/* Category Header with Piece Count */}
                <div className="flex items-baseline justify-between pb-3.5 border-b border-[#E6D8BF]/70">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#B8935A] text-xs font-serif select-none">✦</span>
                    <h3 className="font-serif text-2xl sm:text-[28px] text-[#4A3820] font-normal tracking-tight">
                      {cat.label}
                    </h3>
                    <span className="text-xs text-[#8A7A66] font-sans font-light tracking-wider ml-1">
                      ({categoryProducts.length} {categoryProducts.length === 1 ? 'pieza' : 'piezas'})
                    </span>
                  </div>

                  <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#B8935A] font-medium hidden sm:inline">
                    Oro 18k PVD · Waterproof
                  </span>
                </div>

                {/* Category Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-7">
                  {categoryProducts.map((p, i) => renderProductCard(p, i))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
