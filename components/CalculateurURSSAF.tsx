'use client'
import { useState, useCallback } from 'react'

const ACTIVITES = [
  {
    id: 'vente',
    label: 'Vente de marchandises',
    desc: 'Achat-revente, commerce, e-commerce, restauration',
    taux: 0.123, tauxVL: 0.01, plafond: 203100
  },
  {
    id: 'services-bic',
    label: 'Artisan / Services commerciaux (BIC)',
    desc: 'Plombier, électricien, agent immobilier, coiffeur, maintenance',
    taux: 0.212, tauxVL: 0.017, plafond: 83600
  },
  {
    id: 'liberal-ssi',
    label: 'Profession libérale non réglementée (BNC)',
    desc: 'Développeur, consultant, graphiste, coach, formateur, rédacteur, marketing',
    taux: 0.256, tauxVL: 0.022, plafond: 83600
  },
  {
    id: 'liberal-cipav',
    label: 'Profession libérale réglementée (CIPAV)',
    desc: 'Architecte, psychologue, ostéopathe, guide-conférencier, moniteur de ski',
    taux: 0.232, tauxVL: 0.022, plafond: 83600
  },
]

const PERIODES = [
  { id: 'mois', label: 'Mensuel', factor: 12 },
  { id: 'trimestre', label: 'Trimestriel', factor: 4 },
  { id: 'annuel', label: 'Annuel', factor: 1 },
]

function formatEur(n: number) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)
}

