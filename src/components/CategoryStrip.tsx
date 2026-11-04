import React from 'react';

interface CategoryStripProps {
  onSelectCategory: (category: string) => void;
}

const CATEGORIES = [
  { id: 'sets', name: 'SETS', image: '/assets/products/cat_sets.png', target: 'sets' },
  { id: 'crea-mix', name: 'CREA TU MIX', image: '/assets/products/cat_crea_tu_mix.png', target: 'collares' },
  { id: 'aretes', name: 'ARETES', image: '/assets/products/cat_aretes.png', target: 'aretes' },
  { id: 'anillos', name: 'ANILLOS', image: '/assets/products/cat_anillos.png', target: 'anillos' },
  { id: 'collares', name: 'COLLARES', image: '/assets/products/cat_collares.png', target: 'collares' },
  { id: 'charms', name: 'CHARMS', image: '/assets/products/cat_charms.png', target: 'collares' },
  { id: 'pulseras', name: 'PULSERAS', image: '/assets/products/cat_pulseras.png', target: 'pulseras' },
  { id: 'color-plata', name: 'COLOR PLATA', image: '/assets/products/cat_color_plata.png', target: 'all' },
  { id: 'sets-2', name: 'SETS', image: '/assets/products/cat_sets.png', target: 'sets' },
  { id: 'crea-mix-2', name: 'CREA TU MIX', image: '/assets/products/cat_crea_tu_mix.png', target: 'collares' },
];

export const CategoryStrip: React.FC<CategoryStripProps> = ({ onSelectCategory }) => {
  const handleClick = (target: string) => {
    onSelectCategory(target);
    const el = document.getElementById('tienda');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] py-3.5 px-2 sm:px-4 border-b border-neutral-200 overflow-x-auto scrollbar-none no-scrollbar">
      <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-max mx-auto justify-start xl:justify-center">
        {CATEGORIES.map((cat, idx) => (
          <button
            key={`${cat.id}-${idx}`}
            onClick={() => handleClick(cat.target)}
            className="group relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#EFECE6] border border-neutral-200/80 shadow-2xs hover:shadow-md hover:scale-104 transition-all duration-300 cursor-pointer shrink-0 focus:outline-hidden"
          >
            {/* Category image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
            />

            {/* Bottom Title Label */}
            <div className="absolute inset-x-0 bottom-0 py-1.5 px-1 bg-gradient-to-t from-black/60 via-black/25 to-transparent flex items-end justify-center">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-white uppercase text-center drop-shadow-md">
                {cat.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
