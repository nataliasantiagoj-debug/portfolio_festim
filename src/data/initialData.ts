import { Project, EventItem, Testimonial, TeamMember, ImpactMetric, ShareConfig } from '../types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Festival Dendê Vivo',
    subtitle: 'Encontro de música de terreiro, afropop e percussão contemporânea',
    category: 'Festival',
    year: '2025/2026',
    description: 'Três dias de celebração da pulsação afro-brasileira reunindo blocos afro tradicionais, novas vozes da MPB e intercâmbio com músicos instrumentistas. Palco aberto, feira de economia criativa e cortejo percussivo.',
    location: 'Salvador & Santo Amaro, BA',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    photoCredit: 'Foto: Mariana Vasconcelos / Acervo Festim',
    altText: 'Apresentação ao vivo do Festival Dendê Vivo com iluminação dourada e percussionistas baianos no palco',
    highlights: ['18 apresentações ao vivo', '30 mil pessoas no Pelourinho', 'Ações de acessibilidade em Libras'],
    duotoneMode: 'warm'
  },
  {
    id: 'proj-2',
    title: 'Circuito Tropicália Aberta',
    subtitle: 'Música brasileira viva ocupando praças e parques públicos',
    category: 'Circuito',
    year: '2026',
    description: 'Circuito itinerante de música autoral instrumental e canção popular que descentraliza a cultura, levando palcos móveis de alta fidelidade sonora para periferias e centros históricos.',
    location: 'São Paulo, Santos e Campinas, SP',
    imageUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
    photoCredit: 'Foto: Beto Soares / Festim Coletivo',
    altText: 'Show ao ar livre no Circuito Tropicália com público vibrante sob luz do entardecer e árvores iluminadas',
    highlights: ['100% gratuito', '12 oficinas de percussão comunitária', 'Zero desperdício de resíduos'],
    duotoneMode: 'terracotta'
  },
  {
    id: 'proj-3',
    title: 'Turnê Vento Solar: Axé Sinfônico',
    subtitle: 'Orquestra de câmara e alfaias dialogando com clássicos do axé 90',
    category: 'Turnê',
    year: '2025',
    description: 'Releitura monumental do cancioneiro da Bahia dos anos 1990 sob regência orquestral e percussão ao vivo. Teatros lotados e aclamação de crítica pela sofisticação harmônica e calor popular.',
    location: 'Belo Horizonte, Rio de Janeiro e Recife',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    photoCredit: 'Foto: Clara Linhares / Lente Musical',
    altText: 'Ensaio geral de orquestra com naipe de metais e percussão de axé em teatro de iluminação cênica terracota',
    highlights: ['8 cidades visitadas', 'Gravação de especial ao vivo', 'Cachês justos e equiparados'],
    duotoneMode: 'warm'
  },
  {
    id: 'proj-4',
    title: 'Residência Criação & Terreiro',
    subtitle: 'Imersão de composição e produção musical independente',
    category: 'Oficina',
    year: '2026',
    description: 'Programa imersivo de 10 dias no Recôncavo Baiano com mentoria de arranjos, gravação em estúdio móvel e palestras sobre direitos autorais, distribuição e circulação internacional.',
    location: 'Cachoeira, BA',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    photoCredit: 'Foto: Danilo Queiroz / Festim Lab',
    altText: 'Músicos em círculo de improvisação com violão de 7 cordas, pandeiro e cadernos de partitura',
    highlights: ['16 artistas residentes selecionados', 'EP colaborativo lançado', 'Bolsa de apoio integral'],
    duotoneMode: 'terracotta'
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Noite de Axé Acústico & Metais',
    artist: 'Banda Ilê Sonora + Convidados Especiais',
    date: '2026-11-14',
    time: '20:30',
    city: 'Salvador',
    state: 'BA',
    venue: 'Concha Acústica do TCA',
    ticketUrl: 'https://bileto.sympla.com.br',
    ticketStatus: 'Ingressos à venda',
    description: 'Show de abertura da temporada de verão com repertório que cruza ijexá, afrobeats e frevo elétrico.'
  },
  {
    id: 'evt-2',
    title: 'Festim na Praça: Sons do Recôncavo',
    artist: 'Orquestra Popular da Bahia & Samba de Roda',
    date: '2026-11-28',
    time: '17:00',
    city: 'São Paulo',
    state: 'SP',
    venue: 'Praça das Artes (Largo São Bento)',
    ticketUrl: '#',
    ticketStatus: 'Entrada Gratuita',
    description: 'Encontro ao entardecer no coração de São Paulo com feira gastronômica e cortejo percussivo.'
  },
  {
    id: 'evt-3',
    title: 'Ensaio Geral Aberto: Ritmo e Fogo',
    artist: 'Coletivo Percussivo Festim',
    date: '2026-12-12',
    time: '19:00',
    city: 'Rio de Janeiro',
    state: 'RJ',
    venue: 'Circo Voador (Lapa)',
    ticketUrl: 'https://eventim.com.br',
    ticketStatus: 'Ingressos à venda',
    description: 'Prévia exclusiva para o Carnaval 2027 com 40 batuqueiros e participações surpresa.'
  }
];

