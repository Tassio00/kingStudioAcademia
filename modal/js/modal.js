const openModalButtun = document.querySelector("#nav-matricule-se");
const closeModalBuntton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

function toggleModal(){
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

openModalButtun.addEventListener("click", toggleModal);
closeModalBuntton.addEventListener("click", toggleModal);
fade.addEventListener("click", toggleModal);


// NOTIFICSÇÃO DO FORMULARIO DO MODAL:   



