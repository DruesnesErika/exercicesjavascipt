var formValid = document.getElementById("boutonenvoi");
var societe = document.getElementById("societe");
var missSociete = document.getElementById("missSociete");
var personnecontact = document.getElementById("personnecontact");
var missPersonneContact = document.getElementById("missPersonneContact");
var codepostal = document.getElementById("codepostal");
var codepostalValid = /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/;
var missCodePostal = document.getElementById("missCodePostal");
var ville = document.getElementById("ville");
var missVille = document.getElementById("missVille");
var mail = document.getElementById("mail");
var missMail = document.getElementById("missMail");

formValid.addEventListener("click", validation);

function validation(event) {
    if (societe.validity.valueMissing) {
        event.preventDefault();
        alert("Entrez le nom de la société");
    }
    if (personnecontact.validity.valueMissing) {
        event.preventDefault();
        missPersonneContact.textContent = "Personne à contacter manquant";
        missPersonneContact.style.color = "red";
    }
    if (codepostal.validity.valueMissing) {
        event.preventDefault();
        missCodePostal.textContent = "Code Postal manquant";
        missCodePostal.style.color = "red";
    }
    if (codepostalValid.test(codepostal.value) == false) {
        event.preventDefault();
        missCodePostal.textContent = "Format incorrect";
        missCodePostal.style.color = "red";
    }
    if (ville.validity.valueMissing) {
        event.preventDefault();
        missVille.textContent = "Ville manquante";
        missVille.style.color = "red";
    }
    if (mail.validity.valueMissing) {
        event.preventDefault();
        missMail.textContent = "Email manquant";
        missMail.style.color = "red";
    }
}