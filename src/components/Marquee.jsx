const ITEMS = [
  'BUCKWICH.DE',
  'SOFTWARE · HARDWARE',
  'CUSTOM KEYBOARDS',
  'NO TRACKERS',
  'MORE SOON',
]

import Square from './Square'

function Row({ dark }) {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center font-mono text-xs tracking-[0.3em]">
          <span className="mx-8">{item}</span>
          <Square white={!dark} variant={0} size="h-2 w-2" sm />
          <Square white={!dark} variant={2} size="ml-2 h-2 w-2" sm />
        </span>
      ))}
    </div>
  )
}

export default function Marquee({ dark = true }) {
  return (
    <div
      className={`overflow-hidden py-3 ${
        dark ? 'bg-white text-black' : 'border-y border-white bg-black text-white'
      }`}
    >
      <div className="animate-marquee flex w-max">
        <Row dark={dark} />
        <Row dark={dark} />
      </div>
    </div>
  )
}
