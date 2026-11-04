import React from 'react';
import { TeamMember } from '../types';
import { Instagram, Users, Sparkles } from 'lucide-react';
import { CornerOrnament, PandeiroIcon } from './BrazilianMotifs';

interface TeamSectionProps {
  team: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
  return (
    <section id="quem-faz" className="py-16 bg-[#FAF6EE] relative paper-grain">
      
      {/* Tarja Mostarda - CRITICAL: TEXTO ESCURO (#1C1812) para contraste AA/AAA impecável */}
      <div className="w-full bg-[#DCA427] text-[#1C1812] py-4 px-4 sm:px-8 mb-12 shadow-sm relative overflow-hidden">
        <CornerOrnament position="top-left" color="#1C1812" />
        <CornerOrnament position="bottom-right" color="#B84A2B" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <PandeiroIcon size={24} color="#1C1812" />
            <h2 className="font-serif text-xl sm:text-2xl font-black tracking-wide text-[#1C1812]">
              Quem Faz Acontecer · Equipe & Bastidores
            </h2>
          </div>
          <span className="text-xs tracking-wider uppercase bg-[#1C1812] text-[#DCA427] px-3 py-1 rounded-sm font-bold shadow-2xs">
            Afeto · Rigor Técnico · Gestão
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B84A2B] mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>As mãos por trás do som</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1C1812] tracking-tight">
            Curadoria afetiva e engenharia de palco
          </h3>
          <p className="text-sm text-[#574C3D] mt-2">
            Profissionais com raízes na produção musical baiana e atuação em grandes festivais por todo o Brasil.
          </p>
        </div>

        {/* 3-column Team Profiles Grid as recommended in portfolio guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-[#FAF6EE] border-2 border-[#C7B088] rounded-sm p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo with Kraft Border & Duotone styling */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#ECE0CD] rounded-xs kraft-border mb-2.5">
                  <img
                    src={member.imageUrl}
                    alt={member.altText}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover duotone-warm transition-transform duration-500 hover:scale-103"
                  />
                </div>

                {/* Photo Credit mandatory below image */}
                <div className="flex items-center justify-between text-[11px] text-[#705E44] px-1 mb-4 italic">
                  <span>{member.photoCredit}</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#354224]">Equipe Fixa</span>
                </div>

                <h4 className="font-serif text-2xl font-bold text-[#1C1812]">
                  {member.name}
                </h4>

                <p className="text-xs font-bold uppercase tracking-wider text-[#B84A2B] mt-1 mb-3">
                  {member.role}
                </p>

                <p className="text-sm text-[#4A4237] leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Footer with social link */}
              <div className="mt-6 pt-4 border-t border-[#C4AF8B]/50 flex items-center justify-between text-xs">
                {member.instagram ? (
                  <a
                    href={`https://instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#354224] hover:text-[#B84A2B] font-semibold transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#E4405F]" />
                    <span>@{member.instagram}</span>
                  </a>
                ) : (
                  <span className="text-[#705E44]">Salvador · SP</span>
                )}
                <span className="text-[10px] text-[#705E44] uppercase font-mono">Festim</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
