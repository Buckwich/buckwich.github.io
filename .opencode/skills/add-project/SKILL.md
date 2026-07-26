---
name: add-project
description: Use ONLY when adding a project entry to the Projects grid on the buckwich.de landing page (src/components/Work.jsx CELLS array).
---

# Add a project to the Projects grid

File: `src/components/Work.jsx`.

1. In `CELLS`, replace one `null` with:
   ```js
   { id: '01', title: 'PROJECT NAME', stack: 'TECH · TECH', href: 'https://...' },
   ```
   - `id`: two-digit string, sequential.
   - Ask the user for title/stack/href if not given. Never invent them.
2. Add this card component back (it was removed when the grid was placeholder-only) and render `{cell ? <Project .../> : <Hole .../>}`:
   ```jsx
   import { ArrowUpRight } from 'lucide-react'

   function Project({ project }) {
     return (
       <a
         href={project.href}
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
   ```
3. Keep at least one `null` hole in the grid — holes are part of the design.
4. Verify: `docker compose up dev` is running (hot reload) or rebuild prod: `docker compose up -d --build web`.
