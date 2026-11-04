import React from 'react';
import { Testimonial } from '../types';
import { Quote, Sparkles } from 'lucide-react';
import { CornerOrnament, PandeiroIcon } from './BrazilianMotifs';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="depoimentos" className="py-16 bg-[#FAF6EE] relative paper-grain">
      
      {/* Tarja Terracota */}
      <div className="w-full bg-[#B84A2B] text-white py-4 px-4 sm:px-8 mb-12 shadow-sm relative overflow-hidden">
        <CornerOrnament position="top-left" color="#FAF6EE" />
        <CornerOrnament position="bottom-right" color="#DCA427" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <PandeiroIcon size={24} color="#DCA427" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
              Depoimentos · Quem Já Viveu a Experiência Festim
            </h2>
          </div>
          <span className="text-xs tracking-wider uppercase bg-[#96371D] text-[#FAF6EE] px-3 py-1 rounded-sm font-semibold border border-white/20">
            Artistas & Parceiros Culturais
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#354224] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#DCA427]" />
            <span>Vozes que ecoam</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1C1812] tracking-tight">
            Confiança construída com calor e verdade
          </h3>
          <p className="text-sm text-[#574C3D] mt-2">
            O que dizem os mestres da música, gestores de espaços e artistas que dividem a estrada conosco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div
              key={test.id}
              className="bg-[#ECE0CD]/75 border-2 border-[#C4AF8B] rounded-sm p-6 sm:p-7 shadow-xs flex flex-col justify-between relative hover:border-[#B84A2B] transition-colors"
            >
              <CornerOrnament position="top-left" color="#B84A2B" />
              
              <div>
                <Quote className="w-8 h-8 text-[#B84A2B]/40 mb-3" />
                
                <p className="font-serif italic text-base sm:text-lg text-[#1C1812] leading-relaxed mb-6">
                  “{test.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#C4AF8B]/60">
                <p className="font-serif font-bold text-base text-[#1C1812]">
                  {test.author}
                </p>
                <p className="text-xs font-semibold text-[#B84A2B] mt-0.5">
                  {test.role}
                </p>
                <p className="text-xs text-[#705E44]">
                  {test.organization}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