export const PAST_EVENTS: EventItem[] = [
  {
    id: 'evt-p1',
    title: 'Festim de Outono: Cantos de Fé e Folia',
    artist: 'Mestras do Samba de Roda & BaianaSystem Feat',
    date: '2026-05-18',
    time: '21:00',
    city: 'Belo Horizonte',
    state: 'MG',
    venue: 'Parque Municipal Américo Renné Giannetti',
    ticketUrl: '#',
    ticketStatus: 'Esgotado',
    description: 'Noite histórica com lotação máxima e tributo aos mestres da percussão baiana.'
  },
  {
    id: 'evt-p2',
    title: 'Mostra Festim de Primavera',
    artist: 'Luedji Luna & Liniker em Concerto Conjunto',
    date: '2025-10-04',
    time: '20:00',
    city: 'Recife',
    state: 'PE',
    venue: 'Teatro Santa Isabel',
    ticketUrl: '#',
    ticketStatus: 'Esgotado',
    description: 'Dois dias de casa cheia e gravação de videoclipe ao vivo.'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'A Festim tem aquilo que não se ensina em manual de produção: calor, escuta atenta dos artistas e um respeito sagrado às raízes da nossa música. Trabalhar com eles é sentir o axé na prática.',
    author: 'Teresa Cristina',
    role: 'Cantora e Compositora',
    organization: 'Música Popular Brasileira'
  },
  {
    id: 'test-2',
    quote: 'A precisão técnica da equipe Festim aliada à sensibilidade curatorial elevou o padrão dos nossos festivais parceiros. O público sai transformado e a logística de palco é impecável.',
    author: 'Rodrigo Rezende',
    role: 'Diretor de Programação',
    organization: 'Circuito Sesc & Festivais de Verão'
  },
  {
    id: 'test-3',
    quote: 'Em 15 anos produzindo shows, raras vezes vi uma produtora que cuida tão bem de cada técnico de som, cada roadie e cada músico. A Festim faz cultura de verdade, com dignidade.',
    author: 'Mestre Gerson Trindade',
    role: 'Mestre Percussionista',
    organization: 'Afrobloco Filhos de Ogum'
  }
];

export const INITIAL_TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Natália Santiago',
    role: 'Direção Geral & Curadoria Artística',
    bio: 'Produtora cultural baiana com mais de uma década dedicada à circulação de artistas brasileiros, fomento a políticas públicas de cultura e projetos de afeto.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    photoCredit: 'Foto: Dandara Mendes',
    altText: 'Retrato de Natália Santiago sorrindo com olhar expressivo em ambiente natural iluminado',
    instagram: 'natalia.santiago'
  },
  {
    id: 'team-2',
    name: 'Leonardo Matos',
    role: 'Direção de Produção & Engenharia de Palco',
    bio: 'Especialista em grandes montagens ao ar livre, sonorização acústica e gestão de equipes de alta performance em festivais de música.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    photoCredit: 'Foto: Lucas Ferreira',
    altText: 'Leonardo Matos em estúdio de ensaio com fone de monitoração e prancheta de palco',
    instagram: 'leomatos.prod'
  },
  {
    id: 'team-3',
    name: 'Juliana Cordeiro',
    role: 'Relacionamento com Artistas & Articulação Institucional',
    bio: 'Pós-graduada em Gestão Cultural pela UFBA, coordena residências criativas, editais de incentivo e intercâmbio de músicos independentes.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    photoCredit: 'Foto: Luiza Bicalho',
    altText: 'Juliana Cordeiro com colar de contas e sorriso caloroso em frente a painel de xilogravura',
    instagram: 'ju.cordeiro'
  }
];

export const INITIAL_IMPACT: ImpactMetric[] = [
  {
    id: 'imp-1',
    value: '+52.000',
    label: 'Público impactado',
    context: 'Em praças públicas, teatros e arenas com ingressos democráticos e acessibilidade garantida'
  },
  {
    id: 'imp-2',
    value: '145+',
    label: 'Artistas & técnicos contratados',
    context: 'Remuneração digna, seguro e valorização da cadeia produtiva dos bastidores'
  },
  {
    id: 'imp-3',
    value: '18 Cidades',
    label: 'Territórios percorridos',
    context: 'Circulação interestadual conectando capitais, cidades históricas e periferias'
  },
  {
    id: 'imp-4',
    value: '84%',
    label: 'Ações gratuitas ou populares',
    context: 'Compromisso irrestrito com o acesso livre e a democratização da cultura viva'
  }
];

export const ARTIST_CHECKLIST = [
  {
    title: 'Press Kit & Release Atualizado',
    detail: 'Apresentação em PDF com histórico do projeto, proposta cênica e conceito sonoro.'
  },
  {
    title: 'Links de Áudio & Vídeo ao Vivo',
    detail: 'Spotify, YouTube ou SoundCloud com apresentações gravadas com som de alta qualidade.'
  },
  {
    title: 'Rider Técnico & Mapa de Palco',
    detail: 'Canais de entrada (input list), microfonação, monitoração (fones ou caixas) e disposição física.'
  },
  {
    title: 'Proposta Comercial & Logística',
    detail: 'Cachê sugerido, número de integrantes da equipe na estrada e cidade-base de saída.'
  }
];

export const INITIAL_SHARE_CONFIG: ShareConfig = {
  title: 'Festim · Produtora Cultural | Aqui tem axé',
  description: 'Circulação de música brasileira, festivais, shows vibrantes e projetos culturais com alma e axé.',
  imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
  hashtag: '#AquiTemAxe #FestimCultural #MusicaBrasileira'
};
