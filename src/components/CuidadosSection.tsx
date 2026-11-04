import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle, Droplets, Sparkles, Shield, HeartHandshake } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ElementType;
}

export const CuidadosSection: React.FC = () => {
  // Accordion open state - open first item by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: '¿De verdad puedo ducharme con mis joyas?',
      answer:
        'Sí. Nuestras piezas son de acero 316L con enchapado en oro 18k PVD, por lo que resisten el agua, el sudor y el uso diario sin perder su color.',
      icon: Droplets,
    },
    {
      question: '¿Son aptas para pieles sensibles?',
      answer:
        'Sí, son 100% hipoalergénicas. El acero 316L con enchapado en oro 18k PVD es un material noble libre de níquel, especialmente formulado para ser amable con tu piel.',
      icon: HeartHandshake,
    },
    {
      question: '¿Cómo cuido mis joyas para que duren más?',
      answer:
        'Sécalas después de nadar en piscinas o el mar, guárdalas por separado para evitar roces y evita químicos abrasivos. Gracias a la tecnología de enchapado en oro 18k PVD, mantendrán su brillo radiante.',
      icon: Sparkles,
    },
  ];

  const quickTips = [
    {
      title: 'Ducha & Piscina 24/7',
      desc: '100% Waterproof. No necesitas quitártelas al bañarte o hacer ejercicio.',
      icon: Droplets,
    },
    {
      title: 'Enjuague post mar',
      desc: 'Enjuaga con agua corriente después de la playa para retirar restos de salitre.',
      icon: Sparkles,
    },
    {
      title: 'Paño suave',
      desc: 'Límpialas ocasionalmente con un paño de microfibra para revivir su brillo espejo.',
      icon: Shield,
    },
  ];

  return (
    <section id="cuidados" className="py-16 lg:py-24 bg-[#FAF3E9] border-t border-[#E6D8BF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block matching user prompt */}
        <div className="text-center space-y-3.5 mb-14">
          <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase font-medium text-[#B8935A] font-sans inline-block">
            CUIDADOS &amp; PREGUNTAS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#4A3820] font-normal leading-tight">
            Todo lo que quieres saber
          </h2>
          <p className="text-sm sm:text-base text-[#8A7A66] font-light leading-relaxed font-sans max-w-xl mx-auto">
            Resolvemos las dudas más frecuentes sobre nuestras joyas waterproof de acero 316L y Oro 18k PVD.
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <span className="w-16 h-px bg-[#E6D8BF]" />
            <span className="text-xs text-[#B8935A]">✦</span>
            <span className="w-16 h-px bg-[#E6D8BF]" />
          </div>
        </div>

        {/* Collapsible FAQ Accordion ("despliegue") */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;
            return (
              <div
                key={index}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF9F7] border-[#B8935A] shadow-md'
                    : 'bg-[#FAF9F7]/80 border-[#E6D8BF] hover:border-[#B8935A]/60'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-5 sm:py-6 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#4A3820] text-[#FAF3E9]' : 'bg-[#F3E9DA] text-[#B8935A]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-lg sm:text-xl text-[#4A3820] font-normal">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#B8935A] text-white border-[#B8935A] rotate-180'
                        : 'bg-transparent text-[#8A7A66] border-[#E6D8BF]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Smooth unfolding content ("despliegue") */}
                <div
                  className={`grid transition-all duration-300 ease-in-out px-6 sm:px-8 ${
                    isOpen ? 'grid-rows-[1fr] pb-6 sm:pb-7 opacity-100' : 'grid-rows-[0fr] pb-0 opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-2 border-t border-[#E6D8BF]/60 text-sm sm:text-base text-[#4A3820] leading-relaxed font-sans font-light pl-0 sm:pl-14">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Quick Care Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 border-t border-[#E6D8BF]">
          {quickTips.map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F7] p-6 rounded-2xl border border-[#E6D8BF] text-center space-y-2 shadow-2xs"
              >
                <div className="w-10 h-10 rounded-full bg-[#F3E9DA] text-[#B8935A] mx-auto flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base text-[#4A3820]">{tip.title}</h4>
                <p className="text-xs text-[#8A7A66] font-light font-sans leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
