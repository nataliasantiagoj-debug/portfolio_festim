import React from 'react';

/**
 * Fita do Senhor do Bonfim da Bahia (Brazilian Ribbon)
 */
export const BonfimRibbon: React.FC<{
  colorClass: string;
  text?: string;
  className?: string;
}> = ({ colorClass, text = 'LEMBRANÇA DO SENHOR DO BONFIM DA BAHIA', className = '' }) => {
  return (
    <div
      className={`inline-flex items-center px-3 py-0.5 text-[10px] font-bold tracking-widest uppercase shadow-sm select-none border-y border-black/10 ${colorClass} ${className}`}
      style={{ letterSpacing: '0.18em' }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-white/70 mr-2 shrink-0"></span>
      <span className="truncate">{text}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-white/70 ml-2 shrink-0"></span>
    </div>
  );
};

/**
 * Multiple Bonfim Ribbons banner
 */
export const BonfimRibbonsBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 overflow-hidden py-1 ${className}`}>
      <BonfimRibbon colorClass="bg-[#2D7A4D] text-white" text="AQUI TEM AXÉ · FESTIM" />
      <BonfimRibbon colorClass="bg-[#DCA427] text-[#1C1812]" text="MÚSICA BRASILEIRA VIVA" />
      <BonfimRibbon colorClass="bg-[#B84A2B] text-white" text="LEMBRANÇA DO SENHOR DO BONFIM" />
      <BonfimRibbon colorClass="bg-[#2A5C8A] text-white" text="CULTURA POPULAR INDEPENDENTE" />
    </div>
  );
};

/**
 * Brazilian Woodcut (Cordel) Sun Motif
 */
export const CordelSun: React.FC<{ size?: number; className?: string; color?: string }> = ({
  size = 56,
  className = '',
  color = 'currentColor'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer rays */}
      <circle cx="50" cy="50" r="22" stroke={color} strokeWidth="3" fill="none" />
      <circle cx="50" cy="50" r="14" fill={color} fillOpacity="0.25" />
      <circle cx="50" cy="50" r="6" fill={color} />
      
      {/* Rays in 8 directions */}
      <path d="M50 8 L50 22 M50 78 L50 92" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M8 50 L22 50 M78 50 L92 50" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M20 20 L30 30 M70 70 L80 80" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M80 20 L70 30 M30 70 L20 80" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      
      {/* Intermediate artistic tick marks */}
      <circle cx="50" cy="15" r="2" fill={color} />
      <circle cx="85" cy="50" r="2" fill={color} />
      <circle cx="50" cy="85" r="2" fill={color} />
      <circle cx="15" cy="50" r="2" fill={color} />
    </svg>
  );
};

/**
 * Brazilian Percussion: Pandeiro SVG icon
 */
export const PandeiroIcon: React.FC<{ size?: number; className?: string; color?: string }> = ({
  size = 28,
  className = '',
  color = 'currentColor'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="2.5" />
      <circle cx="24" cy="24" r="12" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      {/* Platinelas (jingles) */}
      <circle cx="24" cy="6" r="2.5" fill={color} />
      <circle cx="42" cy="24" r="2.5" fill={color} />
      <circle cx="24" cy="42" r="2.5" fill={color} />
      <circle cx="6" cy="24" r="2.5" fill={color} />
      <circle cx="37" cy="11" r="2" fill={color} />
      <circle cx="11" cy="37" r="2" fill={color} />
    </svg>
  );
};

/**
 * Brazilian Berimbau SVG icon
 */
export const BerimbauIcon: React.FC<{ size?: number; className?: string; color?: string }> = ({
  size = 28,
  className = '',
  color = 'currentColor'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Verga (curved wood) */}
      <path d="M12 40 C 22 28, 22 18, 16 6" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Arame (wire string) */}
      <path d="M14 39 L 16 7" stroke={color} strokeWidth="1.2" strokeDasharray="2 1" opacity="0.7" />
      {/* Cabaça (gourd resonator) */}
      <ellipse cx="14" cy="30" rx="6" ry="7" fill={color} fillOpacity="0.85" />
      {/* Caxixi / Baqueta */}
      <path d="M26 18 L 38 28" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="32" r="3" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

/**
 * Stamp "Aqui Tem Axé"
 */
export const AquiTemAxeBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 bg-[#FAF6EE] text-[#B84A2B] border-2 border-[#B84A2B] font-bold text-xs uppercase tracking-wider shadow-sm select-none rounded-sm ${className}`}
      style={{ transform: 'rotate(-2deg)' }}
    >
      <span className="w-2 h-2 rounded-full bg-[#DCA427]"></span>
      <span>Aqui tem axé</span>
      <span className="text-[10px] text-[#354224]">✦</span>
    </div>
  );
};

/**
 * Corner ornaments for Tarjas & Sections
 */
export const CornerOrnament: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; color?: string }> = ({
  position,
  color = 'currentColor'
}) => {
  const rotation =
    position === 'top-left' ? '' :
    position === 'top-right' ? 'rotate-90' :
    position === 'bottom-right' ? 'rotate-180' : '-rotate-90';

  const positionClass =
    position === 'top-left' ? 'top-2 left-2' :
    position === 'top-right' ? 'top-2 right-2' :
    position === 'bottom-right' ? 'bottom-2 right-2' : 'bottom-2 left-2';

  return (
    <div className={`absolute ${positionClass} ${rotation} pointer-events-none opacity-25`} aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 2 L14 2 M2 2 L2 14" stroke={color} strokeWidth="2" />
        <circle cx="2" cy="2" r="1.5" fill={color} />
      </svg>
    </div>
  );
};
