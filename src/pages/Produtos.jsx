import PageHero from '../components/PageHero.jsx';

const productSections = [
  {
    title: 'Pão de Queijo Don Colonial',
    color: '#980018',
    products: [
      {
        name: 'Tradicional',
        color: '#826F62',
        description: 'O clássico mineiro que conquista corações! Casquinha crocante e sabor marcante de queijo.',
        image: '/images/catalogo-produtos/produto-tradicional.png',
        packages: [
          { label: 'Embalagens de 1kg e 2kg', sizes: '15g | 25g | 50g | 60g | 80g | 90g | 120g' },
          { label: 'Embalagem 400g', sizes: '25g' },
        ],
        specs: [
          'Queijos: Meia Cura e Muçarela',
          'Sem: Essência, Conservante, Saborizante, Corante',
          'Textura: Crocante por fora | Macio por dentro',
          'Glúten: Não contém',
        ],
      },
      {
        name: 'Quatro Queijos',
        color: '#C1A684',
        description: 'Para quem ama queijo de verdade! Uma mistura irresistível de sabores marcantes.',
        image: '/images/catalogo-produtos/produto-quatro-queijos.png',
        packages: [
          { label: 'Embalagem de 1kg', sizes: '25g | 50g | 80g' },
          { label: 'Embalagem 400g', sizes: '25g' },
        ],
        specs: [
          'Queijos: Meia Cura, Muçarela, Provolone e Gorgonzola',
          'Sem: Essência, Conservante, Saborizante, Corante',
          'Textura: Crocante por fora | Macio por dentro',
          'Glúten: Não contém',
        ],
      },
    ],
  },
  {
    title: 'Pão de Queijo Recheado',
    color: '#137c35',
    products: [
      {
        name: 'Recheado com Frango',
        color: '#137c35',
        description: 'Crocante por fora e por dentro um delicioso recheio de frango!',
        image: '/images/catalogo-produtos/produto-recheado-frango.png',
        packages: [{ label: 'Embalagens de', sizes: '800g e 2kg' }],
        specs: [
          'Queijos: Meia Cura e Parmesão',
          'Sem: Essência, Conservante, Saborizante, Corante',
          'Textura: Crocante por fora | Recheado por dentro',
          'Glúten: Contém',
        ],
      },
      {
        name: 'Recheado com Goiabada',
        color: '#980018',
        description: 'Crocante por fora e por dentro um delicioso recheio de goiabada!',
        image: '/images/catalogo-produtos/produto-recheado-goiabada.png',
        packages: [{ label: 'Embalagens de', sizes: '800g e 2kg' }],
        specs: [
          'Queijos: Meia Cura e Parmesão',
          'Sem: Essência, Conservante, Saborizante, Corante',
          'Textura: Crocante por fora | Recheado por dentro',
          'Glúten: Não contém',
        ],
      },
      {
        name: 'Recheado com Requeijão',
        color: '#393F52',
        description: 'Crocante por fora e por dentro um delicioso recheio de requeijão!',
        image: '/images/catalogo-produtos/produto-recheado-requeijao.png',
        packages: [{ label: 'Embalagens de', sizes: '800g e 2kg' }],
        specs: [
          'Queijos: Meia Cura e Parmesão',
          'Sem: Essência, Conservante, Saborizante, Corante',
          'Textura: Crocante por fora | Recheado por dentro',
          'Glúten: Não contém',
        ],
      },
      {
        name: 'Recheado com Calabresa',
        color: '#B44E44',
        description: 'Crocante por fora e por dentro um delicioso recheio de calabresa!',
        image: '/images/catalogo-produtos/produto-recheado-calabresa.png',
        packages: [{ label: 'Embalagens de', sizes: '800g e 2kg' }],
        specs: [
          'Queijos: Meia Cura e Parmesão',
          'Sem: Essência, Conservante, Saborizante, Corante',
          'Textura: Crocante por fora | Recheado por dentro',
          'Glúten: Não contém',
        ],
      },
      {
        name: 'Recheado com Doce de Leite',
        color: '#9B723A',
        description: 'Crocante por fora e por dentro um delicioso recheio de doce de leite!',
        image: '/images/catalogo-produtos/produto-recheado-doce-leite.png',
        packages: [{ label: 'Embalagens de', sizes: '800g e 2kg' }],
        specs: [
          'Queijos: Meia Cura e Parmesão',
          'Sem: Essência, Conservante, Saborizante, Corante',
          'Textura: Crocante por fora | Recheado por dentro',
          'Glúten: Não contém',
        ],
      },
    ],
  },
  {
    title: 'Ingá Pão de Queijo',
    color: '#12a4d6',
    products: [
      {
        name: 'Tradicional',
        description: 'Preparado com os melhores ingredientes, Ingá Pão de Queijo para você e sua família.',
        image: '/images/catalogo-produtos/produto-inga.png',
        packages: [{ label: 'Embalagem 1kg', sizes: '15g | 25g | 50g | 60g | 80g | 90g | 120g' }],
        specs: ['Produto congelado', 'Linha familiar', 'Prático para assar'],
      },
    ],
  },
];

export default function Produtos() {
  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Escolha seu pão de queijo Don Colonial."
        description="Veja sabores, embalagens e tamanhos disponíveis no catálogo."
      />

      <section className="section bg-[var(--color-bg-alt)]">
        <div className="container space-y-10">
          {productSections.map((section) => (
            <div key={section.title}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-4 w-4 rounded-sm" style={{ backgroundColor: section.color }} />
                <h2 className="text-2xl font-black text-[var(--color-dark)]">{section.title}</h2>
              </div>
              <div className="space-y-5">
                {section.products.map((product) => (
                  <ProductCatalogCard key={product.name} product={product} color={section.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ProductCatalogCard({ product, color }) {
  const cardColor = product.color || color;

  return (
    <article
      className="grid gap-6 p-6 text-white shadow-xl shadow-black/10 md:grid-cols-[1fr_15rem] md:items-center lg:grid-cols-[1fr_18rem]"
      style={{ backgroundColor: cardColor }}
    >
      <div>
        <h3 className="text-3xl font-black leading-tight">{product.name}</h3>
        <p className="mt-3 max-w-3xl text-lg leading-7 text-white/90">{product.description}</p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {product.packages.map((item) => (
            <div key={`${product.name}-${item.label}`} className="border border-white/30 bg-white/10 p-4">
              <strong className="block text-sm uppercase tracking-[0.16em] text-white/75">{item.label}</strong>
              <span className="mt-1 block text-lg font-black">{item.sizes}</span>
            </div>
          ))}
        </div>

        <ul className="mt-5 grid gap-2 text-sm font-semibold text-white/90 md:grid-cols-2">
          {product.specs.map((spec) => (
            <li key={spec} className="border-l-2 border-white/50 pl-3">
              {spec}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="flex min-h-56 items-center justify-center p-2 md:min-h-72 lg:min-h-80"
        style={{ backgroundColor: cardColor }}
      >
        <img src={product.image} alt={product.name} className="max-h-72 w-full object-contain lg:max-h-96" />
      </div>
    </article>
  );
}
