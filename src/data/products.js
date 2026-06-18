export const products = [
  {
    id: 'tradicional',
    brand: 'Don Colonial',
    name: 'Pão de Queijo Tradicional',
    tagline: 'O clássico mineiro que conquista corações.',
    description:
      'Casquinha crocante, massa macia e sabor marcante de queijo para qualquer momento do dia.',
    image: '/images/catalogo-produtos/produto-tradicional.png',
    queijos: ['Meia Cura', 'Muçarela'],
    caracteristicas: ['Sem essência', 'Sem conservante', 'Sem saborizante', 'Sem corante'],
    textura: 'Crocante por fora | Macio por dentro',
    gluten: 'Não contém',
    embalagens: [
      { peso: '1kg e 2kg', tamanhos: ['15g', '25g', '50g', '60g', '80g', '90g', '120g'] },
      { peso: '400g', tamanhos: ['25g'] },
    ],
  },
  {
    id: 'quatro-queijos',
    brand: 'Don Colonial',
    name: 'Pão de Queijo Quatro Queijos',
    tagline: 'Para quem ama queijo de verdade.',
    description:
      'Uma combinação intensa de queijos selecionados, com textura leve e sabor mais marcante.',
    image: '/images/catalogo-produtos/produto-quatro-queijos.png',
    queijos: ['Meia Cura', 'Muçarela', 'Provolone', 'Gorgonzola'],
    caracteristicas: ['Sem essência', 'Sem conservante', 'Sem saborizante', 'Sem corante'],
    textura: 'Crocante por fora | Macio por dentro',
    gluten: 'Não contém',
    embalagens: [
      { peso: '1kg', tamanhos: ['25g', '50g', '80g'] },
      { peso: '400g', tamanhos: ['25g'] },
    ],
  },
  {
    id: 'recheados',
    brand: 'Don Colonial',
    name: 'Pão de Queijo Recheado',
    tagline: 'Crocante por fora e recheado por dentro.',
    description:
      'Opções doces e salgadas para ampliar o cardápio com praticidade, rendimento e muito sabor.',
    image: '/images/catalogo-produtos/produto-recheado-frango.png',
    queijos: ['Meia Cura', 'Parmesão'],
    caracteristicas: ['Sem essência', 'Sem conservante', 'Sem saborizante', 'Sem corante'],
    textura: 'Crocante por fora | Recheado por dentro',
    gluten: 'Varia conforme o sabor',
    embalagens: [{ peso: '800g e 2kg', tamanhos: ['Linha recheada'] }],
    recheados: [
      { sabor: 'Frango', contemGluten: true },
      { sabor: 'Goiabada', contemGluten: false },
      { sabor: 'Requeijão', contemGluten: false },
      { sabor: 'Calabresa', contemGluten: false },
      { sabor: 'Doce de Leite', contemGluten: false },
    ],
  },
  {
    id: 'inga-tradicional',
    brand: 'Ingá',
    name: 'Pão de Queijo Tradicional',
    tagline: 'Preparado para você e sua família.',
    description:
      'Linha tradicional Ingá, feita com bons ingredientes e pensada para consumo diário.',
    image: '/images/catalogo-produtos/produto-inga.png',
    queijos: [],
    caracteristicas: ['Congelado', 'Prático para assar', 'Linha familiar'],
    textura: 'Macio por dentro',
    gluten: 'Consulte a embalagem',
    embalagens: [{ peso: '1kg', tamanhos: ['15g', '25g', '50g', '60g', '80g', '90g', '120g'] }],
  },
];

export const featuredProducts = products.slice(0, 3);
