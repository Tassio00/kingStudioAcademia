

const popup = document.querySelector("#popup-modal");

function togglePopup(){
    popup.classList.toggle("popup-modal-toggle");
    fade.classList.toggle("hide");
};

document.addEventListener("DOMContentLoaded", function(event) {
    // A página foi carregada completamente
    setTimeout(togglePopup, 500);
});
