import type { NextConfig } from "next";

/*
 * Le site est servi sur un sous-chemin quand il est déployé sur GitHub Pages
 * (bouhouch-chouaib.github.io/portfolio/). basePath préfixe alors toutes les
 * URL internes et tous les assets. Vide en local et sur un VPS à la racine.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Un package-lock.json parasite existe dans le dossier utilisateur ;
  // on fixe explicitement la racine du projet pour que Next l'ignore.
  outputFileTracingRoot: __dirname,
  // Export 100 % statique : pas de serveur Node en production.
  output: "export",
  // Chaque page devient un dossier/index.html : servable tel quel.
  trailingSlash: true,
  // L'optimiseur d'images de Next est un serveur ; en export statique il n'existe pas.
  images: { unoptimized: true },
  basePath,
};

export default nextConfig;
