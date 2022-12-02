
/*
 * JavaScript nous permet de manipuler le DOM. Le Dom, c'est votre html interprété par le navigateur. Chacune des balises est identifiée et identifiable par le navigateur ET par JavaScript.
 *
 * Cette manipulation du DOM va se décomposer en deux étapes : 
 *   - récupérer/ identifier l'élément (balise, text, bouton..) que je souhaite manipuler
 *   - ajouter un observateur sur cet élément afin de capter un événement (click, survol, scroll, etc.)
 */

// Ici, je récupère différents éléments du DOM (des balises pour simplifier...)

// je récupère le bouton 
const btn = document.querySelector('#btn');
// je récupère le bouton de fermeture de la modal
const closeModal = document.querySelector("#close");
// je récupère la modal de ma page
const modal = document.querySelector('#modal');

// Ici
btn.addEventListener('click', e => {
    console.log(btn);
    console.log(modal);
    console.log(modal.classList);
    modal.classList.remove('hidden');
});

closeModal.addEventListener('click', e => {
    modal.classList.add('hidden');
});

document.addEventListener('scroll', e => {
    console.log("scrrooool");
})

document.addEventListener('mousemove', e => {
    console.log("la souris bouge");
})




