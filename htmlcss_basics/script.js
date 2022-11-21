

/*
 * VARIABLES
 *
 * Une variable est une sorte de case mémoire que JavaScript va allouer à un mot. 
 * Ce mot représentera la variable tout le long du script.
 * Cette variable pourra être modifiée tout le long du script... SAUF pour les constantes 
 * 
 * Le cycle de vie d'une variable est : 
 *      1. Déclaration
 *      2. Initialisation (première valeur)
 *      3. Assignations (peuvent être multiples donc...)
 */

const prénom = "Thomas";

let boisson = "café"; // variable qui peut réassigner au cours du script
let gobelet = "porcelaine";

let soif = true; // variable de type booléen : true / false
let niveauDeSoif = 3; // variable de type "entier" / INT



/*
 * FONCTIONS
 *
 * Les fonctions sont de petits bouts de code encapsulés
 * Ces bouts de code sont d'abord déclarés...
 * ... puis appelés, une ou plusieurs fois.
 */

// Je déclare une fonction qui dit bonjour.
function displayBonjour() {
    console.log("Hello !");
}



/*
 * INSTRUCTIONS
 *
 * Les instructions sont les différentes lignes de notre script.
 * Elles font une chose et seulement UNE.
 * Un script, un algorithme, est donc une succession d'instructions précise, comme une recette de cuisine...
 */ 

// Une instruction simple
console.log("mon fichier JS est bien appelé par mon HTML...");

// Une autre instruction : j'appelle ma fonction
displayBonjour();




/*
 * TESTS & CONDITIONS
 *
 * Les tests sont des questions fermées posées à JS
 * JS y répondra par VRAI ou FAUX (true false)
 * 
 * En fonction de la réponse, une condition peut aiguiller le script vers un groupe d'instructions ou un autre
 * 
 */

// Ais-je soif ? la variable "soif" répondra par "true" ou "false"
if( soif ) {

    // Je peux tester aussi des chaines de caractères...
    if( gobelet == "carton" ) {
        boisson = 'thé';
    }
    else {
        boisson = "chocolat chaud";
    }

    // Ou bien tester des nombres....
    if( niveauDeSoif > 5 ) {
        gobelet = gobelet + " de 1L";
    }
    else {
        gobelet = gobelet + " de 25cl";
    }

    console.log("J'ai soif ! Aujourd'hui je vais boire beaucoup de " + boisson + " dans du " + gobelet);

}
// Ma condition peut avoir un "sinon..."
else {
    console.log("Pas soif, pas de " + boisson + ', merci')
}



/*
 * COLLECTIONS
 *
 * Les collections sont des variables, mais qui contiennent plusieurs valeurs regroupées. 
 * Bien pratiques pour rassembler des données !
 */

// Je déclare un premier TABLEAU rassemblant le gout préféré des français en matière de bonbons Krema
let krema = ["krema", "citron"];

// Je déclare un second tableau contenant divereses données y compris des tableaux...
let typesBonbon = [
    "Liste des gouts préférés", // ici une chaine de caractère
    100, // pourcentage de chance que les statistiques soient justes
    krema, // un tableau contenu dans une variable
    ["carambar", "caramel"], // un tableau
    ["nounours", "guimauve"], // un autre
    ["tagada", "fraise"] // un dernier
];

console.log(typesBonbon);
let premierBonon = typesBonbon[0]; // je vais chercher le premier élément de mon tableaux. L'index commence TOUJOURS à 0

console.log( premierBonon )
console.log( premierBonon[0] )








