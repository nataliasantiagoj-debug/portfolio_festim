import React, { useState } from 'react';
import { ARTIST_CHECKLIST } from '../data/initialData';
import { Send, CheckCircle2, FileText, Music, Sparkles, X, ExternalLink } from 'lucide-react';
import { CornerOrnament, PandeiroIcon, BerimbauIcon, AquiTemAxeBadge } from './BrazilianMotifs';

export const ArtistSection: React.FC = () => {
  const [tallyModalOpen, setTallyModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form state for in-app Tally emulation
  const [artistName, setArtistName] = useState('');
  const [genre, setGenre] = useState('');
  const [links, setLinks] = useState('');
  const [city, setCity] = useState('');
  const [pressKitUrl, setPressKitUrl] = useState('');

  const handleSubmitTally = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep feedback visible
    }, 2000);
  };

  return (
    <section id="artistas" className="py-16 bg-[#FAF6EE] relative paper-grain">
      
      {/* Tarja Oliva */}
      <div className="w-full bg-[#354224] text-[#FAF6EE] py-4 px-4 sm:px-8 mb-12 shadow-sm relative overflow-hidden">
        <CornerOrnament position="top-left" color="#DCA427" />
        <CornerOrnament position="bottom-right" color="#B84A2B" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <BerimbauIcon size={24} color="#DCA427" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
              Artistas Interessados · Conexão & Circulação
            </h2>
          </div>
          <span className="text-xs tracking-wider uppercase bg-[#28321B] text-[#DCA427] px-3 py-1 rounded-sm font-semibold border border-[#DCA427]/30">
            Edital Aberto · Temporada 2026/2027
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Requirements & Checklist */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B84A2B] mb-2">
                <Music className="w-3.5 h-3.5 text-[#DCA427]" />
                <span>Chamada de Projetos</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1C1812] tracking-tight mb-4">
                Quer tocar nos festivais e circuitos da Festim?
              </h3>

              <p className="text-base text-[#4A4237] leading-relaxed mb-8">
                Nossa curadoria recebe propostas de artistas solo, bandas, coletivos percussivos e orquestras populares de todo o território brasileiro durante o ano todo. Buscamos originalidade, pulso cênico e afeto.
              </p>

              {/* Checklist grid */}
              <div className="space-y-4 mb-8">
                <h4 className="font-serif text-lg font-bold text-[#1C1812] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#B84A2B]" />
                  <span>Materiais Necessários para Avaliação:</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ARTIST_CHECKLIST.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#ECE0CD]/80 border border-[#C4AF8B] rounded-sm p-4 shadow-2xs"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#354224] shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-xs text-[#1C1812] uppercase tracking-wider">
                            {item.title}
                          </h5>
                          <p className="text-xs text-[#574C3D] mt-1 leading-normal">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tally Trigger & Direct Form Button */}
            <div className="pt-4 border-t border-[#C4AF8B]/50 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setTallyModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-[#FAF6EE] bg-[#B84A2B] hover:bg-[#96371D] rounded-sm transition-all shadow-sm active:scale-98 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#DCA427]" />
                <span>Inscrever Meu Projeto (Formulário Tally)</span>
              </button>

              <a
                href="https://tally.so"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#354224] hover:text-[#B84A2B] underline"
              >
                <span>Abrir Tally oficial em nova aba</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Kraft Card with Callout */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-[#ECE0CD] border-2 border-[#C4AF8B] rounded-sm p-6 kraft-border shadow-xs relative">
              <CornerOrnament position="top-right" color="#B84A2B" />
              
              <div className="mb-4">
                <AquiTemAxeBadge />
              </div>

              <h4 className="font-serif text-2xl font-bold text-[#1C1812] mb-3">
                Compromissos Festim com o Músico
              </h4>

              <div className="space-y-3 text-sm text-[#4A4237] leading-relaxed mb-6">
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B84A2B] shrink-0 mt-2"></span>
                  <span><strong>Cachê garantido e pontual:</strong> sem pagamentos com promessas ou atrasos que desrespeitam o trabalhador da cultura.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#354224] shrink-0 mt-2"></span>
                  <span><strong>Rider técnico respeitado:</strong> som de primeira linha, engenheiro de áudio dedicado e tempo hábil para passagem de som.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#DCA427] shrink-0 mt-2"></span>
                  <span><strong>Divulgação afetiva e assessoria:</strong> fotos profissionais do show entregues ao artista com direitos liberados.</span>
                </p>
              </div>

              <div className="p-4 bg-[#FAF6EE] border border-[#C4AF8B] rounded-sm text-xs text-[#705E44]">
                <p className="font-semibold text-[#1C1812] mb-1">Dúvidas sobre o edital?</p>
                <p>Escreva para <span className="font-mono text-[#B84A2B]">curadoria@festim.art.br</span> com o assunto <em>[Proposta Musical 2026]</em>.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Tally In-App Integration Modal */}
      {tallyModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tally-modal-title"
        >
          <div className="bg-[#FAF6EE] border-2 border-[#C7B088] max-w-xl w-full rounded-sm shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => {
                setTallyModalOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-4 right-4 p-2 text-[#705E44] hover:text-[#1C1812] hover:bg-[#ECE0CD] rounded-sm transition-colors"
              aria-label="Fechar formulário do Tally"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-[#ECE0CD] text-[#382C1B] border border-[#C4AF8B] px-2 py-0.5 rounded-xs">
                Tally Integration · Festim
              </span>
            </div>

            <h3 id="tally-modal-title" className="font-serif text-2xl font-bold text-[#1C1812] mb-2">
              Inscrição de Artista / Grupo Musical
            </h3>
            <p className="text-xs text-[#574C3D] mb-6">
              Preencha os dados abaixo. Nossa curadoria analisa todas as propostas mensalmente.
            </p>

            {submitted ? (
              <div className="bg-[#ECE0CD] border-2 border-[#354224] p-6 rounded-sm text-center">
                <div className="w-12 h-12 rounded-full bg-[#354224] text-white flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#1C1812] mb-2">
                  Proposta Recebida com Sucesso!
                </h4>
                <p className="text-xs text-[#4A4237] leading-relaxed mb-4">
                  Obrigado por compartilhar seu som conosco. Se seu projeto for selecionado para a próxima etapa da temporada, entraremos em contato pelo e-mail e WhatsApp informados.
                </p>
                <button
                  onClick={() => {
                    setTallyModalOpen(false);
                    setSubmitted(false);
                  }}
                  className="px-5 py-2 text-xs font-bold text-white bg-[#B84A2B] rounded-sm hover:bg-[#96371D]"
                >
                  Concluir
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitTally} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#1C1812] uppercase tracking-wider mb-1">
                    Nome do Artista ou Banda *
                  </label>
                  <input
                    type="text"
                    required
                    value={artistName}
                    onChange={(e) => setArtistName(e.target.value)}
                    placeholder="Ex: Orquestra de Pandeiros da Bahia"
                    className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2.5 rounded-sm text-[#1C1812] focus:border-[#B84A2B] outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#1C1812] uppercase tracking-wider mb-1">
                      Gênero Musical *
                    </label>
                    <input
                      type="text"
                      required
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                      placeholder="Ex: Axé, MPB, Afrobeats"
                      className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2.5 rounded-sm text-[#1C1812] focus:border-[#B84A2B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#1C1812] uppercase tracking-wider mb-1">
                      Cidade e Estado Base *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Salvador, BA"
                      className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2.5 rounded-sm text-[#1C1812] focus:border-[#B84A2B] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#1C1812] uppercase tracking-wider mb-1">
                    Links de Streaming ou Vídeo ao Vivo (Spotify, YouTube, Instagram) *
                  </label>
                  <input
                    type="url"
                    required
                    value={links}
                    onChange={(e) => setLinks(e.target.value)}
                    placeholder="https://open.spotify.com/artist/... ou YouTube"
                    className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2.5 rounded-sm text-[#1C1812] focus:border-[#B84A2B] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1C1812] uppercase tracking-wider mb-1">
                    Link do Press Kit / Rider Técnico (Drive, Dropbox ou Site) *
                  </label>
                  <input
                    type="url"
                    required
                    value={pressKitUrl}
                    onChange={(e) => setPressKitUrl(e.target.value)}
                    placeholder="https://drive.google.com/..."
                    className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2.5 rounded-sm text-[#1C1812] focus:border-[#B84A2B] outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] text-[#705E44]">Formulário com tecnologia Tally</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setTallyModalOpen(false)}
                      className="px-4 py-2 font-semibold text-[#574C3D] hover:bg-[#ECE0CD] rounded-sm"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 font-bold text-white bg-[#B84A2B] hover:bg-[#96371D] rounded-sm transition-colors flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enviar Proposta</span>
                    </button>
                  </div>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
