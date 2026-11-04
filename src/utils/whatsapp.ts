import { Product, PHONE_NUMBER } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

export function generateWhatsAppMessage(items: CartItem[], total: number): string {
  if (items.length === 0) return '';

  const lines = items.map((item) => {
    return `• ${item.quantity} x ${item.product.name} – S/ ${item.product.price * item.quantity}`;
  });

  return `Hola LUMÉ ✨ Quiero hacer este pedido:\n\n${lines.join(
    '\n'
  )}\n\nTotal: S/ ${total}\n\n¿Me confirman stock, costo de envío y forma de pago? Gracias 💛`;
}

export function createWhatsAppUrl(items: CartItem[], total: number): string {
  const message = generateWhatsAppMessage(items, total);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
