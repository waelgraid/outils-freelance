'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'

// Générateur de situation de travaux : calcul du cumul, du déjà facturé, de la TVA
// ventilée par taux, de la retenue de garantie et du net à payer, avec un aperçu
// imprimable (enregistrable en PDF depuis la fenêtre d'impression du navigateur).
// Pré-rempli avec la situation n° 2 de l'exemple chiffré de l'article.

type Taux = 5.5 | 10 | 20
interface Poste { id: number; libelle: string; devis: string; precedent: string; avancement: string; tva: Taux }

const eur = (n: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n)
const pct = (n: number) => `${new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 2 }).format(n)}\u00a0%` // espace insécable avant %
const r2 = (n: number) => Math.round(n * 100) / 100
const num = (s: string) => {
  const v = parseFloat(s.replace(/\s/g, '').replace(',', '.'))
  return Number.isFinite(v) ? v : 0
}

const EXEMPLE: Poste[] = [
  { id: 1, libelle: 'Démolition et évacuation', devis: '6000', precedent: '100', avancement: '100', tva: 10 },
  { id: 2, libelle: 'Gros œuvre / maçonnerie', devis: '18000', precedent: '30', avancement: '90', tva: 10 },
  { id: 3, libelle: 'Plomberie et électricité', devis: '13000', precedent: '0', avancement: '50', tva: 10 },
  { id: 4, libelle: 'Finitions (peinture, sols)', devis: '8000', precedent: '0', avancement: '0', tva: 10 },
]

const champ = 'w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20'

