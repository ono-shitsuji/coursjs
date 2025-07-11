//console.log('hello !');


// cherche la position d un element dans une chaine de caractere (si l element n est pas trouve il retourne -1)
//indexOf();

let phrase =  "Bonjour Ilyes, comment vas-tu ?";

let position = phrase.indexOf("Ilyes");

console.log(position);


// decoupe une chaine de caractere a partir d une position et prend un nombre de caracteres
//substring();

let phrase2= "Hello ! "

//Decoupe la phrase à partir de la possition 1 il prend 2 caracteres ( le 2éme et 3éme )
let decoupe = phrase2.substring(1, 3);

console.log(decoupe);

//include();

// verifie si une chaine de caractere contient un element (retourne true ou false)

let mail = prompt("donne moi ton e-mail :");

if(mail.includes("@")){
    alert("E-mail valide");
}else{
    alert("E-mail invalide");
}

// toLowerCase() 
    // met en minuscule une chaine de caractere

// toUpperCase() 
    // met en majuscule une chaine de caractere

// length
// retourne la longueur d une chaine de caractere(ou le nombre d element d un tableau)
    document.write(`<p>Ma phrase : ${phrase}  ${phrase.length} <p>`);

    document.write("<p>Ma phrase"+ phrase + " " + phrase.length + "</p>");


// FONCTION UTILISATEUR

function maFonction(){
    console.log("Hello toi !");
}

maFonction();

function meteo(saison, temperature){
    let message = `Nous somme en ${saison} et il fait ${temperature}°`;
    document.write("<p>"+ message +"</p>");
}


let saisonUtilisateur = prompt("donne moi une saison :");
let temperatureUtilisateur= prompt("donne moi une temperature :");

meteo(saisonUtilisateur, temperatureUtilisateur);


