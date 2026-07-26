import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import Square from './Square'
import { FEATURES } from '../features'

const LINKS = [{ label: 'GITHUB', href: 'https://github.com/Buckwich' }, null, null, null]

export default function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="px-6 pb-10 pt-20 md:px-10 md:pt-28">
        {FEATURES.contact && (
          <>
        <Reveal>
          <p className="mb-6 flex items-center gap-3 font-mono text-xs tracking-widest">
            <span className="inline-block h-2 w-2 bg-white" />
            CONTACT
          </p>
          <h2 className="stroke-title font-display text-[16vw] font-bold uppercase leading-[0.9] tracking-tight text-white md:text-[11vw]">
            Get in
            <br />
            <span className="text-transparent">touch</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <a
            href="mailto:hello@buckwich.de"
            className="group mt-12 inline-flex items-center gap-4 border border-white px-6 py-5 transition-colors duration-300 hover:bg-white hover:text-black"
          >
            <span className="font-mono text-sm tracking-widest md:text-base">
              HELLO@BUCKWICH.DE
            </span>
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 grid grid-cols-2 gap-px border border-white bg-white md:grid-cols-4">
            {LINKS.map((link, i) =>
              link ? (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex aspect-square items-end justify-between bg-black p-4 transition-colors duration-300 hover:bg-white hover:text-black md:aspect-auto md:h-28"
                >
                  <span className="font-mono text-xs tracking-widest">{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
              ) : (
                <div
                  key={i}
                  className="group flex aspect-square items-end justify-between bg-black p-4 md:aspect-auto md:h-28"
                >
                  <span className="font-mono text-xs tracking-widest opacity-40">SOON</span>
                  <Square
                    white
                    variant={i % 2 === 0 ? 2 : 1}
                    size="h-3 w-3"
                    sm
                    className="opacity-40 transition-transform duration-500 group-hover:rotate-45"
                  />
                </div>
              )
            )}
          </div>
        </Reveal>
          </>
        )}

        <div className="mt-10 flex flex-col justify-between gap-2 font-mono text-[10px] tracking-widest opacity-60 md:flex-row md:items-center">
          <span>© 2026 BUCKWICH.DE</span>
          <span>NO COOKIES · NO TRACKERS</span>
          <span>■ □ ■ □</span>
        </div>
      </div>
    </footer>
  )
}
