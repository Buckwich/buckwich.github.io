import { useEffect, useMemo, useState } from 'react'

// cell modes: 0 = filled, 1 = hollow thin border, 2 = hollow thick border
const randomMode = () => {
  const r = Math.random()
  return r < 0.55 ? 0 : r < 0.8 ? 1 : 2
}

/**
 * A living grid of squares — mostly filled, some hollow ("holes")
 * with mixed thin/thick borders. A few cells flip every tick.
 */
export default function SquareField({ cols = 8, rows = 12, dark = false }) {
  const total = cols * rows
  const initial = useMemo(() => Array.from({ length: total }, randomMode), [total])
  const [modes, setModes] = useState(initial)

  useEffect(() => {
    const id = setInterval(() => {
      setModes((prev) => {
        const next = [...prev]
        for (let k = 0; k < 3; k++) {
          const i = Math.floor(Math.random() * total)
          // always switch to one of the other two styles
          next[i] = (next[i] + 1 + Math.floor(Math.random() * 2)) % 3
        }
        return next
      })
    }, 700)
    return () => clearInterval(id)
  }, [total])

  const styles = dark
    ? ['border-4 border-white bg-white', 'border-2 border-white', 'border-8 border-white']
    : ['border-4 border-black bg-black', 'border-2 border-black', 'border-8 border-black']

  return (
    <div
      aria-hidden="true"
      className="grid w-full"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {modes.map((mode, i) => (
        <div key={i} className="flex aspect-square items-center justify-center">
          <div
            className={`aspect-square w-2/3 transition-all duration-500 ${styles[mode]}`}
          />
        </div>
      ))}
    </div>
  )
}
