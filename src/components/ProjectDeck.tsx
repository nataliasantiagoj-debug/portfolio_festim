import React, { useState } from 'react';
import { Project } from '../types';
import { Sparkles, MapPin, Calendar, CheckCircle2, X, ExternalLink, SlidersHorizontal } from 'lucide-react';
import { CornerOrnament, PandeiroIcon } from './BrazilianMotifs';

interface ProjectDeckProps {
  projects: Project[];
}

export const ProjectDeck: React.FC<ProjectDeckProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterDuotone, setFilterDuotone] = useState<'all' | 'warm' | 'terracotta'>('all');

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'Festival', label: 'Festivais' },
    { id: 'Circuito', label: 'Circuitos de Rua' },
    { id: 'Turnê', label: 'Turnês & Shows' },
    { id: 'Oficina', label: 'Residências & Lab' }
  ];

  const filteredProjects = projects.filter((p) => {
    const categoryMatch = selectedCategory === 'all' || p.category === selectedCategory;
    const duotoneMatch = filterDuotone === 'all' || p.duotoneMode === filterDuotone;
    return categoryMatch && duotoneMatch;
  });

  return (
    <section id="projetos" className="py-16 bg-[#FAF6EE] relative paper-grain">
      
      {/* Tarja Terracota - Transição Vibrante */}
      <div className="w-full bg-[#B84A2B] text-white py-4 px-4 sm:px-8 mb-12 shadow-sm relative overflow-hidden">
        <CornerOrnament position="top-left" color="#FAF6EE" />
        <CornerOrnament position="bottom-right" color="#DCA427" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <PandeiroIcon size={24} color="#DCA427" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
              Deck de Projetos Culturais & Curadoria
            </h2>
          </div>
          <span className="text-xs tracking-wider uppercase bg-[#96371D] px-3 py-1 rounded-sm text-[#FAF6EE] font-semibold border border-white/20">
            Circulação Nacional · 2025/2026
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Intro & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#C4AF8B]/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#354224] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#DCA427]" />
              <span>Portfólio em Destaque</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1C1812] tracking-tight">
              Festivais, mostras e palcos que transformam
            </h3>
            <p className="text-sm text-[#574C3D] mt-2 max-w-2xl">
              Conheça as ações concebidas e executadas pelo Festim. Do planejamento logístico à cenografia e relações institucionais.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 p-1 bg-[#ECE0CD] border border-[#C4AF8B] rounded-sm">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-[#B84A2B] text-white shadow-2xs'
                      : 'text-[#4A4237] hover:text-[#1C1812] hover:bg-[#FAF6EE]/70'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Duotone Treatment toggle */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs text-[#705E44] bg-[#ECE0CD]/70 border border-[#C4AF8B]/60 rounded-sm">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#B84A2B]" />
              <span>Estilo Kraft</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-[#FAF6EE] border-2 border-[#C7B088] rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
            >
              {/* Image Frame with Kraft Border & Duotone styling */}
              <div className="p-3 bg-[#ECE0CD]/60 border-b border-[#C7B088]">
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#2D2A26] rounded-xs kraft-border">
                  <img
                    src={project.imageUrl}
                    alt={project.altText}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 ${
                      project.duotoneMode === 'terracotta' ? 'duotone-terracotta' : 'duotone-warm'
                    }`}
                  />
                  
                  {/* Category chip overlay */}
                  <div className="absolute top-3 left-3 bg-[#FAF6EE]/90 backdrop-blur-xs text-[#1C1812] border border-[#C4AF8B] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-xs shadow-2xs">
                    {project.category}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-[#1C1812]/80 text-[#FAF6EE] px-2.5 py-0.5 text-xs font-mono tabular-nums rounded-xs">
                    {project.year}
                  </div>
                </div>

                {/* Explicit Photo Credit & Alt text note below image as requested */}
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#705E44] px-1">
                  <span className="font-medium italic">{project.photoCredit}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#354224]">Acessível com Alt Text</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#705E44] mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B84A2B]" />
                    <span>{project.location}</span>
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-[#1C1812] group-hover:text-[#B84A2B] transition-colors leading-snug">
                    {project.title}
                  </h4>

                  <p className="text-xs font-medium text-[#354224] mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-[#4A4237] leading-relaxed line-clamp-3 mb-5">
                    {project.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 pt-3 border-t border-[#C4AF8B]/40 mb-6">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#2F2922]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#DCA427] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action button */}
                <div className="pt-2 border-t border-[#C4AF8B]/40 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B84A2B] hover:text-[#96371D] hover:underline"
                  >
                    <span>Ver Ficha Técnica Completa</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-mono text-[#705E44]">{project.category}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Project Detail Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className="bg-[#FAF6EE] border-2 border-[#C7B088] max-w-3xl w-full rounded-sm shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-[#705E44] hover:text-[#1C1812] hover:bg-[#ECE0CD] rounded-sm transition-colors"
              aria-label="Fechar modal de detalhes do projeto"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B84A2B] mb-2">
              <span>{selectedProject.category}</span>
              <span>·</span>
              <span className="font-mono">{selectedProject.year}</span>
            </div>

            <h3 id="modal-project-title" className="font-serif text-3xl font-extrabold text-[#1C1812] mb-1">
              {selectedProject.title}
            </h3>
            <p className="text-sm font-medium text-[#354224] mb-6">
              {selectedProject.subtitle}
            </p>

            <div className="aspect-16/9 w-full overflow-hidden bg-[#2D2A26] rounded-sm kraft-border mb-3">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.altText}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover duotone-warm"
              />
            </div>
            
            <p className="text-xs text-[#705E44] italic mb-6">
              {selectedProject.photoCredit}
            </p>

            <div className="space-y-4 text-sm text-[#3A332A] leading-relaxed mb-6">
              <p>{selectedProject.description}</p>
              
              <div className="p-4 bg-[#ECE0CD]/70 border border-[#C4AF8B] rounded-sm">
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#1C1812] mb-2">
                  Destaques & Impacto Direto
                </h5>
                <ul className="space-y-1.5">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#2F2922]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B84A2B]"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                <div>
                  <span className="text-[#705E44] block">Território de Realização:</span>
                  <span className="font-bold text-[#1C1812]">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="text-[#705E44] block">Realização e Curadoria:</span>
                  <span className="font-bold text-[#1C1812]">Festim Produtora Cultural</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-[#C4AF8B]/60">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#B84A2B] hover:bg-[#96371D] rounded-sm transition-colors"
              >
                Fechar Ficha
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
