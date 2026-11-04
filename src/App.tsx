import React, { useState, useEffect, useRef } from 'react';
import {
  INITIAL_PROJECTS,
  INITIAL_EVENTS,
  PAST_EVENTS,
  INITIAL_TESTIMONIALS,
  INITIAL_TEAM,
  INITIAL_IMPACT,
  INITIAL_SHARE_CONFIG
} from './data/initialData';
import {
  Project,
  EventItem,
  Testimonial,
  TeamMember,
  ImpactMetric,
  ContactMessage,
  ShareConfig,
  VisitorAnalytics
} from './types';

import { Navbar } from './components/Navbar';
import { ManifestoSection } from './components/ManifestoSection';
import { ProjectDeck } from './components/ProjectDeck';
import { AgendaSection } from './components/AgendaSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ArtistSection } from './components/ArtistSection';
import { ImpactSection } from './components/ImpactSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { SharePreviewModal } from './components/SharePreviewModal';
import { AdminPanel } from './components/AdminPanel';

export default function App() {
  // App State with localStorage persistence (Fase 2: Base de Conteúdo)
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('festim_projects');
      return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  });

  const [events, setEvents] = useState<EventItem[]>(() => {
    try {
      const saved = localStorage.getItem('festim_events');
      if (saved) return JSON.parse(saved);

      // Automatic filter for past events (Fase 2: "eventos passados saem da lista automaticamente")
      const todayIso = new Date().toISOString().split('T')[0];
      return INITIAL_EVENTS.filter((e) => e.date >= todayIso);
    } catch {
      return INITIAL_EVENTS;
    }
  });

  const [pastEvents, setPastEvents] = useState<EventItem[]>(() => {
    try {
      const saved = localStorage.getItem('festim_past_events');
      return saved ? JSON.parse(saved) : PAST_EVENTS;
    } catch {
      return PAST_EVENTS;
    }
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem('festim_testimonials');
      return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
    } catch {
      return INITIAL_TESTIMONIALS;
    }
  });

  const [team, setTeam] = useState<TeamMember[]>(() => {
    try {
      const saved = localStorage.getItem('festim_team');
      return saved ? JSON.parse(saved) : INITIAL_TEAM;
    } catch {
      return INITIAL_TEAM;
    }
  });

  const [metrics, setMetrics] = useState<ImpactMetric[]>(() => {
    try {
      const saved = localStorage.getItem('festim_metrics');
      return saved ? JSON.parse(saved) : INITIAL_IMPACT;
    } catch {
      return INITIAL_IMPACT;
    }
  });

  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem('festim_messages');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [shareConfig, setShareConfig] = useState<ShareConfig>(() => {
    try {
      const saved = localStorage.getItem('festim_share_config');
      return saved ? JSON.parse(saved) : INITIAL_SHARE_CONFIG;
    } catch {
      return INITIAL_SHARE_CONFIG;
    }
  });

  const [manifestoText, setManifestoText] = useState<string>(() => {
    return localStorage.getItem('festim_manifesto_text') || '';
  });

  // Modal controls
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Authentication State (Fase 4: Login restrito com 2 contas autorizadas)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem('festim_admin_auth') === 'true';
  });
  const [currentUserEmail, setCurrentUserEmail] = useState<string>(() => {
    return sessionStorage.getItem('festim_admin_user') || '';
  });

  // Visitor Analytics (Cookie-less, privacy safe)
  const [visitorAnalytics, setVisitorAnalytics] = useState<VisitorAnalytics>(() => {
    try {
      const saved = localStorage.getItem('festim_visitor_analytics');
      if (saved) return JSON.parse(saved);
      return {
        totalViews: 1420,
        uniqueSessions: 388,
        sectionViews: {
          manifesto: 1240,
          projetos: 1180,
          agenda: 980,
          equipe: 720,
          depoimentos: 610,
          artistas: 540,
          impacto: 490,
          contato: 430
        },
        lastVisit: new Date().toISOString()
      };
    } catch {
      return {
        totalViews: 1420,
        uniqueSessions: 388,
        sectionViews: {},
        lastVisit: new Date().toISOString()
      };
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('festim_projects', JSON.stringify(projects));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem('festim_events', JSON.stringify(events));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [events]);

  useEffect(() => {
    try {
      localStorage.setItem('festim_testimonials', JSON.stringify(testimonials));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [testimonials]);

  useEffect(() => {
    try {
      localStorage.setItem('festim_messages', JSON.stringify(contactMessages));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [contactMessages]);

  useEffect(() => {
    try {
      localStorage.setItem('festim_share_config', JSON.stringify(shareConfig));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [shareConfig]);

  // Cookie-less Pageview Increment
  useEffect(() => {
    try {
      const updated = {
        ...visitorAnalytics,
        totalViews: visitorAnalytics.totalViews + 1,
        lastVisit: new Date().toISOString()
      };
      setVisitorAnalytics(updated);
      localStorage.setItem('festim_visitor_analytics', JSON.stringify(updated));
    } catch (e) {
      console.warn('Analytics save failed', e);
    }
  }, []);

  // Inactivity Auto-logout (Fase 4: Saída automática por inatividade de 15 minutos)
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetInactivityTimer = () => {
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    if (isAdminLoggedIn) {
      inactivityTimerRef.current = setTimeout(() => {
        handleLogout();
        alert('Sua sessão de editora expirou por inatividade para sua segurança.');
      }, 15 * 60 * 1000); // 15 minutes
    }
  };

  useEffect(() => {
    const activityEvents = ['mousemove', 'keydown', 'scroll', 'click'];
    const handler = () => resetInactivityTimer();

    activityEvents.forEach((evt) => window.addEventListener(evt, handler));
    resetInactivityTimer();

    return () => {
      activityEvents.forEach((evt) => window.removeEventListener(evt, handler));
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };
  }, [isAdminLoggedIn]);

  // Authentication Handlers (Fase 4: Contas permitidas via variáveis de ambiente)
  const handleLogin = (email: string, pass: string): boolean => {
    // Carrega e-mails autorizados do arquivo de ambiente (.env / Vercel)
    const envEmails = import.meta.env.VITE_ADMIN_EMAILS as string | undefined;
    const validUsers = envEmails
      ? envEmails.split(',').map((e) => e.trim().toLowerCase())
      : ['nataliasantiagoj@gmail.com', 'curadoria@festim.art.br'];

    // Carrega a senha configurada no ambiente
    const envPassword = (import.meta.env.VITE_ADMIN_PASSWORD as string | undefined)?.trim();
    // Senha padrão de fallback caso ainda não tenha sido configurada em ambiente local
    const targetPassword = envPassword || 'festim2026';

    const isAuthorizedUser = validUsers.includes(email.trim().toLowerCase());
    const isPasswordCorrect = pass.trim() === targetPassword;

    if (isAuthorizedUser && isPasswordCorrect) {
      setIsAdminLoggedIn(true);
      setCurrentUserEmail(email.toLowerCase());
      sessionStorage.setItem('festim_admin_auth', 'true');
      sessionStorage.setItem('festim_admin_user', email.toLowerCase());
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setCurrentUserEmail('');
    sessionStorage.removeItem('festim_admin_auth');
    sessionStorage.removeItem('festim_admin_user');
  };

  // Contact Submission Handler
  const handleSendMessage = (msgData: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    lgpdConsent: boolean;
  }) => {
    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      ...msgData,
      createdAt: new Date().toLocaleString('pt-BR')
    };

    setContactMessages((prev) => [newMessage, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#24211D] flex flex-col font-sans selection:bg-[#DCA427]/30 selection:text-[#1C1812]">
      
      {/* Fixed Navigation Header adhering to Top Bar Contract */}
      <Navbar
        onOpenShareModal={() => setShareModalOpen(true)}
        onOpenAdminModal={() => setAdminModalOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      <main className="flex-1">
        {/* Section 1: Manifesto */}
        <ManifestoSection
          manifestoText={manifestoText}
          onExploreClick={() => {
            document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 2: Deck de Projetos */}
        <ProjectDeck projects={projects} />

        {/* Section 3: Agenda de Shows */}
        <AgendaSection events={events} pastEvents={pastEvents} />

        {/* Section 4: Quem Faz Acontecer (Equipe) */}
        <TeamSection team={team} />

        {/* Section 5: Depoimentos */}
        <TestimonialsSection testimonials={testimonials} />

        {/* Section 6: Artistas Interessados (Tally Integration) */}
        <ArtistSection />

        {/* Section 7: Impacto Gerado */}
        <ImpactSection metrics={metrics} />

        {/* Section 8: Contato */}
        <ContactSection
          onSendMessage={handleSendMessage}
          onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)}
        />
      </main>

      {/* Footer with Spotify & Instagram Links and LGPD access */}
      <Footer
        onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)}
        onOpenAdmin={() => setAdminModalOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* LGPD Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      {/* Social Share Preview Modal (WhatsApp, Instagram, Twitter) */}
      <SharePreviewModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        config={shareConfig}
      />

      {/* Full-Stack Admin Management Panel (Fases 2, 3 e 4) */}
      <AdminPanel
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        isLoggedIn={isAdminLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
        currentUserEmail={currentUserEmail}
        projects={projects}
        setProjects={setProjects}
        events={events}
        setEvents={setEvents}
        testimonials={testimonials}
        setTestimonials={setTestimonials}
        team={team}
        setTeam={setTeam}
        metrics={metrics}
        setMetrics={setMetrics}
        contactMessages={contactMessages}
        visitorAnalytics={visitorAnalytics}
        shareConfig={shareConfig}
        setShareConfig={setShareConfig}
        manifestoText={manifestoText}
        setManifestoText={setManifestoText}
      />

    </div>
  );
}
