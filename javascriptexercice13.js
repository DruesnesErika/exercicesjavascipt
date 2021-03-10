// Exercice de la partie 13 de Javascript (Les objets natifs)

moyenne = 0
nombre = 0
somme = 0
var tab = ["", ]
var i = window.prompt("Ecrivez des chiffres, pour terminer la saisie, tapez 0");
console.log("L'utilisateur a tapé " + i);
while (i != "0") {
    nombre++;
    tab = tab + " " + i;
    somme = parseInt(somme) + parseInt(i);
    var i = window.prompt("Ecrivez des chiffres, pour terminer la saisie, tapez 0");
    console.log("L'utilisateur a tapé " + i);
}

moyenne = somme / nombre;

console.log(tab + "\nNombre de notes: " + nombre + "\nMoyenne: " + moyenne + "\nSomme: " + somme);
alert(tab + "\nNombre de notes: " + nombre + "\nMoyenne: " + moyenne + "\nSomme: " + somme);