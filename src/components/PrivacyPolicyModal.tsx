import React from 'react';
import { X, ShieldCheck, Lock, Check } from 'lucide-react';
import { CornerOrnament, PandeiroIcon } from './BrazilianMotifs';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
    >
      <div className="bg-[#FAF6EE] border-2 border-[#C7B088] max-w-2xl w-full rounded-sm shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto kraft-border">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#705E44] hover:text-[#1C1812] hover:bg-[#ECE0CD] rounded-sm transition-colors"
          aria-label="Fechar Política de Privacidade"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#354224] mb-2">
          <ShieldCheck className="w-4 h-4 text-[#354224]" />
          <span>LGPD · Lei Geral de Proteção de Dados (Lei 13.709/2018)</span>
        </div>

        <h3 id="privacy-policy-title" className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1C1812] mb-4">
          Política de Privacidade Festim
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#4A4237] leading-relaxed border-t border-[#C4AF8B]/50 pt-4">
          <p>
            A <strong>Festim Produtora Cultural</strong> preza pela transparência, respeito e segurança no tratamento das informações dos visitantes, parceiros e artistas. Esta política sintetiza de forma direta como cuidamos dos seus dados.
          </p>

          <div className="space-y-3 bg-[#ECE0CD]/60 p-4 border border-[#C4AF8B] rounded-sm">
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#354224] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1C1812]">1. Coleta e Finalidade Específica:</strong>
                <p className="text-xs text-[#574C3D] mt-0.5">
                  Os dados fornecidos nos formulários de contato e inscrição de artistas (nome, e-mail, telefone, propostas) são utilizados exclusivamente para responder sua demanda e avaliar projetos culturais.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#354224] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1C1812]">2. Zero Cookies Invasivos:</strong>
                <p className="text-xs text-[#574C3D] mt-0.5">
                  Nosso contador de visitas é estritamente analítico e local, sem rastreamento comercial, sem venda de dados e sem cookies de publicidade de terceiros.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#354224] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1C1812]">3. Acesso Restrito à Produção (Fase 4):</strong>
                <p className="text-xs text-[#574C3D] mt-0.5">
                  As mensagens recebidas são armazenadas em área segura e acessíveis unicamente pelas contas de editor autenticadas da produtora.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#354224] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1C1812]">4. Seus Direitos (Revogação & Exclusão):</strong>
                <p className="text-xs text-[#574C3D] mt-0.5">
                  Você tem o direito de solicitar a alteração ou exclusão permanente de seus dados a qualquer momento enviando um e-mail para <span className="font-mono font-bold text-[#B84A2B]">privacidade@festim.art.br</span>.
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#705E44]">
            Última atualização: Outubro de 2026 · Salvador, Bahia / São Paulo, Brasil.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-[#C4AF8B]/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-[#B84A2B] hover:bg-[#96371D] rounded-sm transition-colors"
          >
            Entendido e Ciente
          </button>
        </div>

      </div>
    </div>
  );
};
