// Código responsável por realizar o evento de Play/Pause ao ficar com o mouse no filme principal
var vid = document.getElementById("clip");
var elemento1 = document.getElementById("container2");


vid.addEventListener("mouseover", function(event) {
    if (vid.paused == true) {
        vid.play();
    }
});

vid.addEventListener("mouseleave", function(event) {
    if (vid.paused == false) {
        vid.pause();
    }
});


elemento1.addEventListener("mouseover", function(event) {
    if (vid.paused == true) {
        vid.play();
    }
});

elemento1.addEventListener("mouseleave", function(event) {
    if (vid.paused == false) {
        vid.pause();
    }
});


// Função que ao clicar na tela muta/desmuta o vídeo.
function som() {
    if (vid.muted == true) {
        vid.muted = false
    } else {
        vid.muted = true
    }
}

// Função responsável po abrir o site do botão "Mais Informações"
function janelaInfo1() {
    window.open("https://www.adorocinema.com/filmes/filme-254560/", '_blank');
}