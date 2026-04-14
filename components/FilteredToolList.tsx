'use client'
import { useState } from 'react'
import { Tool } from '@/lib/tools'
import { ToolRow } from './ToolCard'

const PROFILES = [
  { id: 'all', label: 'Tous les profils' },
  { id: 'freelance', label: 'Freelance services' },
  { id: 'artisan', label: 'Artisan / BTP' },
  { id: 'commercant', label: 'Commerçant' },
  { id: 'liberal', label: 'Profession libérale' },
]

const PROFILE_MAP: Record<string, string[]> = {
  freelance: ['freebe', 'indy', 'abby'],
  artisan: ['abby', 'pennylane'],
  commercant: ['abby', 'pennylane'],
  liberal: ['indy', 'pennylane', 'freebe'],
}

export function FilteredToolList({ tools }: { tools: Tool[] }) {
  const [activeProfile, setActiveProfile] = useState('all')

  const filtered = activeProfile === 'all'
    ? tools
    : tools.filter(t => (PROFILE_MAP[activeProfile] || []).includes(t.slug))

  return (
    <div>
      {/* FILTER BAR */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-3 font-medium">Filtrer par profil :</p>
        <div className="flex flex-wrap gap-2">
          {PROFILES.map(p => (
            <button
              key={p.id}
              onClick={() => setActiveProfile(p.id)}
              className={`text-xs px-4 py-2 rounded-full font-semibold border transition-all ${
                activeProfile === p.id
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* RESULTS */}
      {filtered.length === 0 ? (
        <div className="text-center py-8 text-gray-400 text-sm">
          Aucun outil pour ce profil — essayez un autre filtre.
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((tool, i) => (
            <ToolRow key={tool.slug} tool={tool} rank={i + 1} />
          ))}
        </div>
      )}

      {activeProfile !== 'all' && (
        <p className="text-xs text-gray-400 mt-4 text-center">
          {filtered.length} outil{filtered.length > 1 ? 's' : ''} recommandé{filtered.length > 1 ? 's' : ''} pour ce profil ·{' '}
          <button onClick={() => setActiveProfile('all')} className="text-indigo-500 hover:underline">
            Voir tous les outils
          </button>
        </p>
      )}
    </div>
  )
}
