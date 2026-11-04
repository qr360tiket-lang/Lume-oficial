import React from 'react';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartItem, createWhatsAppUrl } from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleWhatsAppSend = () => {
    const url = createWhatsAppUrl(items, total);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[rgba(60,45,28,0.55)] backdrop-blur-sm flex justify-end animate-fadeIn"
      onClick={onClose}
    >
      {/* Drawer Container (.drawer in template: width min(440px, 100%), background var(--bg)) */}
      <aside
        className="w-full max-w-[440px] bg-[#FAF3E9] h-full shadow-2xl flex flex-col z-60 border-l border-[#E6D8BF] text-[#4A3820] animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header (.dh in template) */}
        <div className="flex justify-between items-center px-7 sm:px-8 py-7 border-b border-[#E6D8BF] shrink-0">
          <h2 className="font-serif text-3xl sm:text-[34px] font-normal text-[#4A3820] leading-none m-0">
            Mi pedido <span className="text-[#B8935A]">✦</span>
          </h2>
          <button
            onClick={onClose}
            className="text-2xl text-[#4A3820] hover:text-[#B8935A] bg-transparent border-0 p-1 cursor-pointer transition-colors"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        {/* Free shipping banner */}
        <div className="bg-[#F3E9DA] px-7 sm:px-8 py-2.5 border-b border-[#E6D8BF] text-xs text-[#8A7A66] font-sans">
          {total >= 150 ? (
            <span className="text-[#2E7D32] font-medium">
              ¡Tienes <strong>ENVÍO GRATIS</strong> a todo el Perú!
            </span>
          ) : (
            <span>
              Agrega <strong>S/ {150 - total}</strong> más para <strong>Envío Gratis</strong>
            </span>
          )}
        </div>

        {/* Items List (.items in template) */}
        <div className="flex-1 overflow-y-auto px-7 sm:px-8 py-3 space-y-1">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 text-[#8A7A66] space-y-3 font-sans">
              <ShoppingBag className="w-10 h-10 text-[#B8935A]/60" />
              <p className="font-serif text-xl text-[#4A3820]">Tu pedido está vacío ✦</p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 rounded-full bg-[#4A3820] text-[#FAF3E9] text-xs uppercase tracking-[0.2em] font-sans font-medium"
              >
                Explorar Colección
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 sm:gap-4.5 py-5 border-b border-[#E6D8BF] items-start last:border-b-0"
              >
                {/* Thumbnail (.it .th with clean real photo) */}
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[#EBDDC6] to-[#C9A674] border border-[#E6D8BF] shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== item.product.cloudinaryUrl) {
                        target.src = item.product.cloudinaryUrl;
                      }
                    }}
                  />
                </div>

                {/* Details (.it .n in template) */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-[19px] sm:text-[20px] font-normal text-[#4A3820] leading-snug m-0 truncate">
                    {item.product.name}
                  </h4>
                  <small className="block text-xs text-[#8A7A66] italic my-1 font-serif truncate">
                    {item.product.specification}
                  </small>
                  <div className="font-serif text-sm text-[#8A7A66] mb-2 tabular-nums">
                    S/ {item.product.price}
                  </div>

                  {/* Quantity Stepper (.it .qty) */}
                  <div className="inline-flex items-center gap-3 border border-[#E6D8BF] rounded-full px-3 py-1 bg-[#FAF3E9]">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, -1)}
                      className="text-[#B8935A] hover:text-[#4A3820] text-sm cursor-pointer"
                      aria-label="Restar"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-serif text-xs tabular-nums select-none min-w-[12px] text-center text-[#4A3820]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, 1)}
                      className="text-[#B8935A] hover:text-[#4A3820] text-sm cursor-pointer"
                      aria-label="Sumar"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Remove button (.rm in template) */}
                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  className="bg-transparent border-0 underline text-[11px] tracking-[0.2em] uppercase text-[#8A7A66] hover:text-[#4A3820] transition-colors cursor-pointer shrink-0 pt-1 font-sans"
                >
                  Quitar
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Area (.df in template: background var(--bg2)) */}
        <div className="bg-[#F3E9DA] px-7 sm:px-8 py-7 border-t border-[#E6D8BF] space-y-3.5 shrink-0">
          {/* Total row (.tot in template) */}
          <div className="flex justify-between items-baseline text-xs tracking-[0.2em] text-[#4A3820] uppercase font-sans">
            <span>TOTAL</span>
            <b className="font-serif text-3xl sm:text-[34px] font-normal tracking-normal text-[#4A3820] tabular-nums">
              S/ {total}
            </b>
          </div>

          <p className="text-sm text-[#8A7A66] leading-[1.6] my-2.5 font-sans font-light">
            Te confirmamos stock, costo de envío y forma de pago por WhatsApp.
          </p>

          {/* WhatsApp Button (.wa in template: height 64px, background var(--wa)) */}
          <button
            onClick={handleWhatsAppSend}
            disabled={items.length === 0}
            className="w-full h-[60px] sm:h-[64px] rounded-full border-0 bg-[#25D366] hover:brightness-95 active:scale-98 disabled:opacity-45 disabled:pointer-events-none text-white text-xs sm:text-[13px] tracking-[0.28em] uppercase font-sans font-medium flex items-center justify-center gap-3 transition-all shadow-md cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.2 14c-.2.6-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.700-2.800-1.200-4.600-4.100-4.700-4.200-.1-.1-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.5-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.200.1.300 0 .5l-.3.500-.4.400c-.1.100-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.100 1.300 2.400 1.500.3.100.4.100.6-.1l.8-1c.2-.3.400-.2.600-.1l1.900.9c.3.100.5.200.5.300.1.200.1.800-.1 1.400Z" />
            </svg>
            <span>Enviar pedido por WhatsApp</span>
          </button>

          {items.length > 0 && (
            <div className="text-center pt-1">
              <button
                onClick={onClearCart}
                className="text-[11px] text-[#8A7A66] hover:text-[#4A3820] underline transition-colors cursor-pointer"
              >
                Vaciar pedido
              </button>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};
