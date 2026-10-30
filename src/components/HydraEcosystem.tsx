import { Activity, ArrowUpRight, Box, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    name: 'Hydra Analytics',
    tagline: 'A inteligência que orienta cada decisão.',
    description: 'Transforma dados operacionais em indicadores, automações e recomendações acionáveis.',
    icon: Activity,
    accent: 'from-cyan-400 to-blue-500',
    status: 'Em operação',
  },
  {
    name: 'Hydra 3D Labs',
    tagline: 'O laboratório que torna o complexo visível.',
    description: 'Prototipa experiências espaciais, simulações e interfaces imersivas para dar forma aos dados.',
    icon: Box,
    accent: 'from-violet-400 to-fuchsia-500',
    status: 'Em construção',
  },
  {
    name: 'Hydra Sentinel',
    tagline: 'A camada que mantém o ecossistema protegido.',
    description: 'Observa riscos, integridade e eventos críticos para que pessoas e sistemas ajam com confiança.',
    icon: ShieldCheck,
    accent: 'from-emerald-400 to-teal-500',
    status: 'Em construção',
  },
];

export default function HydraEcosystem() {
  return (
    <section id="ecossistema" className="relative overflow-hidden border-y border-white/10 bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.14),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">The Hydra Labs</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Um ecossistema. Três forças conectadas.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Dados revelam o cenário, experiências 3D tornam a decisão tangível e a segurança sustenta a confiança.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pillars.map(({ name, tagline, description, icon: Icon, accent, status }) => (
            <article key={name} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
              <div className={"mb-7 inline-flex rounded-xl bg-gradient-to-br p-3 text-slate-950 " + accent}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold text-white">{name}</h3>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">{status}</span>
              </div>
              <p className="mt-4 text-base font-medium text-slate-200">{tagline}</p>
              <p className="mt-3 leading-7 text-slate-400">{description}</p>
              <a href="#contato" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                Conhecer a iniciativa <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 text-center text-sm text-slate-300 md:grid-cols-5 md:items-center">
          <span>Dados e sinais</span><span className="hidden text-cyan-400 md:block">→</span>
          <span>Experiências e simulações</span><span className="hidden text-cyan-400 md:block">→</span>
          <span>Decisões protegidas</span>
        </div>
      </div>
    </section>
  );
}
