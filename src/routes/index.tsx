import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import catSala from "@/assets/cat-sala.jpg";
import catQuarto from "@/assets/cat-quarto.jpg";
import catIluminacao from "@/assets/cat-iluminacao.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Octosólido — Mobiliário Contemporâneo para Toda a Casa" },
      {
        name: "description",
        content:
          "Sofás, mesas em madeira maciça, iluminação e decoração. Visite a nossa loja ou faça o tour virtual e crie o projeto ideal para a sua casa.",
      },
      { property: "og:title", content: "Octosólido — Mobiliário Contemporâneo" },
      {
        property: "og:description",
        content: "Peças de autor, projetos de interiores e tour virtual da loja.",
      },
    ],
  }),
  component: Index,
});

const nav = ["Loja", "Tour Virtual", "Projetos", "Blog", "Contactos"];

const categories = [
  { name: "Sala", desc: "Estar & jantar", img: catSala },
  { name: "Quarto", desc: "Descanso essencial", img: catQuarto },
  { name: "Iluminação", desc: "Luz com carácter", img: catIluminacao },
];

const products = [
  { name: "Mesa de jantar extensível", detail: "Folha de nogueira", price: "1 290 €", img: catSala },
  { name: "Aparador 3 portas", detail: "Carvalho natural", price: "980 €", img: hero },
  { name: "Candeeiro suspensão 14L", detail: "Vidro & metal negro", price: "460 €", img: catIluminacao },
  { name: "Cama em carvalho maciço", detail: "Estrutura com dossel", price: "1 540 €", img: catQuarto },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="font-display text-2xl tracking-tight text-foreground">
            Octo<span className="text-accent">sólido</span>
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[0.8rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#"
            className="text-[0.8rem] uppercase tracking-[0.16em] text-foreground transition-opacity hover:opacity-60"
          >
            Carrinho (0)
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen items-end overflow-hidden">
          <img
            src={hero}
            alt="Sala de estar contemporânea com mobiliário em madeira de carvalho"
            width={1600}
            height={1104}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/40" />
          <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40">
            <p className="eyebrow reveal-up text-secondary">Desde 1998 · Portugal</p>
            <h1 className="reveal-up mt-6 max-w-4xl text-5xl leading-[1.02] text-secondary sm:text-7xl lg:text-8xl">
              A casa que imaginou,
              <br />
              <em className="italic text-clay">peça a peça.</em>
            </h1>
            <p className="reveal-up mt-8 max-w-md text-base leading-relaxed text-secondary/80">
              Mobiliário em madeira maciça, iluminação de autor e projetos de interiores desenhados
              à sua medida.
            </p>
            <div className="reveal-up mt-10 flex flex-wrap gap-4">
              <a
                href="#colecoes"
                className="rounded-sm bg-clay px-8 py-4 text-[0.75rem] uppercase tracking-[0.2em] text-clay-foreground transition-transform hover:-translate-y-0.5"
              >
                Ver coleções
              </a>
              <a
                href="#tour"
                className="rounded-sm border border-secondary/50 px-8 py-4 text-[0.75rem] uppercase tracking-[0.2em] text-secondary transition-colors hover:bg-secondary hover:text-foreground"
              >
                Tour virtual
              </a>
            </div>
          </div>
        </section>

        {/* Marquee values */}
        <section className="border-y border-border bg-sand">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border/70 md:grid-cols-4">
            {[
              ["Entrega", "Em todo o país"],
              ["Madeira", "Maciça certificada"],
              ["Projeto", "Aconselhamento grátis"],
              ["141 avaliações", "4,9 / 5 no Google"],
            ].map(([title, sub]) => (
              <div key={title} className="px-6 py-10 text-center">
                <p className="font-display text-xl text-foreground">{title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section id="colecoes" className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Coleções</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Divisão a divisão</h2>
            </div>
            <a
              href="#"
              className="border-b border-foreground pb-1 text-[0.75rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Ver toda a loja
            </a>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {categories.map((c, i) => (
              <a
                key={c.name}
                href="#"
                className={`img-zoom group relative overflow-hidden rounded-sm bg-muted ${
                  i === 1 ? "md:mt-14" : ""
                }`}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="h-[30rem] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="text-3xl text-secondary">{c.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-secondary/70">
                    {c.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="border-y border-border bg-card py-28">
          <div className="mx-auto max-w-7xl px-6">
            <p className="eyebrow">Seleção</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Artigos mais desejados</h2>

            <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <a key={p.name} href="#" className="img-zoom group">
                  <div className="overflow-hidden rounded-sm bg-muted">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      width={900}
                      height={1200}
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-5 text-xl leading-snug text-foreground">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {p.detail}
                  </p>
                  <p className="mt-3 text-sm text-accent">{p.price}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Tour */}
        <section id="tour" className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-28 lg:grid-cols-2">
          <div className="img-zoom overflow-hidden rounded-sm">
            <img
              src={hero}
              alt="Interior da loja Octosólido"
              loading="lazy"
              width={1600}
              height={1104}
              className="h-[34rem] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Octosólido em casa</p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Venha conhecer-nos <em className="italic text-accent">virtualmente</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Percorra os nossos 1 200 m² de showroom sem sair do sofá. Descubra ambientes
              completos, veja as peças em contexto e fale com um decorador em tempo real.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-sm bg-primary px-8 py-4 text-[0.75rem] uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Iniciar tour virtual
              </a>
              <a
                href="#"
                className="rounded-sm border border-border px-8 py-4 text-[0.75rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-sand"
              >
                Marcar visita
              </a>
            </div>
          </div>
        </section>

        {/* Projects CTA */}
        <section className="relative overflow-hidden">
          <img
            src={catQuarto}
            alt="Projeto de interiores Octosólido"
            loading="lazy"
            width={900}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="relative mx-auto max-w-3xl px-6 py-32 text-center">
            <p className="eyebrow text-secondary/70">Projetos</p>
            <h2 className="mt-5 text-4xl leading-tight text-secondary sm:text-6xl">
              Criamos o projeto ideal para a sua casa
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-secondary/75">
              Da planta ao último detalhe têxtil: uma equipa dedicada acompanha cada fase, com
              orçamento transparente e montagem incluída.
            </p>
            <a
              href="#"
              className="mt-10 inline-block rounded-sm bg-clay px-10 py-4 text-[0.75rem] uppercase tracking-[0.2em] text-clay-foreground transition-transform hover:-translate-y-0.5"
            >
              Saber mais
            </a>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mx-auto max-w-3xl px-6 py-28 text-center">
          <h2 className="text-4xl sm:text-5xl">Boas ideias, sem ruído</h2>
          <p className="mt-4 text-muted-foreground">
            Novidades, inspiração e acesso antecipado às coleções.
          </p>
          <form
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="o.seu@email.pt"
              className="w-full rounded-sm border border-border bg-card px-5 py-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-sm bg-primary px-8 py-4 text-[0.75rem] uppercase tracking-[0.2em] text-primary-foreground"
            >
              Subscrever
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-border bg-sand">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl">
              Octo<span className="text-accent">sólido</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Mobiliário e design de interiores. Showroom aberto de segunda a sábado.
            </p>
          </div>
          {[
            { t: "Loja", l: ["Sala", "Quarto", "Iluminação", "Decoração", "Exterior", "Cozinha"] },
            { t: "Empresa", l: ["Sobre nós", "Projetos", "Blog", "Contactos"] },
            { t: "Apoio", l: ["Entregas", "Devoluções", "Termos", "Privacidade"] },
          ].map((col) => (
            <div key={col.t}>
              <p className="eyebrow">{col.t}</p>
              <ul className="mt-5 space-y-2.5">
                {col.l.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/70 px-6 py-6 text-center text-xs tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} Octosólido. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
