const inicio = document.getElementById("inicio");
const menu = document.getElementById("menu");

const musica = document.getElementById("musica");

musica.volume = 0.15;

document.getElementById("entrar").addEventListener("click", () => {

    inicio.style.display = "none";
    menu.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

function ocultarPaginas(){

    document.querySelectorAll(".pagina").forEach(pagina => {

        pagina.style.display = "none";

    });

}

function mostrarHistoria(){

    ocultarPaginas();

    menu.style.display = "none";

    document.getElementById("historia").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function mostrarRecuerdos(){

    ocultarPaginas();

    menu.style.display = "none";

    document.getElementById("recuerdos").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function mostrarCarta(){

    ocultarPaginas();

    menu.style.display = "none";

    document.getElementById("carta").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function mostrarRegalo(){

    ocultarPaginas();

    menu.style.display = "none";

    document.getElementById("regalo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function volverMenu(){

    ocultarPaginas();

    menu.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
