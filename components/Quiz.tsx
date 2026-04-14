'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ToolLogo } from '@/components/ToolLogo'

const steps = [
  {
    q: "Quelle est votre situation ?",
    options: [
      { id: 'freelance', label: 'Freelance / Consultant', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
      { id: 'artisan', label: 'Artisan / BTP', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
      { id: 'commercant', label: 'Commerçant / E-commerce', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> },
      { id: 'liberal', label: 'Profession libérale', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
    ]
  },
  {
    q: "Quel est votre besoin principal ?",
    options: [
      { id: 'facturation', label: 'Créer mes factures', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
      { id: 'banque', label: 'Ouvrir un compte pro', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg> },
      { id: 'compta', label: 'Gérer ma comptabilité', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
      { id: 'mutuelle', label: 'Trouver une mutuelle', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
    ]
  },
  {
    q: "Quel est votre budget mensuel ?",
    options: [
      { id: 'gratuit', label: 'Gratuit si possible', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><line x1="12" y1="6" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="18"/></svg> },
      { id: 'low', label: 'Moins de 10€/mois', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
      { id: 'mid', label: 'Entre 10 et 30€/mois', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
      { id: 'any', label: 'Le prix importe peu', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
    ]
  },
]

const RECO: Record<string, { slug: string; name: string; reason: string; href: string; affiliateUrl: string; bg: string }> = {
  // Freelance
  'freelance-facturation-gratuit':  { slug: 'indy',      name: 'Indy',      reason: 'Version gratuite complète, idéal pour démarrer en freelance.',       href: '/outils/indy',      affiliateUrl: 'https://www.indy.fr/?ae=1514',      bg: '#6C5CE7' },
  'freelance-facturation-low':      { slug: 'freebe',    name: 'Freebe',    reason: 'Conçu pour les freelances, avec suivi du temps et des missions.',     href: '/outils/freebe',    affiliateUrl: 'https://link.freebe.me/Outils-Freelance',    bg: '#0061FF' },
  'freelance-facturation-mid':      { slug: 'freebe',    name: 'Freebe',    reason: 'La référence pour les freelances en services.',                       href: '/outils/freebe',    affiliateUrl: 'https://link.freebe.me/Outils-Freelance',    bg: '#0061FF' },
  'freelance-facturation-any':      { slug: 'freebe',    name: 'Freebe',    reason: 'La référence pour les freelances en services.',                       href: '/outils/freebe',    affiliateUrl: 'https://link.freebe.me/Outils-Freelance',    bg: '#0061FF' },
  'freelance-banque-gratuit':       { slug: 'shine',     name: 'Shine',     reason: 'Banque pro économique et complète pour freelances.',                  href: '/outils/shine',     affiliateUrl: 'https://www.shine.fr/?ref=outils-freelance',     bg: '#1B4332' },
  'freelance-banque-low':           { slug: 'shine',     name: 'Shine',     reason: 'Banque pro économique et complète pour freelances.',                  href: '/outils/shine',     affiliateUrl: 'https://www.shine.fr/?ref=outils-freelance',     bg: '#1B4332' },
  'freelance-banque-mid':           { slug: 'qonto',     name: 'Qonto',     reason: 'La banque pro la plus complète du marché.',                          href: '/outils/qonto',     affiliateUrl: 'https://qonto.com/fr/?ref=outils-freelance',     bg: '#FF5A50' },
  'freelance-banque-any':           { slug: 'qonto',     name: 'Qonto',     reason: 'La banque pro la plus complète du marché.',                          href: '/outils/qonto',     affiliateUrl: 'https://qonto.com/fr/?ref=outils-freelance',     bg: '#FF5A50' },
  'freelance-compta-gratuit':       { slug: 'indy',      name: 'Indy',      reason: 'Comptabilité automatisée, version gratuite généreuse.',               href: '/outils/indy',      affiliateUrl: 'https://www.indy.fr/?ae=1514',      bg: '#6C5CE7' },
  'freelance-compta-low':           { slug: 'indy',      name: 'Indy',      reason: 'Comptabilité automatisée via connexion bancaire.',                    href: '/outils/indy',      affiliateUrl: 'https://www.indy.fr/?ae=1514',      bg: '#6C5CE7' },
  'freelance-compta-mid':           { slug: 'pennylane', name: 'Pennylane', reason: 'Comptabilité temps réel et collaboration expert-comptable.',          href: '/outils/pennylane', affiliateUrl: 'https://www.pennylane.com/?ref=outils-freelance', bg: '#1A1A2E' },
  'freelance-compta-any':           { slug: 'pennylane', name: 'Pennylane', reason: 'Comptabilité temps réel et collaboration expert-comptable.',          href: '/outils/pennylane', affiliateUrl: 'https://www.pennylane.com/?ref=outils-freelance', bg: '#1A1A2E' },
  'freelance-mutuelle-gratuit':     { slug: 'alan',      name: 'Alan',      reason: 'La mutuelle digitale la plus complète pour indépendants.',            href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://alan.com/?ref=outils-freelance', bg: '#00BCD4' },
  'freelance-mutuelle-low':         { slug: 'harmonie',  name: 'Harmonie',  reason: 'Meilleur rapport qualité-prix pour freelances.',                      href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://www.harmonie-mutuelle.fr/?ref=outils-freelance', bg: '#2E7D32' },
  'freelance-mutuelle-mid':         { slug: 'alan',      name: 'Alan',      reason: 'Remboursements en 24h, app mobile, téléconsultation incluse.',        href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://alan.com/?ref=outils-freelance', bg: '#00BCD4' },
  'freelance-mutuelle-any':         { slug: 'alan',      name: 'Alan',      reason: 'Remboursements en 24h, app mobile, téléconsultation incluse.',        href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://alan.com/?ref=outils-freelance', bg: '#00BCD4' },
  // Artisan
  'artisan-facturation-gratuit':    { slug: 'abby',      name: 'Abby',      reason: 'Complet, abordable, parfait pour les artisans.',                      href: '/outils/abby',      affiliateUrl: 'https://c3po.link/QsNZwhTBgx',      bg: '#00C48C' },
  'artisan-facturation-low':        { slug: 'abby',      name: 'Abby',      reason: 'Gestion complète de votre activité à petit prix.',                    href: '/outils/abby',      affiliateUrl: 'https://c3po.link/QsNZwhTBgx',      bg: '#00C48C' },
  'artisan-facturation-mid':        { slug: 'abby',      name: 'Abby',      reason: 'Gestion complète de votre activité à petit prix.',                    href: '/outils/abby',      affiliateUrl: 'https://c3po.link/QsNZwhTBgx',      bg: '#00C48C' },
  'artisan-facturation-any':        { slug: 'abby',      name: 'Abby',      reason: 'Gestion complète de votre activité à petit prix.',                    href: '/outils/abby',      affiliateUrl: 'https://c3po.link/QsNZwhTBgx',      bg: '#00C48C' },
  'artisan-banque-gratuit':         { slug: 'shine',     name: 'Shine',     reason: 'Banque pro économique, idéale pour démarrer.',                        href: '/outils/shine',     affiliateUrl: 'https://www.shine.fr/?ref=outils-freelance',     bg: '#1B4332' },
  'artisan-banque-low':             { slug: 'shine',     name: 'Shine',     reason: 'Banque pro économique, idéale pour démarrer.',                        href: '/outils/shine',     affiliateUrl: 'https://www.shine.fr/?ref=outils-freelance',     bg: '#1B4332' },
  'artisan-banque-mid':             { slug: 'qonto',     name: 'Qonto',     reason: 'La plus fiable et complète pour les pros.',                           href: '/outils/qonto',     affiliateUrl: 'https://qonto.com/fr/?ref=outils-freelance',     bg: '#FF5A50' },
  'artisan-banque-any':             { slug: 'qonto',     name: 'Qonto',     reason: 'La plus fiable et complète pour les pros.',                           href: '/outils/qonto',     affiliateUrl: 'https://qonto.com/fr/?ref=outils-freelance',     bg: '#FF5A50' },
  'artisan-compta-gratuit':         { slug: 'indy',      name: 'Indy',      reason: 'Automatise votre comptabilité, version gratuite disponible.',         href: '/outils/indy',      affiliateUrl: 'https://www.indy.fr/?ae=1514',      bg: '#6C5CE7' },
  'artisan-compta-low':             { slug: 'indy',      name: 'Indy',      reason: 'Automatise votre comptabilité facilement.',                           href: '/outils/indy',      affiliateUrl: 'https://www.indy.fr/?ae=1514',      bg: '#6C5CE7' },
  'artisan-compta-mid':             { slug: 'pennylane', name: 'Pennylane', reason: 'Comptabilité avancée pour activité en croissance.',                   href: '/outils/pennylane', affiliateUrl: 'https://www.pennylane.com/?ref=outils-freelance', bg: '#1A1A2E' },
  'artisan-compta-any':             { slug: 'pennylane', name: 'Pennylane', reason: 'Comptabilité avancée pour activité en croissance.',                   href: '/outils/pennylane', affiliateUrl: 'https://www.pennylane.com/?ref=outils-freelance', bg: '#1A1A2E' },
  'artisan-mutuelle-gratuit':       { slug: 'harmonie',  name: 'Harmonie',  reason: 'Meilleur rapport qualité-prix, offres spéciales indépendants.',       href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://www.harmonie-mutuelle.fr/?ref=outils-freelance', bg: '#2E7D32' },
  'artisan-mutuelle-low':           { slug: 'harmonie',  name: 'Harmonie',  reason: 'Meilleur rapport qualité-prix, offres spéciales indépendants.',       href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://www.harmonie-mutuelle.fr/?ref=outils-freelance', bg: '#2E7D32' },
  'artisan-mutuelle-mid':           { slug: 'alan',      name: 'Alan',      reason: 'Remboursements en 24h, app mobile, téléconsultation incluse.',        href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://alan.com/?ref=outils-freelance', bg: '#00BCD4' },
  'artisan-mutuelle-any':           { slug: 'alan',      name: 'Alan',      reason: 'Remboursements en 24h, app mobile, téléconsultation incluse.',        href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://alan.com/?ref=outils-freelance', bg: '#00BCD4' },
  // Commerçant
  'commercant-facturation-gratuit': { slug: 'abby',      name: 'Abby',      reason: 'Gestion complète pour commerçants, version gratuite disponible.',     href: '/outils/abby',      affiliateUrl: 'https://c3po.link/QsNZwhTBgx',      bg: '#00C48C' },
  'commercant-facturation-low':     { slug: 'abby',      name: 'Abby',      reason: 'Facturation et comptabilité tout-en-un pour commerçants.',            href: '/outils/abby',      affiliateUrl: 'https://c3po.link/QsNZwhTBgx',      bg: '#00C48C' },
  'commercant-facturation-mid':     { slug: 'abby',      name: 'Abby',      reason: 'Facturation et comptabilité tout-en-un pour commerçants.',            href: '/outils/abby',      affiliateUrl: 'https://c3po.link/QsNZwhTBgx',      bg: '#00C48C' },
  'commercant-facturation-any':     { slug: 'pennylane', name: 'Pennylane', reason: 'Comptabilité avancée pour commerçants avec fort volume.',             href: '/outils/pennylane', affiliateUrl: 'https://www.pennylane.com/?ref=outils-freelance', bg: '#1A1A2E' },
  'commercant-banque-gratuit':      { slug: 'shine',     name: 'Shine',     reason: 'Banque pro économique pour commerçants.',                             href: '/outils/shine',     affiliateUrl: 'https://www.shine.fr/?ref=outils-freelance',     bg: '#1B4332' },
  'commercant-banque-low':          { slug: 'shine',     name: 'Shine',     reason: 'Banque pro économique pour commerçants.',                             href: '/outils/shine',     affiliateUrl: 'https://www.shine.fr/?ref=outils-freelance',     bg: '#1B4332' },
  'commercant-banque-mid':          { slug: 'qonto',     name: 'Qonto',     reason: 'La banque pro la plus complète avec gestion des dépenses.',           href: '/outils/qonto',     affiliateUrl: 'https://qonto.com/fr/?ref=outils-freelance',     bg: '#FF5A50' },
  'commercant-banque-any':          { slug: 'qonto',     name: 'Qonto',     reason: 'La banque pro la plus complète avec gestion des dépenses.',           href: '/outils/qonto',     affiliateUrl: 'https://qonto.com/fr/?ref=outils-freelance',     bg: '#FF5A50' },
  'commercant-compta-gratuit':      { slug: 'indy',      name: 'Indy',      reason: 'Comptabilité automatisée avec version gratuite.',                     href: '/outils/indy',      affiliateUrl: 'https://www.indy.fr/?ae=1514',      bg: '#6C5CE7' },
  'commercant-compta-low':          { slug: 'indy',      name: 'Indy',      reason: 'Comptabilité automatisée via connexion bancaire.',                    href: '/outils/indy',      affiliateUrl: 'https://www.indy.fr/?ae=1514',      bg: '#6C5CE7' },
  'commercant-compta-mid':          { slug: 'pennylane', name: 'Pennylane', reason: 'Comptabilité complète pour commerçants avec fort CA.',                href: '/outils/pennylane', affiliateUrl: 'https://www.pennylane.com/?ref=outils-freelance', bg: '#1A1A2E' },
  'commercant-compta-any':          { slug: 'pennylane', name: 'Pennylane', reason: 'Comptabilité complète pour commerçants avec fort CA.',                href: '/outils/pennylane', affiliateUrl: 'https://www.pennylane.com/?ref=outils-freelance', bg: '#1A1A2E' },
  'commercant-mutuelle-gratuit':    { slug: 'harmonie',  name: 'Harmonie',  reason: 'Meilleur rapport qualité-prix, tarifs compétitifs.',                  href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://www.harmonie-mutuelle.fr/?ref=outils-freelance', bg: '#2E7D32' },
  'commercant-mutuelle-low':        { slug: 'harmonie',  name: 'Harmonie',  reason: 'Meilleur rapport qualité-prix, tarifs compétitifs.',                  href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://www.harmonie-mutuelle.fr/?ref=outils-freelance', bg: '#2E7D32' },
  'commercant-mutuelle-mid':        { slug: 'alan',      name: 'Alan',      reason: 'Remboursements en 24h, app mobile incluse.',                          href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://alan.com/?ref=outils-freelance', bg: '#00BCD4' },
  'commercant-mutuelle-any':        { slug: 'alan',      name: 'Alan',      reason: 'Remboursements en 24h, app mobile incluse.',                          href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://alan.com/?ref=outils-freelance', bg: '#00BCD4' },
  // Libéral
  'liberal-facturation-gratuit':    { slug: 'indy',      name: 'Indy',      reason: 'Parfait pour les professions libérales BNC, version gratuite.',       href: '/outils/indy',      affiliateUrl: 'https://www.indy.fr/?ae=1514',      bg: '#6C5CE7' },
  'liberal-facturation-low':        { slug: 'indy',      name: 'Indy',      reason: 'Comptabilité BNC automatisée, déclarations 2035 incluses.',           href: '/outils/indy',      affiliateUrl: 'https://www.indy.fr/?ae=1514',      bg: '#6C5CE7' },
  'liberal-facturation-mid':        { slug: 'pennylane', name: 'Pennylane', reason: 'Comptabilité avancée pour professions libérales à fort CA.',          href: '/outils/pennylane', affiliateUrl: 'https://www.pennylane.com/?ref=outils-freelance', bg: '#1A1A2E' },
  'liberal-facturation-any':        { slug: 'pennylane', name: 'Pennylane', reason: 'Comptabilité avancée pour professions libérales à fort CA.',          href: '/outils/pennylane', affiliateUrl: 'https://www.pennylane.com/?ref=outils-freelance', bg: '#1A1A2E' },
  'liberal-banque-gratuit':         { slug: 'shine',     name: 'Shine',     reason: 'Banque pro économique pour professions libérales.',                   href: '/outils/shine',     affiliateUrl: 'https://www.shine.fr/?ref=outils-freelance',     bg: '#1B4332' },
  'liberal-banque-low':             { slug: 'shine',     name: 'Shine',     reason: 'Banque pro économique pour professions libérales.',                   href: '/outils/shine',     affiliateUrl: 'https://www.shine.fr/?ref=outils-freelance',     bg: '#1B4332' },
  'liberal-banque-mid':             { slug: 'qonto',     name: 'Qonto',     reason: 'La banque pro la plus complète du marché.',                          href: '/outils/qonto',     affiliateUrl: 'https://qonto.com/fr/?ref=outils-freelance',     bg: '#FF5A50' },
  'liberal-banque-any':             { slug: 'qonto',     name: 'Qonto',     reason: 'La banque pro la plus complète du marché.',                          href: '/outils/qonto',     affiliateUrl: 'https://qonto.com/fr/?ref=outils-freelance',     bg: '#FF5A50' },
  'liberal-compta-gratuit':         { slug: 'indy',      name: 'Indy',      reason: 'Spécialisé professions libérales BNC, gratuit pour démarrer.',        href: '/outils/indy',      affiliateUrl: 'https://www.indy.fr/?ae=1514',      bg: '#6C5CE7' },
  'liberal-compta-low':             { slug: 'indy',      name: 'Indy',      reason: 'Déclarations 2035 automatisées, connexion bancaire.',                 href: '/outils/indy',      affiliateUrl: 'https://www.indy.fr/?ae=1514',      bg: '#6C5CE7' },
  'liberal-compta-mid':             { slug: 'pennylane', name: 'Pennylane', reason: 'Comptabilité IS et BNC avec collaboration expert-comptable.',         href: '/outils/pennylane', affiliateUrl: 'https://www.pennylane.com/?ref=outils-freelance', bg: '#1A1A2E' },
  'liberal-compta-any':             { slug: 'pennylane', name: 'Pennylane', reason: 'Comptabilité IS et BNC avec collaboration expert-comptable.',         href: '/outils/pennylane', affiliateUrl: 'https://www.pennylane.com/?ref=outils-freelance', bg: '#1A1A2E' },
  'liberal-mutuelle-gratuit':       { slug: 'harmonie',  name: 'Harmonie',  reason: 'Offres Madelin déductibles, réseau soins étendu.',                    href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://www.harmonie-mutuelle.fr/?ref=outils-freelance', bg: '#2E7D32' },
  'liberal-mutuelle-low':           { slug: 'harmonie',  name: 'Harmonie',  reason: 'Offres Madelin déductibles, réseau soins étendu.',                    href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://www.harmonie-mutuelle.fr/?ref=outils-freelance', bg: '#2E7D32' },
  'liberal-mutuelle-mid':           { slug: 'alan',      name: 'Alan',      reason: 'Téléconsultation incluse, remboursements 24h pour les libéraux.',     href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://alan.com/?ref=outils-freelance', bg: '#00BCD4' },
  'liberal-mutuelle-any':           { slug: 'alan',      name: 'Alan',      reason: 'Téléconsultation incluse, remboursements 24h pour les libéraux.',     href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://alan.com/?ref=outils-freelance', bg: '#00BCD4' },
}

function getDefaultReco(need: string) {
  if (need === 'banque') return { slug: 'qonto', name: 'Qonto', reason: 'La banque pro la plus complète du marché.', href: '/outils/qonto', affiliateUrl: 'https://qonto.com/fr/?ref=outils-freelance', bg: '#FF5A50' }
  if (need === 'compta') return { slug: 'indy', name: 'Indy', reason: 'Comptabilité automatisée pour tous les profils.', href: '/outils/indy', affiliateUrl: 'https://www.indy.fr/?ae=1514', bg: '#6C5CE7' }
  if (need === 'mutuelle') return { slug: 'alan', name: 'Alan', reason: 'La mutuelle 100% digitale préférée des indépendants.', href: '/comparatifs/mutuelles-freelance', affiliateUrl: 'https://alan.com/?ref=outils-freelance', bg: '#0061FF' }
  return { slug: 'abby', name: 'Abby', reason: 'Le meilleur rapport qualité-prix pour les auto-entrepreneurs.', href: '/outils/abby', affiliateUrl: 'https://c3po.link/QsNZwhTBgx', bg: '#00C48C' }
}

export function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [done, setDone] = useState(false)

  function pick(option: string) {
    const newAnswers = [...answers, option]
    setAnswers(newAnswers)
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      setDone(true)
    }
  }

  function reset() {
    setStep(0)
    setAnswers([])
    setDone(false)
  }

  const key = `${answers[0]}-${answers[1]}-${answers[2]}`
  const reco = RECO[key] ?? getDefaultReco(answers[1])

  if (done) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
        <ToolLogo slug={reco.slug ?? reco.name.toLowerCase()} name={reco.name} size="lg" />
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Notre recommandation</div>
        <div className="text-2xl font-bold text-gray-900 mb-2">{reco.name}</div>
        <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">{reco.reason}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={reco.affiliateUrl} target="_blank" rel="nofollow sponsored"
            className="font-semibold text-sm px-6 py-3 rounded-xl text-white transition-opacity hover:opacity-90"
            style={{ background: reco.bg }}>
            Visiter le site →
          </a>
          <Link href={reco.href}
            className="font-medium text-sm px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
            Lire l'avis complet
          </Link>
        </div>
        <button onClick={reset} className="mt-5 text-xs text-gray-400 hover:text-gray-600 underline-offset-2 hover:underline">
          Recommencer le quiz
        </button>
      </div>
    )
  }

  const current = steps[step]

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl">
      {/* Progress */}
      <div className="flex gap-1.5 mb-6">
        {steps.map((_, i) => (
          <div key={i} className="h-1 flex-1 rounded-full transition-all"
            style={{ background: i <= step ? '#4F46E5' : '#e5e7eb' }} />
        ))}
      </div>
      <div className="text-xs text-gray-400 mb-2">Question {step + 1} sur {steps.length}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-5">{current.q}</h3>
      <div className="grid grid-cols-2 gap-3">
        {current.options.map(o => (
          <button key={o.id} onClick={() => pick(o.id)}
            className="text-left p-4 rounded-xl border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all group">
            <div className="text-indigo-400 mb-2">{o.icon}</div>
            <div className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700">{o.label}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
