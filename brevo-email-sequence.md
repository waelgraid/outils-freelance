# Séquence email Brevo — outils-freelance.fr
# À configurer dans Brevo > Automations > Créer une automation > "Welcome message"
# Déclencheur : contact ajouté à la liste "Inscrits newsletter"

---

## EMAIL 1 — Envoi immédiat après inscription
**Objet :** Bienvenue — voici nos 3 recommandations immédiates
**Prévisualisation :** Sélectionnés parmi +50 outils testés, pour vous.

---

Bonjour,

Merci pour votre inscription sur Outils-Freelance.fr.

Notre mission : vous faire gagner du temps en vous guidant vers les meilleurs outils pour votre activité — sans pub cachée, avec des tests réels.

**Nos recommandations immédiates selon votre situation :**

**Logiciel de gestion**
Abby — facturation illimitée, déclarations URSSAF, comptabilité. La version gratuite couvre 90% des besoins.
→ https://c3po.link/QsNZwhTBgx

**Banque pro**
Qonto — IBAN français, ouverture en 10 minutes, 30 jours gratuits.
→ https://qonto.com/fr/open-account?ref=outils-freelance

**Mutuelle**
Alan — remboursements en 24h, tout sur l'application mobile.
→ https://alan.com/?ref=outils-freelance

---

Dans les prochains jours, je vous enverrai notre guide personnalisé selon votre profil.

À très vite,
L'équipe Outils-Freelance.fr

*Vous recevez cet email car vous vous êtes inscrit sur outils-freelance.fr. [Se désinscrire]*

---

## EMAIL 2 — J+3
**Objet :** Freelance, artisan ou libéral ? L'outil fait pour vous
**Prévisualisation :** Notre sélection personnalisée par profil.

---

Bonjour,

Tous les indépendants n'ont pas les mêmes besoins.

**Vous êtes freelance ou consultant ?**
Freebe est conçu pour ça : suivi du temps, gestion des missions, rentabilité par client.
→ https://link.freebe.me/Outils-Freelance

**Vous êtes artisan ou BTP ?**
Abby gère les devis avec acomptes, les situations de travaux et la facturation électronique certifiée.
→ https://c3po.link/QsNZwhTBgx

**Vous êtes profession libérale (médecin, kiné, infirmier) ?**
Indy est spécialisé BNC : déclaration 2035 automatisée, connexion bancaire, version gratuite.
→ https://www.indy.fr/inscription?ae=1514

**Vous avez une SASU ou un CA > 50 000€/an ?**
Pennylane : comptabilité temps réel, collaboration expert-comptable.
→ https://www.pennylane.com/?ref=outils-freelance

---

Des questions ? Répondez directement à cet email.

L'équipe Outils-Freelance.fr

---

## EMAIL 3 — J+7
**Objet :** Les outils gratuits sont-ils vraiment suffisants ?
**Prévisualisation :** Notre réponse honnête après tests.

---

Bonjour,

C'est la question qu'on nous pose le plus souvent.

**Notre réponse honnête : oui, pour la majorité des auto-entrepreneurs.**

Ce que les outils gratuits font très bien :
- Créer des factures conformes
- Déclarer le CA à l'URSSAF
- Tenir le livre des recettes
- Gérer devis et relances

Ce qui justifie de passer en payant (5 à 15€/mois) :
- Connexion bancaire automatique (économise 2 à 3h par mois)
- Gestion de la TVA si vous dépassez 37 500€ de CA
- Support prioritaire

Notre recommandation : démarrez avec Abby gratuit ou Indy gratuit. Passez en payant quand l'outil vous limite — généralement autour de 30 000€ de CA annuel.

→ Notre comparatif complet : https://www.outils-freelance.fr/comparatifs/logiciels-facturation

---

La semaine prochaine : Qonto ou Shine — notre verdict après 3 mois de tests.

À bientôt,
L'équipe Outils-Freelance.fr

---

## EMAIL 4 — J+14
**Objet :** Qonto vs Shine : notre verdict (ça dépend d'une chose)
**Prévisualisation :** La réponse tient en une phrase.

---

Bonjour,

La question la plus posée sur notre site : Qonto ou Shine ?

Notre verdict en une phrase :

Si vous n'encaissez pas d'espèces → Shine (7,90€/mois, interface soignée).
Si vous avez besoin de dépôts cash ou de plus d'intégrations → Qonto (11€ HT/mois).

Les deux proposent 30 jours gratuits sans engagement.

→ Lire le comparatif complet : https://www.outils-freelance.fr/comparatifs/qonto-vs-shine
→ Ouvrir un compte Qonto : https://qonto.com/fr/open-account?ref=outils-freelance
→ Ouvrir un compte Shine : https://www.shine.fr/?utm_source=affiliation&utm_medium=affiliae&utm_campaign=outils-freelance-fr&ae=1691

---

C'était le dernier email de bienvenue. Vous recevrez notre newsletter mensuelle avec les nouveaux comparatifs et offres.

Bonne continuation,
L'équipe Outils-Freelance.fr

*[Se désinscrire] · outils-freelance.fr*

---

## CONFIGURATION BREVO — Instructions étape par étape

### Étape 1 : Créer la liste contacts
1. Menu gauche > Contacts > Listes
2. "Créer une liste" → Nom : "Inscrits newsletter outils-freelance"
3. Notez l'ID de la liste (affiché dans l'URL)

### Étape 2 : Vérifier le code API dans votre .env.local
BREVO_API_KEY=votre_clé_api
BREVO_LIST_ID=id_de_la_liste

### Étape 3 : Créer l'automation
1. Menu gauche > Automations > Créer une automation
2. Choisir "Welcome message" ou "Blank automation"
3. Déclencheur : "Contact added to list" → sélectionner "Inscrits newsletter outils-freelance"

### Étape 4 : Créer les 4 emails
Pour chaque email :
1. "Add an action" > "Send an email"
2. Créer le template avec le contenu ci-dessus
3. Configurer le délai (immédiat / +3j / +7j / +14j)

### Étape 5 : Activer
Cliquer "Activate" en haut à droite.

### Vérification
Testez avec votre propre email en vous inscrivant via le formulaire du site.
