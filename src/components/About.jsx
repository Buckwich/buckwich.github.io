import Reveal from './Reveal'
import Square from './Square'

// null = a hole
const STACK = ['TYPESCRIPT', 'ANGULAR', 'CLOUD', 'KOTLIN', null, 'QMK / C', 'LATEX', null]

const STATS = [
  ['30', 'PUBLIC REPOS'],
  ['01', 'PERSON'],
  ['00', 'TRACKERS'],
]

export default function About() {
  return (
    <section id="about" className="border-b border-white bg-white text-black">
      <div className="px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 font-mono text-xs tracking-widest">
            <span className="inline-block h-2 w-2 bg-black" />
            ABOUT
          </p>
          <h2 className="stroke-title-dark max-w-4xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-black md:text-6xl">
            One name. <span className="text-transparent">Many things.</span> No bloat.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="max-w-md font-mono text-sm leading-7 text-black/70">
              Buckwich is Simon — software developer by day (cloud, Angular,
              TypeScript), hardware tinkerer by night: custom keyboards, sleep
              gadgets, and whatever comes next. The rule: less is a feature.
            </p>
            {/* matches square.svg: uniform size, thick border, mostly filled, one hollow */}
            <div className="mt-8 flex items-center gap-2.5">
              {[0, 0, 2, 0, 0].map((v, i) => (
                <Square key={i} variant={v} size="h-6 w-6" sm />
              ))}
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-px border border-black/20 bg-black/20">
              {STATS.map(([n, label]) => (
                <div key={label} className="flex aspect-square flex-col justify-between bg-white p-4">
                  <span className="text-2xl font-black md:text-3xl">{n}</span>
                  <span className="font-mono text-[10px] tracking-widest text-black/60">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-4 gap-px border border-black/20 bg-black/20">
              {STACK.map((tech, i) =>
                tech ? (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center bg-white transition-colors duration-300 hover:bg-black hover:text-white"
                  >
                    <span className="font-mono text-[10px] tracking-widest md:text-xs">
                      {tech}
                    </span>
                  </div>
                ) : (
                  <div key={i} className="flex aspect-square items-center justify-center bg-white">
                    <Square variant={2} />
                  </div>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
