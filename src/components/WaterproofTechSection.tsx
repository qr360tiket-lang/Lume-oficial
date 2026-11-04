import React, { useState, useEffect } from 'react';
import { Droplets, ShieldCheck, Sparkles, ChevronLeft, ChevronRight, Waves, Compass, Activity } from 'lucide-react';

export const WaterproofTechSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scenes = [
    {
      id: 'ducha',
      label: 'Ducha',
      icon: Droplets,
      image: '/assets/lifestyle/ducha.jpg',
      alt: 'Joyería waterproof en la ducha con gotas de agua',
    },
    {
      id: 'piscina',
      label: 'Piscina',
      icon: Waves,
      image: '/assets/lifestyle/piscina.jpg',
      alt: 'Joyería waterproof en la piscina bajo el sol',
    },
    {
      id: 'mar',
      label: 'Mar & Playa',
      icon: Compass,
      image: '/assets/lifestyle/mar.jpg',
      alt: 'Joyería waterproof en el mar y la playa',
    },
    {
      id: 'deporte',
      label: 'Deporte & Gym',
      icon: Activity,
      image: '/assets/lifestyle/deporte.jpg',
      alt: 'Joyería waterproof durante entrenamiento y deporte',
    },
  ];

  // Auto-advance scenes every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % scenes.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [scenes.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % scenes.length);
  };

  return (
    <section id="waterproof" className="py-16 lg:py-24 bg-[#F7EFE3] border-y border-[#E6D8BF] relative overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#B8935A]/10 filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#B8935A]/10 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Information, Scene Pills, and Metrics */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase font-medium text-[#B8935A] font-sans inline-block">
              DETRÁS DE CADA PIEZA
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#4A3820] font-normal leading-[1.18]">
              Enchapado en oro 18k PVD
            </h2>

            <p className="text-sm sm:text-base text-[#8A7A66] leading-relaxed font-light font-sans max-w-2xl mx-auto lg:mx-0">
              Usamos una de las tecnologías de recubrimiento más avanzadas del mercado: hasta 10 veces más resistente que el enchapado tradicional, para un brillo que no se apaga con el tiempo. Y como es hipoalergénico, es ideal para pieles sensibles.
            </p>

            {/* Interactive Scene Selector Pills: Ducha, Piscina, Mar, Deporte */}
            <div className="pt-2">
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-medium text-[#B8935A] font-sans block mb-3">
                ✦ COMPROBADO EN CADA MOMENTO:
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {scenes.map((scene, idx) => {
                  const Icon = scene.icon;
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={scene.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium font-sans uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-[#4A3820] text-[#FAF3E9] shadow-md border border-[#4A3820] scale-105'
                          : 'bg-[#FAF9F7] text-[#4A3820] border border-[#E6D8BF] hover:border-[#B8935A]'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#D8B37A]' : 'text-[#B8935A]'}`} />
                      <span>{scene.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              {/* Card 1 */}
              <div className="bg-[#FAF9F7] p-5 sm:p-6 rounded-2xl border border-[#E6D8BF] shadow-xs text-left space-y-2 hover:border-[#B8935A] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl sm:text-[34px] text-[#4A3820] font-normal leading-none">
                    100%
                  </span>
                  <Droplets className="w-5 h-5 text-[#B8935A]" />
                </div>
                <h3 className="font-serif text-base text-[#4A3820] font-medium">Waterproof</h3>
                <p className="text-xs text-[#8A7A66] font-light leading-relaxed font-sans">
                  Resistente a ducha, mar y piscina 24/7 sin oxidarse.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FAF9F7] p-5 sm:p-6 rounded-2xl border border-[#E6D8BF] shadow-xs text-left space-y-2 hover:border-[#B8935A] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl sm:text-[34px] text-[#4A3820] font-normal leading-none">
                    10x
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#B8935A]" />
                </div>
                <h3 className="font-serif text-base text-[#4A3820] font-medium">Más resistente</h3>
                <p className="text-xs text-[#8A7A66] font-light leading-relaxed font-sans">
                  Fijación PVD de alta resistencia frente al roce cotidiano.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FAF9F7] p-5 sm:p-6 rounded-2xl border border-[#E6D8BF] shadow-xs text-left space-y-2 hover:border-[#B8935A] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl sm:text-[34px] text-[#4A3820] font-normal leading-none">
                    18k
                  </span>
                  <Sparkles className="w-5 h-5 text-[#B8935A]" />
                </div>
                <h3 className="font-serif text-base text-[#4A3820] font-medium">Enchapado PVD</h3>
                <p className="text-xs text-[#8A7A66] font-light leading-relaxed font-sans">
                  Acero quirúrgico 316L e hipoalergénico para piel sensible.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Lifestyle Image Showcase (100% Clean - NO text on the photos) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-[#FAF9F7] rounded-3xl p-3.5 sm:p-4 border border-[#E6D8BF] shadow-xl group">
              {/* Soft decorative glow */}
              <div className="absolute -inset-3 bg-gradient-to-t from-[#B8935A]/15 to-transparent rounded-3xl filter blur-xl opacity-70 pointer-events-none" />

              {/* Pure Image Container - Strictly NO text on the photo */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#ECE4D8] border border-[#E6D8BF] shadow-inner">
                {scenes.map((scene, index) => (
                  <div
                    key={scene.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={scene.image}
                      alt={scene.alt}
                      className="w-full h-full object-cover transform scale-101 hover:scale-104 transition-transform duration-700"
                    />
                  </div>
                ))}

                {/* Left/Right Arrow Navigation */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#FAF9F7]/90 text-[#4A3820] hover:bg-[#4A3820] hover:text-[#FAF3E9] transition-all flex items-center justify-center shadow-md cursor-pointer backdrop-blur-xs"
                  aria-label="Escena anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#FAF9F7]/90 text-[#4A3820] hover:bg-[#4A3820] hover:text-[#FAF3E9] transition-all flex items-center justify-center shadow-md cursor-pointer backdrop-blur-xs"
                  aria-label="Siguiente escena"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Scene Indicator and Dots (Cleanly outside the photo) */}
              <div className="pt-3.5 px-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8935A] animate-pulse" />
                  <span className="text-xs font-serif text-[#4A3820]">
                    {scenes[currentSlide].label} · Waterproof 24/7
                  </span>
                </div>

                {/* Indicator Dots */}
                <div className="flex items-center gap-1.5">
                  {scenes.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx ? 'w-6 bg-[#B8935A]' : 'w-1.5 bg-[#E6D8BF] hover:bg-[#B8935A]/60'
                      }`}
                      aria-label={`Ver escena ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