export function CalculateurURSSAF() {
  const [ca, setCa] = useState('')
  const [activiteId, setActiviteId] = useState('services-bic')
  const [periodeId, setPeriodeId] = useState('mois')
  const [acre, setAcre] = useState(false)
  const [versementLib, setVersementLib] = useState(false)

  const activite = ACTIVITES.find(a => a.id === activiteId)!
  const periode = PERIODES.find(p => p.id === periodeId)!

  const caNum = parseFloat(ca.replace(/\s/g, '').replace(',', '.')) || 0
  const caAnnuel = caNum * periode.factor

  const tauxBase = acre ? activite.taux * 0.5 : activite.taux
  const cotisAnnuelles = caAnnuel * tauxBase
  const cotisperiode = caNum * tauxBase
  const vlAnnuel = versementLib ? caAnnuel * activite.tauxVL : 0
  const vlPeriode = versementLib ? caNum * activite.tauxVL : 0
  const totalPeriode = cotisperiode + vlPeriode
  const totalAnnuel = cotisAnnuelles + vlAnnuel
  const netPeriode = caNum - totalPeriode
  const netAnnuel = caAnnuel - totalAnnuel
  const tauxEffectif = caNum > 0 ? (totalPeriode / caNum) * 100 : 0
  const depassePlafond = caAnnuel > activite.plafond

  const handleCaChange = useCallback((v: string) => {
    const clean = v.replace(/[^0-9.,]/g, '')
    setCa(clean)
  }, [])

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Inputs */}
      <div className="p-6 space-y-5">

        {/* CA */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Chiffre d&apos;affaires
          </label>
          {/* Stack vertically on mobile so input gets full width */}
          <div className="flex flex-col gap-2">
            <div className="relative">
              <input
                type="text"
                inputMode="decimal"
                value={ca}
                onChange={e => handleCaChange(e.target.value)}
                placeholder="Ex : 3 000"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-gray-900 text-2xl font-bold focus:outline-none focus:ring-0 focus:border-indigo-400 transition-all pr-14 bg-white"
                style={{ fontSize: '1.5rem', lineHeight: '2rem' }}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-xl">€</span>
            </div>
            <div className="flex gap-1 bg-gray-50 border border-gray-200 rounded-xl p-1 self-start">
              {PERIODES.map(p => (
                <button key={p.id}
                  onClick={() => setPeriodeId(p.id)}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    periodeId === p.id
                      ? 'bg-white text-indigo-600 shadow-sm border border-indigo-100'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}>
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Activité */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Type d&apos;activité</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ACTIVITES.map(a => (
              <button key={a.id}
                onClick={() => setActiviteId(a.id)}
                className={`text-left px-4 py-4 rounded-xl border transition-all ${
                  activiteId === a.id
                    ? 'border-indigo-400 bg-indigo-50 text-indigo-700 font-semibold ring-1 ring-indigo-300'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                }`}>
                <div className="font-semibold text-sm">{a.label}</div>
                <div className="text-xs mt-1 opacity-70 leading-snug">{a.desc}</div>
                <div className="text-xs mt-1 font-semibold opacity-60">{(a.taux * 100).toFixed(1)}% — plafond {formatEur(a.plafond)}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setAcre(!acre)}
            className={`flex items-center gap-3 flex-1 px-4 py-3.5 rounded-xl border-2 text-left transition-all ${
              acre ? 'border-indigo-400 bg-indigo-50' : 'border-gray-200 bg-white hover:border-gray-300'
            }`}>
            <div className={`w-12 h-7 rounded-full transition-colors relative shrink-0 ${acre ? 'bg-indigo-600' : 'bg-gray-200'}`}>
              <div className={`w-6 h-6 bg-white rounded-full shadow-sm absolute top-0.5 transition-transform ${acre ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </div>
            <div>
              <div className={`text-sm font-semibold ${acre ? 'text-indigo-700' : 'text-gray-700'}`}>ACRE</div>
              <div className="text-xs text-gray-400">−50% (avant juil. 2026) / −25% (après)</div>
            </div>
          </button>
          <button
            onClick={() => setVersementLib(!versementLib)}
            className={`flex items-center gap-3 flex-1 px-4 py-3.5 rounded-xl border-2 text-left transition-all ${
              versementLib ? 'border-indigo-400 bg-indigo-50' : 'border-gray-200 bg-white hover:border-gray-300'
            }`}>
            <div className={`w-12 h-7 rounded-full transition-colors relative shrink-0 ${versementLib ? 'bg-indigo-600' : 'bg-gray-200'}`}>
              <div className={`w-6 h-6 bg-white rounded-full shadow-sm absolute top-0.5 transition-transform ${versementLib ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </div>
            <div>
              <div className={`text-sm font-semibold ${versementLib ? 'text-indigo-700' : 'text-gray-700'}`}>Versement libératoire IR</div>
              <div className="text-xs text-gray-400">{(activite.tauxVL * 100).toFixed(1)}% supplémentaire sur le CA</div>
            </div>
          </button>
        </div>
      </div>

      {/* Résultats */}
      {caNum > 0 && (
        <div className="border-t border-gray-100">
          {/* Alerte plafond */}
          {depassePlafond && (
            <div className="mx-6 mt-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800">
              ⚠️ Votre CA annuel estimé ({formatEur(caAnnuel)}) dépasse le plafond du régime micro ({formatEur(activite.plafond)}). Vous devrez basculer vers un régime réel.
            </div>
          )}

          <div className="p-6">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Résultats — {periode.label.toLowerCase()} / annuel
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {/* Cotisations */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-xs text-gray-500 mb-1">Cotisations URSSAF</div>
                <div className="text-2xl font-bold text-gray-900">{formatEur(cotisperiode)}</div>
                <div className="text-sm text-gray-400">{formatEur(cotisAnnuelles)} / an</div>
                <div className="text-xs text-gray-400 mt-1">
                  Taux : {(tauxBase * 100).toFixed(1)}%
                  {acre && <span className="text-emerald-600 ml-1">(ACRE)</span>}
                </div>
              </div>

              {/* Net */}
              <div className="bg-indigo-50 rounded-xl p-4">
                <div className="text-xs text-indigo-600 mb-1">Revenu net estimé</div>
                <div className="text-2xl font-bold text-indigo-700">{formatEur(netPeriode)}</div>
                <div className="text-sm text-indigo-400">{formatEur(netAnnuel)} / an</div>
                <div className="text-xs text-indigo-400 mt-1">
                  Après cotisations{versementLib ? ' + IR' : ''}
                </div>
              </div>
            </div>

            {/* Versement libératoire */}
            {versementLib && (
              <div className="flex items-center justify-between py-2 border-b border-gray-100 text-sm mb-2">
                <span className="text-gray-500">Versement libératoire IR ({(activite.tauxVL * 100).toFixed(1)}%)</span>
                <span className="font-medium text-gray-700">{formatEur(vlPeriode)} <span className="text-gray-400 font-normal">/ {formatEur(vlAnnuel)} an</span></span>
              </div>
            )}

            {/* Total */}
            <div className="flex items-center justify-between py-2 border-b border-gray-100 text-sm mb-2">
              <span className="text-gray-500">Total prélevé</span>
              <span className="font-semibold text-gray-700">{formatEur(totalPeriode)} <span className="text-gray-400 font-normal">/ {formatEur(totalAnnuel)} an</span></span>
            </div>

            {/* Taux effectif */}
            <div className="flex items-center justify-between pt-2 text-sm">
              <span className="text-gray-500">Taux effectif global</span>
              <span className="font-semibold text-gray-700">{tauxEffectif.toFixed(1)}%</span>
            </div>

            {/* Barre visuelle */}
            <div className="mt-4">
              <div className="flex text-xs text-gray-400 justify-between mb-1">
                <span>Répartition du CA</span>
                <span>{formatEur(caNum)}</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden flex">
                <div
                  className="h-full bg-red-300 transition-all"
                  style={{ width: `${(cotisperiode / caNum) * 100}%` }}
                  title="Cotisations URSSAF"
                />
                {versementLib && (
                  <div
                    className="h-full bg-amber-300 transition-all"
                    style={{ width: `${(vlPeriode / caNum) * 100}%` }}
                    title="IR versement libératoire"
                  />
                )}
                <div className="h-full bg-indigo-400 flex-1 transition-all" title="Net" />
              </div>
              <div className="flex gap-4 mt-2 text-xs text-gray-400">
                <span><span className="inline-block w-2 h-2 rounded-full bg-red-300 mr-1" />URSSAF</span>
                {versementLib && <span><span className="inline-block w-2 h-2 rounded-full bg-amber-300 mr-1" />IR</span>}
                <span><span className="inline-block w-2 h-2 rounded-full bg-indigo-400 mr-1" />Net</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* État vide */}
      {caNum === 0 && (
        <div className="border-t border-gray-100 p-6 text-center">
          <div className="text-gray-300 text-4xl mb-3">→</div>
          <p className="text-sm text-gray-400">Entrez votre chiffre d&apos;affaires pour voir le résultat</p>
        </div>
      )}

      <div className="px-6 pb-4">
        <p className="text-xs text-gray-300 text-center">
          Estimation basée sur les taux officiels URSSAF 2026. Hors impôt sur le revenu si versement libératoire non activé.
        </p>
      </div>
    </div>
  )
}
