console.log("heyou");

let moyenne;

moyenne = parseFloat(prompt("Entre ta moyenne","14.7"));

if (moyenne < 10){
    document.write ("<p>Recalé</p>")
} else if ((moyenne >= 10) && (moyenne < 12)){
    document.write ("<p>Reçu</p>")
} else if ((moyenne >= 12) && (moyenne <= 20)){
    document.write ("<p>Mention<p/>")
}else{
    document.write("<p>Moyenne non valide<p/>")
} 

// ou bien voici la méthode 2 // 


console.log('Hello !');
/* LES BOUCLES */

// -- La boucle WHILE (tant que)
// Très utilisée quand on ne connaît pas le nombre de tours de boucles à l'avance

let j = 1;

while( j <= 10){
    document.write("<p style='color:red'>Je passe par ici "+ j +"</p>");
    j++;
    document.write("<p style='color:green'>Je passe par ici "+ j +"</p>");
}

// -- La boucle FOR
/*
    for(1er argument; 2éme argument; 3éme argument){
        ...code...
    }
*/

/*
1. initialise un compteur à partir de combien je compte (par défaut le compteur est la variable 'i')
2. la condition à vérifier qui doit donc être VRAIE (TRUE)
3. le 'pas' d'incrémentation (combien j'ajoute à chaque tour, généralement 1 donc i++)
*/

for (let i = 1; i<= 10; i++){
    document.write("<p style='color:red'>Je passe par là : " + i + "</p>");
}

for (let i= 1; i <= 10; i += 2 ){
    document.write("<p style='color:green'>Je passe par là : " + i + "</p>");
}

/* -------------------------------
            EXERCICE
j'ai 1000€ sur mon compte
chaque mois j'ajoute 50€
combien de temps me faut-il pour avoir 2000€ sur mon compte ?
-------------------------------- */

let compte = 1000;

let mois = 0;

while(compte <= 2000){

    //on ajoute 50 au compte
    compte = compte + 50 
    //on ajoute 1 à la boite mois
    mois++
    
}

document.write("<p>Il me faut :" + mois + " mois pour avoir " + compte +"</p>");

let temps= 0;

for( i = 1000; i <= 2000; i += 50 ){
    document.write("<p>Le mois: " + temps + "</p>");
    document.write("<p>j'ai : " + i + "</p>");
    temps++
}
document.write("<p>Il me faut " + temps +" pour avoir 2000€</p>");