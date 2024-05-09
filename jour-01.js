// Pas de déclaration spécifique en tête d'un fichier JavaScript standard

// Déclaration de variables et assignation de valeurs :

// 'let' permet de modifier la valeur de la variable après sa déclaration
let maVar1 = "Paul";

// 'const' déclare une variable dont la valeur ne peut pas être modifiée
const maVar2 = "je peux pas";

// Affichage des variables dans la console
// console.log(maVar1);
// console.log(maVar2);

// Différents types de données

// 1 - String (chaîne de caractères) : se déclare avec des guillemets ("", '', ``)
// Les guillemets inversés `` permettent d'intégrer des expressions (${expression})
const exempleString = `Voici un exemple avec ma variable : ${maVar1}`;

// 2 - Number (nombre) :
const nombre = 56;

// Affichage du type de 'nombre'
// console.log(typeof(nombre));

// 3 - Object (objet) : se déclare avec des accolades {}
// Exemple non affiché ici pour simplicité

// Array (tableau) : se déclare avec des crochets []
const monTableau = [1, 2, 3];
// Affichage d'un élément du tableau
// console.log(monTableau[1]);

// Récupération de données via une API
fetch("https://swapi.dev/api/people/1");

// Affichage de la chaîne de caractères
// console.log(exempleString);

// Déclaration et utilisation de fonctions :

// Déclaration d'une fonction
function construireMonPersonnage(nom, couleurCheveux) {
    let objetPersonnage = {
        monPersonnage: {
            nom: "",
            couleurCheveux: ""
        }
    };
    
    objetPersonnage.monPersonnage.nom = nom;
    objetPersonnage.monPersonnage.couleurCheveux = couleurCheveux;
    // Affichage des propriétés de l'objet personnage
    // console.log(objetPersonnage.monPersonnage.nom);
    // console.log(objetPersonnage.monPersonnage.couleurCheveux);
}

// Exécution de la fonction
construireMonPersonnage("Paul", "gris"); // À lier avec du HTML et un formulaire

// Correction d'une boucle for mal formée :
const longueur = 10;

// Boucle correcte : utilisation de '<' au lieu de '>'
for (let i = 0; i < longueur; i++) {
    console.log("Paul " + i);
}
