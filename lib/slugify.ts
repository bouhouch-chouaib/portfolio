// Transforme un titre de section en identifiant d'ancre stable.
// Utilisé à deux endroits qui doivent produire le même résultat :
// le rendu des H2 et l'extraction du sommaire.
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // retire les accents (diacritiques combinants)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
