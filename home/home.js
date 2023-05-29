

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