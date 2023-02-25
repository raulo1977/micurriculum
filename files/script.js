const enlaces = document.getElementsByClassName("menulink");
const secciones = document.getElementsByTagName("section");

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('click', function (event) { event.preventDefault(); ocultarMostrar(i) })
}

function ocultarMostrar(enlace) {
    if (!enlaces[enlace].classList.contains("activo")) {
        for (let i = 0; i < enlaces.length; i++) {
            enlaces[i].classList.remove("activo");
            secciones[i].classList.remove("mostrar");
            secciones[i].classList.add("ocultar");
        }
        enlaces[enlace].classList.add("activo");
        secciones[enlace].classList.add("mostrar");
        secciones[enlace].classList.remove("ocultar")
    }
}
edad.innerHTML=calcularAños(20,11,1977);
function calcularAños(dia, mes, año) {
    var today = new Date();
    //Restamos los años
    años = today.getFullYear() - año;
    // Si no ha llegado su cumpleaños le restamos el año por cumplir (Los meses en Date empiezan en 0, por eso tenemos que sumar 1)
    if (mes > (today.getMonth() + 1) || dia > today.getDay())
        años--;
    return años;
}