import React, { useState, useEffect } from 'react';
import { ShoppingBag, Send, Package, MessageCircle, ArrowRight, CheckCircle2, Sparkles, ChevronRight, Truck } from 'lucide-react';
import { PHONE_NUMBER } from '../data/products';

export const HowToOrderSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const scrollToTienda = () => {
    const el = document.getElementById('tienda');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      num: '01',
      title: 'Elige tus piezas',
      desc: 'Añade a tu pedido las joyas que te enamoren del catálogo.',
      badge: 'Paso 1: Selección',
      icon: ShoppingBag,
      mockup: (
        <div className="bg-[#3D2C1C] rounded-2xl p-4 border border-[#5A432D] space-y-3">
          <div className="flex items-center justify-between text-xs text-[#E9DCC5]">
            <span className="flex items-center gap-1.5 font-medium text-[#D8B37A]">
              <Sparkles className="w-3.5 h-3.5" />
              Catálogo LUMÉ
            </span>
            <span className="text-[10px] text-[#A99781]">100% Waterproof</span>
          </div>
          <div className="flex items-center gap-3 bg-[#2C1E12] p-2.5 rounded-xl border border-[#4E3924]">
            <img
              src="/assets/products/collar_belle_chocker.png"
              alt="Collar Belle"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 text-left">
              <p className="text-xs font-serif text-[#FAF3E9]">Collar Belle Chocker</p>
              <p className="text-[10px] text-[#D8B37A]">S/ 52 · Oro 18k PVD</p>
            </div>
            <span className="text-[10px] px-2 py-1 rounded-full bg-[#D8B37A] text-[#2C1E12] font-semibold">
              + Añadido
            </span>
          </div>
        </div>
      ),
    },
    {
      num: '02',
      title: 'Envíalo por WhatsApp',
      desc: 'Con un clic nos llega tu lista completa. Te confirmamos stock y forma de pago.',
      badge: 'Paso 2: Confirmación',
      icon: Send,
      mockup: (
        <div className="bg-[#3D2C1C] rounded-2xl p-4 border border-[#5A432D] space-y-3">
          <div className="flex items-center justify-between text-xs text-[#E9DCC5]">
            <span className="flex items-center gap-1.5 font-medium text-[#25D366]">
              <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
              Chat Oficial LUMÉ
            </span>
            <span className="text-[10px] text-[#A99781]">Respuesta al instante</span>
          </div>
          <div className="bg-[#25D366]/15 border border-[#25D366]/40 p-2.5 rounded-xl text-left space-y-1">
            <p className="text-[11px] text-[#FAF3E9] font-sans">
              &ldquo;¡Hola LUMÉ! ✨ Quisiera confirmar mi pedido del catálogo: Collar Belle Chocker (S/ 52)...&rdquo;
            </p>
            <div className="flex items-center justify-end gap-1 text-[9px] text-[#25D366]">
              <span>Enviado</span>
              <CheckCircle2 className="w-3 h-3 text-[#25D366]" />
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Recíbelo en casa',
      desc: 'Enviamos a todo el Perú, empacado con el cariño que tu joya merece.',
      badge: 'Paso 3: Entrega',
      icon: Package,
      mockup: (
        <div className="bg-[#3D2C1C] rounded-2xl p-4 border border-[#5A432D] space-y-3">
          <div className="flex items-center justify-between text-xs text-[#E9DCC5]">
            <span className="flex items-center gap-1.5 font-medium text-[#D8B37A]">
              <Truck className="w-3.5 h-3.5" />
              Despacho Nacional
            </span>
            <span className="text-[10px] text-[#25D366] font-medium">Empaque de Regalo</span>
          </div>
          <div className="bg-[#2C1E12] p-2.5 rounded-xl border border-[#4E3924] flex items-center justify-between text-left">
            <div>
              <p className="text-xs font-serif text-[#FAF3E9]">Lima 24h · Provincias 48h</p>
              <p className="text-[10px] text-[#A99781]">Caja protectora LUMÉ + Bolsa de tela</p>
            </div>
            <span className="w-8 h-8 rounded-full bg-[#D8B37A]/20 text-[#D8B37A] flex items-center justify-center font-serif text-sm">
              🎁
            </span>
          </div>
        </div>
      ),
    },
  ];

  // Auto-advance step on mobile every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section
      id="como-pedir"
      className="py-16 lg:py-24 bg-[#2C1E12] text-[#FAF3E9] border-y border-[#4A3522] relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#D8B37A]/10 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#D8B37A]/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-[#3D2C1C] border border-[#5A432D] text-[#D8B37A] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D8B37A]" />
            <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase font-medium font-sans">
              FÁCIL Y RÁPIDO
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF3E9] font-normal leading-tight">
            ¿Cómo pedir?
          </h2>

          <p className="text-sm sm:text-base text-[#C9BAA7] font-light leading-relaxed font-sans max-w-xl mx-auto">
            Sin formularios complicados. Elige tus joyas favoritas y coordinamos tu pedido directamente por WhatsApp.
          </p>
        </div>

        {/* Mobile Interactive Step Tabs (< md) */}
        <div className="md:hidden mb-6">
          <div className="flex items-center justify-between gap-2 p-1.5 bg-[#3D2C1C] rounded-2xl border border-[#5A432D]">
            {steps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`flex-1 py-2 px-2 rounded-xl text-xs font-sans uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeStep === idx
                    ? 'bg-[#D8B37A] text-[#2C1E12] font-semibold shadow-md scale-102'
                    : 'text-[#C9BAA7] hover:text-[#FAF3E9]'
                }`}
              >
                <span>{step.num}</span>
                <span className="text-[11px] truncate">{step.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Step Card on Mobile */}
          <div className="mt-4 bg-[#362517] rounded-3xl p-6 border border-[#5A432D] shadow-xl space-y-4 text-left transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-sans uppercase tracking-widest text-[#D8B37A] font-semibold">
                {steps[activeStep].badge}
              </span>
              <span className="font-serif text-3xl text-[#D8B37A]/50 font-normal">
                {steps[activeStep].num}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-serif text-2xl text-[#FAF3E9] font-normal">
                {steps[activeStep].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#C9BAA7] font-light leading-relaxed font-sans">
                {steps[activeStep].desc}
              </p>
            </div>

            {/* Interactive Mockup Preview */}
            <div className="pt-2">
              {steps[activeStep].mockup}
            </div>

            {/* Step navigation dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeStep === idx ? 'w-6 bg-[#D8B37A]' : 'w-2 bg-[#5A432D]'
                  }`}
                  aria-label={`Ver paso ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Connected 3-Step Cards (>= md) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 relative mb-14">
          {/* Subtle connecting golden line across cards */}
          <div className="absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-[#D8B37A]/40 to-transparent pointer-events-none" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = activeStep === idx;
            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(idx)}
                className={`bg-[#362517] p-7 lg:p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between text-left group hover:-translate-y-1.5 shadow-md ${
                  isHovered ? 'border-[#D8B37A] shadow-xl bg-[#3D2C1C]' : 'border-[#5A432D]'
                }`}
              >
                <div>
                  {/* Top Row: Icon & Giant Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-[#2C1E12] border border-[#5A432D] flex items-center justify-center text-[#D8B37A] group-hover:scale-105 transition-transform shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-3xl lg:text-4xl text-[#D8B37A]/50 font-normal">
                      {step.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 mb-5">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#FAF3E9] font-normal group-hover:text-[#D8B37A] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#C9BAA7] font-light leading-relaxed font-sans min-h-[40px]">
                      {step.desc}
                    </p>
                  </div>

                  {/* Step Interactive Visual */}
                  <div className="pt-2">
                    {step.mockup}
                  </div>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-5 mt-5 border-t border-[#4E3924] flex items-center justify-between text-xs font-sans text-[#D8B37A]">
                  <span className="uppercase tracking-widest font-medium">Paso {idx + 1} de 3</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout Bar in rich darker tone */}
        <div className="mt-8 p-6 sm:p-9 rounded-3xl bg-[#382717] border border-[#5A432D] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <h4 className="font-serif text-xl sm:text-2xl text-[#FAF3E9] font-normal">
              ¿Quieres pedir o tienes alguna consulta?
            </h4>
            <p className="text-xs sm:text-sm text-[#C9BAA7] font-light font-sans max-w-lg">
              Estamos en línea para confirmarte stock, fotos reales y opciones de entrega en Lima y provincias.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto shrink-0">
            <button
              onClick={scrollToTienda}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FAF3E9] hover:bg-[#D8B37A] text-[#2C1E12] text-xs font-medium uppercase tracking-[0.2em] font-sans transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 active:scale-95"
            >
              <span>Ver catálogo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                '¡Hola LUMÉ! ✨ Quisiera hacer un pedido de sus joyas waterproof.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-[0.16em] font-sans transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Pedir por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
