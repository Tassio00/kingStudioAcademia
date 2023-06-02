/* code esconder/mostrar classe*/

var barras = document.querySelector(".barras-burguer");
var x = document.querySelector(".img-X-hamburguer")
var menu = document.querySelector(".hamburguer");
var fade_hamb = document.getElementById("fade_hamburguer");

barras.addEventListener('click', function(){
    menu.classList.toggle('showmenu');
    fade_hamb.style.display ="block";
});

fade_hamb.addEventListener('click', function(){
    menu.classList.toggle('showmenu');
    fade_hamb.style.display ="";
});

x.addEventListener('click', function() {
    menu.classList.toggle("showmenu");
    fade_hamb.style.display ="";
    
})






/*FIM code esconder/mostrar classe*/