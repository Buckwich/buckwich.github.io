import { FEATURES } from '../features'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="block h-3 w-3 bg-white" />
          <span className="font-mono text-sm tracking-widest">BUCKWICH</span>
        </a>
        <nav className="flex items-center gap-6 font-mono text-xs tracking-widest">
          <a href="#work" className="hidden transition-opacity hover:opacity-50 sm:block">
            PROJECTS
          </a>
          <a href="#about" className="hidden transition-opacity hover:opacity-50 sm:block">
            ABOUT
          </a>
          {FEATURES.contact && (
            <a
              href="#contact"
              className="border border-white px-3 py-2 transition-colors hover:bg-white hover:text-black"
            >
              CONTACT
            </a>
          )}
        </nav>
      </div>
    </header>
  )
}
