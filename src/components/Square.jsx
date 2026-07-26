// The one square. Three styles: 0 = filled, 1 = thin hollow, 2 = thick hollow.
// `white` = white ink (on black bg), default = black ink (on white bg).
// `sm` = scaled-down borders for tiny squares (< 16px).
const STYLES = {
  black: {
    lg: ['border-4 border-black bg-black', 'border-2 border-black', 'border-8 border-black'],
    sm: ['border-2 border-black bg-black', 'border border-black', 'border-4 border-black'],
  },
  white: {
    lg: ['border-4 border-white bg-white', 'border-2 border-white', 'border-8 border-white'],
    sm: ['border-2 border-white bg-white', 'border border-white', 'border-4 border-white'],
  },
}

export default function Square({
  variant = 2,
  white = false,
  size = 'h-1/4 w-1/4',
  sm = false,
  className = '',
}) {
  const style = STYLES[white ? 'white' : 'black'][sm ? 'sm' : 'lg'][variant]
  return <div aria-hidden="true" className={`${size} ${style} ${className}`} />
}
