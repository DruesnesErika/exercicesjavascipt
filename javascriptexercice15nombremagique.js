var reponse = Math.floor((Math.random() * 10) + 1),
    textBox1;
console.log(reponse);
var fin = true;
textBox1 = prompt("Entrez un chiffre entre 1 et 10");
while (reponse != textBox1) {
    if (textBox1 < reponse)
        alert("plus grand");
    else
        alert("plus petit");
    textBox1 = prompt("Entrez un chiffre entre 1 et 10")
}
alert("Vous avez trouvé le bon chiffre bravo!")


// var texte = document.getElementById("label1");
// var button1 = document.getElementById("button1")
// button1.addEventListener("click", function(event) {
//     alert("Vous avez saisi: " + texte.value);
// }, false);

// var choixOrdi = Math.floor((Math.random() * 10) + 1),
//     choixUtilisateur;

// console.log(choixOrdi);

// var fin = true;
// choixUtilisateur = prompt("choisissez un nombre entre 0 et 10");

// // Pas besoin d'un booléen, on met la condition directement dans le while
// while (choixOrdi != choixUtilisateur) {

//     // Si il n'y a qu'une seule instruction, on peut omettre les accolades {}

//     if (choixUtilisateur < choixOrdi)
//         console.log("plus grand");
//     else
//         console.log("plus petit");

//     choixUtilisateur = prompt("choisissez un nombre entre 0 et 10");
// }

// // Ce message ne s'affichera seulement si le choixUtilisateur == choixOrdi (boucle while vérifiée)
// console.log("vous avez trouvé le bon chiffre bravo !");





// var texte = document.getElementById("label1");
// var button1 = document.getElementById("button1")
// button1.addEventListener("click", function(event) {
//     alert("Vous avez saisi: " + texte.value);
// }, false);