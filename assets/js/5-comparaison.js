console.log("hello");

let nb1 = 123;
let nb2 = "123";


// L'opérateur de comparaison == signifie 'egal à'
// il permet de vérifier que les VALEURS de 2 variables sont identiques
// retourne TRUE
console.log(nb1 == nb2);

// l'opérateur de comparaison === signifie 'strictement égal à'
// il permet de vérifier la VALEUR et le type
// retourne FALSE
console.log(nb1 === nb2);


// -- L'opérateur != signifie 'différent de ... en VALEUR'
console.log(nb1 != nb2);// retourne FALSE

// -- L'opérateur !== signifie 'strictement différent de ... en VALEUR et en TYPE'
console.log(nb1 !== nb2);// retourne TRUE


/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen du prénom et de l'âge.
Je doit saisir mon prénom et mon age pour être authentifié sur le site 
(les infos sont en BDD, ici dans mes variables prenom et age).
En cas d'échec une alerte m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueille.
-------------------------------- */

let prenom, monAge;
prenom = "Mila";
age = 19;

/*
SI mon age = age BDD alors :
    SI mon prénom = prenom dans la bdd :
        ->ok, les 2 sont bon
    SINON
        ->le prénom n'est pas bon
SINON
 ->mon age n'est pas bon!
*/

let prenomInternaute = prompt("Quel est votre prénom ?", "Martine");

if(prenomInternaute == prenom){
    let ageInternaute = prompt("Votre age :");
    ageInternaute = parseInt(ageInternaute);

    if(age === ageInternaute){
        document.write("<h1>Bienvenue " + prenomInternaute + "</h1>")
    }else{
        alert('Erreur d\'age');
    }

}else{
    // Sinon, les prénoms ne correspondent pas, je lance une ALERT.
    alert("Attention, prénom non reconnu");
}