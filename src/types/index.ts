export type BandColor = 'oliva' | 'terracota' | 'mostarda';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Festival' | 'Circuito' | 'Show' | 'Turnê' | 'Oficina';
  year: string;
  description: string;
  location: string;
  imageUrl: string;
  photoCredit: string;
  altText: string;
  highlights: string[];
  duotoneMode?: 'warm' | 'terracotta' | 'none';
}

export interface EventItem {
  id: string;
  title: string;
  artist: string;
  date: string; // ISO YYYY-MM-DD
  time: string;
  city: string;
  state: string;
  venue: string;
  ticketUrl: string;
  ticketStatus: 'Ingressos à venda' | 'Esgotado' | 'Entrada Gratuita' | 'Em breve';
  description?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  photoCredit: string;
  altText: string;
  instagram?: string;
}

export interface ImpactMetric {
  id: string;
  value: string;
  label: string;
  context: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  lgpdConsent: boolean;
  createdAt: string;
}

export interface ShareConfig {
  title: string;
  description: string;
  imageUrl: string;
  hashtag: string;
}

export interface VisitorAnalytics {
  totalViews: number;
  uniqueSessions: number;
  sectionViews: Record<string, number>;
  lastVisit: string;
}
