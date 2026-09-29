import { Children, type ReactNode } from 'react'

// Sur mobile : défilement horizontal aimanté (une carte et le début de la suivante
// visibles, ce qui signale qu'il y a une suite). À partir de md : grille classique.
// Évite qu'une rangée de cartes côte à côte sur ordinateur devienne une colonne
// interminable sur téléphone.

const COLS = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3' } as const

export function MobileCarousel({
  children,
  cols = 3,
  label,
}: {
  children: ReactNode
  cols?: keyof typeof COLS
  label?: string
}) {
  const items = Children.toArray(children)
  return (
    <div>
      <div
        role="list"
        aria-label={label}
        className={`-mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          md:mx-0 md:px-0 md:pb-0 md:grid ${COLS[cols]} md:gap-5 md:overflow-visible`}
      >
        {items.map((child, i) => (
          <div key={i} role="listitem" className="grid shrink-0 w-[84%] snap-center md:w-auto">
            {child}
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <p className="md:hidden text-xs text-gray-400 mt-1.5" aria-hidden="true">
          Balayez pour voir la suite →
        </p>
      )}
    </div>
  )
}
