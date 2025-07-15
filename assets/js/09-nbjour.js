let mois1;
mois1= parseInt(prompt("donne moi un mois"));

switch(mois1){
    case 1:
        alert("31 jours");
        break;
    case 2:
        alert("28 jours");
        break;
    case 3:
        alert("31 jours");
        break;
    case 4:
        alert("30 jours");
        break;
    case 5:
        alert("31 jours");
        break;
    case 6:
        alert("30 jours");
        break;
    case 7:
        alert("31 jours");
        break;
    case 8:
        alert("31 jours");
        break;
    case 9:
        alert("30 jours");
        break;
    case 10:
        alert("31 jours");
        break;
    case 11:
        alert("30 jours");
        break;
    case 12:
        alert("31 jours");
        break;
    default:
        alert('Saisissez un numéro valide');
}
 
let mois = parseInt(prompt("Quel mois choisissez-vous", "<saisir un chiffre entre 1 et 12>"));

if (mois === 2) { // si on a choisi février => chiffre 2
    document.write("Le mois numéro " + mois + " fait 28 jours.");
} else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){ // si on a choisi un mois qui fait 30 jours
    document.write("Le mois numéro " + mois + " fait 30 jours.");
} else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)) { // si on a choisi un mois qui fait 31 jours
    document.write("Le mois numéro " + mois + " fait 31 jours.");
} else {
    document.write("Votre choix " + mois + " n'est pas dans le calendrier.");
} 


// cours js 

console.log("toto");

let fruits = ['pomme', 'banane', 'fraise'];
console.log(fruits.length);

let premier = fruits[0];
console.log(premier);

let couleurs = ["Chartreuse", "Crimson", "DarkGoldenRod", "DarkTurquoise", "DarkSalmon"];

console.log(couleurs[0]);

//Boucler sur un tableau
for(let i = 0; i < couleurs.length; i++ ){
    console.log(couleurs[i]);
    document.write(`<p style="color: ${couleurs[i]} ">J'aime les licornes</p>`)
};

//Ajouter à la fin du tableau
couleurs.push("DarkOrchid");

//Supprimer le dernier élément du tableau
couleurs.pop();

//Supprimer le premier élément du tableau
couleurs.shift();

//Ajouter au début du tableau
couleurs.unshift("HotPink");

// Trouver l'index d'un élément dans le tableau
let pos = couleurs.indexOf("Crimson");
console.log(pos);

//Supprimer un élément par son index
couleurs.splice(pos,1);

//Boucler sur un tableau
for(let i = 0; i < couleurs.length; i++ ){
    document.write(`<p style="color: ${couleurs[i]} ">J'aime les licornes</p>`)
};


let tableauFruits = ['banane', "pomme", 'fraise', "pasteque", "melon"];

let indexTab = 2;
let nombre = 3;

let nouveauTableauFruits = tableauFruits.splice(indexTab, nombre);
//indexTab = à partir de la position,
//nombre définit le nombre d'éléments à supprimer