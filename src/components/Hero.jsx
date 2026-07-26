import SquareField from './SquareField'
import { FEATURES } from '../features'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden border-b border-white">
      {/* living square field */}
      <div className="absolute inset-y-0 right-0 flex w-full items-center overflow-hidden opacity-40 md:w-1/2 md:opacity-100">
        <SquareField dark />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pt-28 md:px-10 md:pt-32">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <p className="flex w-fit items-center gap-3 border border-white/20 bg-black px-3 py-1 font-mono text-xs tracking-widest">
            <span className="inline-block h-2 w-2 bg-white" />
            BUCKWICH.DE
          </p>
          {FEATURES.openToWork && (
            <p className="flex w-fit items-center gap-3 border border-white/20 bg-black px-3 py-1 font-mono text-xs tracking-widest">
              <span className="inline-block h-2 w-2 animate-pulse bg-white" />
              OPEN TO WORK
            </p>
          )}
        </div>
        <h1 className="stroke-title w-fit max-w-full border border-white/20 bg-black px-3 font-display text-[14vw] font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-[13vw] md:text-[12.5vw]">
          Buck
          <span className="text-transparent">wich</span>
          <span className="ml-[0.1em] inline-block h-[0.42em] w-[0.42em] border-[0.08em] border-white align-baseline" />
        </h1>
        <p className="mt-10 w-fit max-w-md border border-white/20 bg-black px-3 py-2 font-mono text-xs leading-6 tracking-widest md:text-sm">
          ONE NAME. MANY THINGS.
        </p>
      </div>

      <div className="relative z-10 flex items-end justify-between px-6 pb-8 font-mono text-[10px] tracking-widest md:px-10 md:text-xs">
        <span>MADE ON THE INTERNET</span>
        <span className="h-3 w-3 animate-bounce border border-white" />
      </div>
    </section>
  )
}
