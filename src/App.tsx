import React, { useState, useEffect } from 'react';
import { CountdownBanner } from './components/CountdownBanner';
import { PialuHeader } from './components/PialuHeader';
import { TemplateMarquee } from './components/TemplateMarquee';
import { TemplateHero } from './components/TemplateHero';
import { StoreSection, CategoryFilter } from './components/StoreSection';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { WaterproofTechSection } from './components/WaterproofTechSection';
import { CuidadosSection } from './components/CuidadosSection';
import { HowToOrderSection } from './components/HowToOrderSection';
import { CustomerReviewsSection } from './components/CustomerReviewsSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Product, PRODUCTS } from './data/products';
import { CartItem } from './utils/whatsapp';

export default function App() {
  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('pialu_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    // Default preview with 1 item as shown in Screenshot 2 & 3
    const defaultProduct = PRODUCTS.find((p) => p.id === 'collar-belle-chocker') || PRODUCTS[0];
    return [{ product: defaultProduct, quantity: 1 }];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  useEffect(() => {
    try {
      localStorage.setItem('pialu_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    // Open drawer as in template workflow
    setTimeout(() => {
      setIsCartOpen(true);
    }, 350);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSearchFocus = () => {
    const input = document.getElementById('search-input');
    if (input) {
      input.focus();
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleCategorySelect = (categoryStr: string) => {
    const validCategories: CategoryFilter[] = ['all', 'collares', 'pulseras', 'aretes', 'anillos', 'sets'];
    const matched = validCategories.find((c) => c === categoryStr) || 'all';
    setSelectedCategory(matched);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF3E9] text-[#4A3820] selection:bg-[#E6D8BF]">
      {/* 1. Top Countdown Bar (.tb in template) */}
      <CountdownBanner />

      {/* 2. Main Header & Subnav (.hd and .hnav in template) */}
      <PialuHeader
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSearchClick={handleSearchFocus}
        onSelectCategory={handleCategorySelect}
      />

      {/* 3. Animated Store Products Carousel (Infinite loop of all products) */}
      <TemplateMarquee
        onSelectProduct={(product) => setSelectedProduct(product)}
        onSelectCategory={handleCategorySelect}
      />

      {/* 4. Hero Section (.hero.mg in template) */}
      <TemplateHero />

      <main className="flex-1">
        {/* 5. The Store Block (.store#tienda in template with Screenshot 1 layout) */}
        <StoreSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* 6. Waterproof 316L Technology Section (Acero 316) */}
        <WaterproofTechSection />

        {/* 7. Customer Reviews & Brand Story (Nosotros) */}
        <CustomerReviewsSection />

        {/* 8. How To Order via WhatsApp Guide (Cómo pedir) */}
        <HowToOrderSection />

        {/* 9. Jewelry Care Guide (Cuidados) */}
        <CuidadosSection />
      </main>

      {/* 9. Template Footer */}
      <Footer />

      {/* 10. Floating WhatsApp Action Button (.fab in template) */}
      <FloatingWhatsApp />

      {/* 11. Product Detail Modal (.ov#mov in template / Screenshot 2) */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 12. "Mi Pedido" Cart Drawer (.drawer#drawer in template / Screenshot 3) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
