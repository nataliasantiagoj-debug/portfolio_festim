import React, { useState, useEffect } from 'react';
import {
  Project,
  EventItem,
  Testimonial,
  TeamMember,
  ImpactMetric,
  ContactMessage,
  ShareConfig,
  VisitorAnalytics
} from '../types';
import {
  Lock,
  LogOut,
  Calendar,
  Layers,
  MessageSquare,
  Users,
  TrendingUp,
  BarChart2,
  Share2,
  Mail,
  Plus,
  Trash2,
  Check,
  AlertCircle,
  Clock,
  Eye,
  Sliders,
  Sparkles,
  X
} from 'lucide-react';
import { CornerOrnament, PandeiroIcon, AquiTemAxeBadge } from './BrazilianMotifs';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  // State and setters passed from App
  isLoggedIn: boolean;
  onLogin: (email: string, pass: string) => boolean;
  onLogout: () => void;
  currentUserEmail: string;

  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;

  events: EventItem[];
  setEvents: React.Dispatch<React.SetStateAction<EventItem[]>>;

  testimonials: Testimonial[];
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;

  team: TeamMember[];
  setTeam: React.Dispatch<React.SetStateAction<TeamMember[]>>;

  metrics: ImpactMetric[];
  setMetrics: React.Dispatch<React.SetStateAction<ImpactMetric[]>>;

  contactMessages: ContactMessage[];
  visitorAnalytics: VisitorAnalytics;

  shareConfig: ShareConfig;
  setShareConfig: React.Dispatch<React.SetStateAction<ShareConfig>>;

  manifestoText: string;
  setManifestoText: (text: string) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  isLoggedIn,
  onLogin,
  onLogout,
  currentUserEmail,
  projects,
  setProjects,
  events,
  setEvents,
  testimonials,
  setTestimonials,
  team,
  setTeam,
  metrics,
  setMetrics,
  contactMessages,
  visitorAnalytics,
  shareConfig,
  setShareConfig,
  manifestoText,
  setManifestoText
}) => {
  // Auth Form State - carrega e-mails autorizados do ambiente
  const configuredEmails = (import.meta.env.VITE_ADMIN_EMAILS as string | undefined)?.split(',').map((e) => e.trim()) || [
    'nataliasantiagoj@gmail.com',
    'curadoria@festim.art.br'
  ];
  const [loginEmail, setLoginEmail] = useState(configuredEmails[0] || '');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');

  // Admin Active Tab
  const [activeTab, setActiveTab] = useState<
    'agenda' | 'projects' | 'testimonials' | 'team' | 'impact' | 'manifesto' | 'messages' | 'analytics' | 'share'
  >('agenda');

  // New Event Form State
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventArtist, setNewEventArtist] = useState('');
  const [newEventDate, setNewEventDate] = useState('2026-12-20');
  const [newEventTime, setNewEventTime] = useState('21:00');
  const [newEventCity, setNewEventCity] = useState('Salvador');
  const [newEventState, setNewEventState] = useState('BA');
  const [newEventVenue, setNewEventVenue] = useState('Teatro Castro Alves');
  const [newEventTicketUrl, setNewEventTicketUrl] = useState('https://bileto.sympla.com.br');
  const [newEventStatus, setNewEventStatus] = useState<EventItem['ticketStatus']>('Ingressos à venda');

  // New Testimonial State
  const [newTestQuote, setNewTestQuote] = useState('');
  const [newTestAuthor, setNewTestAuthor] = useState('');
  const [newTestRole, setNewTestRole] = useState('');
  const [newTestOrg, setNewTestOrg] = useState('');

  // Image Upload / Styling Assistant State (Duotone & Required credits check)
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjSubtitle, setNewProjSubtitle] = useState('');
  const [newProjCategory, setNewProjCategory] = useState<Project['category']>('Festival');
  const [newProjLocation, setNewProjLocation] = useState('Salvador, BA');
  const [newProjImgUrl, setNewProjImgUrl] = useState(
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80'
  );
  const [newProjPhotoCredit, setNewProjPhotoCredit] = useState('');
  const [newProjAltText, setNewProjAltText] = useState('');
  const [newProjDesc, setNewProjDesc] = useState('');
  const [projError, setProjError] = useState('');

  // Success notifications
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const success = onLogin(loginEmail, loginPass);
    if (!success) {
      setLoginError('Credenciais inválidas. Use uma das contas de editor autorizadas.');
    }
  };

  // Add Event Handler
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle || !newEventArtist) return;

    const item: EventItem = {
      id: `evt-${Date.now()}`,
      title: newEventTitle,
      artist: newEventArtist,
      date: newEventDate,
      time: newEventTime,
      city: newEventCity,
      state: newEventState,
      venue: newEventVenue,
      ticketUrl: newEventTicketUrl,
      ticketStatus: newEventStatus
    };

    setEvents([item, ...events]);
    setNewEventTitle('');
    setNewEventArtist('');
    showNotification('Novo evento adicionado à agenda com sucesso!');
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
    showNotification('Evento removido.');
  };

  // Add Testimonial Handler
  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestQuote || !newTestAuthor) return;

    const t: Testimonial = {
      id: `test-${Date.now()}`,
      quote: newTestQuote,
      author: newTestAuthor,
      role: newTestRole || 'Artista Convidado',
      organization: newTestOrg || 'Música Brasileira'
    };

    setTestimonials([...testimonials, t]);
    setNewTestQuote('');
    setNewTestAuthor('');
    setNewTestRole('');
    setNewTestOrg('');
    showNotification('Depoimento cadastrado em poucos cliques!');
  };

  const handleDeleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter((t) => t.id !== id));
    showNotification('Depoimento removido.');
  };

  // Add Project Handler (with Mandatory Photo Credit & Alt Text rule!)
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    setProjError('');

    // Verification: crédito de fotografia e texto alternativo obrigatórios para publicar
    if (!newProjPhotoCredit.trim()) {
      setProjError('Obrigatório preencher o Crédito de Fotografia antes de publicar.');
      return;
    }
    if (!newProjAltText.trim()) {
      setProjError('Obrigatório preencher o Texto Alternativo (Alt Text) para acessibilidade antes de publicar.');
      return;
    }

    const p: Project = {
      id: `proj-${Date.now()}`,
      title: newProjTitle,
      subtitle: newProjSubtitle || 'Projeto cultural e circulação Festim',
      category: newProjCategory,
      year: '2026',
      description: newProjDesc || 'Iniciativa voltada à música brasileira independente.',
      location: newProjLocation,
      imageUrl: newProjImgUrl,
      photoCredit: newProjPhotoCredit,
      altText: newProjAltText,
      highlights: ['Curadoria Festim', 'Acessibilidade garantida', 'Equipe qualificada'],
      duotoneMode: 'warm'
    };

    setProjects([p, ...projects]);
    setNewProjTitle('');
    setNewProjSubtitle('');
    setNewProjPhotoCredit('');
    setNewProjAltText('');
    setNewProjDesc('');
    showNotification('Projeto publicado com sucesso!');
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
    showNotification('Projeto removido do catálogo.');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-title"
    >
      <div className="bg-[#FAF6EE] border-2 border-[#C7B088] max-w-5xl w-full rounded-sm shadow-2xl relative max-h-[92vh] flex flex-col overflow-hidden kraft-border">
        
        {/* Top Header Bar */}
        <div className="bg-[#354224] text-[#FAF6EE] px-6 py-4 flex items-center justify-between border-b border-[#C7B088]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#DCA427] text-[#1C1812] flex items-center justify-center font-bold">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 id="admin-title" className="font-serif font-bold text-lg leading-tight text-[#FAF6EE]">
                Painel de Gestão Festim (Fases 2 · 3 · 4)
              </h3>
              <p className="text-[11px] text-[#DCA427] flex items-center gap-1 font-mono">
                {isLoggedIn ? (
                  <>Autenticado como: <span className="underline">{currentUserEmail}</span> (Sessão Segura)</>
                ) : (
                  <>Acesso Restrito às Contas de Editoras</>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn && (
              <button
                onClick={onLogout}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-[#28321B] hover:bg-[#1D2513] text-[#FAF6EE] border border-white/20 rounded-xs transition-colors"
                title="Encerrar sessão"
              >
                <LogOut className="w-3.5 h-3.5 text-[#DCA427]" />
                <span>Sair</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-[#FAF6EE]/80 hover:text-white rounded-xs transition-colors"
              aria-label="Fechar painel de administração"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Temporary Notification Banner */}
        {notification && (
          <div className="bg-[#DCA427] text-[#1C1812] px-6 py-2 text-xs font-bold flex items-center gap-2 border-b border-[#B88719]">
            <Check className="w-4 h-4" />
            <span>{notification}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FAF6EE]">
          {!isLoggedIn ? (
            /* Login Screen (Fase 4: Acesso Restrito) */
            <div className="max-w-md mx-auto py-8">
              <div className="bg-[#ECE0CD]/85 border-2 border-[#C4AF8B] p-6 sm:p-8 rounded-sm shadow-xs relative">
                <CornerOrnament position="top-left" color="#B84A2B" />
                
                <div className="text-center mb-6">
                  <AquiTemAxeBadge className="mb-3" />
                  <h4 className="font-serif text-2xl font-bold text-[#1C1812]">
                    Login da Produção
                  </h4>
                  <p className="text-xs text-[#574C3D] mt-1">
                    Área restrita às editoras autorizadas. Nenhum cadastro público é permitido.
                  </p>
                </div>

                {loginError && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-sm text-xs text-red-900 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-700" />
                    <span>{loginError}</span>
                  </div>
                )}

                <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-[#1C1812] uppercase tracking-wider mb-1">
                      Conta de Editora (E-mail)
                    </label>
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="seu-email@festim.art.br"
                      className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2.5 rounded-sm text-[#1C1812] focus:border-[#B84A2B] outline-none font-medium"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1812] uppercase tracking-wider mb-1">
                      Senha de Acesso
                    </label>
                    <input
                      type="password"
                      required
                      value={loginPass}
                      onChange={(e) => setLoginPass(e.target.value)}
                      placeholder="Digite sua senha de acesso"
                      className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2.5 rounded-sm text-[#1C1812] focus:border-[#B84A2B] outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 font-bold text-white bg-[#B84A2B] hover:bg-[#96371D] rounded-sm transition-all shadow-xs flex items-center justify-center gap-2 text-xs"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Entrar no Painel</span>
                    </button>
                  </div>
                </form>

                <div className="mt-6 pt-4 border-t border-[#C4AF8B]/60 text-center text-[11px] text-[#705E44]">
                  <span>Proteção contra inatividade ativa (15 minutos)</span>
                </div>
              </div>
            </div>
          ) : (
            /* Logged In Dashboard (Fases 2 & 3) */
            <div>
              {/* Navigation Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 border-b border-[#C4AF8B]/60 pb-3 mb-6 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('agenda')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xs transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === 'agenda' ? 'bg-[#354224] text-white' : 'bg-[#ECE0CD] text-[#4A4237] hover:bg-[#DFD1BB]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agenda de Eventos ({events.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('projects')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xs transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === 'projects' ? 'bg-[#354224] text-white' : 'bg-[#ECE0CD] text-[#4A4237] hover:bg-[#DFD1BB]'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Deck de Projetos ({projects.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('testimonials')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xs transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === 'testimonials' ? 'bg-[#354224] text-white' : 'bg-[#ECE0CD] text-[#4A4237] hover:bg-[#DFD1BB]'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Depoimentos ({testimonials.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('messages')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xs transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === 'messages' ? 'bg-[#B84A2B] text-white' : 'bg-[#ECE0CD] text-[#4A4237] hover:bg-[#DFD1BB]'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Mensagens LGPD ({contactMessages.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xs transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === 'analytics' ? 'bg-[#354224] text-white' : 'bg-[#ECE0CD] text-[#4A4237] hover:bg-[#DFD1BB]'
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>Visitas Sem Cookies ({visitorAnalytics.totalViews})</span>
                </button>

                <button
                  onClick={() => setActiveTab('share')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xs transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === 'share' ? 'bg-[#354224] text-white' : 'bg-[#ECE0CD] text-[#4A4237] hover:bg-[#DFD1BB]'
                  }`}
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Prévia Social (OG)</span>
                </button>
              </div>

              {/* TAB 1: AGENDA MANAGEMENT */}
              {activeTab === 'agenda' && (
                <div className="space-y-6">
                  {/* Add Event Form */}
                  <div className="bg-[#ECE0CD]/75 border border-[#C4AF8B] p-5 rounded-sm">
                    <h5 className="font-serif font-bold text-base text-[#1C1812] mb-3 flex items-center gap-2">
                      <Plus className="w-4 h-4 text-[#B84A2B]" />
                      <span>Cadastrar Novo Show / Evento na Agenda</span>
                    </h5>

                    <form onSubmit={handleAddEvent} className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <label className="block font-bold text-[#1C1812] uppercase mb-1">Título do Evento *</label>
                        <input
                          type="text"
                          required
                          value={newEventTitle}
                          onChange={(e) => setNewEventTitle(e.target.value)}
                          placeholder="Ex: Encontro de Mestres de Axé"
                          className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-[#1C1812] uppercase mb-1">Artista / Banda *</label>
                        <input
                          type="text"
                          required
                          value={newEventArtist}
                          onChange={(e) => setNewEventArtist(e.target.value)}
                          placeholder="Ex: BaianaSystem & Convidados"
                          className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-[#1C1812] uppercase mb-1">Status de Ingresso</label>
                        <select
                          value={newEventStatus}
                          onChange={(e) => setNewEventStatus(e.target.value as any)}
                          className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                        >
                          <option value="Ingressos à venda">Ingressos à venda</option>
                          <option value="Entrada Gratuita">Entrada Gratuita</option>
                          <option value="Esgotado">Esgotado</option>
                          <option value="Em breve">Em breve</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-[#1C1812] uppercase mb-1">Data (AAAA-MM-DD)</label>
                        <input
                          type="date"
                          value={newEventDate}
                          onChange={(e) => setNewEventDate(e.target.value)}
                          className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-[#1C1812] uppercase mb-1">Horário</label>
                        <input
                          type="text"
                          value={newEventTime}
                          onChange={(e) => setNewEventTime(e.target.value)}
                          placeholder="20:00"
                          className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-[#1C1812] uppercase mb-1">Local / Teatro</label>
                        <input
                          type="text"
                          value={newEventVenue}
                          onChange={(e) => setNewEventVenue(e.target.value)}
                          placeholder="Concha Acústica"
                          className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block font-bold text-[#1C1812] uppercase mb-1">Link de Ingressos (Sympla / Eventim)</label>
                        <input
                          type="url"
                          value={newEventTicketUrl}
                          onChange={(e) => setNewEventTicketUrl(e.target.value)}
                          placeholder="https://bileto.sympla.com.br/..."
                          className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                        />
                      </div>

                      <div className="flex items-end">
                        <button
                          type="submit"
                          className="w-full py-2 font-bold text-white bg-[#B84A2B] hover:bg-[#96371D] rounded-xs transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Salvar Evento</span>
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Existing Events List */}
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-[#354224] mb-3">
                      Eventos Ativos na Base ({events.length})
                    </h5>

                    <div className="space-y-2">
                      {events.map((evt) => (
                        <div
                          key={evt.id}
                          className="bg-[#FAF6EE] border border-[#C4AF8B] p-3 rounded-xs flex items-center justify-between text-xs gap-4"
                        >
                          <div>
                            <span className="font-bold text-[#1C1812] text-sm">{evt.title}</span>
                            <span className="text-[#B84A2B] font-semibold ml-2">({evt.artist})</span>
                            <div className="text-[11px] text-[#705E44] mt-0.5">
                              <span>{evt.date} às {evt.time}h</span> · <span>{evt.venue} ({evt.city}/{evt.state})</span> ·{' '}
                              <span className="font-semibold text-[#354224]">{evt.ticketStatus}</span>
                            </div>
                          </div>

                          <button
                            onClick={() => handleDeleteEvent(evt.id)}
                            className="p-1.5 text-red-700 hover:bg-red-50 rounded-xs transition-colors shrink-0"
                            title="Remover evento"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: PROJECTS MANAGEMENT WITH MANDATORY PHOTO CREDITS */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  {/* Add Project Form */}
                  <div className="bg-[#ECE0CD]/75 border border-[#C4AF8B] p-5 rounded-sm">
                    <h5 className="font-serif font-bold text-base text-[#1C1812] mb-1 flex items-center gap-2">
                      <Plus className="w-4 h-4 text-[#B84A2B]" />
                      <span>Cadastrar Novo Projeto no Deck</span>
                    </h5>
                    <p className="text-xs text-[#574C3D] mb-4">
                      Campos obrigatórios: Crédito de Fotografia e Texto Alternativo (Alt Text).
                    </p>

                    {projError && (
                      <div className="mb-4 p-2.5 bg-red-100 border border-red-300 rounded-sm text-xs text-red-900 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-700" />
                        <span>{projError}</span>
                      </div>
                    )}

                    <form onSubmit={handleAddProject} className="space-y-3 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block font-bold text-[#1C1812] uppercase mb-1">Título do Projeto *</label>
                          <input
                            type="text"
                            required
                            value={newProjTitle}
                            onChange={(e) => setNewProjTitle(e.target.value)}
                            placeholder="Ex: Festival Sons da Maré"
                            className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1C1812] uppercase mb-1">Subtítulo / Conceito</label>
                          <input
                            type="text"
                            value={newProjSubtitle}
                            onChange={(e) => setNewProjSubtitle(e.target.value)}
                            placeholder="Ex: Mostra de percussão contemporânea"
                            className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1C1812] uppercase mb-1">Categoria</label>
                          <select
                            value={newProjCategory}
                            onChange={(e) => setNewProjCategory(e.target.value as any)}
                            className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                          >
                            <option value="Festival">Festival</option>
                            <option value="Circuito">Circuito</option>
                            <option value="Turnê">Turnê</option>
                            <option value="Oficina">Oficina / Residência</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-[#1C1812] uppercase mb-1">
                            URL da Imagem *
                          </label>
                          <input
                            type="url"
                            required
                            value={newProjImgUrl}
                            onChange={(e) => setNewProjImgUrl(e.target.value)}
                            placeholder="https://..."
                            className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-[#1C1812] uppercase mb-1">
                            Território / Cidade
                          </label>
                          <input
                            type="text"
                            value={newProjLocation}
                            onChange={(e) => setNewProjLocation(e.target.value)}
                            placeholder="Salvador, BA"
                            className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                          />
                        </div>
                      </div>

                      {/* Required Photo Credit & Alt Text */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-[#FAF6EE] border border-[#C4AF8B] rounded-xs">
                        <div>
                          <label className="block font-bold text-[#B84A2B] uppercase mb-1">
                            Crédito de Fotografia (Obrigatório) *
                          </label>
                          <input
                            type="text"
                            required
                            value={newProjPhotoCredit}
                            onChange={(e) => setNewProjPhotoCredit(e.target.value)}
                            placeholder="Foto: Nome da Fotógrafa / Acervo Festim"
                            className="w-full bg-white border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-[#354224] uppercase mb-1">
                            Texto Alternativo / Alt Text (Obrigatório) *
                          </label>
                          <input
                            type="text"
                            required
                            value={newProjAltText}
                            onChange={(e) => setNewProjAltText(e.target.value)}
                            placeholder="Descrição acessível da cena para leitores de tela"
                            className="w-full bg-white border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-[#1C1812] uppercase mb-1">Descrição Completa</label>
                        <textarea
                          rows={2}
                          value={newProjDesc}
                          onChange={(e) => setNewProjDesc(e.target.value)}
                          placeholder="Sinopse, formato e ficha artística..."
                          className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                        ></textarea>
                      </div>

                      <div className="flex justify-end pt-1">
                        <button
                          type="submit"
                          className="px-5 py-2 font-bold text-white bg-[#B84A2B] hover:bg-[#96371D] rounded-xs transition-colors flex items-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Publicar Projeto</span>
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* List of Projects */}
                  <div className="space-y-3">
                    {projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="bg-[#FAF6EE] border border-[#C4AF8B] p-3 rounded-xs flex items-center justify-between text-xs gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={proj.imageUrl}
                            alt={proj.altText}
                            className="w-12 h-10 object-cover rounded-xs border border-[#C4AF8B]"
                          />
                          <div>
                            <span className="font-bold text-[#1C1812] text-sm">{proj.title}</span>
                            <span className="text-xs text-[#B84A2B] ml-2 font-medium">[{proj.category}]</span>
                            <div className="text-[11px] text-[#705E44]">
                              {proj.photoCredit} · <span className="italic">{proj.altText}</span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDeleteProject(proj.id)}
                          className="p-1.5 text-red-700 hover:bg-red-50 rounded-xs transition-colors shrink-0"
                          title="Remover projeto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: TESTIMONIALS */}
              {activeTab === 'testimonials' && (
                <div className="space-y-6">
                  {/* Add Testimonial Form */}
                  <div className="bg-[#ECE0CD]/75 border border-[#C4AF8B] p-5 rounded-sm">
                    <h5 className="font-serif font-bold text-base text-[#1C1812] mb-3 flex items-center gap-2">
                      <Plus className="w-4 h-4 text-[#B84A2B]" />
                      <span>Adicionar Depoimento / Citação</span>
                    </h5>

                    <form onSubmit={handleAddTestimonial} className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-[#1C1812] uppercase mb-1">Citação / Depoimento *</label>
                        <textarea
                          required
                          rows={3}
                          value={newTestQuote}
                          onChange={(e) => setNewTestQuote(e.target.value)}
                          placeholder="A Festim tem aquilo que não se ensina em manual de produção..."
                          className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                        ></textarea>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block font-bold text-[#1C1812] uppercase mb-1">Nome do Autor *</label>
                          <input
                            type="text"
                            required
                            value={newTestAuthor}
                            onChange={(e) => setNewTestAuthor(e.target.value)}
                            placeholder="Ex: Teresa Cristina"
                            className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1C1812] uppercase mb-1">Papel / Função</label>
                          <input
                            type="text"
                            value={newTestRole}
                            onChange={(e) => setNewTestRole(e.target.value)}
                            placeholder="Cantora e Compositora"
                            className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1C1812] uppercase mb-1">Organização / Entidade</label>
                          <input
                            type="text"
                            value={newTestOrg}
                            onChange={(e) => setNewTestOrg(e.target.value)}
                            placeholder="Música Popular Brasileira"
                            className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end pt-1">
                        <button
                          type="submit"
                          className="px-5 py-2 font-bold text-white bg-[#B84A2B] hover:bg-[#96371D] rounded-xs transition-colors flex items-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Salvar Depoimento</span>
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* List of Testimonials */}
                  <div className="space-y-3">
                    {testimonials.map((t) => (
                      <div
                        key={t.id}
                        className="bg-[#FAF6EE] border border-[#C4AF8B] p-4 rounded-xs flex items-start justify-between text-xs gap-4"
                      >
                        <div>
                          <p className="font-serif italic text-sm text-[#1C1812] mb-1">“{t.quote}”</p>
                          <p className="font-bold text-[#B84A2B]">{t.author} · <span className="text-[#354224]">{t.role}</span> ({t.organization})</p>
                        </div>
                        <button
                          onClick={() => handleDeleteTestimonial(t.id)}
                          className="p-1.5 text-red-700 hover:bg-red-50 rounded-xs transition-colors shrink-0"
                          title="Remover depoimento"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: LGPD MESSAGES INBOX (Fase 4: Restrita apenas a editores) */}
              {activeTab === 'messages' && (
                <div className="space-y-4">
                  <div className="bg-[#FAF6EE] border border-[#C4AF8B] p-4 rounded-xs flex items-center justify-between">
                    <div>
                      <h5 className="font-serif font-bold text-base text-[#1C1812]">
                        Caixa de Mensagens & Propostas (Proteção LGPD)
                      </h5>
                      <p className="text-xs text-[#574C3D]">
                        Estes dados são visíveis exclusivamente para os editores autenticados do Festim.
                      </p>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-[#354224] text-white rounded-xs">
                      {contactMessages.length} mensagem(ns) recebida(s)
                    </span>
                  </div>

                  {contactMessages.length === 0 ? (
                    <div className="text-center py-8 text-xs text-[#705E44] bg-[#ECE0CD]/50 border border-dashed border-[#C4AF8B] rounded-xs">
                      Nenhuma mensagem recebida até o momento. Envie uma mensagem pelo formulário público do site para testar o recebimento!
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {contactMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className="bg-white border-2 border-[#C4AF8B] p-4 rounded-sm shadow-2xs"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#C4AF8B]/50 pb-2 mb-2 text-xs">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#1C1812] text-sm">{msg.name}</span>
                              <span className="text-[#B84A2B] font-mono">&lt;{msg.email}&gt;</span>
                              {msg.phone && <span className="text-[#354224] font-mono">Tel: {msg.phone}</span>}
                            </div>
                            <span className="text-[10px] text-[#705E44] font-mono">{msg.createdAt}</span>
                          </div>

                          <div className="text-xs text-[#24211D] space-y-1">
                            <p className="font-bold text-[#354224]">Assunto: {msg.subject}</p>
                            <p className="p-2.5 bg-[#FAF6EE] border border-[#C4AF8B]/60 rounded-xs leading-relaxed">
                              {msg.message}
                            </p>
                          </div>

                          <div className="mt-2 flex items-center justify-between text-[10px] text-[#705E44]">
                            <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                              <Check className="w-3 h-3" />
                              Consentimento LGPD Registrado
                            </span>
                            <a
                              href={`mailto:${msg.email}?subject=Re: ${msg.subject} · Festim Produções`}
                              className="text-[#B84A2B] font-bold underline hover:text-[#96371D]"
                            >
                              Responder por E-mail
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 5: PRIVACY-FRIENDLY VISITOR ANALYTICS */}
              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <div className="bg-[#ECE0CD]/75 border border-[#C4AF8B] p-5 rounded-sm">
                    <h5 className="font-serif font-bold text-base text-[#1C1812] mb-1">
                      Painel de Visitas & Audiência (Sem Cookies)
                    </h5>
                    <p className="text-xs text-[#574C3D] mb-4">
                      Contador transparente e em conformidade estrita com a LGPD: sem armazenamento de dados pessoais ou cookies de terceiros.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-[#FAF6EE] p-4 rounded-xs border border-[#C4AF8B] text-center">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#705E44]">Total de Visualizações</span>
                        <p className="font-serif text-3xl font-bold text-[#B84A2B] font-mono tabular-nums my-1">
                          {visitorAnalytics.totalViews}
                        </p>
                        <span className="text-[10px] text-[#354224]">Carregamentos de página</span>
                      </div>

                      <div className="bg-[#FAF6EE] p-4 rounded-xs border border-[#C4AF8B] text-center">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#705E44]">Sessões Locais Únicas</span>
                        <p className="font-serif text-3xl font-bold text-[#354224] font-mono tabular-nums my-1">
                          {visitorAnalytics.uniqueSessions}
                        </p>
                        <span className="text-[10px] text-[#705E44]">Sem cookies de tracking</span>
                      </div>

                      <div className="bg-[#FAF6EE] p-4 rounded-xs border border-[#C4AF8B] text-center">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#705E44]">Status do Servidor</span>
                        <p className="font-serif text-xl font-bold text-[#DCA427] my-2">
                          100% Online
                        </p>
                        <span className="text-[10px] text-[#705E44]">Latência média &lt; 80ms</span>
                      </div>
                    </div>
                  </div>

                  {/* Section views */}
                  <div className="bg-[#FAF6EE] border border-[#C4AF8B] p-4 rounded-sm">
                    <h6 className="font-bold text-xs uppercase tracking-wider text-[#1C1812] mb-3">
                      Seções Mais Visitadas do Portfólio
                    </h6>
                    <div className="space-y-2 text-xs">
                      {Object.entries(visitorAnalytics.sectionViews).map(([section, count]) => (
                        <div key={section} className="flex items-center justify-between p-2 bg-[#ECE0CD]/50 rounded-xs">
                          <span className="font-semibold text-[#1C1812] capitalize">{section}</span>
                          <span className="font-mono tabular-nums font-bold text-[#B84A2B]">{count} acessos</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 6: SOCIAL SHARE PREVIEW CONFIG */}
              {activeTab === 'share' && (
                <div className="bg-[#ECE0CD]/75 border border-[#C4AF8B] p-5 rounded-sm space-y-4">
                  <h5 className="font-serif font-bold text-base text-[#1C1812]">
                    Configurar Prévia de Compartilhamento (WhatsApp & Instagram)
                  </h5>
                  <p className="text-xs text-[#574C3D]">
                    Altere os dados que aparecem quando qualquer pessoa envia o link do Festim nas redes sociais.
                  </p>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block font-bold text-[#1C1812] uppercase mb-1">Título do Link (og:title)</label>
                      <input
                        type="text"
                        value={shareConfig.title}
                        onChange={(e) => setShareConfig({ ...shareConfig, title: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1C1812] uppercase mb-1">Descrição Curta (og:description)</label>
                      <textarea
                        rows={2}
                        value={shareConfig.description}
                        onChange={(e) => setShareConfig({ ...shareConfig, description: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block font-bold text-[#1C1812] uppercase mb-1">Hashtag Promocional</label>
                      <input
                        type="text"
                        value={shareConfig.hashtag}
                        onChange={(e) => setShareConfig({ ...shareConfig, hashtag: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#C4AF8B] p-2 rounded-xs text-[#1C1812]"
                      />
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => showNotification('Metadados de compartilhamento atualizados!')}
                        className="px-4 py-2 font-bold text-white bg-[#B84A2B] hover:bg-[#96371D] rounded-xs"
                      >
                        Salvar Metadados
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#ECE0CD] px-6 py-3 border-t border-[#C7B088] flex items-center justify-between text-xs text-[#705E44]">
          <span>Festim Gestão Cultural · Versão 1.0</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-bold text-[#1C1812] bg-[#FAF6EE] border border-[#C4AF8B] rounded-xs hover:bg-white transition-colors"
          >
            Fechar Painel
          </button>
        </div>

      </div>
    </div>
  );
};
