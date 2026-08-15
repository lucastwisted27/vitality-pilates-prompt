import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  ENDERECO,
  HORARIO,
  INSTAGRAM_URL,
  MAPS_URL,
  whatsappUrl,
} from "@/components/site-data";
import {
  Activity,
  Clock,
  Flower2,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Move3d,
  Quote,
  UserRound,
  X,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aulaImg from "@/assets/aula.jpg";
import salaImg from "@/assets/espaco-sala.jpg";
import equipImg from "@/assets/espaco-equipamentos.jpg";
import instrutorImg from "@/assets/espaco-instrutor.jpg";
import recepcaoImg from "@/assets/espaco-recepcao.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vitality Pilates Manaus | Studio de Pilates em Manaus" },
      {
        name: "description",
        content:
          "Academia de Pilates em Manaus com atendimento personalizado. Fortaleça o corpo, melhore a postura e cuide do bem-estar. Agende sua aula experimental pelo WhatsApp.",
      },
      { property: "og:title", content: "Vitality Pilates Manaus | Studio de Pilates em Manaus" },
      {
        property: "og:description",
        content:
          "Pilates em Manaus para fortalecer o corpo, melhorar a postura e cuidar do seu bem-estar. Agende sua aula experimental.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Vitality Pilates Manaus",
          description:
            "Studio de Pilates em Manaus com atendimento personalizado, foco em postura, força e bem-estar.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Manaus",
            addressRegion: "AM",
            addressCountry: "BR",
          },
          areaServed: "Manaus, AM",
          knowsAbout: ["Pilates", "Postura", "Mobilidade", "Bem-estar"],
        }),
      },
    ],
  }),
});

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Pilates", href: "#pilates" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Espaço", href: "#espaco" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const BENEFICIOS = [
  {
    icon: Activity,
    title: "Fortalecimento",
    text: "Exercícios pensados para fortalecer o corpo e melhorar sua resistência.",
  },
  {
    icon: Move3d,
    title: "Postura e mobilidade",
    text: "Movimentos que ajudam a desenvolver consciência corporal, mobilidade e postura.",
  },
  {
    icon: UserRound,
    title: "Acompanhamento personalizado",
    text: "Atenção individual para respeitar seus objetivos e seu nível de condicionamento.",
  },
  {
    icon: Flower2,
    title: "Bem-estar",
    text: "Um ambiente tranquilo para você cuidar do corpo e também da mente.",
  },
];

const PERFIS = [
  {
    title: "Para quem está começando",
    text: "Não importa seu nível de condicionamento. Comece no seu ritmo.",
  },
  {
    title: "Para quem busca fortalecer o corpo",
    text: "Treinos focados em força, estabilidade e controle corporal.",
  },
  {
    title: "Para quem quer melhorar a postura",
    text: "Trabalhe consciência corporal e movimentos mais eficientes no dia a dia.",
  },
  {
    title: "Para quem busca qualidade de vida",
    text: "Transforme o exercício em um momento de cuidado com você.",
  },
];

const PASSOS = [
  {
    n: "01",
    title: "Entre em contato",
    text: "Fale conosco pelo WhatsApp e tire suas dúvidas.",
  },
  {
    n: "02",
    title: "Conheça a Vitality",
    text: "Agende sua primeira experiência e conheça nosso espaço.",
  },
  {
    n: "03",
    title: "Comece sua transformação",
    text: "Encontre uma rotina de Pilates que faça sentido para você.",
  },
];

const DEPOIMENTOS = [
  {
    text: "Comecei por indicação e me surpreendi com o cuidado durante as aulas. Hoje não consigo mais ficar sem Pilates.",
    name: "Mariana, Manaus",
  },
  {
    text: "Além de melhorar muito minha postura, comecei a me sentir mais disposta no dia a dia.",
    name: "Camila, Manaus",
  },
  {
    text: "Ambiente maravilhoso e atendimento muito atencioso. Me senti confortável desde a primeira aula.",
    name: "Juliana, Manaus",
  },
];

const FAQ = [
  {
    q: "Preciso ter experiência com Pilates?",
    a: "Não. As aulas podem ser adaptadas para diferentes níveis.",
  },
  {
    q: "O Pilates é indicado para iniciantes?",
    a: "Sim. A prática pode ser iniciada respeitando o condicionamento e as necessidades de cada pessoa.",
  },
  {
    q: "Como faço para agendar uma aula?",
    a: "Entre em contato pelo WhatsApp e nossa equipe irá orientar você.",
  },
  {
    q: "Preciso levar algum equipamento?",
    a: "[Resposta editável conforme a política do studio.]",
  },
  {
    q: "Onde fica a Vitality Pilates Manaus?",
    a: ENDERECO,
  },
];

