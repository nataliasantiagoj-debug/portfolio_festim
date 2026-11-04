import React from 'react';
import { BonfimRibbonsBanner, CordelSun, BerimbauIcon, PandeiroIcon, AquiTemAxeBadge } from './BrazilianMotifs';
import { SpotifyPlayer } from './SpotifyPlayer';
import { ArrowDown, Sparkles } from 'lucide-react';

interface ManifestoSectionProps {
  manifestoText?: string;
  onExploreClick: () => void;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({
  manifestoText,
  onExploreClick
}) => {
  return (
    <section id="manifesto" className="relative pt-8 pb-16 overflow-hidden paper-grain">
      {/* Decorative Top Ribbons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <BonfimRibbonsBanner />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Typographic Manifesto & Statement */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B84A2B]">
                  MANIFESTO FESTIM 2026
                </span>
                <span className="text-[#C7B088]">·</span>
                <span className="text-xs text-[#705E44] flex items-center gap-1 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#DCA427]" />
                  Música · Território · Calor
                </span>
              </div>

              {/* Display Headline with balanced wrapping */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1812] tracking-tight leading-[1.12] mb-6 text-balance">
                Onde a música brasileira faz{' '}
                <span className="italic text-[#B84A2B] underline decoration-[#DCA427] decoration-wavy decoration-2">
                  morada e festa
                </span>.
              </h1>

              {/* Manifesto Body Copy */}
              <div className="prose prose-stone text-[#3A332A] text-base sm:text-lg leading-relaxed space-y-4 mb-8">
                <p>
                  {manifestoText || (
                    <>
                      A <strong className="text-[#1C1812]">Festim</strong> nasce da certeza de que o palco é território sagrado de encontro. Somos uma produtora cultural independente dedicada à circulação de artistas brasileiros, à vibração dos tambores ancestrais e à força da música popular que move multidões com alegria e consciência.
                    </>
                  )}
                </p>
                <p className="text-base text-[#574C3D]">
                  Do Recôncavo Baiano às metrópoles, articulamos turnês, festivais de rua, mostras autorais e residências formativas com curadoria afetiva, rigor técnico e pagamento justo para toda a cadeia criativa.
                </p>
              </div>

              {/* Axé Trust Stamp & Cultural Markers */}
              <div className="flex flex-wrap items-center gap-4 py-4 border-y border-[#C4AF8B]/50 mb-8">
                <AquiTemAxeBadge />
                <div className="flex items-center gap-2 text-xs font-semibold text-[#354224]">
                  <PandeiroIcon size={20} color="#354224" />
                  <span>Curadoria Independente</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#B84A2B]">
                  <BerimbauIcon size={20} color="#B84A2B" />
                  <span>Salvador & São Paulo</span>
                </div>
              </div>
            </div>

            {/* Quick Action Navigation */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projetos"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreClick();
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#B84A2B] hover:bg-[#96371D] rounded-sm transition-all shadow-sm active:scale-98 whitespace-nowrap"
              >
                <span>Conheça os Projetos</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#agenda"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-[#1C1812] bg-[#FAF6EE] hover:bg-[#ECE0CD] border-2 border-[#C4AF8B] rounded-sm transition-colors whitespace-nowrap"
              >
                <span>Próximas Datas</span>
              </a>
            </div>
          </div>

          {/* Right: Media Column with Spotify Embed & Brazilian Scenography Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Visual Kraft Card with Duotone Art */}
            <div className="relative bg-[#ECE0CD] p-3 rounded-sm kraft-border">
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#354224] rounded-xs">
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80"
                  alt="Apresentação com tambores e iluminação cênica de festival de música brasileira"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover duotone-warm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between text-white text-xs mb-1">
                    <span className="font-bold tracking-wider uppercase text-[#DCA427]">Palco Aberto</span>
                    <span>Salvador · BA</span>
                  </div>
                  <p className="font-serif text-lg font-bold text-white">
                    Festival Festim 2026: O Encontro dos Tambores
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-[#705E44] italic mt-2 px-1">
                Foto: Mariana Vasconcelos / Acervo Festim · Salvador, Bahia
              </p>
            </div>

            {/* Embedded Spotify Player Component */}
            <SpotifyPlayer />
          </div>

        </div>

      </div>

      {/* Decorative Cordel Sun Watermark Motif */}
      <div className="absolute -top-10 -right-10 pointer-events-none opacity-10 text-[#B84A2B]">
        <CordelSun size={280} color="currentColor" />
      </div>
    </section>
  );
};
