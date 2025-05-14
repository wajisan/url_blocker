# URL Blocker Extension

## Description

Cette extension Chrome permet de **bloquer des URLs** spécifiques, ou même des parties d'URLs (par exemple, toutes les pages commençant par `domain.com/page3/*`).

### Fonctionnalités
- **Bloquer des URLs complètes** ou **des parties d'URLs**.  
- Support des **wildcards** (`*`), par exemple `domain.com/*` ou `domain.com/page3/*`.  
- Interface simple pour **ajouter** ou **supprimer** des URLs directement depuis le navigateur.  
- Lorsque l'extension bloque une URL, l'utilisateur est redirigé vers une page affichant le message **"nuh huh"**.

---

## Installation (localement)

### Prérequis
- Google Chrome installé.

### Étapes
1. **Télécharge ou clone ce repository** sur ton ordinateur.  
2. **Ouvre Chrome** et va sur la page `chrome://extensions/`.  
3. Active le **Mode Développeur** (coin supérieur droit).  
4. Clique sur **"Charger l'extension non empaquetée"**.  
5. Sélectionne le dossier contenant l'extension téléchargée (qui doit inclure le fichier `manifest.json`, ainsi que tous les fichiers de l'extension).  
6. **L'extension est maintenant installée localement** sur ton navigateur ! 🎉

---

## Utilisation

1. **Ajouter une URL à bloquer** :
    - Clique sur l'icône de l'extension (en haut à droite de Chrome).  
    - Dans la fenêtre qui s'ouvre, entre l'URL ou le pattern (exemple : `*://www.youtube.com/shorts/*`) et clique sur **"Ajouter"**.  
    - L'URL sera ajoutée à la liste des URLs bloquées et l'extension commencera à bloquer cette URL dans le futur.

2. **Supprimer une URL bloquée** :
    - Depuis la même fenêtre de l'extension, tu peux supprimer une URL en cliquant sur le bouton **"X"** à côté de chaque URL.

3. **Comportement de l'extension** :
    - Lorsque tu navigues vers une URL bloquée (en la tapant dans la barre d'adresse ou en cliquant sur un lien), tu seras redirigé vers une page affichant le message **"nuh huh"**.

---

## Exemple

Voici quelques exemples de patterns d'URL que tu peux ajouter pour les bloquer :

- `*://www.youtube.com/shorts/*` ➡️ Bloque toutes les vidéos YouTube Shorts.  
- `*://www.example.com/page3/*` ➡️ Bloque toutes les pages qui commencent par `www.example.com/page3/`.  
- `*://example.com/*` ➡️ Bloque l'ensemble du site `example.com`.

---

## Contribution

Si tu souhaites contribuer à cette extension, n'hésite pas à **ouvrir une issue** ou à **soumettre une pull request** sur ce repository.
