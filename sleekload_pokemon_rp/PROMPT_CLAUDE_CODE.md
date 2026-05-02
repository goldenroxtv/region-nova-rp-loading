# 📋 PROMPT POUR CLAUDE CODE

Voici un prompt prêt à coller dans Claude Code pour qu'il automatise l'intégration du loading screen avec ton serveur.

---

## PROMPT 1 — Vérifier la configuration serveur actuelle

Copie-colle ceci à Claude Code :

```
Je vais installer un loading screen custom (SleekLoad) hébergé sur GitHub Pages.

L'URL finale sera : https://[mon-username].github.io/region-nova-rp-loading/sleekload/
(je remplacerai [mon-username] par le vrai)

Avant que je l'installe, fais ces vérifications dans mon serveur GMod local 
(C:\Users\mafio\Desktop\PokemonRP\) :

1) Cherche le fichier de lancement du serveur (start.bat, server.bat, srcds.bat, etc.)
   Affiche-moi son contenu actuel.

2) Vérifie s'il y a déjà un paramètre +sv_loadingurl dans la commande srcds.exe.
   Si oui, dis-moi quelle URL est utilisée actuellement.

3) Vérifie le fichier server.cfg dans garrysmod/cfg/ s'il existe, et affiche son contenu.
   Si la directive sv_loadingurl est présente dans server.cfg, dis-moi sa valeur.

Réponds avec un résumé clair de la config actuelle pour que je sache où ajouter le 
nouveau sv_loadingurl.
```

---

## PROMPT 2 — Configurer le loading screen URL

Une fois que tu as ton URL GitHub Pages finale, copie-colle :

```
J'ai mon URL de loading screen prête : 
https://[mon-username].github.io/region-nova-rp-loading/sleekload/

(Remplace [mon-username] dans ce qui suit par mon vrai username GitHub : 
LE_USERNAME_ICI)

Configure mon serveur GMod local pour utiliser ce loading screen :

1) Modifie le fichier de lancement (start.bat ou équivalent) pour ajouter à la 
   commande srcds.exe ce paramètre :
   +sv_loadingurl "https://LE_USERNAME_ICI.github.io/region-nova-rp-loading/sleekload/"
   
   Si un +sv_loadingurl existe déjà, REMPLACE-le par cette nouvelle URL.

2) ALTERNATIVE : ajoute aussi cette ligne dans garrysmod/cfg/server.cfg :
   sv_loadingurl "https://LE_USERNAME_ICI.github.io/region-nova-rp-loading/sleekload/"
   
   Si server.cfg n'existe pas, crée-le avec cette ligne.

3) Affiche-moi la version finale du fichier .bat modifié pour que je vérifie.

4) Donne-moi les instructions pour redémarrer le serveur et tester le loading screen.
```

---

## PROMPT 3 — Si tu veux ajouter des stats serveur dynamiques (avancé/optionnel)

Si tu veux que le loading screen affiche en plus le **nombre de joueurs en ligne** ou 
le **nom de ton serveur**, copie-colle :

```
Je veux que mon loading screen SleekLoad affiche dynamiquement le nom de mon serveur 
dans le titre et le sous-titre de "Battle Ready".

SleekLoad supporte déjà l'affichage automatique de la map et du gamemode via 
%%map%% et %%gamemode%% dans languages/french.js.

Trouve quelle est ma config serveur actuelle (sv_hostname, sv_gamemode) et dis-moi 
comment elle s'affichera dans le loading screen.

Bonus : si possible, modifie languages/french.js pour personnaliser plus le texte 
sous le logo.
```

---

## 💡 TIPS pour utiliser ces prompts

1. **Lance le PROMPT 1 en premier** pour comprendre ta config actuelle
2. **Crée ton repo GitHub et active Pages** (cf INSTALL.md)
3. **Lance le PROMPT 2 avec ton URL GitHub réelle** pour configurer le serveur
4. **Redémarre le serveur**
5. **Connecte-toi en client** pour tester le loading screen
6. **Si tu veux du dynamique en bonus**, lance le PROMPT 3
