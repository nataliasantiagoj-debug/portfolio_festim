import React from 'react';
import { Instagram, Music, ShieldCheck, Lock, Heart, ArrowUp } from 'lucide-react';
import { BonfimRibbonsBanner, PandeiroIcon, BerimbauIcon, CordelSun, AquiTemAxeBadge } from './BrazilianMotifs';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyPolicy,
  onOpenAdmin,
  isAdminLoggedIn
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1C1812] text-[#FAF6EE] relative overflow-hidden pt-12 pb-8 border-t-4 border-[#B84A2B]">
      
      {/* Decorative ribbons on top of footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 opacity-90">
        <BonfimRibbonsBanner />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl font-extrabold text-[#DCA427] tracking-tight">
                FESTIM
              </span>
              <AquiTemAxeBadge />
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Produtora cultural dedicada à circulação de música brasileira independente, fomento à percussão de terreiro e celebração dos ritmos populares com respeito aos trabalhadores da cultura.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-[#28321B] hover:bg-[#354224] text-[#FAF6EE] border border-white/10 rounded-sm transition-colors"
                aria-label="Spotify da Festim"
              >
                <Music className="w-4 h-4 text-[#1DB954]" />
                <span>Spotify Festim</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-[#28321B] hover:bg-[#354224] text-[#FAF6EE] border border-white/10 rounded-sm transition-colors"
                aria-label="Instagram da Festim"
              >
                <Instagram className="w-4 h-4 text-[#E4405F]" />
                <span>@festim.cultural</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-xs space-y-2">
            <p className="font-bold text-[#DCA427] uppercase tracking-wider mb-3">
              Mapa do Portfólio
            </p>
            <ul className="space-y-2 text-white/70">
              <li><a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a></li>
              <li><a href="#projetos" className="hover:text-white transition-colors">Deck de Projetos</a></li>
              <li><a href="#agenda" className="hover:text-white transition-colors">Agenda de Shows</a></li>
              <li><a href="#quem-faz" className="hover:text-white transition-colors">Quem Faz Acontecer</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#artistas" className="hover:text-white transition-colors">Artistas Interessados</a></li>
              <li><a href="#impacto" className="hover:text-white transition-colors">Impacto Gerado</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Institutional & LGPD */}
          <div className="md:col-span-4 text-xs space-y-3">
            <p className="font-bold text-[#DCA427] uppercase tracking-wider mb-2">
              Transparência & Bases
            </p>
            <p className="text-white/70 leading-relaxed">
              Salvador (Bahia) & São Paulo (SP) · Brasil
            </p>
            <p className="text-white/60 text-[11px]">
              E-mail: contato@festim.art.br
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenPrivacyPolicy}
                className="inline-flex items-center gap-1.5 text-xs text-[#DCA427] hover:text-[#E8B84D] underline"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Política de Privacidade (LGPD)</span>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-xs transition-colors"
              >
                <Lock className="w-3 h-3 text-[#DCA427]" />
                <span>{isAdminLoggedIn ? 'Painel de Gestão (Conectado)' : 'Acesso da Produção'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Festim Produtora Cultural. Feito com</span>
            <Heart className="w-3.5 h-3.5 text-[#B84A2B] fill-current" />
            <span>e axé para a música brasileira.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[#DCA427] hover:text-white transition-colors"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
