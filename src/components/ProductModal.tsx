import React, { useState, useEffect } from 'react';
import { Minus, Plus, Check, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setQuantity(1);
    setAdded(false);
    setActiveImageIndex(0);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const imageList = product.images && product.images.length > 0 ? product.images : [product.image];
  const currentImg = imageList[activeImageIndex] || product.image;

  // Clean specification to prevent "Medida: medida:" duplication
  const cleanSpec = product.specification
    ? product.specification.replace(/^medida:\s*/i, '').trim()
    : '';

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

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % imageList.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[rgba(60,45,28,0.6)] backdrop-blur-xs animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Dialog Card: optimized to fit 100% in a single screen on mobile & desktop */}
      <div
        className="relative bg-[#FAF3E9] rounded-2xl sm:rounded-3xl w-full max-w-[420px] md:max-w-[820px] max-h-[92vh] flex flex-col md:grid md:grid-cols-12 shadow-2xl border border-[#E6D8BF] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (.x in template) */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#E6D8BF] bg-[#FAF3E9]/95 text-lg sm:text-xl flex items-center justify-center text-[#4A3820] hover:rotate-90 hover:border-[#B8935A] hover:bg-white transition-all duration-300 cursor-pointer shadow-xs"
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Top/Left: Product Image */}
        <div className="md:col-span-5 bg-gradient-to-br from-[#FFF9EF] to-[#EBDDC6] flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 relative border-b md:border-b-0 md:border-r border-[#E6D8BF]/60 shrink-0">
          <div className="relative w-full max-w-[150px] sm:max-w-[200px] md:max-w-[280px] aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-xs border border-[#E6D8BF]/70 bg-white">
            <img
              src={currentImg}
              alt={`${product.name} - Foto ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== product.cloudinaryUrl) {
                  target.src = product.cloudinaryUrl;
                }
              }}
            />

            {/* Prev/Next arrows if multiple images */}
            {imageList.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-1.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#FAF3E9]/90 text-[#4A3820] hover:bg-[#4A3820] hover:text-white transition-all flex items-center justify-center shadow-md cursor-pointer"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#FAF3E9]/90 text-[#4A3820] hover:bg-[#4A3820] hover:text-white transition-all flex items-center justify-center shadow-md cursor-pointer"
                  aria-label="Foto siguiente"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </div>

          {/* Interactive mini-thumbnails if multiple photos */}
          {imageList.length > 1 && (
            <div className="flex items-center gap-2 mt-2">
              {imageList.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-8 h-8 rounded-md overflow-hidden border transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#B8935A] ring-1 ring-[#B8935A] scale-105'
                      : 'border-[#E6D8BF] opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Ver foto ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
              <span className="text-[10px] text-[#8A7A66] font-sans font-medium ml-1">
                {activeImageIndex === 1 ? '✦ Puesto en oreja' : '✦ Joya'}
              </span>
            </div>
          )}
        </div>

        {/* Bottom/Right: Product Info */}
        <div className="md:col-span-7 p-3.5 sm:p-5 md:p-7 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Eyebrow (.eyebrow) */}
            <div className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#B8935A] font-semibold font-sans">
              {product.categoryLabel.toUpperCase().split('').join(' ')}
            </div>

            {/* Title */}
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#4A3820] font-normal leading-tight mt-0.5 mb-1">
              {product.name}
            </h2>

            {/* Price */}
            <div className="font-serif text-lg sm:text-xl md:text-2xl text-[#B8935A] font-medium mb-1.5 sm:mb-2 tabular-nums">
              S/ {product.price}
            </div>

            {/* Description */}
            <p className="text-[12px] sm:text-[13px] text-[#7A6A56] leading-[1.5] mb-2 sm:mb-3 font-sans line-clamp-2 sm:line-clamp-3">
              {product.description}
            </p>

            {/* Highlights list */}
            <div className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4 text-[11px] sm:text-[12px] text-[#4A3820] font-sans">
              {cleanSpec && (
                <div className="flex items-center gap-2">
                  <span className="text-[#B8935A] text-xs">✦</span>
                  <span className="font-medium text-[#4A3820]">Medida: <span className="font-normal text-[#6B5A45]">{cleanSpec}</span></span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="text-[#B8935A] text-xs">✦</span>
                <span className="text-[#6B5A45]">Acero 316L · Enchapado Oro 18k PVD</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#B8935A] text-xs">✦</span>
                <span className="text-[#6B5A45]">100% Waterproof & Hipoalergénico</span>
              </div>
            </div>
          </div>

          {/* Buy Row */}
          <div className="flex gap-2 sm:gap-3 items-center pt-2 border-t border-[#E6D8BF]/60 mt-auto">
            {/* Quantity */}
            <div className="flex items-center gap-2 sm:gap-3 border border-[#E6D8BF] rounded-full px-2.5 sm:px-3.5 py-1.5 bg-[#FAF9F7] shrink-0">
              <button
                onClick={handleDecrease}
                disabled={quantity <= 1}
                className="text-base text-[#B8935A] hover:text-[#4A3820] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer w-5 h-5 flex items-center justify-center"
                aria-label="Disminuir"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-serif text-sm sm:text-base tabular-nums w-4 text-center select-none text-[#4A3820] font-medium">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="text-base text-[#B8935A] hover:text-[#4A3820] cursor-pointer w-5 h-5 flex items-center justify-center"
                aria-label="Aumentar"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add button */}
            <button
              onClick={handleAdd}
              className={`flex-1 h-[42px] sm:h-[46px] md:h-[50px] rounded-full text-[11px] sm:text-xs tracking-[0.22em] uppercase font-sans font-semibold transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer ${
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

