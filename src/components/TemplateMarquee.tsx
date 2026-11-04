import React from 'react';
import { Product, PRODUCTS } from '../data/products';

interface TemplateMarqueeProps {
  onSelectProduct: (product: Product) => void;
  onSelectCategory?: (category: string) => void;
}

export const TemplateMarquee: React.FC<TemplateMarqueeProps> = ({
  onSelectProduct,
  onSelectCategory,
}) => {
  const handleProductClick = (product: Product) => {
    onSelectProduct(product);
  };

  // Duplicate product list to create an endless continuous loop
  const loopProducts = [...PRODUCTS, ...PRODUCTS];

  return (
    <div className="overflow-hidden bg-[#FAF9F7] py-3.5 sm:py-4.5 border-b border-[#E6D8BF]/70 select-none">
      {/* Infinite scrolling row with pause on hover */}
      <div className="animate-marquee flex gap-3 sm:gap-4.5 items-center">
        {loopProducts.map((p, idx) => (
          <button
            key={`${p.id}-${idx}`}
            onClick={() => handleProductClick(p)}
            className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden relative shrink-0 bg-[#EFE8DD] border border-[#E6D8BF] shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group focus:outline-hidden"
            title={p.name}
            aria-label={p.name}
          >
            {/* Real Store Product Image with clean zoom on hover */}
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== p.cloudinaryUrl) {
                  target.src = p.cloudinaryUrl;
                }
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