export function GenerateurSituationTravaux() {
  const [postes, setPostes] = useState<Poste[]>(EXEMPLE)
  const [info, setInfo] = useState({
    entreprise: 'Votre entreprise — SIRET',
    client: 'Nom du client',
    chantier: 'Adresse du chantier',
    devis: 'Devis n° 2026-014',
    numero: '2',
    facture: 'FA-2026-052',
    periode: 'Mois 2',
    date: '',
  })
  const [franchise, setFranchise] = useState(false)
  const [retenue, setRetenue] = useState(true)
  // Base de la retenue : TTC selon la pratique dominante, HT si le contrat le prévoit
  const [baseRG, setBaseRG] = useState<'ttc' | 'ht'>('ttc')
  const [acompte, setAcompte] = useState('0')

  const set = (k: keyof typeof info) => (e: React.ChangeEvent<HTMLInputElement>) => setInfo({ ...info, [k]: e.target.value })
  const majPoste = (id: number, patch: Partial<Poste>) => setPostes(p => p.map(x => (x.id === id ? { ...x, ...patch } : x)))
  const ajouter = () => setPostes(p => [...p, { id: Math.max(0, ...p.map(x => x.id)) + 1, libelle: '', devis: '', precedent: '0', avancement: '0', tva: 10 }])
  const retirer = (id: number) => setPostes(p => (p.length > 1 ? p.filter(x => x.id !== id) : p))

  const calc = useMemo(() => {
    const lignes = postes.map(p => {
      const devis = num(p.devis)
      const av = num(p.avancement)
      const prec = num(p.precedent)
      const cumul = r2(devis * av / 100)
      const deja = r2(devis * prec / 100)
      return { ...p, devisN: devis, av, prec, cumul, deja, periode: r2(cumul - deja), erreur: av < prec ? 'recul' : av > 100 || prec > 100 ? 'depasse' : null }
    })
    const marche = r2(lignes.reduce((s, l) => s + l.devisN, 0))
    const cumul = r2(lignes.reduce((s, l) => s + l.cumul, 0))
    const deja = r2(lignes.reduce((s, l) => s + l.deja, 0))
    const periodeHT = r2(cumul - deja)
    const parTaux = ([5.5, 10, 20] as Taux[])
      .map(t => {
        const base = r2(lignes.filter(l => l.tva === t).reduce((s, l) => s + l.periode, 0))
        return { taux: t, base, tva: franchise ? 0 : r2(base * t / 100) }
      })
      .filter(x => x.base !== 0)
    const tva = r2(parTaux.reduce((s, x) => s + x.tva, 0))
    const ttc = r2(periodeHT + tva)
    const rg = retenue ? r2((baseRG === 'ttc' ? ttc : periodeHT) * 0.05) : 0
    const ac = num(acompte)
    return { lignes, marche, cumul, deja, periodeHT, parTaux, tva, ttc, rg, ac, net: r2(ttc - rg - ac), avancementGlobal: marche ? cumul / marche * 100 : 0 }
  }, [postes, franchise, retenue, baseRG, acompte])

  const erreurs = calc.lignes.filter(l => l.erreur)

  // Impression : on imprime une copie isolée du document, placée directement sous
  // <body>, pour que le reste de la page n'occupe aucune place (pas de pages blanches).
  const imprimer = () => {
    const src = document.getElementById('situation-document')
    if (!src) return
    const copie = src.cloneNode(true) as HTMLElement
    copie.removeAttribute('id')
    const racine = document.createElement('div')
    racine.id = 'print-root'
    racine.appendChild(copie)
    document.body.appendChild(racine)
    document.body.classList.add('impression-situation')
    const nettoyer = () => { racine.remove(); document.body.classList.remove('impression-situation') }
    window.addEventListener('afterprint', nettoyer, { once: true })
    window.print()
  }

  return (
    <div id="generateur" className="not-prose my-10 scroll-mt-24">
      <div className="rounded-3xl bg-gray-50 ring-1 ring-gray-200 p-5 sm:p-7">
        <div className="mb-6">
          <p className="text-sm font-semibold text-indigo-700 mb-1">Outil gratuit, sans inscription</p>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Générer votre situation de travaux</h3>
          <p className="text-sm text-gray-600 mt-1 max-w-2xl">
            Saisissez les postes de votre devis et l&apos;avancement cumulé. Le calcul se fait en direct :
            cumul, déjà facturé, TVA par taux, retenue de garantie et net à payer. L&apos;exemple de l&apos;article est pré-rempli.
          </p>
        </div>

        {/* Identification */}
        <fieldset className="grid grid-cols-2 gap-3 mb-6">
          <legend className="sr-only">Informations du document</legend>
          {([
            ['entreprise', 'Votre entreprise'], ['client', 'Client'], ['chantier', 'Chantier'], ['devis', 'Référence du devis'],
            ['numero', 'Situation n°'], ['facture', 'N° de facture'], ['periode', 'Période couverte'], ['date', "Date d'émission"],
          ] as [keyof typeof info, string][]).map(([k, l]) => (
            <label key={k} className={`block ${['entreprise', 'client', 'chantier', 'devis'].includes(k) ? 'col-span-2 sm:col-span-1' : ''}`}>
              <span className="block text-xs font-medium text-gray-600 mb-1">{l}</span>
              <input type={k === 'date' ? 'date' : 'text'} value={info[k]} onChange={set(k)} className={champ} />
            </label>
          ))}
        </fieldset>

        {/* Postes : une carte par poste — 4 champs côte à côte sur ordinateur, en 2 × 2 sur mobile */}
        <fieldset>
          <legend className="text-sm font-semibold text-gray-900 mb-2">Postes du devis</legend>
          <div className="space-y-3">
            {calc.lignes.map((l, i) => (
              <div key={l.id} className={`rounded-xl bg-white ring-1 p-3 ${l.erreur ? 'ring-rose-300' : 'ring-gray-200'}`}>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-xs font-semibold text-gray-400 tabular-nums w-5 shrink-0">{i + 1}</span>
                  <input aria-label={`Libellé du poste ${i + 1}`} value={l.libelle} onChange={e => majPoste(l.id, { libelle: e.target.value })}
                    className={`${champ} flex-1 min-w-0`} placeholder="Ex. : Carrelage salle de bains" />
                  <button type="button" onClick={() => retirer(l.id)} disabled={postes.length === 1}
                    className="h-9 w-9 shrink-0 rounded-lg text-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 disabled:opacity-30 disabled:hover:bg-transparent"
                    aria-label={`Supprimer le poste ${l.libelle || i + 1}`}>×</button>
                </div>
                <div className={`grid grid-cols-2 gap-2.5 ${franchise ? 'sm:grid-cols-3' : 'sm:grid-cols-4'}`}>
                  <label className="block">
                    <span className="block text-[11px] font-medium text-gray-500 mb-1">Montant HT du poste</span>
                    <div className="relative">
                      <input inputMode="decimal" value={l.devis} onChange={e => majPoste(l.id, { devis: e.target.value })} className={`${champ} pr-7 tabular-nums`} />
                      <span className="absolute right-2.5 top-2 text-gray-400 text-sm pointer-events-none" aria-hidden="true">€</span>
                    </div>
                  </label>
                  <label className="block">
                    <span className="block text-[11px] font-medium text-gray-500 mb-1">Avancement précédent</span>
                    <div className="relative">
                      <input inputMode="decimal" value={l.precedent} onChange={e => majPoste(l.id, { precedent: e.target.value })} className={`${champ} pr-7 tabular-nums`} />
                      <span className="absolute right-2.5 top-2 text-gray-400 text-sm pointer-events-none" aria-hidden="true">%</span>
                    </div>
                  </label>
                  <label className="block">
                    <span className="block text-[11px] font-semibold text-indigo-700 mb-1">Avancement actuel</span>
                    <div className="relative">
                      <input inputMode="decimal" value={l.avancement} onChange={e => majPoste(l.id, { avancement: e.target.value })}
                        className={`${champ} pr-7 tabular-nums ${l.erreur ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20' : ''}`} aria-invalid={!!l.erreur} />
                      <span className="absolute right-2.5 top-2 text-gray-400 text-sm pointer-events-none" aria-hidden="true">%</span>
                    </div>
                  </label>
                  {!franchise && (
                    <label className="block">
                      <span className="block text-[11px] font-medium text-gray-500 mb-1">TVA</span>
                      <select value={l.tva} onChange={e => majPoste(l.id, { tva: Number(e.target.value) as Taux })} className={champ}>
                        <option value={5.5}>5,5 %</option><option value={10}>10 %</option><option value={20}>20 %</option>
                      </select>
                    </label>
                  )}
                </div>
                <div className="mt-2 text-xs text-gray-500 tabular-nums">
                  À facturer sur ce poste : <span className="font-semibold text-gray-800">{eur(l.periode)}</span> HT
                </div>
              </div>
            ))}
          </div>
        </fieldset>
        <button type="button" onClick={ajouter} className="mt-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900">
          + Ajouter un poste
        </button>

        {erreurs.length > 0 && (
          <div role="alert" className="mt-4 rounded-xl bg-rose-50 ring-1 ring-rose-200 px-4 py-3 text-sm text-rose-800">
            {erreurs.some(e => e.erreur === 'recul') && <p>L&apos;avancement actuel d&apos;un poste est inférieur à l&apos;avancement précédent. Une situation facture un cumul qui ne peut que progresser : pour corriger un trop-facturé, émettez un avoir.</p>}
            {erreurs.some(e => e.erreur === 'depasse') && <p>Un avancement dépasse 100 %. Les travaux supplémentaires se facturent par avenant au devis, pas par un avancement supérieur à 100 %.</p>}
          </div>
        )}

        {/* Options */}
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <div className="rounded-xl bg-white ring-1 ring-gray-200 p-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={retenue} onChange={e => setRetenue(e.target.checked)} className="mt-0.5 h-4 w-4 accent-indigo-600" />
              <span className="text-sm"><span className="font-medium text-gray-900">Retenue de garantie</span><span className="block text-xs text-gray-500">5 % maximum, si prévue au contrat</span></span>
            </label>
            {retenue && (
              <select value={baseRG} onChange={e => setBaseRG(e.target.value as 'ttc' | 'ht')}
                className="mt-2 w-full text-xs rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-gray-700"
                aria-label="Base de calcul de la retenue de garantie">
                <option value="ttc">Calculée sur le TTC (usage courant)</option>
                <option value="ht">Calculée sur le HT (si le contrat le prévoit)</option>
              </select>
            )}
          </div>
          <label className="flex items-start gap-3 rounded-xl bg-white ring-1 ring-gray-200 p-3 cursor-pointer">
            <input type="checkbox" checked={franchise} onChange={e => setFranchise(e.target.checked)} className="mt-0.5 h-4 w-4 accent-indigo-600" />
            <span className="text-sm"><span className="font-medium text-gray-900">Franchise en base de TVA</span><span className="block text-xs text-gray-500">Auto-entrepreneur non assujetti</span></span>
          </label>
          <label className="block rounded-xl bg-white ring-1 ring-gray-200 p-3 sm:col-span-2">
            <span className="block text-sm font-medium text-gray-900">Acompte à déduire</span>
            <span className="block text-xs text-gray-500 mb-1.5">Montant TTC déjà versé, imputé sur cette situation</span>
            <input inputMode="decimal" value={acompte} onChange={e => setAcompte(e.target.value)} className={`${champ} tabular-nums`} aria-label="Acompte à déduire en euros" />
          </label>
        </div>
      </div>

      {/* Aperçu imprimable */}
      <div id="situation-document" className="mt-6 rounded-2xl bg-white ring-1 ring-gray-200 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] p-6 sm:p-9 text-gray-900">
        <div className="flex flex-wrap justify-between gap-6 mb-8">
          <div>
            <p className="text-2xl font-bold tracking-tight">Situation de travaux n° {info.numero}</p>
            <p className="text-sm text-gray-600 mt-1">Facture n° {info.facture}{info.date && ` du ${new Date(info.date).toLocaleDateString('fr-FR')}`}</p>
            <p className="text-sm text-gray-600">Période : {info.periode}</p>
          </div>
          <div className="text-sm sm:text-right print:text-right">
            <p className="font-semibold">{info.entreprise}</p>
            <p className="text-gray-600 mt-2">Client : {info.client}</p>
            <p className="text-gray-600">Chantier : {info.chantier}</p>
            <p className="text-gray-600">Réf. : {info.devis}</p>
          </div>
        </div>

        {/* Tableau complet : tablette (colonne large) et impression A4. Sur ordinateur, l'article
            est une colonne étroite à côté de la barre latérale : la version compacte y est plus lisible. */}
        <div className="hidden sm:block lg:hidden print:block overflow-x-auto">
          <table className="w-full min-w-[620px] text-sm tabular-nums">
            <thead>
              <tr className="border-b-2 border-gray-900 text-left">
                <th className="py-2 pr-3 font-semibold">Poste</th>
                <th className="py-2 px-3 font-semibold text-right">Devis HT</th>
                <th className="py-2 px-3 font-semibold text-right">Avancement</th>
                <th className="py-2 px-3 font-semibold text-right">Cumul HT</th>
                <th className="py-2 px-3 font-semibold text-right">Déjà facturé</th>
                <th className="py-2 pl-3 font-semibold text-right">Cette situation</th>
              </tr>
            </thead>
            <tbody>
              {calc.lignes.map(l => (
                <tr key={l.id} className="border-b border-gray-100">
                  <td className="py-2 pr-3">{l.libelle || <span className="text-gray-400">Poste sans libellé</span>}{!franchise && <span className="text-gray-400 text-xs"> · TVA {pct(l.tva)}</span>}</td>
                  <td className="py-2 px-3 text-right">{eur(l.devisN)}</td>
                  <td className="py-2 px-3 text-right">{pct(l.av)}</td>
                  <td className="py-2 px-3 text-right">{eur(l.cumul)}</td>
                  <td className="py-2 px-3 text-right text-gray-500">{eur(l.deja)}</td>
                  <td className="py-2 pl-3 text-right font-medium">{eur(l.periode)}</td>
                </tr>
              ))}
              <tr className="font-semibold">
                <td className="pt-3 pr-3">Total marché</td>
                <td className="pt-3 px-3 text-right">{eur(calc.marche)}</td>
                <td className="pt-3 px-3 text-right">{pct(Math.round(calc.avancementGlobal * 10) / 10)}</td>
                <td className="pt-3 px-3 text-right">{eur(calc.cumul)}</td>
                <td className="pt-3 px-3 text-right text-gray-500">{eur(calc.deja)}</td>
                <td className="pt-3 pl-3 text-right">{eur(calc.periodeHT)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Version compacte : téléphone et colonne d'article sur ordinateur */}
        <div className="sm:hidden lg:block print:hidden border-y-2 border-gray-900 divide-y divide-gray-100 text-sm tabular-nums">
          {calc.lignes.map(l => (
            <div key={l.id} className="py-2.5">
              <div className="flex justify-between gap-3">
                <span className="font-medium">{l.libelle || <span className="text-gray-400">Poste sans libellé</span>}</span>
                <span className="font-semibold shrink-0">{eur(l.periode)}</span>
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                {eur(l.devisN)} · avancement {pct(l.prec)} → {pct(l.av)}{!franchise && ` · TVA ${pct(l.tva)}`}
              </div>
            </div>
          ))}
          <div className="py-2.5 text-xs text-gray-600 leading-relaxed">
            Marché {eur(calc.marche)} · avancement global {pct(Math.round(calc.avancementGlobal * 10) / 10)} · cumul {eur(calc.cumul)}, dont {eur(calc.deja)} déjà facturés
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <dl className="w-full sm:w-80 text-sm tabular-nums space-y-1.5">
            <div className="flex justify-between"><dt>Montant HT de la situation</dt><dd>{eur(calc.periodeHT)}</dd></div>
            {franchise ? (
              <div className="flex justify-between text-gray-500"><dt>TVA</dt><dd>0,00 €</dd></div>
            ) : calc.parTaux.map(x => (
              <div key={x.taux} className="flex justify-between"><dt>TVA {pct(x.taux)} sur {eur(x.base)}</dt><dd>{eur(x.tva)}</dd></div>
            ))}
            <div className="flex justify-between font-semibold border-t border-gray-200 pt-1.5"><dt>Total TTC</dt><dd>{eur(calc.ttc)}</dd></div>
            {retenue && <div className="flex justify-between text-gray-600"><dt>Retenue de garantie 5 % du {baseRG === 'ttc' ? 'TTC' : 'HT'}</dt><dd>− {eur(calc.rg)}</dd></div>}
            {calc.ac > 0 && <div className="flex justify-between text-gray-600"><dt>Acompte imputé</dt><dd>− {eur(calc.ac)}</dd></div>}
            <div className="flex justify-between items-baseline border-t-2 border-gray-900 pt-2 mt-2">
              <dt className="font-bold">Net à payer</dt><dd className="text-xl font-bold">{eur(calc.net)}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-1 leading-relaxed">
          {franchise && <p>TVA non applicable — article 293 B du CGI.</p>}
          {retenue && <p>Retenue de garantie de 5 % du montant {baseRG === 'ttc' ? 'TTC' : 'HT'} de la situation, prévue au contrat, restituée au plus tard un an après la réception des travaux si aucune réserve n&apos;a été formulée ou une fois les réserves levées (loi n° 71-584 du 16 juillet 1971).</p>}
          <p>En cas de retard de paiement : pénalités au taux de refinancement de la BCE majoré de 10 points, et indemnité forfaitaire pour frais de recouvrement de 40 € (art. L441-10 du Code de commerce).</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <button type="button" onClick={imprimer}
          className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 active:scale-[0.98] transition">
          Imprimer ou enregistrer en PDF
        </button>
        <button type="button" onClick={() => { setPostes(EXEMPLE); setAcompte('0'); setRetenue(true); setFranchise(false) }}
          className="text-sm font-medium text-gray-600 hover:text-gray-900">
          Revenir à l&apos;exemple
        </button>
      </div>
      <p className="mt-3 text-xs text-gray-500 max-w-2xl">
        Modèle indicatif : complétez les mentions obligatoires propres à votre situation (numérotation séquentielle, mention de certification TVA pour les taux réduits, assurance décennale).
        Vous émettez des situations chaque mois ? Un logiciel les génère depuis le devis signé : <Link href="/logiciel-facturation-artisan" className="underline hover:text-indigo-700">voir les logiciels pour artisans</Link>.
      </p>
    </div>
  )
}
