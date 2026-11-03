export interface PortfolioCase {
  id: string;
  client: string;
  subtitle: string;
  category: 'carrossel' | 'evento' | 'tech' | 'educacao' | 'branding' | 'web';
  categoryLabel: string;
  accentColor: string; // for ambient glow
  description: string;
  highlights: string[];
  mainType: 'panoramic-carousel' | 'event-board' | 'community-grid' | 'editorial-grid';
  coverImage?: string;
  panoramicSlides?: { id: string; image: string; title: string }[];
  ticketStories?: { id: string; image: string; title: string }[];
  feedCreatives?: { id: string; image: string; title: string }[];
  gallery?: { id: string; image: string; title: string; span?: string }[];
}

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
    id: 'thabata-estetica',
    client: 'Dra. Thábata',
    subtitle: 'Estética Avançada & Cosmiatria',
    category: 'carrossel',
    categoryLabel: 'Carrossel Contínuo & Social Media',
    accentColor: 'rgba(212, 175, 133, 0.25)', // warm luxury gold/nude
    description:
      'Desenvolvimento de narrativa visual contínua para autoridade médica. O carrossel panorâmico de 5 lâminas conecta transições de fotos e tipografia editorial sofisticada, gerando alto tempo de retenção e salvamentos.',
    highlights: [
      'Carrossel panorâmico contínuo (5 lâminas)',
      'Identidade visual clean para clínica de estética',
      'Comunicação de procedimentos de alto tíquete (Botox, Bioestimuladores, Ácido Hialurônico)',
      'Design responsivo para consumo no Instagram',
    ],
    mainType: 'panoramic-carousel',
    panoramicSlides: [
      { id: 'thab-1', image: '/trabalhos/thabata-carrossel-1.png', title: 'Capa: A Durabilidade dos Procedimentos' },
      { id: 'thab-2', image: '/trabalhos/thabata-carrossel-2.png', title: 'Lâmina 02: Conheça a Durabilidade' },
      { id: 'thab-3', image: '/trabalhos/thabata-carrossel-3.png', title: 'Lâmina 03: Toxina Botulínica & Ácido Hialurônico' },
      { id: 'thab-4', image: '/trabalhos/thabata-carrossel-4.png', title: 'Lâmina 04: Bioestimuladores & Profhilo' },
      { id: 'thab-5', image: '/trabalhos/thabata-carrossel-5.png', title: 'Lâmina 05: Dúvidas & CTA Final' },
    ],
    gallery: [
      { id: 'thab-botox', image: '/trabalhos/thabata-botox.png', title: 'Botox Preventivo — Feed' },
      { id: 'thab-labial', image: '/trabalhos/thabata-labial.png', title: 'Preenchimento Labial — Feed' },
      { id: 'thab-arte-1', image: '/trabalhos/thabata-arte-1.png', title: 'Criativo Conceito 01 — Procedimentos' },
      { id: 'thab-arte-2', image: '/trabalhos/thabata-arte-2.png', title: 'Criativo Conceito 02 — Cuidados' },
    ],
  },
  {
    id: 'borntech-techday',
    client: 'Borntech / Techday',
    subtitle: 'Event Experience & Ticket Launch',
    category: 'evento',
    categoryLabel: 'Campanha de Evento & Ingressos',
    accentColor: 'rgba(255, 30, 140, 0.28)', // neon magenta / cyberpunk
    description:
      'Direção de arte para lançamento e venda de ingressos do Techday. Construção de atmosfera futurista com neon magenta e ciano, mockups 3D do ticket, cards de lotes, kit exclusivo e confirmação de local na FECAP São Paulo.',
    highlights: [
      'Visual key completo com estética cyberpunk / neon glow',
      'Funil de vendas visual: Stories de lotes, kits e local',
      'Mockup holográfico do ingresso (Event Ticket)',
      'Criativos de feed de alta conversão para tráfego pago',
    ],
    mainType: 'event-board',
    ticketStories: [
      { id: 'bt-t1', image: '/trabalhos/borntech-ticket-1.png', title: '1º Lote Liberado — Ticket Mockup' },
      { id: 'bt-t2', image: '/trabalhos/borntech-ticket-2.png', title: 'Seu Ingresso Inclui — Benefícios' },
      { id: 'bt-t3', image: '/trabalhos/borntech-ticket-3.png', title: 'Kit Exclusivo para o 1º Lote' },
      { id: 'bt-t4', image: '/trabalhos/borntech-ticket-4.png', title: 'Oferta: R$ 249,90 — Lote Promocional' },
      { id: 'bt-group', image: '/trabalhos/borntech-group.png', title: 'Local Confirmado: FECAP São Paulo' },
    ],
    feedCreatives: [
      { id: 'bt-f1', image: '/trabalhos/borntech-feed-1.png', title: 'O Ingresso que pode transformar sua carreira' },
      { id: 'bt-f2', image: '/trabalhos/borntech-feed-2.png', title: 'Mas viver o Techday ao vivo é outra história' },
      { id: 'bt-f3', image: '/trabalhos/borntech-feed-3.png', title: 'O que você recebe com seu ingresso' },
      { id: 'bt-f4', image: '/trabalhos/borntech-feed-4.png', title: 'Abertura de Inscrições — Contagem Regressiva' },
    ],
  },
  {
    id: 'aneti-tech',
    client: 'ANETI',
    subtitle: 'Associação Nacional de Profissionais de TI',
    category: 'tech',
    categoryLabel: 'Comunidade & Social Media Corporativo',
    accentColor: 'rgba(0, 204, 136, 0.22)', // tech emerald & deep navy
    description:
      'Posicionamento e engajamento da maior associação de profissionais de tecnologia do Brasil. Identidade visual baseada em tons de verde, ciano e marinho com foco em retenção, senso de pertencimento e autoridade no ecossistema tech.',
    highlights: [
      'Posts interativos de pesquisa e caixinha de perguntas',
      'Celebração de marcos de comunidade (+7 mil no LinkedIn)',
      'Boas-vindas a novos coordenadores de comunidade',
      'Formatos pensados para mobile feed e stories',
    ],
    mainType: 'community-grid',
    gallery: [
      { id: 'an-7mil', image: '/trabalhos/aneti-7mil.png', title: 'Marco: + de 7mil profissionais no LinkedIn' },
      { id: 'an-perg', image: '/trabalhos/aneti-pergunta.png', title: 'Caixinha: Que tema de treinamento quer ver?' },
      { id: 'an-coord', image: '/trabalhos/aneti-coordenadores.png', title: 'Liderança: Boas-vindas aos novos coordenadores' },
      { id: 'an-feed1', image: '/trabalhos/aneti-feed-1.png', title: 'Publicação de artigos na comunidade ANETI' },
    ],
  },
  {
    id: 'teacher-famosos',
    client: 'Teacher dos Famosos',
    subtitle: 'Mentoria & Educação Executiva',
    category: 'educacao',
    categoryLabel: 'Autoridade Editorial & Lançamentos',
    accentColor: 'rgba(255, 170, 0, 0.22)', // gold & deep prestige blue
    description:
      'Direção de arte para infoprodutos e posicionamento de alta autoridade. Capa com estética de revista internacional (Forbes), criativos de lançamento para o curso "O Código Secreto da Fluência" e identidade para mentoria "Formando Estrelas".',
    highlights: [
      'Mockup editorial padrão revista Forbes',
      'Key visuals de lançamento: "Código Secreto da Fluência"',
      'Materiais de apoio e apostilas para mentorias e workshops',
      'Visual sofisticado para ensino de inglês para celebridades e executivos',
    ],
    mainType: 'editorial-grid',
    gallery: [
      { id: 'tea-forbes', image: '/trabalhos/teacher-forbes.png', title: 'Editorial: Forbes — Teacher dos Famosos' },
      { id: 'tea-fluencia', image: '/trabalhos/teacher-fluencia.png', title: 'Lançamento: O Código Secreto da Fluência' },
      { id: 'tea-estrelas1', image: '/trabalhos/teacher-estrelas-1.png', title: 'Mentoria: Formando Estrelas — Feed' },
      { id: 'tea-estrelas2', image: '/trabalhos/teacher-estrelas-2.png', title: 'Mentoria: Formando Estrelas — Stories' },
      { id: 'tea-cultura', image: '/trabalhos/teacher-cultura.png', title: 'Evento Cultural & Imersão' },
      { id: 'tea-capa1', image: '/trabalhos/teacher-capa-1.png', title: 'Capa: Mentorias & Workshop — Prancheta' },
    ],
  },
];

