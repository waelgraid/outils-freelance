'use client'
import { useState } from 'react'
import { Tool } from '@/lib/tools'
import { ToolRow } from './ToolCard'

const PROFILES = [
  { id: 'all', label: 'Tous les profils' },
  { id: 'freelance', label: 'Freelance services' },
  { id: 'artisan', label: 'Artisan / BTP' },
  { id: 'liberal', label: 'Profession libérale' },
  { id: 'commercant', label: 'Commerçant' },
]

const PROFILE_MAP: Record<string, string[]> = {
  freelance: ['freebe', 'abby', 'indy'],
  artisan:   ['abby', 'indy'],
  liberal:   ['indy', 'pennylane'],
  commercant:['abby', 'pennylane'],
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
              className={`text-sm px-4 py-1.5 rounded-full font-medium transition-all border ${
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

      {/* TOOL LIST */}
      <div className="space-y-4">
        {filtered.map((tool, i) => (
          <ToolRow key={tool.slug} tool={tool} rank={i + 1} />
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-6">
            Aucun outil pour ce profil — essayez &quot;Tous les profils&quot;.
          </p>
        )}
      </div>
    </div>
  )
}
