// FRASES ALEATORIAS AL INICIO DE LA PAGINA:

    //Declaro la variable con array
    const frasesAleatorias=new Array()

    //1° frase
    frasesAleatorias[0] = "¡ Hola astronauta, bienvenid@ !";
    //2° frase
    frasesAleatorias[1] = "TIP: Haz tu propia estrategia ;)";
    //3° frase
    frasesAleatorias[2] = "¿ Listo para la proxima aventura ?";
    //4° frase
    frasesAleatorias[3] = "¡ Suerte ! La vas a necesitar!";
    //5° frase
    frasesAleatorias[4] = "¡ Demuestra tu destreza en la galaxia !";

    //longitud de las frases aleatorias
    var frasesLongitud = frasesAleatorias.length;

    function mostrarFrases() {
    const numAleatorio=Math.round(Math.random()*(frasesLongitud-1));

    //aparezcan las frases aleatorias de bienvenida en:
    document.getElementById("home__frases").innerHTML=frasesAleatorias[numAleatorio];
    }

//--------------------------------------------------------------------------------------------------------------------------------------------------------
// INPUT DONDE EL USUARIO INGRESA EL NOMBRE POR EL CUAL QUIERE QUE LO LLAMEMOS:

    let ingresaNombre = document.getElementById("home__form"); //seccion del form
    ingresaNombre.addEventListener("submit", nombreIngresado); //input donde el usuario ingresa el nombre

    function nombreIngresado(e){ 
        e.preventDefault();

        let nombreUsuario = document.getElementById("usuarioInput").value;

        document.getElementById("inputIngresado").innerHTML = nombreUsuario;

        localStorage.setItem("nombreUsuario", nombreUsuario); //local storage set item

        localStorage.getItem("nombreUsuario"); //local storage get item
    }

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------CONTACTO FORM:------------------------------------------------------------
const contactForm = document.forms["contact__form"];

contactForm.onsubmit = (event) => {
    event.preventDefault();
    console.log(contactFormData());
};

function contactFormData(){
    const contactUser = {};
    Array.from(contactForm.elements).forEach(element => {
        if(element.name) contactUser[element.name] = element.value 
        })
        return contactUser;
}

console.log(contactFormData());

//---------------------------------------------------------------------------------------------------------------

//-------------------------------ENTREGA FINAL TODO RENOVADO------------------------------------------------------------------------------------------------------------
//funcion del nombre de las herramientas y a quien le gana esta herramienta
function Jugada(nombre, gano){
    this.nombre = nombre;
    this.gano = gano;
}

$(document).ready(function(){

    var jugadas = new Array();
    jugadas.push( new Jugada("piedra","tijera")); // equivale a 0 - piedra le gana a tijera
    jugadas.push( new Jugada("papel","piedra")); // equivale a 1 - papel le gana a piedra
    jugadas.push( new Jugada("tijera","papel")); // equivale a 2 - tijera le gana a papel

    $(document).on("click", ".jugada", function() {
        var indexArrayJugador = $(this).data("jugada");
        var indexArrayPc = Math.floor( (Math.random()* 3) +1) -1;

        $('.ultima-jugada-pc').removeClass('ultima-jugada-pc');
        $('.jugada[data-jugada="'+ indexArrayPc +'"]').addClass('ultima-jugada-pc');

        $('.ultima-jugada-humano').removeClass('ultima-jugada-humano');
        $(this).addClass('ultima-jugada-humano');

        if ( jugadas[ indexArrayJugador ].gano == jugadas[ indexArrayPc ].nombre) {
            $('#marcador-jugador .numero').text( parseInt( $('#marcador-jugador .numero').text()) +1 );
        } else if ( jugadas[ indexArrayPc ].gano == jugadas[ indexArrayJugador ].nombre ) {
            $('#marcador-pc .numero').text( parseInt( $('#marcador-pc .numero').text() ) +1);
        }

    });

});