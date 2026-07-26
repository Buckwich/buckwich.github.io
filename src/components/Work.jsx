import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import Square from './Square'

// null = empty hole (part of the design — keep at least one)
const CELLS = [
  { id: '01', title: 'KCF-HUB', stack: 'TYPESCRIPT · 2024', href: 'https://github.com/Buckwich/kcf-hub' },
  { id: '02', title: 'TEKSKEY', stack: 'SPLIT KEYBOARD · 2023', href: 'https://github.com/Buckwich/tekskey' },
  null,
  { id: '03', title: 'QMK BROWSER', stack: 'ANGULAR · 2020', href: 'https://github.com/qmk-helper/keyboard-browser' },
  { id: '04', title: 'MOTIONPAUSE', stack: 'KOTLIN · 2022', href: 'https://github.com/Buckwich/sleepTimer' },
  null,
  { id: '05', title: 'PANDOC PAPER', stack: 'LATEX · 2018', href: 'https://github.com/Buckwich/DHBW-Pandoc-Latex-Template' },
  { id: '06', title: 'TS TEMPLATE', stack: 'TYPESCRIPT · 2024', href: 'https://github.com/Buckwich/typescript-template' },
]

function Project({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group flex aspect-square flex-col justify-between bg-black p-5 transition-colors duration-300 hover:bg-white hover:text-black"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs">{project.id}</span>
        <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
      </div>
      <div>
        <h3 className="text-lg font-black tracking-tight md:text-xl">{project.title}</h3>
        <p className="mt-1 font-mono text-[10px] tracking-widest opacity-60">{project.stack}</p>
      </div>
    </a>
  )
}

function Hole({ variant = 2 }) {
  return (
    <div className="group flex aspect-square items-center justify-center bg-black">
      <Square
        white
        variant={variant}
        className="transition-transform duration-500 group-hover:rotate-45"
      />
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="border-b border-white">
      <div className="px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="mb-12 flex items-end justify-between">
            <h2 className="stroke-title font-display text-5xl font-bold uppercase leading-none text-white md:text-8xl">
              Projects<span className="text-transparent">.</span>
            </h2>
            <p className="text-right font-mono text-xs leading-5 tracking-widest">
              SELECTED
              <br />■ 06
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="grid grid-cols-2 gap-px border border-white bg-white lg:grid-cols-4">
            {CELLS.map((cell, i) =>
              cell ? (
                <Project key={i} project={cell} />
              ) : (
                <Hole key={i} variant={i % 2 === 0 ? 2 : 1} />
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
