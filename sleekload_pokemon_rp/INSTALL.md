# 🔥 INSTALLATION SLEEKLOAD RÉGION NOVA RP — BATTLE READY

## 📦 Contenu du pack

```
sleekload_pokemon_rp/
├── INSTALL.md                  ← ce fichier
├── PROMPT_CLAUDE_CODE.md       ← prompt prêt pour automatiser
└── sleekload/                  ← dossier à uploader
    ├── config.js               ← config Région Nova RP customisée
    ├── index.html              ← (inchangé, fourni par SleekLoad)
    ├── css/sleek.css           ← thème Battle Ready
    ├── languages/french.js     ← traduction française
    ├── images/logo.png         ← logo Pokédex Battle Ready
    └── ... (autres fichiers SleekLoad inchangés)
```

---

## 🚀 ÉTAPES D'INSTALLATION

### Étape 1 : Créer un compte GitHub (si pas déjà)

1. Va sur https://github.com
2. Sign up → crée ton compte (gratuit)

### Étape 2 : Créer un nouveau repository

1. Une fois connecté, clique le **+** en haut à droite → **New repository**
2. Nom : `region-nova-rp-loading`
3. **PUBLIC** obligatoire (sinon GitHub Pages gratuit ne marche pas)
4. Coche **Add a README file**
5. Clique **Create repository**

### Étape 3 : Uploader le dossier `sleekload`

**Option A — Interface web (plus simple) :**
1. Sur ton repo, clique **Add file** → **Upload files**
2. Glisse-dépose le DOSSIER ENTIER `sleekload` (avec tout son contenu)
3. Tout en bas, clique **Commit changes**

**Option B — GitHub Desktop (si tu connais) :**
1. Clone le repo
2. Copie le dossier sleekload dedans
3. Commit + Push

### Étape 4 : Activer GitHub Pages

1. Sur ton repo, va dans **Settings** (en haut à droite)
2. Dans le menu de gauche, clique **Pages**
3. Sous **Source** :
   - Branch : `main` (ou `master`)
   - Folder : `/ (root)`
4. Clique **Save**
5. Attends 1-2 minutes
6. Rafraîchis la page : tu verras `Your site is live at https://[ton-username].github.io/region-nova-rp-loading/`

### Étape 5 : Tester l'URL du loading screen

L'URL finale à utiliser dans GMod sera :

```
https://[ton-username].github.io/region-nova-rp-loading/sleekload/
```

⚠️ **NOTE IMPORTANTE** : il y a `/sleekload/` à la fin parce que tu as uploadé le dossier `sleekload`, donc le `index.html` est dedans.

Ouvre cette URL dans ton navigateur. Tu dois voir le loading screen Battle Ready avec :
- Background vidéo violet/bleu
- Logo Pokédex en haut au centre
- Titre stylé
- Barre de progression Battle Ready
- Messages rotatifs en français
- Éclairs jaunes dans les coins

### Étape 6 : Configurer ton serveur VeryCloud

1. Va sur le panel **Wisp** de VeryCloud
2. Cherche **Server Options** → **Loading URL** (ou `sv_loadingurl`)
3. Colle ton URL : `https://[ton-username].github.io/region-nova-rp-loading/sleekload/`
4. Sauvegarde
5. **Si pas de champ dédié** : va dans **Configuration → Paramètres de démarrage** et ajoute à ta commande srcds.exe :
   ```
   +sv_loadingurl "https://[ton-username].github.io/region-nova-rp-loading/sleekload/"
   ```
6. **Redémarre le serveur**

### Étape 7 : Tester en jeu

1. Connecte-toi à ton serveur
2. Le loading screen Battle Ready apparaît pendant le chargement
3. 🎉 

---

## 🎵 AJOUTER TA MUSIQUE 8-bit POKÉMON

Le `config.js` contient déjà 4 YouTube IDs de musiques 8-bit Pokémon. ⚠️ MAIS :
- YouTube fonctionne **uniquement avec Chromium beta** dans GMod
- Si la majorité de tes joueurs utilisent le client Gmod normal, ils n'entendront pas YouTube

**Solution recommandée : utiliser des fichiers .ogg locaux**

1. Trouve des musiques 8-bit Pokémon en `.ogg` :
   - **Pixabay** (https://pixabay.com/music/search/8bit%20battle/) — libre de droits
   - **OpenGameArt** (https://opengameart.org) — chercher "chiptune battle"
   - **YouTube to OGG converter** — pour récupérer un .ogg depuis YouTube
   
2. Place les fichiers `.ogg` (max ~3 MB chacun) dans `sleekload/music/`

3. Modifie `config.js` ligne `config.music_playlist` pour ajouter :
   ```javascript
   {
       name: "Pokemon Battle Theme 8bit",
       file: "battle_theme.ogg",
   },
   ```

4. Re-commit sur GitHub
5. Ça fonctionnera dans tous les clients GMod

---

## ⚙️ PERSONNALISATIONS RAPIDES

Toutes les personnalisations se font dans `sleekload/config.js`. Modifie le fichier sur GitHub directement (clic sur le fichier → icône crayon "Edit") pour des modifications rapides en ligne.

### Changer le background

Dans `config.js` :
```javascript
config.background_video = "red_rays_battle.webm"  // 🔥 ROUGE/ORANGE Battle Ready (DÉFAUT)
config.background_video = "blue_rays.webm"        // bleu/cyan
config.background_video = "green_rays.webm"    // vert
config.background_video = "purple_blue_rays.webm"  // violet/bleu (défaut)
```

Ou pour utiliser des images au lieu de vidéo :
```javascript
config.background_use_video = false
```

### Modifier les messages rotatifs

Dans `config.js`, modifie le tableau `config.messages_list = [...]`. Ajoute autant de messages que tu veux.

### Changer la durée d'affichage des messages

```javascript
config.messages_delay = 4500  // millisecondes (4.5 secondes)
```

### Ajuster l'opacité du background

```javascript
config.background_darkening = 60  // 0 = clair, 100 = très sombre
```

---

## 🛠️ DÉPANNAGE

### "Le loading screen n'apparaît pas"
- Vérifie que `sv_loadingurl` est bien configuré sur le serveur
- Vérifie que ton URL fonctionne dans un navigateur
- Le client doit avoir activé "show loading screens" dans les options GMod (option `cl_loadingscreen` ou similaire)

### "La musique ne joue pas"
- Les fichiers YouTube nécessitent Chromium beta (cf section musique ci-dessus)
- Privilégie les fichiers `.ogg` locaux pour la compatibilité maximale

### "Je vois la version par défaut SleekLoad au lieu de ma version Région Nova RP"
- Vérifie que tu as bien uploadé tous les fichiers customisés (config.js, sleek.css, logo.png, french.js)
- Force le rafraîchissement du cache navigateur (Ctrl+F5)
- Attends 2-3 minutes après un commit GitHub Pages, le déploiement n'est pas instantané

### "Erreur 404 sur l'URL"
- Vérifie que GitHub Pages est bien activé dans Settings → Pages
- Attends 5 minutes après l'activation
- Vérifie que la branche est bien `main` (pas autre chose)

---

## 📝 NOTES SUR L'ADDON.JSON

Le pack ne contient PAS d'addon.json (c'est pour Workshop GMod, pas pour le loading screen). 
SleekLoad est purement un site web hébergé sur GitHub Pages, pas un addon.
