import React, { useState, useEffect } from 'react';
import { Minus, Plus, Check } from 'lucide-react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setQuantity(1);
    setAdded(false);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  const handleIncrease = () => {
    setQuantity((q) => q + 1);
  };

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(60,45,28,0.55)] backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Dialog Card (.modal in template) */}
      <div
        className="relative bg-[#FAF3E9] rounded-[32px] w-full max-w-[1040px] max-h-[92vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 shadow-2xl border border-[#E6D8BF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (.x in template) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#E6D8BF] bg-[#FAF3E9] text-xl flex items-center justify-center text-[#4A3820] hover:rotate-90 hover:border-[#B8935A] transition-all duration-300 cursor-pointer"
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Left: Product Image (.mimg in template) */}
        <div className="bg-gradient-to-br from-[#FFF9EF] to-[#EBDDC6] flex items-center justify-center p-8 sm:p-12 relative min-h-[300px]">
          <div className="relative w-full max-w-[380px] aspect-square rounded-2xl overflow-hidden shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== product.cloudinaryUrl) {
                  target.src = product.cloudinaryUrl;
                }
              }}
            />
          </div>
        </div>

        {/* Right: Product Info (.minfo in template) */}
        <div className="p-7 sm:p-12 flex flex-col justify-center">
          {/* Eyebrow (.eyebrow) */}
          <div className="text-[11px] tracking-[0.35em] uppercase text-[#B8935A] font-medium font-sans mb-1">
            {product.categoryLabel.toUpperCase().split('').join(' ')}
          </div>

          {/* Title (h2: 42px in Playfair Display) */}
          <h2 className="font-serif text-3xl sm:text-[42px] text-[#4A3820] font-normal leading-[1.1] my-2">
            {product.name}
          </h2>

          {/* Price (.p in template: Playfair Display, var(--gold), 28px) */}
          <div className="font-serif text-2xl sm:text-[28px] text-[#B8935A] font-normal mb-3 tabular-nums">
            S/ {product.price}
          </div>

          {/* Description (.d in template) */}
          <p className="text-sm sm:text-[15px] text-[#8A7A66] leading-[1.8] my-3 font-light font-sans">
            {product.description}
          </p>

          {/* Features list (ul/li with ✦ in template) */}
          <ul className="space-y-2 mb-7 text-sm sm:text-[15px] text-[#4A3820] font-sans">
            <li className="flex items-start gap-2.5">
              <span className="text-[#B8935A] text-xs pt-1">✦</span>
              <span>Medida: {product.specification.toLowerCase()}</span>
            </li>
            {product.features.slice(1).map((f, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#B8935A] text-xs pt-1">✦</span>
                <span className="leading-snug">{f}</span>
              </li>
            ))}
          </ul>

          {/* Buy Row (.buy in template) */}
          <div className="flex gap-4 items-center pt-2">
            {/* Quantity (.qty in template) */}
            <div className="flex items-center gap-3.5 border border-[#E6D8BF] rounded-full px-4 py-2.5 bg-[#FAF3E9]">
              <button
                onClick={handleDecrease}
                disabled={quantity <= 1}
                className="text-lg text-[#B8935A] hover:text-[#4A3820] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Disminuir"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-serif text-base tabular-nums w-4 text-center select-none text-[#4A3820]">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="text-lg text-[#B8935A] hover:text-[#4A3820] cursor-pointer"
                aria-label="Aumentar"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add button (.add in template: height 64px, uppercase, letter-spacing .3em) */}
            <button
              onClick={handleAdd}
              className={`flex-1 h-[54px] sm:h-[64px] rounded-full text-xs sm:text-[13px] tracking-[0.3em] uppercase font-sans font-medium transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                added
                  ? 'bg-[#25D366] text-white'
                  : 'bg-[#4A3820] hover:bg-[#B8935A] text-[#FAF3E9]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>¡Añadido!</span>
                </>
              ) : (
                <span>Añadir al pedido</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
