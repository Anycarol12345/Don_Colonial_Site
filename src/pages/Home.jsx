import { ArrowRight, BadgeCheck, ChevronLeft, ChevronRight, HeartHandshake, PackageCheck, Snowflake } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { contacts } from '../data/contacts.js';

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

const flavorLines = [
  {
    line: 'Tradicional',
    items: [
      { name: 'Tradicional', image: '/images/catalogo-produtos/produto-tradicional.png', color: '#826F62' },
      { name: 'Quatro Queijos', image: '/images/catalogo-produtos/produto-quatro-queijos.png', color: '#C1A684' },
    ],
  },
  {
    line: 'Recheados',
    items: [
      { name: 'Frango', image: '/images/catalogo-produtos/produto-recheado-frango.png', color: '#137c35' },
      { name: 'Goiabada', image: '/images/catalogo-produtos/produto-recheado-goiabada.png', color: '#980018' },
      { name: 'Requeijão', image: '/images/catalogo-produtos/produto-recheado-requeijao.png', color: '#393F52' },
      { name: 'Calabresa', image: '/images/catalogo-produtos/produto-recheado-calabresa.png', color: '#B44E44' },
      { name: 'Doce de Leite', image: '/images/catalogo-produtos/produto-recheado-doce-leite.png', color: '#9B723A' },
    ],
  },
  {
    line: 'Ingá',
    items: [
      { name: 'Tradicional', image: '/images/catalogo-produtos/produto-inga.png', color: '#12a4d6' },
    ],
  },
];

const heroSlides = [
  {
    eyebrow: 'O verdadeiro pão de queijo',
    title: 'Preparado com amor e muito queijo.',
    text: 'Receita inspirada na tradição mineira, com massa leve e sabor de queijo de verdade.',
    image: '/images/hero-pao-de-queijo.png',
    alt: 'Pão de queijo Don Colonial em cesta',
    highlight: 'Receita tradicional mineira',
    cta: { to: '/produtos', label: 'Ver produtos' },
  },
  {
    eyebrow: 'Qualidade acima de tudo',
    title: 'Massa leve, saborosa e pronta para assar.',
    text: 'Do freezer para o forno, para servir quentinho quando bater vontade.',
    image: '/images/pao-de-queijo-tabua.png',
    alt: 'Produto tradicional Don Colonial',
    highlight: 'Congelado, prático e gostoso',
    cta: { to: '/qualidade', label: 'Conhecer qualidade' },
  },
  {
    eyebrow: 'Seja um distribuidor',
    title: 'Leve Don Colonial para sua região.',
    text: 'Converse com a equipe e veja como trabalhar com os produtos Don Colonial.',
    image: '/images/pao-de-queijo-bowl.png',
    alt: 'Linha de produtos recheados Don Colonial',
    highlight: 'Excelente oportunidade de lucro',
    cta: { to: '/distribuidores', label: 'Conhecer distribuição' },
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = heroSlides[activeSlide];
  const dragStartX = useRef(null);

  const previousSlide = useCallback(() => {
    setActiveSlide((current) => (current === 0 ? heroSlides.length - 1 : current - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;

    const intervalId = window.setInterval(nextSlide, 6000);
    return () => window.clearInterval(intervalId);
  }, [isPaused, nextSlide]);

  const handlePointerDown = (event) => {
    dragStartX.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (dragStartX.current === null) return;

    const deltaX = event.clientX - dragStartX.current;
    dragStartX.current = null;

    if (Math.abs(deltaX) < 50) return;
    if (deltaX < 0) {
      nextSlide();
    } else {
      previousSlide();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      previousSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <>
      <section
        className="relative overflow-hidden bg-[var(--color-bg-alt)]"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Destaques Don Colonial"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => {
          dragStartX.current = null;
        }}
        style={{ touchAction: 'pan-y' }}
      >
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

      <section className="section py-12! md:py-16!">
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

      <section className="section py-12! md:py-16!">
        <div className="container">
          <div className="flex flex-col items-start gap-6 rounded-xl border border-black/5 bg-[var(--color-primary-soft)] p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-[var(--color-primary)] shadow-sm">
                <Snowflake size={24} />
              </span>
              <div>
                <p className="section-eyebrow">Qualidade</p>
                <h2 className="mt-2 text-2xl font-black text-[var(--color-dark)] md:text-3xl">
                  Do freezer ao forno, sem abrir mão do sabor.
                </h2>
                <p className="mt-3 max-w-xl leading-7 text-[var(--color-muted)]">
                  Ingredientes escolhidos com cuidado e informação clara de sabores, tamanhos e glúten.
                </p>
              </div>
            </div>
            <Link to="/qualidade" className="btn-primary shrink-0 justify-center">
              Conhecer qualidade
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section py-12! md:py-16!">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">Vitrine de sabores</p>
            <h2>Conheça os sabores por linha.</h2>
          </div>
          <div className="space-y-10">
            {flavorLines.map((group) => (
              <div key={group.line}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-sm bg-[var(--color-primary)]" />
                  <h3 className="text-xl font-black text-[var(--color-dark)]">{group.line}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {group.items.map((item) => (
                    <Link
                      key={`${group.line}-${item.name}`}
                      to="/produtos"
                      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div
                        className="flex h-44 items-center justify-center p-3 sm:h-48"
                        style={{ backgroundColor: item.color }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="max-h-full w-auto object-contain transition group-hover:scale-105"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-2 p-4">
                        <span className="font-bold text-[var(--color-dark)]">{item.name}</span>
                        <ArrowRight size={18} className="shrink-0 text-[var(--color-primary)]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-12! md:py-16!">
        <div className="container">
          <div className="overflow-hidden rounded-xl bg-[var(--color-dark)] p-8 text-white shadow-xl shadow-black/10 md:p-12">
            <div className="grid items-center gap-6 md:grid-cols-[1.4fr_auto] md:justify-between">
              <div>
                <p className="section-eyebrow text-white/70">Seja um distribuidor</p>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">Quer vender Don Colonial?</h2>
                <p className="mt-4 max-w-xl leading-7 text-white/75">
                  Chame a equipe e fale sobre sua cidade, seu ponto de venda e a linha ideal para começar.
                </p>
              </div>
              <Link to="/distribuidores" className="btn-primary justify-center">
                Conhecer distribuição
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
