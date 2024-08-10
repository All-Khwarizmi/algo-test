
### Exercice : Calcul de la durée totale en heures et minutes à partir d'une liste de périodes

#### Objectif :
Écrire une fonction en JavaScript qui calcule la durée totale d'un ensemble de périodes de temps, chacune spécifiée par un début et une fin, et retourne la durée totale en heures et minutes.

#### Détail :
- **Nom de la fonction :** `calculateTotalDuration`
- **Paramètres :**
  - `periods` (Array) : Un tableau d'objets, chaque objet représentant une période de temps avec une heure de début et une heure de fin au format 24 heures. Par exemple :
    ```javascript
    [
      { start: "08:00", end: "10:30" },
      { start: "12:00", end: "13:45" },
      { start: "14:00", end: "16:15" }
    ]
    ```
- **Retour :** Une chaîne de caractères représentant la durée totale en heures et minutes, par exemple "5 heures et 30 minutes".

#### Explication :
La fonction doit calculer la durée totale de toutes les périodes fournies. Chaque période est calculée individuellement en minutes, puis la somme totale est convertie en heures et minutes.

#### Exemple :
```javascript
const periods = [
  { start: "08:00", end: "10:30" },
  { start: "12:00", end: "13:45" },
  { start: "14:00", end: "16:15" }
];

calculateTotalDuration(periods);
// Retourne : "5 heures et 30 minutes" (total des périodes : 2h30 + 1h45 + 1h30)
```

#### Contraintes :
- La durée totale doit être calculée en ajoutant les durées individuelles.
- Les heures de début et de fin doivent être au format 24 heures et doivent être valides.

#### Conseils :
<details>
  <summary>Spoiler warning</summary>
- Convertissez les heures de chaque période en minutes pour faciliter les calculs.
- Additionnez toutes les durées en minutes, puis convertissez le total en heures et minutes.
</details>