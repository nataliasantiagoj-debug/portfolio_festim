import React, { useState } from 'react';
import { Play, Pause, ExternalLink, Disc3, Volume2, Sparkles } from 'lucide-react';
import { CornerOrnament, PandeiroIcon } from './BrazilianMotifs';

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  spotifyId: string;
}

const FEATURED_TRACKS: Track[] = [
  {
    id: '1',
    title: 'Toda Menina Baiana',
    artist: 'Gilberto Gil & Banda Festim',
    duration: '3:45',
    spotifyId: 'track/3yGkZ7F4r2X5aY8c'
  },
  {
    id: '2',
    title: 'Faraó (Divindade do Egito)',
    artist: 'Margareth Menezes & Cortejo Afro',
    duration: '4:12',
    spotifyId: 'track/1kL89W3xZvJpQ4'
  },
  {
    id: '3',
    title: 'Banho de Folhas',
    artist: 'Luedji Luna',
    duration: '3:58',
    spotifyId: 'track/6sPOy8h7kM2'
  },
  {
    id: '4',
    title: 'Playsom',
    artist: 'BaianaSystem',
    duration: '3:20',
    spotifyId: 'track/5uL112qwer7'
  }
];

export const SpotifyPlayer: React.FC = () => {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const activeTrack = FEATURED_TRACKS[activeTrackIndex];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative bg-[#ECE0CD]/85 border-2 border-[#C4AF8B] rounded-sm p-5 shadow-sm text-[#24211D]">
      <CornerOrnament position="top-left" color="#B84A2B" />
      <CornerOrnament position="bottom-right" color="#354224" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#C4AF8B]/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1DB954]/15 border border-[#1DB954]/40 flex items-center justify-center text-[#1DB954]">
            <Disc3 className={`w-5 h-5 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#354224]">Playlist Oficial Festim</span>
              <span className="inline-flex items-center gap-1 text-[10px] text-[#B84A2B] font-semibold">
                <Sparkles className="w-3 h-3" />
                Axé & MPB
              </span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#1C1812] leading-tight">
              Sons do Nosso Terreiro
            </h4>
          </div>
        </div>

        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1C1812] bg-[#FAF6EE] hover:bg-white border border-[#C4AF8B] rounded-sm transition-colors"
        >
          <span>Ouvir no Spotify</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#1DB954]" />
        </a>
      </div>

      {/* Embedded Spotify Player Preview Widget */}
      <div className="mt-4 pt-1 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        
        {/* Left: Active Player Card */}
        <div className="md:col-span-7 bg-[#FAF6EE] border border-[#C4AF8B] p-4 rounded-sm shadow-2xs">
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 text-xs text-[#354224] font-medium">
              <PandeiroIcon size={18} color="#B84A2B" />
              <span>Faixa em destaque:</span>
            </div>
            <span className="text-[11px] font-mono tabular-nums text-[#705E44]">{activeTrack.duration}</span>
          </div>

          <div className="mb-4">
            <p className="font-serif font-bold text-base text-[#1C1812]">{activeTrack.title}</p>
            <p className="text-xs text-[#705E44]">{activeTrack.artist}</p>
          </div>

          {/* Player controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-[#B84A2B] hover:bg-[#96371D] text-white flex items-center justify-center transition-transform active:scale-95 shadow-xs"
              aria-label={isPlaying ? 'Pausar áudio' : 'Reproduzir áudio'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>

            <div className="flex-1">
              <div className="w-full bg-[#E2D5BE] h-1.5 rounded-full overflow-hidden">
                <div
                  className={`bg-[#1DB954] h-full transition-all duration-300 ${isPlaying ? 'w-2/3' : 'w-1/4'}`}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] text-[#705E44] mt-1 font-mono tabular-nums">
                <span>{isPlaying ? '01:42' : '00:00'}</span>
                <span>{activeTrack.duration}</span>
              </div>
            </div>

            <Volume2 className="w-4 h-4 text-[#705E44] shrink-0" />
          </div>
        </div>

        {/* Right: Tracklist selection */}
        <div className="md:col-span-5 flex flex-col space-y-1.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#705E44] mb-1">
            Repertório Curado
          </p>
          {FEATURED_TRACKS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTrackIndex(idx);
                setIsPlaying(true);
              }}
              className={`w-full text-left px-3 py-2 text-xs rounded-sm transition-colors flex items-center justify-between ${
                activeTrackIndex === idx
                  ? 'bg-[#B84A2B] text-white font-semibold'
                  : 'bg-[#FAF6EE]/80 hover:bg-[#FAF6EE] text-[#24211D] border border-transparent hover:border-[#C4AF8B]'
              }`}
            >
              <div className="truncate mr-2">
                <span className="font-mono tabular-nums mr-2 text-[10px] opacity-75">0{idx + 1}.</span>
                <span className="truncate">{t.title}</span>
              </div>
              <span className={`text-[10px] font-mono tabular-nums shrink-0 ${activeTrackIndex === idx ? 'text-white/80' : 'text-[#705E44]'}`}>
                {t.duration}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[#C4AF8B]/50 flex items-center justify-between text-[11px] text-[#705E44]">
        <span>Curadoria por Natália Santiago · Atualizada para a temporada 2026</span>
        <span className="font-semibold text-[#354224]">Spotify Embed V1</span>
      </div>
    </div>
  );
};
