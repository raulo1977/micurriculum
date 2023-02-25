const enlaces = document.getElementsByClassName("menulink");
const secciones = document.getElementsByTagName("section");
const botones = document.getElementsByTagName("button");

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
        if (!nombre.value.length > 0) { alert("Escribí tu nombre"); nombre.focus(); return }
        if (!email.value.length > 0) { alert("Escribí tu email"); email.focus(); return }
        if (!isEmail(email.value)) { alert("Email inválido. Ingresá un correo electrónico válido"); email.focus(); return }
        if (!asunto.value.length > 0) { alert("Escribí el asunto"); asunto.focus(); return }
        if (!(mensaje.value.trim().length > 0)) { alert("Escribí algun mensaje para enviarme"); mensaje.focus(); return }

        alert("Vamos a intentar enviar el mensaje desde el correo configurado en tu navegador:\nNombre: " + nombre.value + "\nCorreo: " + email.value + "\nAsunto: " + asunto.value + "\nMensaje:\n" + mensaje.value);
        enviarCorreo(nombre.value, asunto.value, email.value, mensaje.value);

    })
}

function isEmail(email) {
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
}


function enviarCorreo(nombre, asunto, correo, texto) {

    var envio = "mailto: \"" + nombre + "\"<" + correo + ">"
        + "?subject=" + asunto
        + "&body=" + texto;

    alert(envio);
    window.location.href = encodeURI(envio);

}

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
edad.innerHTML = calcularAños(20, 11, 1977);
function calcularAños(dia, mes, año) {
    var today = new Date();
    //Restamos los años
    años = today.getFullYear() - año;
    // Si no ha llegado su cumpleaños le restamos el año por cumplir (Los meses en Date empiezan en 0, por eso tenemos que sumar 1)
    if (mes > (today.getMonth() + 1) || dia > today.getDay())
        años--;
    return años;
}