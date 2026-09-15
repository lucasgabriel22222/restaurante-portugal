import { CompanyData, MenuItem, Differential, Testimonial, FaqItem } from '../types';

export const companyData: CompanyData = {
  name: 'Restaurante Portugal',
  tagline: 'Almoço com tempero caseiro e a verdadeira comida tradicional em Arapongas',
  address: 'Rua Rouxinol, 2403',
  neighborhood: 'Jardim do Café',
  city: 'Arapongas',
  state: 'PR',
  zipCode: '86706-198',
  fullAddress: 'Rua Rouxinol, 2403 - Jardim do Café, Arapongas - PR, 86706-198, Brasil',
  phone: '+5543998258660',
  phoneDisplay: '(43) 99825-8660',
  whatsappUrl: 'https://wa.me/5543998258660',
  googleRating: 4.2,
  googleReviewsCount: 104,
  hoursSummary: 'Segunda a Sábado: 11h às 14h',
  openHour: 11,
  closeHour: 14,
  daysOpen: 'Segunda a Sábado',
  // Campo dinâmico para Instagram
  instagramUrl: 'https://instagram.com/restauranteportugal_arapongas',
};

export const getWhatsAppOrderUrl = (itemName?: string) => {
  const base = 'https://wa.me/5543998258660';
  if (!itemName) {
    const defaultText = encodeURIComponent('Olá! Vim pelo site e gostaria de saber o cardápio do dia do Restaurante Portugal.');
    return `${base}?text=${defaultText}`;
  }
  const itemText = encodeURIComponent(`Olá! Gostaria de pedir o ${itemName} do Restaurante Portugal.`);
  return `${base}?text=${itemText}`;
};

export const menuItems: MenuItem[] = [
  {
    id: 'marmitex-tradicional',
    name: 'Marmitex Tradicional do Dia',
    category: 'marmitex',
    badge: 'Mais Pedido',
    portion: 'Tamanhos P, M e G',
    priceNote: 'Opções P, M e G',
    description: 'Arroz branco soltinho, feijão caseiro encorpado, carne do dia (bife acebolado, frango grelhado ou assado), legumes e acompanhamento.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'marmitex-fit',
    name: 'Marmitex Fit & Leve',
    category: 'marmitex',
    badge: 'Entrega Rápida',
    portion: 'Individual Balanceada',
    priceNote: 'Porção Equilibrada',
    description: 'Arroz integral ou branco, feijão temperado com alho e louro, filé de peito de frango grelhado suculento e mix generoso de legumes ao vapor.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bife-a-cavalo',
    name: 'Prato Executivo Bife a Cavalo',
    category: 'executivo',
    badge: 'Especial do Dia',
    portion: 'Prato Executivo Individual',
    priceNote: 'Almoço Completo',
    description: 'Suculento bife bovino grelhado no ponto com cebolas douradas, finalizado com ovos estalados de gema mole, arroz fresco, feijão e batatas fritas.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'parmegiana-carne',
    name: 'Parmegiana Tradicional com Molho Caseiro',
    category: 'executivo',
    badge: 'Destaque da Casa',
    portion: 'Individual ou Marmita Família',
    priceNote: 'Opção Marmita ou Buffet',
    description: 'Filé bovino ou de frango empanado crocante, coberto com molho de tomates frescos cozido lentamente, queijo mussarela derretido e orégano.',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'frango-grelhado',
    name: 'Filé de Frango Grelhado com Ervas',
    category: 'executivo',
    badge: 'Tempero Caseiro',
    portion: 'Prato Executivo / Marmitex',
    priceNote: 'Excelente Custo-Benefício',
    description: 'Peito de frango marinado no limão, alho e ervas finas, grelhado na chapa até dourar. Acompanha arroz, feijão carioquinha e farofa especial da casa.',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'feijoada-completa',
    name: 'Feijoada Completa dos Dias Especiais',
    category: 'executivo',
    badge: 'Quarta & Sábado',
    portion: 'Marmita M / G ou Buffet',
    priceNote: 'Dias Especiais',
    description: 'Feijão preto com carnes selecionadas, linguiça calabresa defumada, costelinha, lombo, couve refogada no alho, farofa crocante, arroz e laranja.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'buffet-por-kilo',
    name: 'Buffet Livre / Por Quilo no Local',
    category: 'executivo',
    badge: 'Presencial',
    portion: 'Por Quilo ou Prato Feito',
    priceNote: 'Pesagem Livre',
    description: 'Balcão térmico completo com mais de 12 opções quentes diárias: carnes assadas, grelhados, massas, arroz, feijão e acompanhamentos preparados na hora.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'saladas-frescas',
    name: 'Saladas Variadas e Legumes da Estação',
    category: 'acompanhamentos',
    badge: 'Frescor Diário',
    portion: 'Porção para Marmita / Buffet',
    priceNote: 'Incluso ou Avulso',
    description: 'Mix de folhas verdes higienizadas, tomate, pepino, beterraba cozida, vinagrete caseiro com azeite e maionese tradicional de batata com cenoura.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'farofa-batata',
    name: 'Porção de Batata Frita Crocante & Farofa',
    category: 'acompanhamentos',
    badge: 'Acompanhamento',
    portion: 'Porção Adicional',
    priceNote: 'Sob Encomenda',
    description: 'Batatas fritas sequinhas e douradas acompanhadas de farofa crocante com pedacinhos de bacon e cebola tostada.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sucos-naturais',
    name: 'Sucos Naturais e Refrigerantes Gelados',
    category: 'bebidas',
    badge: 'Bebidas',
    portion: 'Copos 400ml / Lata / 2 Litros',
    priceNote: 'Opções Variadas',
    description: 'Sucos naturais de laranja espremida na hora, polpas de frutas, refrigerantes de lata e garrafas 2L para acompanhar seu almoço ou pedidos em grupo.',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
  },
];

