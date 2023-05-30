const openModalButtun = document.querySelector("#nav-matricule-se");
const closeModalBuntton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.getElementById("fade");

function toggleModal(){
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

openModalButtun.addEventListener("click", toggleModal);
closeModalBuntton.addEventListener("click", toggleModal);
fade.addEventListener("click", toggleModal);

// Carrega,mento do modal quando ocorrer submit no formulario:

const fade_spinner = document.getElementById("fade-spinner");
const spinner = document.getElementById("spinner");

function submit_form(){
    fade_spinner.classList.toggle("hide");
    spinner.classList.toggle("hide");
};



