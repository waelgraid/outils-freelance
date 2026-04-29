# Outils-Freelance.fr — Guide de déploiement

## Stack
- Next.js 14 (export statique — ultra rapide, parfait SEO)
- Tailwind CSS
- Hébergement : Vercel (gratuit)
- Domaine : outils-freelance.fr (à acheter sur OVH ~10€/an)

---

## 1. Installation locale

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 2. Build de production

```bash
npm run build
# Génère le dossier /out (site statique)
```

---

## 3. Déploiement sur Vercel

### Option A — Via GitHub (recommandé)
1. Crée un repo GitHub et push le code
2. Va sur vercel.com → "Add New Project"
3. Importe le repo GitHub
4. Vercel détecte Next.js automatiquement
5. Clique "Deploy"

### Option B — Via CLI
```bash
npm i -g vercel
vercel
```

---

## 4. Brancher le domaine outils-freelance.fr

1. Dans Vercel → Settings → Domains → Add Domain → `outils-freelance.fr`
2. Vercel te donne 2 enregistrements DNS à configurer
3. Dans OVH → Zone DNS de outils-freelance.fr :
   - Ajoute un enregistrement A : `@` → IP fournie par Vercel
   - Ajoute un CNAME : `www` → `cname.vercel-dns.com`
4. Propagation : 5-30 minutes

---

## 5. Programmes d'affiliation à rejoindre

Inscris-toi sur ces programmes pour activer les commissions :

| Outil | Programme | Commission |
|---|---|---|
| Indy | Via leur site → "Partenaires" | Récurrente |
| Freebe | Via leur site → "Affiliés" | 2 mois offerts |
| Abby | Via leur site → Contact | 30 jours offerts |
| Qonto | Via Partnerstack | ~80€/client |
| Shine | Via leur site | ~50€/client |
| Pennylane | Via leur site | ~100€/client |
| Alan | Via alan.com/affiliation | Variable |

**Mets à jour les URLs affiliation dans `/lib/tools.ts`** une fois que tu as tes liens personnalisés.

---

## 6. SEO — Actions immédiates après déploiement

1. **Google Search Console** → ajouter outils-freelance.fr → soumettre le sitemap : `https://outils-freelance.fr/sitemap.xml`
2. **Bing Webmaster Tools** → même chose
3. **Google Analytics ou Plausible** → ajouter le script dans `app/layout.tsx`
4. **Premiers backlinks** :
   - Poste sur Reddit r/freelance_fr
   - Publie sur LinkedIn avec ta vraie identité
   - Inscris-toi sur des annuaires : Annuaire-Gratuit.fr, Top-Annuaire.com
   - Commente des articles de blogs freelance avec ton URL

---

## 7. Structure du contenu

```
/                              → Homepage
/comparatifs/logiciels-facturation
/comparatifs/banques-pro
/comparatifs/logiciels-comptabilite
/comparatifs/mutuelles-freelance
/blog                          → Liste articles
/blog/[slug]                   → Article individuel
/outils/[slug]                 → Fiche outil
/mentions-legales
/sitemap.xml                   → Auto-généré
/robots.txt                    → Auto-généré
```

---

## 8. Ajouter du contenu (articles et outils)

### Ajouter un article
Dans `/lib/articles.ts`, ajoute une entrée avec le slug, titre, contenu Markdown.

### Ajouter un outil
Dans `/lib/tools.ts`, ajoute un objet Tool avec toutes les propriétés.

---

## 9. Prochaines étapes (Mois 2-3)

- [ ] Ajouter 10 nouveaux articles SEO (je les génère)
- [ ] Créer des pages sous-niches (ex: logiciel facturation artisan, logiciel facturation consultant)
- [ ] Acheter les premiers backlinks (budget : 500-1000€)
- [ ] Lancer une campagne Pinterest avec des infographies
- [ ] Ajouter un formulaire de newsletter (Brevo gratuit jusqu'à 300 emails/jour)
