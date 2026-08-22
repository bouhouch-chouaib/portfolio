# Procédure de déploiement

Le build produit un dossier `out/` entièrement statique : des fichiers HTML, CSS, JS et
polices, rien à exécuter côté serveur.

## Option A — GitHub Pages (en place aujourd'hui)

C'est le déploiement actif : le dépôt `bouhouch-chouaib/portfolio` publie sur
<https://bouhouch-chouaib.github.io/portfolio/>.

**Tu n'as rien à lancer.** Le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
se déclenche à chaque push sur `main` : il installe les dépendances, exécute
`npm run build`, et publie `out/`. Suivi dans l'onglet **Actions** du dépôt.

### Le point qui casse en silence : le sous-chemin

Un site *de projet* GitHub Pages est servi sous `/portfolio/`, pas à la racine. Sans
préfixe, toutes les URL internes pointeraient vers `/fr/` — une page blanche et des
assets en 404. D'où `basePath` dans [`next.config.ts`](next.config.ts), alimenté par la
variable `NEXT_PUBLIC_BASE_PATH` que le workflow fixe à `/portfolio`.

En local, la variable est absente : le site tourne à la racine, `npm run dev` fonctionne
sans préfixe. Pour reproduire exactement la prod (dans Git Bash, `MSYS_NO_PATHCONV=1`
empêche la conversion du chemin en chemin Windows) :

```bash
MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

### Vérifier une fois le premier déploiement passé

Dans **Settings → Pages**, la source doit être « GitHub Actions » (et non « Deploy from
a branch »). Si ce n'est pas le cas, change-la : l'ancien site utilisait l'autre mode.

### Si tu branches un domaine personnalisé plus tard

Le site passe à la racine du domaine : trois changements liés, à faire ensemble.

1. Supprimer le bloc `env: NEXT_PUBLIC_BASE_PATH` du workflow.
2. Mettre le domaine dans [`lib/site.ts`](lib/site.ts) (sans sous-chemin).
3. Ajouter un fichier `public/CNAME` contenant le domaine, et le déclarer dans
   **Settings → Pages**.

## Option B — VPS + nginx

Utile si tu veux héberger le site toi-même. Le site est alors à la racine du domaine :
pas de `basePath`, et `SITE_URL` doit valoir ton domaine.

### 1. Construire, puis vérifier en local

```bash
npm run build
```

```bash
npm run preview
```

### 2. Envoyer `out/` sur le serveur

Depuis Windows, `scp` est disponible nativement (OpenSSH) :

```bash
scp -r out/* utilisateur@ton-vps:/var/www/portfolio/
```

Sur le VPS, crée d'abord le dossier :

```bash
sudo mkdir -p /var/www/portfolio && sudo chown $USER /var/www/portfolio
```

### 3. Bloc serveur nginx

Fichier `/etc/nginx/sites-available/portfolio` :

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name ton-domaine.tld;

    root /var/www/portfolio;
    index index.html;

    # Chaque page est un dossier/index.html (trailingSlash: true) :
    # try_files résout /fr/projets/aleth/ vers son index.html.
    location / {
        try_files $uri $uri/ =404;
    }

    # Les assets Next sont fingerprintés : cache long sans risque.
    location /_next/static/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    gzip on;
    gzip_types text/html text/css application/javascript image/svg+xml;
}
```

Activation :

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
```

```bash
sudo nginx -t && sudo systemctl reload nginx
```

### 4. HTTPS (obligatoire — LinkedIn ne prévisualise pas le HTTP)

```bash
sudo certbot --nginx -d ton-domaine.tld
```

Certbot réécrit le bloc serveur pour le HTTPS et programme le renouvellement.

## Après la mise en ligne, dans l'ordre

1. Tester l'aperçu LinkedIn : <https://www.linkedin.com/post-inspector/>
2. Passer Lighthouse (onglet Audits de Chrome, en navigation privée) sur l'accueil et
   une étude de cas — objectif : > 90 sur les quatre catégories.
3. Vérifier la console navigateur : zéro erreur attendue.
