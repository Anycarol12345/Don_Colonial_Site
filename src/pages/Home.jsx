import { ArrowRight, BadgeCheck, ChevronLeft, ChevronRight, HeartHandshake, PackageCheck, Snowflake } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductBand from '../features/products/ProductBand.jsx';
import { contacts } from '../data/contacts.js';
import { featuredProducts } from '../data/products.js';

const features = [
  {
    icon: BadgeCheck,
    title: 'Queijo em primeiro lugar',
    text: 'Massa leve, casquinha boa e aquele cheiro de pão de queijo saindo do forno.',
  },
  {
    icon: Snowflake,
    title: 'Vai do freezer ao forno',
    text: 'Prático para ter em casa, vender no balcão ou servir no café.',
  },
  {
    icon: PackageCheck,
    title: 'Tem para cada fome',
    text: 'Tradicional, quatro queijos, recheados e a linha Ingá em tamanhos variados.',
  },
  {
    icon: HeartHandshake,
    title: 'Para quem quer revender',
    text: 'Atendimento direto para conversar sobre região, pedido e oportunidade de venda.',
  },
];

const heroSlides = [
  {
    eyebrow: 'O verdadeiro pão de queijo',
    title: 'Preparado com amor e muito queijo.',
    text: 'Receita inspirada na tradição mineira, com massa leve e sabor de queijo de verdade.',
    image: '/images/catalogo-produtos/hero-catalogo.jpg',
    alt: 'Pão de queijo Don Colonial em cesta',
    highlight: 'Receita tradicional mineira',
    cta: { to: '/produtos', label: 'Ver produtos' },
  },
  {
    eyebrow: 'Qualidade acima de tudo',
    title: 'Massa leve, saborosa e pronta para assar.',
    text: 'Do freezer para o forno, para servir quentinho quando bater vontade.',
    image: '/images/catalogo-produtos/produto-tradicional.jpg',
    alt: 'Produto tradicional Don Colonial',
    highlight: 'Congelado, prático e gostoso',
    cta: { to: '/qualidade', label: 'Conhecer qualidade' },
  },
  {
    eyebrow: 'Seja um revendedor',
    title: 'Leve Don Colonial para sua região.',
    text: 'Converse com a equipe e veja como trabalhar com os produtos Don Colonial.',
    image: '/images/catalogo-produtos/produto-recheado.jpg',
    alt: 'Linha de produtos recheados Don Colonial',
    highlight: 'Excelente oportunidade de lucro',
    cta: { to: '/revendedores', label: 'Conhecer revenda' },
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  const previousSlide = () => {
    setActiveSlide((current) => (current === 0 ? heroSlides.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-bg-alt)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(238,112,32,0.18),transparent_38%)]" />
        <div className="container relative grid min-h-[calc(100vh-88px)] items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div key={activeSlide} className="hero-fade">
              <p className="section-eyebrow">{slide.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[var(--color-dark)] sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
                {slide.text}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to={slide.cta.to} className="btn-primary">
                  {slide.cta.label}
                  <ArrowRight size={18} />
                </Link>
                <a href={contacts.whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary">
                  Falar no WhatsApp
                </a>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={previousSlide}
                className="flex h-11 w-11 items-center justify-center rounded-md border border-black/10 bg-white text-[var(--color-primary-dark)] shadow-sm transition hover:-translate-y-0.5"
                aria-label="Slide anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="flex h-11 w-11 items-center justify-center rounded-md border border-black/10 bg-white text-[var(--color-primary-dark)] shadow-sm transition hover:-translate-y-0.5"
                aria-label="Próximo slide"
              >
                <ChevronRight size={20} />
              </button>
              <div className="flex gap-2" aria-label="Slides do carrossel">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-sm transition-all ${
                      activeSlide === index ? 'w-9 bg-[var(--color-primary)]' : 'w-2.5 bg-black/20'
                    }`}
                    aria-label={`Ir para o slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-[var(--color-primary)]/15" />
            <img
              key={activeSlide}
              src={slide.image}
              alt={slide.alt}
              className="hero-fade relative h-[340px] w-full rounded-[1.25rem] bg-[#2b241f] object-contain shadow-2xl shadow-black/15 sm:h-[460px] lg:h-[560px]"
            />
            <div className="absolute -bottom-6 left-4 right-4 rounded-xl bg-white p-5 shadow-xl shadow-black/10 sm:right-auto sm:left-6 sm:max-w-xs">
              <strong className="text-[var(--color-dark)]">{slide.highlight}</strong>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Confira sabores, embalagens e canais de atendimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">Diferenciais</p>
            <h2>O básico bem feito: massa leve, queijo e praticidade.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="card">
                  <Icon className="text-[var(--color-primary)]" size={32} />
                  <h3 className="mt-5 text-xl font-bold text-[var(--color-dark)]">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-bg-alt)]">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">Produtos em destaque</p>
            <h2>Escolha pelo sabor, pelo tamanho ou pela ocasião.</h2>
          </div>
          <div className="space-y-8">
            {featuredProducts.map((product, index) => (
              <ProductBand key={product.id} product={product} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="overflow-hidden rounded-xl bg-[var(--color-dark)] p-8 text-white shadow-xl shadow-black/10 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="section-eyebrow text-white/70">Seja um revendedor</p>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">Quer vender Don Colonial?</h2>
                <p className="mt-4 max-w-2xl leading-7 text-white/75">
                  Chame a equipe e fale sobre sua cidade, seu ponto de venda e a linha ideal para começar.
                </p>
              </div>
              <Link to="/revendedores" className="btn-primary justify-center">
                Conhecer revenda
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
