import React, { useState } from 'react';
import { EventItem } from '../types';
import { Calendar, Clock, MapPin, Ticket, Sparkles, History, Music } from 'lucide-react';
import { CornerOrnament, PandeiroIcon, AquiTemAxeBadge } from './BrazilianMotifs';

interface AgendaSectionProps {
  events: EventItem[];
  pastEvents?: EventItem[];
}

export const AgendaSection: React.FC<AgendaSectionProps> = ({ events, pastEvents = [] }) => {
  const [viewMode, setViewMode] = useState<'upcoming' | 'past'>('upcoming');
  const [simulateEmpty, setSimulateEmpty] = useState<boolean>(false);

  const displayedEvents = simulateEmpty
    ? []
    : viewMode === 'upcoming'
    ? events
    : pastEvents;

  // Format date helper: "14 de Novembro de 2026"
  const formatDate = (isoDate: string) => {
    try {
      const [year, month, day] = isoDate.split('-');
      const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ];
      return `${parseInt(day, 10)} de ${months[parseInt(month, 10) - 1]} de ${year}`;
    } catch {
      return isoDate;
    }
  };

  const getDayAndMonth = (isoDate: string) => {
    try {
      const [, month, day] = isoDate.split('-');
      const shortMonths = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
      return {
        day: day,
        month: shortMonths[parseInt(month, 10) - 1]
      };
    } catch {
      return { day: '00', month: 'DIA' };
    }
  };

  return (
    <section id="agenda" className="py-16 bg-[#FAF6EE] relative paper-grain">
      
      {/* Tarja Oliva - Contraste Impecável com texto claro */}
      <div className="w-full bg-[#354224] text-[#FAF6EE] py-4 px-4 sm:px-8 mb-12 shadow-sm relative overflow-hidden">
        <CornerOrnament position="top-left" color="#DCA427" />
        <CornerOrnament position="bottom-right" color="#B84A2B" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <PandeiroIcon size={24} color="#DCA427" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
              Agenda Festim · Palcos & Circulação
            </h2>
          </div>
          <span className="text-xs tracking-wider uppercase bg-[#28321B] px-3 py-1 rounded-sm text-[#DCA427] font-semibold border border-[#DCA427]/30">
            Temporada 2026 / 2027
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Toggle Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#C4AF8B]/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B84A2B] mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Programação Oficial</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1C1812] tracking-tight">
              Onde o axé vai bater forte
            </h3>
            <p className="text-sm text-[#574C3D] mt-2 max-w-xl">
              Confira os próximos shows, festivais e apresentações com a assinatura Festim pelo Brasil.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-[#ECE0CD] border border-[#C4AF8B] rounded-sm">
              <button
                onClick={() => {
                  setViewMode('upcoming');
                  setSimulateEmpty(false);
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xs transition-colors whitespace-nowrap ${
                  viewMode === 'upcoming' && !simulateEmpty
                    ? 'bg-[#354224] text-[#FAF6EE] shadow-2xs'
                    : 'text-[#4A4237] hover:text-[#1C1812]'
                }`}
              >
                Próximos Shows ({events.length})
              </button>
              <button
                onClick={() => {
                  setViewMode('past');
                  setSimulateEmpty(false);
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xs transition-colors whitespace-nowrap ${
                  viewMode === 'past' && !simulateEmpty
                    ? 'bg-[#354224] text-[#FAF6EE] shadow-2xs'
                    : 'text-[#4A4237] hover:text-[#1C1812]'
                }`}
              >
                <span className="flex items-center gap-1">
                  <History className="w-3 h-3" />
                  Histórico ({pastEvents.length})
                </span>
              </button>
            </div>

            {/* Empty State Simulation for Quality Check */}
            <button
              onClick={() => setSimulateEmpty(!simulateEmpty)}
              className="text-[11px] font-semibold text-[#705E44] hover:text-[#B84A2B] underline px-2 py-1"
              title="Testar como a mensagem amigável de sem eventos aparece no site"
            >
              {simulateEmpty ? 'Restaurar agenda' : 'Simular sem eventos'}
            </button>
          </div>
        </div>

        {/* Event Cards List */}
        {displayedEvents.length > 0 ? (
          <div className="space-y-4">
            {displayedEvents.map((evt) => {
              const { day, month } = getDayAndMonth(evt.date);
              const isPast = viewMode === 'past';

              return (
                <div
                  key={evt.id}
                  className={`bg-[#FAF6EE] border-2 ${
                    isPast ? 'border-[#C4AF8B]/60 opacity-80' : 'border-[#C7B088] hover:border-[#B84A2B]'
                  } rounded-sm p-5 sm:p-6 shadow-xs hover:shadow-sm transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group`}
                >
                  {/* Left: Date Badge & Details */}
                  <div className="flex items-start sm:items-center gap-5">
                    
                    {/* Big Date Badge */}
                    <div className="flex flex-col items-center justify-center w-16 h-18 bg-[#ECE0CD] border-2 border-[#C4AF8B] rounded-sm shrink-0 text-center shadow-2xs">
                      <span className="text-[11px] font-bold tracking-widest text-[#B84A2B] uppercase">
                        {month}
                      </span>
                      <span className="font-serif text-2xl font-black text-[#1C1812] leading-none my-0.5 font-mono tabular-nums">
                        {day}
                      </span>
                      <span className="text-[9px] text-[#705E44] font-mono">2026</span>
                    </div>

                    {/* Show Information */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1 text-xs">
                        <span className="font-bold text-[#B84A2B]">{evt.artist}</span>
                        <span className="text-[#C4AF8B]">·</span>
                        <span className="text-[#705E44] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#354224]" />
                          {evt.time}h
                        </span>
                      </div>

                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1812] group-hover:text-[#B84A2B] transition-colors">
                        {evt.title}
                      </h4>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#574C3D] mt-2">
                        <span className="flex items-center gap-1 font-semibold text-[#354224]">
                          <MapPin className="w-3.5 h-3.5 text-[#B84A2B]" />
                          {evt.venue}
                        </span>
                        <span className="text-[#C4AF8B]">·</span>
                        <span>{evt.city}, {evt.state}</span>
                      </div>

                      {evt.description && (
                        <p className="text-xs text-[#705E44] mt-2 max-w-xl">
                          {evt.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Ticket Action Status */}
                  <div className="flex items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[#C4AF8B]/40 shrink-0">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-xs uppercase tracking-wider ${
                        evt.ticketStatus === 'Entrada Gratuita'
                          ? 'bg-[#354224]/15 text-[#354224] border border-[#354224]/30'
                          : evt.ticketStatus === 'Esgotado'
                          ? 'bg-[#705E44]/15 text-[#705E44] border border-[#705E44]/30'
                          : 'bg-[#DCA427]/20 text-[#8C6207] border border-[#DCA427]/40'
                      }`}
                    >
                      {evt.ticketStatus}
                    </span>

                    {evt.ticketUrl && evt.ticketUrl !== '#' && evt.ticketStatus !== 'Esgotado' ? (
                      <a
                        href={evt.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#B84A2B] hover:bg-[#96371D] rounded-sm transition-colors shadow-2xs whitespace-nowrap"
                      >
                        <Ticket className="w-3.5 h-3.5" />
                        <span>Garantir Ingresso</span>
                      </a>
                    ) : (
                      <span className="text-xs text-[#705E44] font-medium italic">
                        {isPast ? 'Show realizado' : 'Informações na bilheteria local'}
                      </span>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* Mensagem amigável quando não houver eventos agendados */
          <div className="bg-[#ECE0CD]/75 border-2 border-[#C4AF8B] rounded-sm p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-xs relative">
            <CornerOrnament position="top-left" color="#B84A2B" />
            <CornerOrnament position="bottom-right" color="#354224" />

            <div className="w-14 h-14 rounded-full bg-[#FAF6EE] border-2 border-[#C4AF8B] flex items-center justify-center mx-auto mb-4 text-[#B84A2B] shadow-2xs">
              <PandeiroIcon size={28} color="#B84A2B" />
            </div>

            <h4 className="font-serif text-2xl font-bold text-[#1C1812] mb-2">
              Nenhum evento agendado no momento
            </h4>

            <p className="text-sm text-[#574C3D] leading-relaxed mb-6">
              O tambor está afinando e a cuíca descansando! Nossa equipe de curadoria está preparando as próximas datas da turnê com muito axé e novidades quentes.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#contato"
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#B84A2B] hover:bg-[#96371D] rounded-sm transition-colors shadow-2xs"
              >
                Receber aviso de novos shows
              </a>
              <button
                onClick={() => setSimulateEmpty(false)}
                className="px-4 py-2.5 text-xs font-semibold text-[#1C1812] bg-[#FAF6EE] hover:bg-white border border-[#C4AF8B] rounded-sm transition-colors"
              >
                Voltar à programação
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
