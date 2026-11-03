export type ClientProfile = 'agencia' | 'empresa' | 'avulso';

export interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  isRecommended?: boolean;
  isCompact?: boolean;
  price: string;
  priceNumber?: number;
  period: string;
  creditsLabel: string;
  creditsNumber?: number;
  simultaneousTasks: string;
  headline: string;
  features: string[];
  ctaLabel: string;
  ctaType: 'whatsapp' | 'proposal';
  targetAudience: 'agencia' | 'empresa';
}

export interface CreditEquivalence {
  id: string;
  title: string;
  credits: number;
  creditsFormatted: string;
  description: string;
  unit: string;
  category: 'social' | 'banner' | 'carousel' | 'video';
  defaultCount: number;
}

export interface CustomProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  deliverables: string[];
  tag: string;
}

export interface AdditionalServiceItem {
  id: string;
  title: string;
  category: 'criativo' | 'estrategico';
  description: string;
  priceTag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CommercialRule {
  title: string;
  description: string;
}

export const AGENCY_PLANS: PlanItem[] = [
  {
    id: 'agencia-micro',
    name: 'MICRO',
    isCompact: true,
    price: 'R$ 290',
    priceNumber: 290,
    period: '/mês',
    creditsLabel: '4 créditos de produção',
    creditsNumber: 4,
    simultaneousTasks: '1 demanda ativa por vez',
    headline: 'Ideal para pequenas agências que desejam começar sem risco.',
    features: [
      '4 créditos de produção mensal',
      '1 demanda ativa por vez',
      'Plataforma de solicitações centralizada',
      'Até 2 rodadas de ajustes por peça',
      'Produção 100% white-label nos bastidores',
      'Organização de fila e prazos claros',
    ],
    ctaLabel: 'Começar com Micro',
    ctaType: 'whatsapp',
    targetAudience: 'agencia',
  },
  {
    id: 'agencia-start',
    name: 'START',
    price: 'R$ 490',
    priceNumber: 490,
    period: '/mês',
    creditsLabel: '8 créditos mensais',
    creditsNumber: 8,
    simultaneousTasks: '1 demanda ativa por vez',
    headline: 'Para agências que precisam de fluxo inicial regular e confiável.',
    features: [
      '8 créditos mensais de produção',
      '1 demanda ativa por vez',
      'Produção white-label nos bastidores',
      'Plataforma de solicitações centralizada',
      'Até 2 rodadas de ajustes por peça',
      'Organização de briefings e aprovações',
      'Entrega no prazo sem retrabalho',
    ],
    ctaLabel: 'Escolher Start',
    ctaType: 'whatsapp',
    targetAudience: 'agencia',
  },
  {
    id: 'agencia-growth',
    name: 'GROWTH',
    price: 'R$ 990',
    priceNumber: 990,
    period: '/mês',
    creditsLabel: '20 créditos mensais',
    creditsNumber: 20,
    simultaneousTasks: '1 demanda ativa por vez',
    headline: 'Volume recorrente para atender carteiras de clientes em expansão.',
    features: [
      '20 créditos mensais de produção',
      '1 demanda ativa por vez',
      'Todos os recursos do plano START',
      'Produção contínua e recorrente',
      'Atendimento a múltiplas marcas da agência',
      'Gestão centralizada das demandas',
      'Padronização de briefing e entregas',
    ],
    ctaLabel: 'Escolher Growth',
    ctaType: 'whatsapp',
    targetAudience: 'agencia',
  },
  {
    id: 'agencia-agency',
    name: 'AGENCY',
    badge: 'Recomendado para agências',
    isRecommended: true,
    price: 'R$ 1.690',
    priceNumber: 1690,
    period: '/mês',
    creditsLabel: '40 créditos mensais',
    creditsNumber: 40,
    simultaneousTasks: 'Até 2 demandas simultâneas',
    headline: 'O motor de produção completo com fila dupla e prioridade.',
    features: [
      '40 créditos mensais de produção',
      'Até 2 demandas simultâneas em produção',
      'Todos os recursos do plano GROWTH',
      'Atendimento prioritário na esteira criativa',
      'Arquivos editáveis quando disponíveis',
      'Produção multimarca para múltiplos clientes',
      'Comunicação direta para alinhamento rápido',
    ],
    ctaLabel: 'Contratar Agency',
    ctaType: 'whatsapp',
    targetAudience: 'agencia',
  },
  {
    id: 'agencia-scale',
    name: 'SCALE',
    price: 'Sob consulta',
    period: 'personalizado',
    creditsLabel: 'A partir de 70 créditos mensais',
    creditsNumber: 70,
    simultaneousTasks: 'Até 3 demandas simultâneas',
    headline: 'Alto volume de produção e capacidade dedicada para grandes operações.',
    features: [
      'Pacotes de alto volume (referência inicial de 70 créditos/mês)',
      'Até 3 demandas simultâneas (conforme capacidade contratada)',
      'Produção 100% white-label nos bastidores',
      'Atendimento prioritário e esteira exclusiva',
      'Fluxo contínuo de produção sem interrupções',
      'Condições comerciais personalizadas para sua agência',
    ],
    ctaLabel: 'Solicitar proposta',
    ctaType: 'proposal',
    targetAudience: 'agencia',
  },
];

export const COMPANY_PLANS: PlanItem[] = [
  {
    id: 'empresa-essencial',
    name: 'ESSENCIAL',
    price: 'R$ 690',
    priceNumber: 690,
    period: '/mês',
    creditsLabel: '8 créditos mensais',
    creditsNumber: 8,
    simultaneousTasks: '1 demanda ativa por vez',
    headline: 'Presença digital contínua com peças visuais de nível profissional.',
    features: [
      '8 créditos mensais de design',
      '1 demanda ativa por vez',
      'Design para redes sociais e materiais digitais',
      'Atendimento direto com a equipe criativa',
      'Plataforma de solicitações simples e intuitiva',
      'Até 2 rodadas de ajustes por peça',
    ],
    ctaLabel: 'Começar com Essencial',
    ctaType: 'whatsapp',
    targetAudience: 'empresa',
  },
  {
    id: 'empresa-profissional',
    name: 'PROFISSIONAL',
    badge: 'Recomendado para empresas',
    isRecommended: true,
    price: 'R$ 1.190',
    priceNumber: 1190,
    period: '/mês',
    creditsLabel: '16 créditos mensais',
    creditsNumber: 16,
    simultaneousTasks: '1 demanda ativa por vez',
    headline: 'Consistência e identidade de alto nível para marcas consolidadas.',
    features: [
      '16 créditos mensais de design',
      '1 demanda ativa por vez',
      'Tudo incluído no plano ESSENCIAL',
      'Padronização visual rigorosa conforme a identidade da marca',
      'Produção recorrente para cadência semanal',
      'Organização centralizada de peças e aprovações',
      'Atendimento consultivo e refinamento técnico',
    ],
    ctaLabel: 'Escolher Profissional',
    ctaType: 'whatsapp',
    targetAudience: 'empresa',
  },
  {
    id: 'empresa-premium',
    name: 'PREMIUM',
    price: 'R$ 1.990',
    priceNumber: 1990,
    period: '/mês',
    creditsLabel: '30 créditos mensais',
    creditsNumber: 30,
    simultaneousTasks: 'Até 2 demandas simultâneas',
    headline: 'Maior capacidade criativa e fila dupla para empresas em ritmo intenso.',
    features: [
      '30 créditos mensais de design',
      'Até 2 demandas simultâneas em produção',
      'Tudo incluído no plano PROFISSIONAL',
      'Atendimento prioritário na esteira de produção',
      'Maior capacidade mensal de entregas',
      'Arquivos editáveis quando disponíveis',
    ],
    ctaLabel: 'Contratar Premium',
    ctaType: 'whatsapp',
    targetAudience: 'empresa',
  },
];

export const CREDIT_EQUIVALENCE_TABLE: CreditEquivalence[] = [
  {
    id: 'post',
    title: 'Post estático',
    credits: 1,
    creditsFormatted: '1 crédito',
    description: 'Post para feed (Instagram, LinkedIn, Facebook). Direção de arte e tipografia cuidada.',
    unit: 'peça',
    category: 'social',
    defaultCount: 6,
  },
  {
    id: 'story',
    title: 'Story original',
    credits: 1,
    creditsFormatted: '1 crédito',
    description: 'Story com layout exclusivo em 9:16 para engajamento e conversão de audiência.',
    unit: 'tela',
    category: 'social',
    defaultCount: 4,
  },
  {
    id: 'banner',
    title: 'Banner digital simples',
    credits: 1,
    creditsFormatted: '1 crédito',
    description: 'Banner promocional para site, e-commerce, Google Display ou newsletter.',
    unit: 'banner',
    category: 'banner',
    defaultCount: 2,
  },
  {
    id: 'adaptacao',
    title: 'Adaptação de formato',
    credits: 0.5,
    creditsFormatted: '0,5 crédito',
    description: 'Redimensionamento e ajuste de grid de arte aprovada para outros canais.',
    unit: 'formato',
    category: 'banner',
    defaultCount: 4,
  },
  {
    id: 'carrossel-curto',
    title: 'Carrossel até 5 páginas',
    credits: 3,
    creditsFormatted: '3 créditos',
    description: 'Sequência narrativa contínua de alto valor com capa magnética e CTA final.',
    unit: 'carrossel',
    category: 'carousel',
    defaultCount: 1,
  },
  {
    id: 'carrossel-longo',
    title: 'Carrossel de 6 a 10 páginas',
    credits: 5,
    creditsFormatted: '5 créditos',
    description: 'Material aprofundado, infográfico estruturado e storytelling denso para autoridade.',
    unit: 'carrossel',
    category: 'carousel',
    defaultCount: 0,
  },
  {
    id: 'reel-simples',
    title: 'Edição simples de Reel até 30s',
    credits: 3,
    creditsFormatted: '3 créditos',
    description: 'Cortes dinâmicos, legendas sincronizadas e sonorização com material bruto enviado pelo cliente.',
    unit: 'vídeo',
    category: 'video',
    defaultCount: 1,
  },
];

export const CUSTOM_PROJECTS: CustomProjectItem[] = [
  {
    id: 'identidade-visual',
    title: 'Identidade Visual & Branding',
    description: 'Posicionamento, logo, variações, tipografia, paleta e diretrizes de aplicação de marca.',
    category: 'Branding',
    deliverables: ['Manual de identidade', 'Tipografia & cores', 'Aplicações digitais & impressas', 'Arquivos vetoriais'],
    tag: 'Estratégia & Marca',
  },
  {
    id: 'landing-pages-sites',
    title: 'Landing Pages e Sites de Alta Conversão',
    description: 'Design de interfaces digitais sofisticadas, rápidas e pensadas para converter visitantes em clientes.',
    category: 'Web & UI/UX',
    deliverables: ['Wireframing & UI design', 'Responsivo mobile-first', 'Estrutura comercial de conversão', 'Design system'],
    tag: 'Digital & CRO',
  },
  {
    id: 'catalogos',
    title: 'Catálogos & Editoriais',
    description: 'Diagramação de catálogos de produtos, manuais e materiais institucionais ricos em acabamento.',
    category: 'Editorial',
    deliverables: ['Grid editorial refinada', 'Versões interativa e print', 'Fechamento de arquivo técnico'],
    tag: 'Publicações',
  },
  {
    id: 'apresentacoes',
    title: 'Apresentações Comerciais & Pitch Decks',
    description: 'Storytelling visual e slides estratégicos para captar clientes corporativos, parceiros ou investimentos.',
    category: 'Corporativo',
    deliverables: ['Narrativa comercial', 'Infográficos dedicados', 'Formato PDF interativo & Keynote/PPT'],
    tag: 'Vendas B2B',
  },
  {
    id: 'materiais-graficos',
    title: 'Materiais Gráficos & Comunicação Visual',
    description: 'Embalagens, papelaria premium, folheteria e sinalização com rigor visual impecável.',
    category: 'Gráfico',
    deliverables: ['Papelaria institucional', 'Fechamento profissional para gráfica', 'Provas de cor & facas'],
    tag: 'Impresso & Embalagem',
  },
  {
    id: 'campanhas',
    title: 'Campanhas Publicitárias Integradas',
    description: 'Conceito criativo completo para lançamentos, sazonalidades e posicionamento em múltiplos pontos de contato.',
    category: 'Campanha',
    deliverables: ['Conceito & key visual', 'Desdobramentos online e offline', 'Guia de veiculação'],
    tag: 'Publicidade',
  },
  {
    id: 'design-personalizado',
    title: 'Design Personalizado & Projetos Especiais',
    description: 'Soluções sob medida para demandas não convencionais que exigem direção de arte e técnica sênior.',
    category: 'Tailor-made',
    deliverables: ['Escopo sob medida', 'Cronograma dedicado', 'Consultoria criativa contínua'],
    tag: 'Sob Medida',
  },
];

export const ADDITIONAL_SERVICES: AdditionalServiceItem[] = [
  // Produção Criativa
  {
    id: 'serv-posts-extras',
    title: 'Posts Extras',
    category: 'criativo',
    description: 'Artes estáticas avulsas além da cota mensal do seu ciclo.',
    priceTag: 'Sob consulta',
  },
  {
    id: 'serv-carrosseis-extras',
    title: 'Carrosséis Extras',
    category: 'criativo',
    description: 'Páginas narrativas sequenciais adicionais para feed.',
    priceTag: 'Sob consulta',
  },
  {
    id: 'serv-edicao-videos',
    title: 'Edição de Vídeos Extras',
    category: 'criativo',
    description: 'Cortes adicionais para Reels, Shorts e anúncios a partir do seu material bruto.',
    priceTag: 'Sob consulta',
  },
  {
    id: 'serv-identidade-visual',
    title: 'Identidade Visual Completa',
    category: 'criativo',
    description: 'Sprint dedicado para criação ou redesign integral de marca.',
    priceTag: 'Sob consulta',
  },
  {
    id: 'serv-landing-pages',
    title: 'Landing Pages',
    category: 'criativo',
    description: 'Páginas de vendas e captura desenhadas exclusivamente para conversão.',
    priceTag: 'Sob consulta',
  },
  {
    id: 'serv-sites',
    title: 'Sites Institucionais',
    category: 'criativo',
    description: 'Estruturação completa de site corporativo de alto padrão.',
    priceTag: 'Sob consulta',
  },
  {
    id: 'serv-catalogos',
    title: 'Catálogos e Lookbooks',
    category: 'criativo',
    description: 'Diagramação de materiais institucionais e portfólios densos.',
    priceTag: 'Sob consulta',
  },
  {
    id: 'serv-impressos',
    title: 'Materiais Impressos',
    category: 'criativo',
    description: 'Fechamento técnico para gráficas de banners, folhetos, adesivos e embalagens.',
    priceTag: 'Sob consulta',
  },
  // Estratégia de Marketing
  {
    id: 'serv-planejamento-conteudo',
    title: 'Planejamento Estratégico de Conteúdo',
    category: 'estrategico',
    description: 'Pesquisa de mercado, linhas editoriais, pautas e cronograma de publicações.',
    priceTag: 'Sob consulta',
  },
  {
    id: 'serv-gestao-trafego',
    title: 'Gestão de Tráfego Pago',
    category: 'estrategico',
    description: 'Planejamento de mídia, criação de campanhas no Meta Ads e Google Ads, tracking e otimização de conversões.',
    priceTag: 'Sob consulta',
  },
];

export const COMMERCIAL_RULES: CommercialRule[] = [
  {
    title: 'Ciclo mensal de créditos',
    description: 'O saldo de créditos contratado é válido estritamente dentro de cada ciclo de faturamento de 30 dias contratado.',
  },
  {
    title: 'Conceito de demanda simultânea',
    description: 'Uma demanda simultânea significa exatamente uma solicitação em produção ativa por vez pela equipe, e não uma cota fixa diária de entregas.',
  },
  {
    title: 'Até 2 rodadas de ajustes',
    description: 'Cada peça produzida inclui até duas rodadas de ajustes pontuais, desde que mantidas dentro do briefing originalmente aprovado.',
  },
  {
    title: 'Ajustes por erro de execução',
    description: 'Qualquer eventual desalinhamento ou erro de execução por parte da Fehari é corrigido imediatamente sem nenhum consumo adicional de créditos.',
  },
  {
    title: 'Mudança de conceito ou briefing',
    description: 'Alterações estruturais de conceito ou alterações no briefing após o início da produção configuram uma nova demanda de produção.',
  },
  {
    title: 'Disponibilidade de arquivos editáveis',
    description: 'A liberação de arquivos editáveis (Figma, Illustrator, Photoshop) depende das especificações do plano contratado e da natureza de cada peça.',
  },
  {
    title: 'Demandas excedentes à cota',
    description: 'Necessidades de produção acima do pacote de créditos mensal podem ser orçadas como créditos adicionais ou projetos sob medida.',
  },
  {
    title: 'Prazos de entrega transparentes',
    description: 'Os prazos de conclusão acompanham a complexidade da peça, a ordem na fila de produção e o fornecimento adequado de briefings e materiais.',
  },
];

export const PRICING_FAQS: FAQItem[] = [
  {
    question: 'Como funcionam os créditos?',
    answer: 'Cada plano oferece uma franquia mensal de créditos de produção. Você consome os créditos de acordo com os formatos solicitados (por exemplo, 1 post estático consome 1 crédito; 1 carrossel de até 5 páginas consome 3 créditos; 1 adaptação consome 0,5 crédito). Você tem total flexibilidade para distribuir sua cota entre as peças que sua operação necessita no momento.',
  },
  {
    question: 'O que acontece quando utilizo todos os créditos?',
    answer: 'Ao consumir 100% dos seus créditos antes do encerramento do ciclo mensal, você pode facilmente adquirir créditos adicionais avulsos ou solicitar o upgrade para um plano superior com volume maior, mantendo sua produção em andamento contínuo sem interrupções.',
  },
  {
    question: 'Posso utilizar os créditos para diferentes marcas?',
    answer: 'Sim! Nos planos para agências (como Growth, Agency e Scale), você tem total liberdade para alocar a cota de produção entre diferentes marcas e clientes da sua carteira, centralizando toda a operação criativa em uma única assinatura.',
  },
  {
    question: 'Quantas alterações posso solicitar?',
    answer: 'Cada solicitação inclui até duas rodadas completas de ajustes e refinamentos dentro do escopo do briefing originalmente alinhado. Caso ocorra qualquer falha operacional da nossa parte, a correção é realizada sem qualquer consumo de créditos.',
  },
  {
    question: 'Qual o prazo de entrega?',
    answer: 'Prazos padrão de primeiras versões variam habitualmente entre 24h a 48h úteis para peças simples do dia a dia (posts e stories), e de 48h a 72h úteis para carrosséis elaborados ou materiais extensos, sempre dependendo do envio completo dos insumos e da fila do plano contratado.',
  },
  {
    question: 'O que significa demanda simultânea?',
    answer: 'Significa a quantidade de briefings que nossa equipe técnica trabalha em paralelo ao mesmo tempo. Em um plano com 1 demanda ativa, quando uma peça é finalizada ou enviada para aprovação, a demanda seguinte da sua fila entra imediatamente em execução. Em planos com 2 demandas simultâneas (como Agency e Premium), duas entregas são produzidas paralelamente.',
  },
  {
    question: 'A Fehari trabalha de forma white-label?',
    answer: 'Sim. Em todos os planos dedicados a agências, atuamos de forma estritamente confidencial e white-label nos bastidores. A sua agência mantém 100% do relacionamento, marca e propriedade da entrega perante seu cliente final.',
  },
  {
    question: 'Posso cancelar ou alterar meu plano?',
    answer: 'Sim, a contratação é recorrente mensal sem fidelidade abusiva. Você pode solicitar upgrade, downgrade ou cancelamento para o próximo ciclo de faturamento comunicando nossa equipe com antecedência ao fechamento do ciclo.',
  },
  {
    question: 'Os arquivos editáveis estão incluídos?',
    answer: 'A entrega dos arquivos abertos e editáveis (como fontes do Figma ou vetores) está incluída nos planos Agency (Agências) e Premium (Empresas) quando aplicável ao formato, e pode ser solicitada sob consulta nos demais planos.',
  },
  {
    question: 'Posso contratar serviços fora da assinatura?',
    answer: 'Com certeza. Caso você precise de projetos pontuais com cronograma dedicado — como identidade visual, criação de landing page, pitch deck ou gestão de tráfego pago —, nós estruturamos orçamentos personalizados fora da esteira de créditos recorrentes.',
  },
];

export const PROFILE_OPTIONS = [
  {
    id: 'agencia' as ClientProfile,
    title: 'Sou uma agência',
    shortLabel: 'Agência',
    description: 'Terceirize sua produção criativa, atenda mais clientes e amplie sua operação sem aumentar a equipe interna.',
    recommendedBadge: 'White-Label',
  },
  {
    id: 'empresa' as ClientProfile,
    title: 'Sou uma empresa',
    shortLabel: 'Empresa',
    description: 'Tenha design profissional para sua marca todos os meses, sem precisar contratar um designer interno.',
    recommendedBadge: 'Design Recorrente',
  },
  {
    id: 'avulso' as ClientProfile,
    title: 'Preciso de um projeto avulso',
    shortLabel: 'Projeto Avulso',
    description: 'Solicite identidade visual, apresentações, catálogos, landing pages e projetos personalizados.',
    recommendedBadge: 'Sob Medida',
  },
];

export const WHATSAPP_PHONE = '5564999602571';

export function buildWhatsAppLink({
  profile,
  planName,
  credits,
  price,
  projectName,
  customMessage,
}: {
  profile: ClientProfile;
  planName?: string;
  credits?: string;
  price?: string;
  projectName?: string;
  customMessage?: string;
}): string {
  const profileLabel =
    profile === 'agencia'
      ? 'Agência'
      : profile === 'empresa'
      ? 'Empresa'
      : 'Projeto Avulso';

  let message = `Olá! Vim pela página de planos da Fehari Studio.\n`;
  message += `Perfil: ${profileLabel}\n`;

  if (planName) {
    message += `Plano de interesse: ${planName}`;
    if (price) message += ` (${price})`;
    message += `\n`;
  }

  if (credits) {
    message += `Capacidade: ${credits}\n`;
  }

  if (projectName) {
    message += `Projeto desejado: ${projectName}\n`;
  }

  if (customMessage) {
    message += `Observação: ${customMessage}\n`;
  }

  message += `Gostaria de entender os próximos passos para contratação.`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

