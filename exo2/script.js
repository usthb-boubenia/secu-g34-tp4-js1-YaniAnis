"use strict";

function F1() {
    let etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    console.log(etudiants);
}// les objets sont vus dans le slide 39

function F2() {
    let etudiant = {
        nom: "John",
        prenom: "Doe",
        age: 30
    };// tableau d'objets vue dans le slide 40
    console.log(etudiant);
}

function F3() {
    let etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];
    for (let et of etudiants) {
        console.log(et.nom + "-" + et.prenom + "-" + et.age);
    }//boucle, vue dans le slide 44
}