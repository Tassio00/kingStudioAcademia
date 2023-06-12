
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
var divInfoS  = document.getElementById("infoS");
var divInfoA  = document.getElementById("infoA");
var divInfoM  = document.getElementById("infoM");
var btn1 = document.getElementById("btn-mostra-esconde-semestral");
var btn2 = document.getElementById("btn-mostra-esconde-anoal");
var btn3 = document.getElementById("btn-mostra-esconde-mensal");

btn1.addEventListener("click", function() {
    divInfoS.classList.toggle("esconde");
});


function mudarTextobtnS() {
    if (btn1.textContent === "Ver mais") {
        btn1.innerHTML= "Ver menos";
    }else{
        btn1.innerHTML= "Ver mais";
    }
    
};


btn2.addEventListener("click", function() {
    divInfoA.classList.toggle("esconde");
});

function mudarTextobtnA() {
    if (btn2.textContent === "Ver mais") {
        btn2.innerHTML= "Ver menos";
    }else{
        btn2.innerHTML= "Ver mais";
    }
    
};

btn3.addEventListener("click", function() {
    divInfoM.classList.toggle("esconde");
});

function mudarTextobtnM() {
    if (btn3.textContent === "Ver mais") {
        btn3.innerHTML= "Ver menos";
    }else{
        btn3.innerHTML= "Ver mais";
    }
};


/* FIM esconder info planos */