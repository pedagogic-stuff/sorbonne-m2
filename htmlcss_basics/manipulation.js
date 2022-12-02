

// Aller récupérer un élément / balise
// dans le DOM

const btn = document.querySelector('#btn');
const closeModal = document.querySelector("#close");
const modal = document.querySelector('#modal');

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




