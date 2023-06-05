
/* code carrossel*/
var radio = document.querySelector('.manual-btn')
var contador = 1

document.getElementById('radio1').checked = true;

setInterval(() => {
    passarSlide()
}, 6000)

function passarSlide() {
    contador++

    if (contador > 3) {
        contador = 1
    }

    document.getElementById('radio'+contador).checked = true;
}

/*FIM code carrossel*/


/* esconder info planos */
var divInfo  = document.getElementById("info");
var btn = document.getElementById("btn-mostra-esconde");

btn.addEventListener("click", function() {
    
    console.log('jj');
    divInfo.classList.toggle("esconde");
    
    
});




// function mostrar() {
//     if (div.style.display == "none") {
//         console.log('ojji');
//         div.style.display = "flex";
//     }else{
//         div.style.display = "none";
//         console.log('nao');
//     }
// };


/* FIM esconder info planos */