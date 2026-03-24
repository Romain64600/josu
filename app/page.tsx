import { LeadForm } from "@/components/LeadForm";

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 bg-grain opacity-90"
        aria-hidden
      />

      <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-5 sm:pt-6">
        <div className="flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-text/8 bg-surface/75 px-5 py-3 shadow-card backdrop-blur-xl sm:px-7">
          <span className="font-display text-sm font-bold tracking-tight text-text sm:text-base">
            Fitness Funnel
          </span>
          <a
            href="#registro"
            className="group relative inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-xs font-semibold text-white shadow-glow transition hover:bg-text sm:text-sm"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cta/0 via-cta/25 to-cta/0 opacity-0 transition group-hover:opacity-100" />
            <span className="relative">Registrarse</span>
          </a>
        </div>
      </header>

      <main>
        <section className="relative px-6 pb-24 pt-32 sm:pb-32 sm:pt-40">
          <div
            className="pointer-events-none absolute inset-0 bg-mesh-hero"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <p
                className="inline-flex items-center gap-2 rounded-full border border-text/10 bg-surface/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted backdrop-blur-sm sm:text-xs"
                style={{ animationDelay: "0.05s" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cta shadow-[0_0_8px_rgba(255,77,0,0.8)]" />
                Programa · 12 semanas
              </p>
              <h1 className="font-display mt-8 text-balance text-[2.35rem] font-extrabold leading-[1.05] tracking-tight text-text sm:text-6xl sm:leading-[1.02] lg:text-7xl">
                Recupera tu{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10">forma física</span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-3 bg-cta/25 sm:h-4"
                    aria-hidden
                  />
                </span>
                <br className="hidden sm:block" />
                <span className="text-muted sm:text-text"> sin renunciar a tu vida.</span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                Método progresivo, vídeos cortos y seguimiento claro. Pensado para
                profesionales que buscan resultados duraderos — no otra dieta
                extrema que abandones a la tercera semana.
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                <a
                  href="#registro"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-cta px-10 text-sm font-bold text-white shadow-glow transition hover:bg-cta-hover hover:shadow-card-lg sm:w-auto sm:text-base"
                >
                  Recibir el programa
                </a>
                <a
                  href="#oferta"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-text/12 bg-surface/80 px-10 text-sm font-bold text-text backdrop-blur-sm transition hover:border-text/25 hover:bg-surface sm:w-auto sm:text-base"
                >
                  Ver ofertas
                </a>
              </div>
            </div>

            <div className="relative mx-auto mt-20 max-w-4xl">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cta/20 via-transparent to-text/5 blur-2xl sm:-inset-8 sm:rounded-[2.5rem]"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border border-text/10 bg-ink shadow-card-lg ring-1 ring-white/10 sm:rounded-[2rem]">
                <div className="aspect-video flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-text via-ink to-text px-8 py-12">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:scale-105 hover:bg-white/15">
                    <PlayIcon className="ml-1 h-9 w-9" />
                  </div>
                  <p className="max-w-sm text-center text-sm leading-relaxed text-white/55">
                    VSL · Integra aquí tu iframe de YouTube o reproductor
                    embebido para la presentación del método.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-text/6 bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cta">
                  Confianza
                </p>
                <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                  Ellos ya dieron el paso
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted lg:text-right lg:text-base">
                Testimonios de ejemplo para la maqueta. Sustitúyelos por historias
                reales y fotos cuando tengas material.
              </p>
            </div>

            <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {[
                {
                  name: "Camila L.",
                  role: "Marketing · Madrid",
                  text: "Por fin un ritmo que mantengo. Las sesiones de 25 min encajan con mi agenda caótica."
                },
                {
                  name: "Tomás M.",
                  role: "Freelance · Valencia",
                  text: "Menos teoría, más ejecución. El progreso semana a semana es brutalmente claro."
                },
                {
                  name: "Sara K.",
                  role: "HR · Barcelona",
                  text: "Nutrición sin obsesionarme con calorías. Cambio visible en pocas semanas."
                }
              ].map((t, i) => (
                <li
                  key={t.name}
                  className="group relative flex flex-col rounded-3xl border border-text/8 bg-bg p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:border-cta/20 hover:shadow-card-lg"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span
                    className="font-display text-5xl font-bold leading-none text-cta/20 transition group-hover:text-cta/35"
                    aria-hidden
                  >
                    “
                  </span>
                  <p className="-mt-2 flex-1 text-[15px] leading-relaxed text-text">
                    {t.text}
                  </p>
                  <div className="mt-8 flex items-center gap-4 border-t border-text/8 pt-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink font-display text-sm font-bold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-semibold text-text">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="oferta" className="scroll-mt-28 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted">
                Precios
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Elige tu formato
              </h2>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-stretch">
              <div className="flex flex-col rounded-[2rem] border border-text/10 bg-surface p-10 shadow-card">
                <p className="text-xs font-bold uppercase tracking-widest text-muted">
                  Pago único
                </p>
                <p className="font-display mt-4 text-3xl font-bold sm:text-4xl">
                  Programa 12 semanas
                </p>
                <p className="mt-4 flex-1 text-muted leading-relaxed">
                  Vídeo + PDF, acceso de por vida al área de miembros. Ideal si
                  quieres el método completo sin suscripción.
                </p>
                <p className="font-display mt-10 text-4xl font-extrabold tracking-tight">
                  99 €
                </p>
                <a
                  href="#registro"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full border-2 border-text/15 text-sm font-bold text-text transition hover:border-text/30 hover:bg-bg"
                >
                  Continuar con esta oferta
                </a>
              </div>

              <div className="relative flex flex-col overflow-hidden rounded-[2rem] border-2 border-cta/35 bg-surface p-10 shadow-glow">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cta/15 blur-3xl"
                  aria-hidden
                />
                <span className="relative inline-flex w-fit items-center rounded-full bg-cta px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  El más elegido
                </span>
                <p className="relative mt-6 text-xs font-bold uppercase tracking-widest text-muted">
                  Suscripción
                </p>
                <p className="font-display relative mt-2 text-3xl font-bold sm:text-4xl">
                  Coaching + comunidad
                </p>
                <p className="relative mt-4 flex-1 text-muted leading-relaxed">
                  Todo el programa, directos mensuales, grupo privado y nuevos
                  contenidos cada mes.
                </p>
                <p className="font-display relative mt-10 text-4xl font-extrabold tracking-tight">
                  29 €
                  <span className="text-lg font-semibold text-muted">/mes</span>
                </p>
                <a
                  href="#registro"
                  className="relative mt-8 inline-flex h-12 items-center justify-center rounded-full bg-cta text-sm font-bold text-white transition hover:bg-cta-hover"
                  data-primary-offer
                >
                  Recibir el programa
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="registro"
          className="scroll-mt-28 border-t border-white/10 bg-ink py-24 text-white sm:py-32"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cta">
                  Acceso
                </p>
                <h2 className="font-display mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Recibe la presentación del programa
                </h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
                  Deja tu correo. En esta demo el envío es simulado; en producción
                  conectarías Supabase o tu email marketing.
                </p>
                <ul className="mt-10 space-y-4 text-sm text-white/45">
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cta" />
                    Resumen del método en vídeo y PDF
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cta" />
                    Sin spam — solo lo esencial
                  </li>
                </ul>
              </div>
              <div className="lg:pl-4">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-text/8 bg-bg py-10 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          Fitness Funnel · demo local
        </p>
      </footer>
    </div>
  );
}
