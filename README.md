# Portfolio — Chouaib Bouhouch

Site statique bilingue (FR/EN). Next.js + TypeScript + Tailwind CSS v4, contenu en MDX.

## Commandes

```bash
npm install       # une fois
npm run dev       # développement — http://localhost:3000/fr/
npm run build     # export statique dans out/
npm run preview   # sert out/ en local pour vérifier l'export
```

## Où vit chaque chose

| Quoi | Où |
|---|---|
| Tokens (couleurs, polices, échelle typo) | `app/globals.css`, bloc `@theme` — unique source de vérité |
| Textes d'interface et pages À propos / Contact | `content/i18n/fr.ts` et `content/i18n/en.ts` |
| Études de cas | `content/case-studies/{fr,en}/*.mdx` — modifiables sans toucher au code |
| Domaine du site (Open Graph, hreflang) | `lib/site.ts` |
| Fiches de décision (élément signature) | `components/decision.tsx` |

Dans un fichier `.mdx` : les sections sont des titres `##` (numérotés automatiquement par le CSS),
les décisions s'écrivent `<Decision n="01" statut="…" titre="…" contexte="…" retenu="…" ecarte="…" />`,
et une donnée manquante s'écrit `<Todo>ce qu'il faut renseigner</Todo>`.

## Avant la mise en ligne — checklist des [À COMPLÉTER]

Le site affiche volontairement des marqueurs ocre là où une donnée réelle manque.
À traiter avant publication :

1. **`lib/site.ts`** : renseigne le domaine réel si tu quittes GitHub Pages
   (aujourd'hui : `https://bouhouch-chouaib.github.io/portfolio`).
2. **Contact** (`content/i18n/*.ts`) : email public, URL LinkedIn, URL GitHub.
3. **CV** : `public/cv/CV_Bouhouch_Chouaib_2025.pdf` a été récupéré de l'ancien site —
   il date de 2025, à rafraîchir. Renomme-le selon sa langue (`cv-fr.pdf` ou `cv-en.pdf`),
   ajoute la version manquante, puis renseigne `href` sur les deux entrées CV des
   dictionnaires.
4. **Photo** : `public/photo.jpg` (format 4:5, ~600 px de large suffisent) et brancher
   l'image dans `app/[locale]/a-propos/page.tsx`.
5. **Image Open Graph** : ajouter `public/og.png` (1200×630) et la déclarer dans
   `app/[locale]/layout.tsx` (`openGraph.images`) pour un bel aperçu LinkedIn.
6. **Études de cas** : remplacer chaque `<Todo>` par la donnée réelle — jamais par une
   estimation. Les sections « Ce qui a raté » sont obligatoires.
7. Relire `content/case-studies/*/aleth.mdx` : les justifications des décisions ont été
   rédigées à partir du brief — vérifier qu'elles correspondent à tes arbitrages réels,
   et qu'aucune formulation ne dépasse ce que la page s'autorise (indicateurs, jamais
   de verdicts ; rien sur la mécanique interne).

## Déploiement

Procédure complète dans [DEPLOIEMENT.md](DEPLOIEMENT.md).

## L'ancien portfolio

Le site précédent (HTML/CSS statique) et ses archives de projets scolaires ont été
remplacés, mais restent dans l'historique git — rien n'est perdu. Pour les récupérer :

```bash
git show 5a21ea5 --stat
```

Et pour restaurer un fichier précis dans le dossier courant :

```bash
git checkout 5a21ea5 -- "assets/Database creation project.zip"
```
