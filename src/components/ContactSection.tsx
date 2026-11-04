import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Instagram, Music } from 'lucide-react';
import { CornerOrnament, PandeiroIcon, BerimbauIcon, AquiTemAxeBadge } from './BrazilianMotifs';

interface ContactSectionProps {
  onSendMessage: (msg: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    lgpdConsent: boolean;
  }) => void;
  onOpenPrivacyPolicy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onSendMessage,
  onOpenPrivacyPolicy
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Contratação de Shows & Festivais');
  const [message, setMessage] = useState('');
  const [lgpdConsent, setLgpdConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lgpdConsent) return;

    onSendMessage({
      name,
      email,
      phone,
      subject,
      message,
      lgpdConsent
    });

    setSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setLgpdConsent(false);
  };

  return (
    <section id="contato" className="py-16 bg-[#FAF6EE] relative paper-grain">
      
      {/* Tarja Terracota */}
      <div className="w-full bg-[#B84A2B] text-white py-4 px-4 sm:px-8 mb-12 shadow-sm relative overflow-hidden">
        <CornerOrnament position="top-left" color="#FAF6EE" />
        <CornerOrnament position="bottom-right" color="#DCA427" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <PandeiroIcon size={24} color="#DCA427" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
              Contato & Produção Festim
            </h2>
          </div>
          <span className="text-xs tracking-wider uppercase bg-[#96371D] text-[#FAF6EE] px-3 py-1 rounded-sm font-semibold border border-white/20">
            Vamos Criar Juntos
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Cultural Presence */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <AquiTemAxeBadge />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1C1812] tracking-tight mb-4">
                Fale com quem vive a música
              </h3>

              <p className="text-base text-[#4A4237] leading-relaxed mb-8">
                Quer levar um dos nossos festivais para sua cidade, propor patrocínio ou orçar uma direção de produção especializada? Nossa porta está sempre aberta.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-3.5 bg-[#ECE0CD]/75 border border-[#C4AF8B] rounded-sm">
                  <Mail className="w-5 h-5 text-[#B84A2B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#705E44]">E-mail Institucional</span>
                    <p className="text-sm font-bold text-[#1C1812]">
                      {import.meta.env.VITE_CONTACT_EMAIL || 'contato@festim.art.br'}
                    </p>
                    <p className="text-xs text-[#574C3D]">Curadoria: curadoria@festim.art.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-[#ECE0CD]/75 border border-[#C4AF8B] rounded-sm">
                  <Phone className="w-5 h-5 text-[#354224] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#705E44]">WhatsApp / Produção</span>
                    <p className="text-sm font-bold text-[#1C1812]">
                      {import.meta.env.VITE_CONTACT_PHONE || '+55 (71) 99234-8812'}
                    </p>
                    <p className="text-xs text-[#574C3D]">Atendimento de Segunda a Sexta, das 10h às 19h</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-[#ECE0CD]/75 border border-[#C4AF8B] rounded-sm">
                  <MapPin className="w-5 h-5 text-[#B84A2B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#705E44]">Bases Operacionais</span>
                    <p className="text-sm font-bold text-[#1C1812]">Salvador (BA) & São Paulo (SP)</p>
                    <p className="text-xs text-[#574C3D]">Atuação e circulação por todo o território nacional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels lockup */}
            <div className="pt-4 border-t border-[#C4AF8B]/50 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#1C1812] bg-[#ECE0CD] hover:bg-[#DFD1BB] border border-[#C4AF8B] rounded-sm transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#E4405F]" />
                <span>@festim.cultural</span>
              </a>

              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#1C1812] bg-[#ECE0CD] hover:bg-[#DFD1BB] border border-[#C4AF8B] rounded-sm transition-colors"
              >
                <Music className="w-4 h-4 text-[#1DB954]" />
                <span>Spotify Playlist</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form with LGPD Consent */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF6EE] border-2 border-[#C7B088] rounded-sm p-6 sm:p-8 shadow-xs relative kraft-border">
              <CornerOrnament position="top-right" color="#B84A2B" />

              <h4 className="font-serif text-2xl font-bold text-[#1C1812] mb-1">
                Envie sua Mensagem
              </h4>
              <p className="text-xs text-[#574C3D] mb-6">
                Recebemos sua mensagem diretamente na caixa de atendimento da produção com total privacidade.
              </p>

              {submitted ? (
                <div className="bg-[#ECE0CD] border-2 border-[#354224] p-6 rounded-sm text-center">
                  <div className="w-12 h-12 rounded-full bg-[#354224] text-white flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h5 className="font-serif text-xl font-bold text-[#1C1812] mb-1">
                    Mensagem Enviada com Muito Axé!
                  </h5>
                  <p className="text-xs text-[#4A4237] leading-relaxed mb-4">
                    Recebemos seu contato e registramos o seu consentimento. Retornaremos em até 48 horas úteis.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-bold text-[#1C1812] bg-[#FAF6EE] border border-[#C4AF8B] rounded-sm hover:bg-white"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#1C1812] uppercase tracking-wider mb-1">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Clara Ribeiro"
                        className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2.5 rounded-sm text-[#1C1812] focus:border-[#B84A2B] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1C1812] uppercase tracking-wider mb-1">
                        Seu E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="clara@exemplo.com.br"
                        className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2.5 rounded-sm text-[#1C1812] focus:border-[#B84A2B] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#1C1812] uppercase tracking-wider mb-1">
                        Telefone / WhatsApp (com DDD)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(71) 98888-0000"
                        className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2.5 rounded-sm text-[#1C1812] focus:border-[#B84A2B] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1C1812] uppercase tracking-wider mb-1">
                        Assunto do Contato *
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2.5 rounded-sm text-[#1C1812] focus:border-[#B84A2B] outline-none"
                      >
                        <option value="Contratação de Shows & Festivais">Contratação de Shows & Festivais</option>
                        <option value="Parceria Cultural ou Patrocínio">Parceria Cultural ou Patrocínio</option>
                        <option value="Imprensa e Assessoria">Imprensa e Assessoria</option>
                        <option value="Dúvidas sobre Ingressos e Agenda">Dúvidas sobre Ingressos e Agenda</option>
                        <option value="Outro Assunto">Outro Assunto</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1812] uppercase tracking-wider mb-1">
                      Sua Mensagem *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Conte um pouco sobre sua ideia, praça pretendida ou demanda..."
                      className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2.5 rounded-sm text-[#1C1812] focus:border-[#B84A2B] outline-none"
                    ></textarea>
                  </div>

                  {/* Explicit LGPD Consent Checkbox */}
                  <div className="p-3 bg-[#ECE0CD]/60 border border-[#C4AF8B] rounded-sm">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        required
                        checked={lgpdConsent}
                        onChange={(e) => setLgpdConsent(e.target.checked)}
                        className="mt-0.5 rounded-xs text-[#B84A2B] focus:ring-[#B84A2B]"
                      />
                      <span className="text-[11px] text-[#4A4237] leading-relaxed">
                        Concordo com o tratamento dos meus dados exclusivamente para retorno deste atendimento pela Festim, em conformidade com a Lei Geral de Proteção de Dados (LGPD).{' '}
                        <button
                          type="button"
                          onClick={onOpenPrivacyPolicy}
                          className="text-[#B84A2B] font-bold underline hover:text-[#96371D]"
                        >
                          Ler Política de Privacidade
                        </button>.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[#705E44] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#354224]" />
                      Dados protegidos e restritos
                    </span>

                    <button
                      type="submit"
                      disabled={!lgpdConsent}
                      className="px-6 py-2.5 font-bold text-white bg-[#B84A2B] hover:bg-[#96371D] disabled:opacity-50 disabled:cursor-not-allowed rounded-sm transition-all shadow-xs flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enviar Mensagem</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
