import React from 'react';
import { ImpactMetric } from '../types';
import { BarChart3, TrendingUp, Sparkles } from 'lucide-react';
import { CornerOrnament, PandeiroIcon, CordelSun } from './BrazilianMotifs';

interface ImpactSectionProps {
  metrics: ImpactMetric[];
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ metrics }) => {
  return (
    <section id="impacto" className="py-16 bg-[#FAF6EE] relative paper-grain">
      
      {/* Tarja Mostarda - TEXTO ESCURO (#1C1812) para contraste absoluto */}
      <div className="w-full bg-[#DCA427] text-[#1C1812] py-4 px-4 sm:px-8 mb-12 shadow-sm relative overflow-hidden">
        <CornerOrnament position="top-left" color="#1C1812" />
        <CornerOrnament position="bottom-right" color="#B84A2B" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <PandeiroIcon size={24} color="#1C1812" />
            <h2 className="font-serif text-xl sm:text-2xl font-black tracking-wide text-[#1C1812]">
              Impacto Gerado · Números & Transformação Cultural
            </h2>
          </div>
          <span className="text-xs tracking-wider uppercase bg-[#1C1812] text-[#DCA427] px-3 py-1 rounded-sm font-bold shadow-2xs">
            Transparência · Relatório de Circulação
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B84A2B] mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-[#354224]" />
            <span>Métricas e Evidências</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1C1812] tracking-tight">
            Música que gera economia, trabalho e cidadania
          </h3>
          <p className="text-sm text-[#574C3D] mt-2">
            Resultados consolidados dos projetos Festim nos últimos anos, fortalecendo a cadeia produtiva dos palcos.
          </p>
        </div>

        {/* 4-Column Metric Grid with Tabular Figures and Clear Units */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={m.id || idx}
              className="bg-[#FAF6EE] border-2 border-[#C7B088] rounded-sm p-6 shadow-xs hover:border-[#B84A2B] transition-all flex flex-col justify-between relative group"
            >
              <CornerOrnament position="bottom-right" color="#DCA427" />

              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#705E44] uppercase block mb-1">
                  MÉTRICA 0{idx + 1}
                </span>

                {/* Tabular figures, huge legible font */}
                <p className="font-serif text-4xl sm:text-5xl font-extrabold text-[#B84A2B] tracking-tight font-mono tabular-nums group-hover:scale-102 transition-transform">
                  {m.value}
                </p>

                <h4 className="font-serif font-bold text-lg text-[#1C1812] mt-3 mb-2">
                  {m.label}
                </h4>

                <p className="text-xs text-[#574C3D] leading-relaxed">
                  {m.context}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#C4AF8B]/50 flex items-center justify-between text-[10px] text-[#705E44]">
                <span>Fonte: Produção Festim</span>
                <span className="font-semibold text-[#354224]">Auditado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Adjacency summary banner */}
        <div className="mt-12 bg-[#ECE0CD]/85 border-2 border-[#C4AF8B] p-6 rounded-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-[#FAF6EE] border border-[#C4AF8B] flex items-center justify-center shrink-0 text-[#B84A2B] mx-auto">
              <CordelSun size={24} color="#B84A2B" />
            </div>
            <div>
              <h5 className="font-serif text-base font-bold text-[#1C1812]">
                Sustentabilidade e Compromisso com a Diversidade
              </h5>
              <p className="text-xs text-[#574C3D]">
                Em todos os nossos eventos, priorizamos paridade de gênero nos palcos, contratação de profissionais negros e indígenas e compensação ambiental de resíduos.
              </p>
            </div>
          </div>
          <a
            href="#contato"
            className="px-4 py-2 text-xs font-bold text-[#1C1812] bg-[#FAF6EE] hover:bg-white border border-[#C4AF8B] rounded-sm transition-colors whitespace-nowrap"
          >
            Apoie Nossos Projetos
          </a>
        </div>

      </div>
    </section>
  );
};
