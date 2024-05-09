# Guide de JavaScript

Ce document fournit des liens vers des ressources utiles pour apprendre JavaScript et des exemples de base sur les différents types de données et les fonctions en JavaScript.

## Ressources Utiles

- [Documentation JavaScript MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [Problèmes de programmation sur LeetCode](https://leetcode.com/problemset/all/)

## Types de Données en JavaScript

### 1. Chaîne de Caractères (String)
Les chaînes de caractères sont utilisées pour stocker des séquences de lettres ou d'autres caractères.
```javascript
let salutation = "Bonjour, monde!";
console.log(salutation); // Affiche : Bonjour, monde!
```

### 2. Nombre (Number)

Les nombres en JavaScript peuvent être des entiers ou des flottants.

```javascript

let entier = 25;
let flottant = 3.14;
console.log(entier, flottant); // Affiche : 25 3.14
```

### 3. Booléen (Boolean)

Un booléen représente une valeur de vérité qui peut être soit true soit false.

```javascript

let estVrai = true;
let estFaux = false;
console.log(estVrai, estFaux); // Affiche : true false
```

### 4. Objet (Object)

Les objets en JavaScript sont des collections de propriétés.

```javascript

let personne = {
    nom: "Alice",
    age: 30
};
console.log(personne.nom); // Affiche : Alice
```

### 5. Tableau (Array)

Les tableaux sont utilisés pour stocker des listes ordonnées de valeurs.

```javascript

let nombres = [1, 2, 3, 4, 5];
console.log(nombres[0]); // Affiche : 1
```

## Fonctions en JavaScript

### Déclaration de Fonction

Les fonctions sont déclarées pour exécuter des blocs spécifiques de code.

```javascript

function saluer() {
    console.log("Hello, world!");
}
saluer(); // Appelle la fonction et affiche : Hello, world!
```

### Fonction de Rappel (Callback)

Une fonction de rappel est une fonction passée en argument à une autre fonction.

```javascript

function afficheResultat(callback) {
    callback();
}

afficheResultat(function() {
    console.log("Fonction exécutée!");
}); // Affiche : Fonction exécutée!
```

### Conclusion

Ce guide rapide fournit un aperçu des types de données de base en JavaScript et comment utiliser les fonctions. Pour des informations plus détaillées, veuillez consulter la documentation MDN liée ci-dessus.
