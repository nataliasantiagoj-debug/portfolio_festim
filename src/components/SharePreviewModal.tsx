import React, { useState } from 'react';
import { X, Copy, Check, Share2, Smartphone, Send } from 'lucide-react';
import { ShareConfig } from '../types';
import { AquiTemAxeBadge, CordelSun } from './BrazilianMotifs';

interface SharePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ShareConfig;
}

export const SharePreviewModal: React.FC<SharePreviewModalProps> = ({
  isOpen,
  onClose,
  config
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'instagram' | 'twitter'>('whatsapp');

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin || 'https://festim.art.br');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-preview-title"
    >
      <div className="bg-[#FAF6EE] border-2 border-[#C7B088] max-w-2xl w-full rounded-sm shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto kraft-border">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#705E44] hover:text-[#1C1812] hover:bg-[#ECE0CD] rounded-sm transition-colors"
          aria-label="Fechar simulador de compartilhamento"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B84A2B] mb-2">
          <Share2 className="w-4 h-4 text-[#B84A2B]" />
          <span>Simulador de Metadados Sociais (OpenGraph)</span>
        </div>

        <h3 id="share-preview-title" className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1C1812] mb-2">
          Prévia de Compartilhamento
        </h3>
        <p className="text-xs text-[#574C3D] mb-6">
          Veja exatamente como o card e a bandeira <em>“Aqui tem axé”</em> aparecem quando o link da Festim é enviado nos aplicativos.
        </p>

        {/* Platform Selector Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-[#C4AF8B]/50 pb-3">
          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xs transition-colors flex items-center gap-1.5 ${
              activeTab === 'whatsapp'
                ? 'bg-[#25D366] text-white shadow-2xs'
                : 'bg-[#ECE0CD] text-[#4A4237] hover:bg-[#DFD1BB]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>WhatsApp Preview</span>
          </button>

          <button
            onClick={() => setActiveTab('instagram')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xs transition-colors flex items-center gap-1.5 ${
              activeTab === 'instagram'
                ? 'bg-[#E4405F] text-white shadow-2xs'
                : 'bg-[#ECE0CD] text-[#4A4237] hover:bg-[#DFD1BB]'
            }`}
          >
            <span>Instagram Direct Preview</span>
          </button>

          <button
            onClick={() => setActiveTab('twitter')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xs transition-colors flex items-center gap-1.5 ${
              activeTab === 'twitter'
                ? 'bg-[#1D9BF0] text-white shadow-2xs'
                : 'bg-[#ECE0CD] text-[#4A4237] hover:bg-[#DFD1BB]'
            }`}
          >
            <span>X / Twitter Card</span>
          </button>
        </div>

        {/* WhatsApp Preview Box */}
        {activeTab === 'whatsapp' && (
          <div className="bg-[#EFEAE2] p-4 sm:p-6 rounded-md border border-[#D1D7DB] max-w-md mx-auto shadow-sm">
            <div className="text-[10px] text-center text-[#667781] mb-2 font-mono">
              Hoje · WhatsApp Web / App
            </div>

            <div className="bg-[#DCF8C6] p-2.5 rounded-lg shadow-xs max-w-sm ml-auto border border-[#C5E1A5]">
              <div className="bg-[#FAF6EE] rounded-md overflow-hidden border border-[#D9D9D9]">
                
                {/* Visual Banner Preview with "Aqui tem axé" */}
                <div className="relative aspect-16/9 bg-[#B84A2B] overflow-hidden flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B84A2B] via-[#96371D] to-[#354224] opacity-90"></div>
                  <div className="relative text-center z-10">
                    <AquiTemAxeBadge className="mb-2 shadow-md" />
                    <h5 className="font-serif text-white font-black text-lg tracking-tight">
                      FESTIM CULTURAL
                    </h5>
                    <p className="text-[11px] text-[#DCA427] font-semibold tracking-wide">
                      Música Brasileira · Festivais · Axé
                    </p>
                  </div>
                  <div className="absolute bottom-1 right-1 opacity-20 text-white">
                    <CordelSun size={80} color="currentColor" />
                  </div>
                </div>

                <div className="p-3 bg-[#F0F2F5]">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-[#667781]">
                    festim.art.br
                  </p>
                  <p className="font-bold text-xs text-[#111B21] leading-tight line-clamp-1 mt-0.5">
                    {config.title}
                  </p>
                  <p className="text-[11px] text-[#667781] line-clamp-2 mt-1 leading-normal">
                    {config.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-[#667781] mt-1.5 px-1">
                <span>{config.hashtag}</span>
                <span className="flex items-center gap-0.5 font-mono">15:24 ✓✓</span>
              </div>
            </div>
          </div>
        )}

        {/* Instagram Direct Preview Box */}
        {activeTab === 'instagram' && (
          <div className="bg-[#262626] p-4 sm:p-6 rounded-md border border-[#363636] max-w-md mx-auto shadow-sm text-white">
            <div className="text-[10px] text-center text-zinc-400 mb-2 font-mono">
              Instagram Direct · Mensagem
            </div>

            <div className="bg-[#363636] p-3 rounded-2xl max-w-sm ml-auto border border-zinc-700">
              <div className="rounded-xl overflow-hidden bg-black/40 border border-zinc-700">
                <div className="aspect-16/9 bg-[#B84A2B] flex items-center justify-center p-4 relative">
                  <div className="relative text-center">
                    <AquiTemAxeBadge className="mb-2" />
                    <p className="font-serif text-white font-bold text-base">Festim Produções</p>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-[10px] text-zinc-400 uppercase font-mono">festim.art.br</p>
                  <p className="font-semibold text-xs text-white line-clamp-1">{config.title}</p>
                  <p className="text-[11px] text-zinc-300 line-clamp-2 mt-0.5">{config.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Twitter Card Preview Box */}
        {activeTab === 'twitter' && (
          <div className="bg-black p-4 sm:p-6 rounded-md border border-zinc-800 max-w-md mx-auto shadow-sm text-white">
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <div className="aspect-16/9 bg-[#B84A2B] flex items-center justify-center p-4 relative">
                <div className="text-center">
                  <AquiTemAxeBadge className="mb-2" />
                  <p className="font-serif text-white font-bold text-lg">Festim · Circulação Musical</p>
                </div>
              </div>
              <div className="p-3">
                <p className="text-[11px] text-zinc-500 font-mono">festim.art.br</p>
                <p className="font-bold text-xs text-white mt-0.5">{config.title}</p>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{config.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Meta Configuration Inspector */}
        <div className="mt-6 pt-4 border-t border-[#C4AF8B]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-[#705E44]">
            <span>Metadados ativos: </span>
            <code className="bg-[#ECE0CD] px-1.5 py-0.5 rounded-xs font-mono text-[#1C1812]">
              og:title · og:description · og:image
            </code>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#1C1812] bg-[#FAF6EE] hover:bg-white border border-[#C4AF8B] rounded-sm transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copiado!' : 'Copiar Link'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-white bg-[#B84A2B] hover:bg-[#96371D] rounded-sm transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
