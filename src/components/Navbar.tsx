import React, { useState } from 'react';
import { Instagram, Music, Share2, Lock, Menu, X } from 'lucide-react';
import { AquiTemAxeBadge } from './BrazilianMotifs';

interface NavbarProps {
  onOpenShareModal: () => void;
  onOpenAdminModal: () => void;
  isAdminLoggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenShareModal,
  onOpenAdminModal,
  isAdminLoggedIn
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Quem Faz', href: '#quem-faz' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Artistas', href: '#artistas' },
    { label: 'Impacto', href: '#impacto' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#C7B088]/40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            className="flex items-baseline gap-2 group focus-visible:outline-2 focus-visible:outline-[#B84A2B]"
            aria-label="Festim Produtora Cultural - Início"
          >
            <span className="font-serif text-3xl font-extrabold tracking-tight text-[#B84A2B] group-hover:text-[#96371D] transition-colors">
              FESTIM
            </span>
            <span className="hidden sm:inline-block text-xs font-semibold tracking-wider uppercase text-[#354224]">
              PRODUTORA CULTURAL
            </span>
          </a>
          <div className="hidden lg:block">
            <AquiTemAxeBadge />
          </div>
        </div>

        {/* Zone 2: Clean single-line text nav links */}
        <nav
          className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#4A4237]"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap hover:text-[#B84A2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#B84A2B] after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Social Icons & Action CTAs */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Spotify link */}
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#354224] hover:text-[#1DB954] hover:bg-[#ECE0CD]/60 rounded-md transition-colors"
            title="Ouça a playlist Festim no Spotify"
            aria-label="Spotify da Festim"
          >
            <Music className="w-5 h-5" />
          </a>

          {/* Instagram link */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#354224] hover:text-[#E4405F] hover:bg-[#ECE0CD]/60 rounded-md transition-colors"
            title="Siga @festim.cultural no Instagram"
            aria-label="Instagram da Festim"
          >
            <Instagram className="w-5 h-5" />
          </a>

          {/* Share Preview Modal Trigger */}
          <button
            onClick={onOpenShareModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#382C1B] bg-[#ECE0CD] hover:bg-[#DFD1BB] border border-[#C4AF8B] rounded-sm transition-colors whitespace-nowrap"
            title="Ver prévia de compartilhamento (WhatsApp / Instagram)"
          >
            <Share2 className="w-3.5 h-3.5 text-[#B84A2B]" />
            <span>Prévia</span>
          </button>

          {/* Admin Panel Access Button */}
          <button
            onClick={onOpenAdminModal}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-sm transition-all whitespace-nowrap ${
              isAdminLoggedIn
                ? 'bg-[#354224] text-[#FAF6EE] hover:bg-[#28321B]'
                : 'bg-[#B84A2B] text-white hover:bg-[#96371D] shadow-xs'
            }`}
            title={isAdminLoggedIn ? 'Painel de Gestão (Conectado)' : 'Acesso de Gestão / Admin (Fases 2-4)'}
          >
            <Lock className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isAdminLoggedIn ? 'Painel Festim' : 'Produção'}</span>
            <span className="md:hidden">Admin</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#24211D] hover:bg-[#ECE0CD] rounded-md transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF6EE] border-b border-[#C7B088] px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-200">
          <div className="mb-3 px-2">
            <AquiTemAxeBadge />
          </div>
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#24211D] hover:bg-[#ECE0CD] rounded-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-[#C7B088]/50 flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-[#354224]"
              >
                <Music className="w-4 h-4 text-[#1DB954]" />
                <span>Spotify</span>
              </a>
              <span className="text-[#C7B088]">·</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-[#354224]"
              >
                <Instagram className="w-4 h-4 text-[#E4405F]" />
                <span>Instagram</span>
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShareModal();
              }}
              className="text-xs font-semibold text-[#B84A2B] underline"
            >
              Prévia de Links
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
