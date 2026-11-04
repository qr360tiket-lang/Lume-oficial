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

  const countForCategory = (cat: CategoryFilter) => {
    if (cat === 'all') return PRODUCTS.length;
    return PRODUCTS.filter((p) => p.category === cat).length;
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.specification.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categoriesList: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'Todo' },
    { id: 'collares', label: 'Collares' },
    { id: 'pulseras', label: 'Pulseras' },
    { id: 'aretes', label: 'Aretes' },
    { id: 'anillos', label: 'Anillos' },
    { id: 'sets', label: 'Sets' },
  ];

  return (
    <section id="tienda" className="max-w-[1240px] mx-auto pt-10 pb-16 px-4 sm:px-6 lg:px-8">
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

      {/* Top Filter and Search Bar (.top in template) */}
      <div className="flex flex-wrap gap-3 items-center pb-7 border-b border-[#E6D8BF]">
        {/* Category Chips (.chip in template) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none no-scrollbar">
          {categoriesList.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = countForCategory(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange && onCategoryChange(cat.id)}
                className={`rounded-full px-5 py-3 text-xs tracking-[0.22em] uppercase font-sans font-normal transition-all duration-300 flex items-center shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#4A3820] text-[#FAF3E9] border border-[#4A3820] shadow-xs'
                    : 'bg-transparent text-[#4A3820] border border-[#E6D8BF] hover:border-[#B8935A]'
                }`}
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

        {/* Search input (.search in template) */}
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
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Products Grid (.grid in template with Screenshot 1 layout) */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 text-[#8A7A66] space-y-3 font-sans">
          <p className="font-serif text-2xl text-[#4A3820]">No encontramos esa joya.</p>
          <p className="text-xs">Prueba buscando con otro término o selecciona otra categoría.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              if (onCategoryChange) onCategoryChange('all');
            }}
            className="px-6 py-2 rounded-full bg-[#4A3820] text-white text-xs uppercase tracking-wider"
          >
            Ver toda la colección
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-7 mt-9">
          {filteredProducts.map((p, i) => (
            <div
              key={p.id}
              onClick={() => onSelectProduct(p)}
              className="cursor-pointer group flex flex-col animate-cardUp transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 50}ms` }}
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
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== p.cloudinaryUrl) {
                      target.src = p.cloudinaryUrl;
                    }
                  }}
                />
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
          ))}
        </div>
      )}
    </section>
  );
};
