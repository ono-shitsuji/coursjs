let heure;
let minutes;
let secondes;

heure = parseInt(prompt("quelle heure est t'il?"));
minutes = parseInt(prompt("Donnez moi une minute"));
secondes = parseInt(prompt("Donnez moi des secondes"));
 
// on teste les cas d'erreur 
if((heure >= 0) && (heure <= 23) && (minutes >= 0) && (minutes <=59) && (secondes >= 0) && (secondes <= 59)){
    // on incrémente les secondes
    secondes++

    //les cas de changement de minute heure ou seconde 
    if (secondes === 60){
        // on met les secondes à 0 et passe à la minute suivante
        minutes++;
        secondes=0;
        if(minutes === 60){
            heure++;
            minutes = 0;
            if(heure === 24){
                heure = 0;
            }
        }
    }

    document.write("<p>Dans une seconde il sera "+ heure + " h " + minutes + " m " + secondes + " s</p>");

}else{
    document.write("<p>Heure incorrect</p>");
}