const BENEFICIOS_LISTA = [
  "Fortalecimento muscular",
  "Melhora da postura",
  "Maior flexibilidade",
  "Mobilidade",
  "Equilíbrio",
  "Consciência corporal",
  "Bem-estar e qualidade de vida",
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <WhatsAppFloat />

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
          <a href="#inicio" className="min-w-0">
            <span className="block truncate font-display text-xl tracking-wide">
              Vitality <span className="text-primary">Pilates</span>
            </span>
            <span className="eyebrow block text-[0.6rem]">Manaus</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {NAV.slice(0, 7).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90"
            >
              Agendar aula
            </a>
          </nav>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="shrink-0 rounded-full border border-border p-2.5 text-foreground lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav
            className="animate-fade-in border-t border-border/60 bg-background px-5 py-4 lg:hidden"
            aria-label="Navegação mobile"
          >
            <ul className="grid gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-2 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-full bg-primary px-6 py-4 text-center text-base font-medium text-primary-foreground"
            >
              Agendar aula experimental
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
            <Reveal>
              <p className="eyebrow">Studio de Pilates em Manaus</p>
              <h1 className="mt-5 text-[2.6rem] leading-[1.05] sm:text-6xl">
                Movimente seu corpo.
                <span className="block italic text-primary">Transforme sua vida.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                Pilates para fortalecer o corpo, melhorar sua postura e cuidar do seu bem-estar em
                Manaus.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lift"
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
                  Agendar aula experimental
                </a>
                <a
                  href="#sobre"
                  className="inline-flex items-center justify-center rounded-full border border-primary/30 px-7 py-4 text-base font-medium text-primary transition-all duration-300 hover:bg-secondary"
                >
                  Conhecer a Vitality
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Atendimento personalizado <span className="text-gold">•</span> Ambiente acolhedor{" "}
                <span className="text-gold">•</span> Profissionais qualificados
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <div className="absolute -left-4 -top-4 hidden h-40 w-40 rounded-full bg-accent/60 blur-2xl lg:block" />
                <img
                  src={heroImg}
                  alt="Mulher praticando Pilates em reformer no studio Vitality Pilates Manaus"
                  width={1408}
                  height={1600}
                  className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section id="beneficios" className="bg-secondary/40 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Por que escolher a Vitality?</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Mais do que Pilates. Um cuidado completo com você.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFICIOS.map((b, i) => (
                <Reveal key={b.title} delay={i * 90}>
                  <article className="h-full rounded-3xl border border-border/70 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                    <b.icon className="h-7 w-7 text-primary" strokeWidth={1.2} />
                    <h3 className="mt-5 text-xl">{b.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONHEÇA O PILATES */}
        <section id="pilates" className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal>
              <img
                src={aulaImg}
                alt="Instrutora orientando aluna durante uma aula de Pilates em Manaus"
                loading="lazy"
                width={1200}
                height={1408}
                className="aspect-[5/6] w-full rounded-[2rem] object-cover shadow-soft"
              />
            </Reveal>
            <Reveal delay={100} className="lg:order-first">
              <p className="eyebrow">Conheça o Pilates</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Seu corpo pode se movimentar melhor.</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                O Pilates trabalha o corpo de forma integrada, com movimentos controlados e
                respiração consciente. É uma prática que respeita o seu ritmo e evolui junto com
                você — seja para retomar a atividade física, seja para ganhar mais força e
                autonomia no dia a dia.
              </p>
              <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {BENEFICIOS_LISTA.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section id="sobre" className="bg-secondary/40 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Para quem é?</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Pilates para diferentes momentos da sua vida.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {PERFIS.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <article className="group h-full rounded-3xl border border-border/70 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                    <span className="font-display text-4xl text-primary-soft transition-colors duration-500 group-hover:text-primary">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 text-xl">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* O ESPAÇO */}
        <section id="espaco" className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">O espaço</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Um espaço pensado para você.</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Na Vitality Pilates Manaus, cada detalhe foi pensado para proporcionar uma
                experiência confortável, acolhedora e profissional durante suas aulas.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal className="sm:col-span-2">
                <figure className="group overflow-hidden rounded-[1.75rem]">
                  <img
                    src={salaImg}
                    alt="Sala de Pilates com aparelhos reformer no studio em Manaus"
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="h-64 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 lg:h-72"
                  />
                </figure>
              </Reveal>
              <Reveal delay={90}>
                <figure className="group overflow-hidden rounded-[1.75rem]">
                  <img
                    src={equipImg}
                    alt="Detalhe dos equipamentos e molas do aparelho de Pilates"
                    loading="lazy"
                    width={912}
                    height={1104}
                    className="h-64 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 lg:h-72"
                  />
                </figure>
              </Reveal>
              <Reveal delay={180}>
                <figure className="group overflow-hidden rounded-[1.75rem]">
                  <img
                    src={instrutorImg}
                    alt="Instrutora orientando aluna em aparelho de Pilates"
                    loading="lazy"
                    width={912}
                    height={1104}
                    className="h-64 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 lg:h-72"
                  />
                </figure>
              </Reveal>
              <Reveal delay={90} className="sm:col-span-2 lg:col-span-4">
                <figure className="group overflow-hidden rounded-[1.75rem]">
                  <img
                    src={recepcaoImg}
                    alt="Área de recepção acolhedora do studio de Pilates"
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="h-64 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 lg:h-80"
                  />
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="bg-secondary/40 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Como funciona</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Três passos para começar.</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {PASSOS.map((p, i) => (
                <Reveal key={p.n} delay={i * 110}>
                  <article className="h-full rounded-3xl border border-border/70 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                    <span className="eyebrow text-primary">{p.n}</span>
                    <h3 className="mt-4 text-xl">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Depoimentos de alunos</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Quem vive a Vitality, recomenda.</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {DEPOIMENTOS.map((d, i) => (
                <Reveal key={d.name} delay={i * 100}>
                  <figure className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                    <Quote className="h-6 w-6 text-gold" strokeWidth={1.2} />
                    <blockquote className="mt-5 flex-1 font-display text-xl leading-snug italic">
                      “{d.text}”
                    </blockquote>
                    <figcaption className="mt-6 text-sm text-muted-foreground">
                      — {d.name}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Depoimentos ilustrativos, utilizados apenas como conteúdo demonstrativo.
            </p>
          </div>
        </section>

        {/* CTA INTERMEDIÁRIO */}
        <section className="bg-primary py-16 text-primary-foreground lg:py-24">
          <Reveal className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <h2 className="text-3xl sm:text-5xl">Seu primeiro passo começa com um movimento.</h2>
            <p className="mt-5 text-base opacity-85 sm:text-lg">
              Agende uma aula experimental e venha conhecer a Vitality Pilates Manaus.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-base font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
              Quero agendar minha aula
            </a>
          </Reveal>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="contato" className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal>
              <p className="eyebrow">Localização</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Estamos em Manaus</h2>
              <dl className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.4} />
                  <div className="min-w-0">
                    <dt className="text-sm font-medium">Endereço</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{ENDERECO}</dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.4} />
                  <div className="min-w-0">
                    <dt className="text-sm font-medium">Horário de atendimento</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{HORARIO}</dd>
                  </div>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-primary/30 px-7 py-4 text-base font-medium text-primary transition-all duration-300 hover:bg-secondary"
                >
                  Como chegar
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
                  Falar com a Vitality no WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={110}>
              <div className="flex h-72 items-center justify-center rounded-[2rem] border border-dashed border-border bg-muted/60 p-8 text-center lg:h-full">
                <p className="text-sm text-muted-foreground">
                  Espaço reservado para o mapa do Google Maps.
                  <br />
                  Insira aqui o endereço real da unidade.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-secondary/40 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Ainda tem dúvidas?</h2>
            </Reveal>
            <Reveal delay={90}>
              <Accordion type="single" collapsible className="mt-8">
                {FAQ.map((f) => (
                  <AccordionItem key={f.q} value={f.q} className="border-border/70">
                    <AccordionTrigger className="text-left font-sans text-base hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="font-display text-2xl">
              Vitality <span className="text-primary">Pilates</span> Manaus
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Movimento, saúde e bem-estar.</p>
          </div>
          <nav aria-label="Links do rodapé">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow">Contato</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4" strokeWidth={1.5} /> Instagram
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} /> {ENDERECO}
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} /> {HORARIO}
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl items-center gap-2 px-5 text-xs text-muted-foreground lg:px-8">
          <Heart className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
          © {new Date().getFullYear()} Vitality Pilates Manaus. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