export const differentials: Differential[] = [
  {
    id: 'tempero-caseiro',
    title: 'Tempero Caseiro Autêntico',
    description: 'Ingredientes selecionados e refeições preparadas diariamente no início da manhã, sem aditivos industriais ou temperos prontos.',
    iconName: 'CookingPot',
  },
  {
    id: 'marmitex-quentinho',
    title: 'Marmitex Quentinho e Bem Embalado',
    description: 'Embalagens térmicas vedadas com precisão que preservam a temperatura ideal e a integridade da comida até sua mesa.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'pontualidade-entrega',
    title: 'Pontualidade na Entrega',
    description: 'Logística ágil em Arapongas para garantir que o seu almoço ou o da sua equipe chegue pontualmente na hora certa da refeição.',
    iconName: 'Clock',
  },
  {
    id: 'atendimento-empresas',
    title: 'Atendimento para Empresas',
    description: 'Condições personalizadas, faturamento facilitado e rotina pontual para fornecimento de marmitas corporativas diárias.',
    iconName: 'Building2',
  },
  {
    id: 'custo-beneficio',
    title: 'Excelente Custo-Benefício',
    description: 'Porções generosas, pratos bem servidos e ingredientes de primeira qualidade com valores acessíveis para seu almoço diário.',
    iconName: 'ThumbsUp',
  },
  {
    id: 'ambiente-acolhedor',
    title: 'Ambiente Acolhedor no Jardim do Café',
    description: 'Salão limpo, agradável e organizado para quem prefere fazer sua pausa de almoço presencialmente em Arapongas.',
    iconName: 'Truck',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Luiz Gustavo',
    rating: 5,
    comment: 'Comida caseira de verdade, muito bem temperada e com preço excelente. O atendimento é rápido e a entrega do marmitex chega quentinha.',
    verified: true,
    dateNote: 'Avaliação real no Google',
  },
  {
    id: 't-2',
    name: 'Ana Paula M.',
    rating: 5,
    comment: 'Ótima opção para almoçar diariamente em Arapongas. Variedade boa de saladas e pratos quentes. Recomendo demais!',
    verified: true,
    dateNote: 'Avaliação real no Google',
  },
  {
    id: 't-3',
    name: 'Carlos Eduardo',
    rating: 4,
    comment: 'Almoço muito gostoso, prato bem servido e marmita bem embalada. Atendimento pelo WhatsApp nota 10.',
    verified: true,
    dateNote: 'Avaliação real no Google',
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Vocês entregam Marmitex?',
    answer: 'Sim! Entregamos marmitex quentinhas na sua residência ou empresa em Arapongas. Peça diretamente pelo WhatsApp.',
  },
  {
    id: 'faq-2',
    question: 'Qual é o horário do almoço?',
    answer: 'Atendemos presencialmente e com entregas de segunda a sábado, das 11h às 14h.',
  },
  {
    id: 'faq-3',
    question: 'Vocês atendem empresas para fornecimento de marmitas diárias?',
    answer: 'Sim! Temos condições especiais e organização de entregas diárias para empresas e comércios da região.',
  },
  {
    id: 'faq-4',
    question: 'Como faço para saber o cardápio do dia?',
    answer: 'É só clicar no botão de WhatsApp do site que enviamos o cardápio atualizado do dia imediatamente.',
  },
  {
    id: 'faq-5',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos Pix, cartões de débito, crédito e dinheiro.',
  },
];
