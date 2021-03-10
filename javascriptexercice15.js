// Exercice de la partie 15 de Javascript (Les évènements)

var texte = document.getElementById("label1");
var button1 = document.getElementById("button1")
button1.addEventListener("click", function(event) {
    alert("Vous avez saisi: " + texte.value);
}, false);





// var element = document.getElementById("button1");

// element.addEventListener("click", function() 
// {
//    alert("OK");
// });