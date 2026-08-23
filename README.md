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
| Textes d'interface, À propos, Contact | `content/i18n/fr.ts` et `content/i18n/en.ts` |
| Études de cas | `content/case-studies/{fr,en}/*.mdx` |
| Manifeste | `content/manifeste/{fr,en}.mdx` |
| Domaine du site (Open Graph, hreflang) | `lib/site.ts` |
| Fiches de décision (élément signature) | `components/decision.tsx` |

Dans un `.mdx` d'étude de cas : les sections sont des titres `##` (numérotés automatiquement
par le CSS), les décisions s'écrivent
`<Decision n="01" statut="…" titre="…" contexte="…" retenu="…" ecarte="…" />`,
le renvoi final vers le manifeste s'écrit `<Renvoi acte="III">texte</Renvoi>`,
et une donnée manquante s'écrit `<Todo>ce qu'il faut renseigner</Todo>`.

Dans le manifeste : chaque acte est un `<Acte n="III" titre="…" sous="…" />`.
Le sommaire latéral et le temps de lecture sont calculés automatiquement à partir
du fichier — il n'y a rien à tenir à jour en double.

## Ce qui reste à compléter

Le site affiche volontairement un marqueur ocre là où une donnée réelle manque.
Il en reste **quatre** :

1. **Aleth — analyses en échec.** « Aucune à ce jour » n'a de sens qu'avec une fenêtre :
   sur combien d'analyses et depuis quand. (`content/case-studies/*/aleth.mdx`)
2. **Manifeste — les sources.** La liste numérotée est à intégrer depuis le bloc-notes,
   avec un appel de note pour chaque chiffre et chaque fait daté.
   (`content/manifeste/*.mdx`, bloc `<Methode>`)
3. **Manifeste EN — relecture.** La traduction anglaise est intégrale mais doit être
   relue : un texte aussi personnel perd de sa voix en traduction.
4. **Validation de Marwan** sur l'intégralité de la page Aleth avant diffusion.
   Le portfolio est un contenu externe et engage la société.

Et hors site, à traiter séparément : l'écart entre la promesse publique d'Aleth
(cartographie complète en quinze minutes) et la durée réelle d'une analyse
(quelques secondes). L'écart s'explique, mais il donne l'impression d'un chiffre
approximatif sur un produit qui vend la précision.

## Vérifié

- Build sans erreur, aucun avertissement TypeScript, aucune erreur console.
- Responsive testé à 360 px : aucun débordement horizontal.
- Ancres du manifeste et renvois depuis les études de cas : tous valides.
- Photo, deux CV et manifeste PDF servis correctement.

## Déploiement

Procédure complète dans [DEPLOIEMENT.md](DEPLOIEMENT.md).
Le site est publié sur <https://bouhouch-chouaib.github.io/portfolio/> à chaque push sur `main`.

## L'ancien portfolio

Le site précédent (HTML/CSS statique) et ses archives de projets scolaires ont été
remplacés, mais restent dans l'historique git — rien n'est perdu :

```bash
git show 5a21ea5 --stat
```

```bash
git checkout 5a21ea5 -- "assets/Database creation project.zip"
```
