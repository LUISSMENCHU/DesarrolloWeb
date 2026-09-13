// =========================
// GALERÍA DE IMÁGENES
// =========================

const imagenes = document.querySelectorAll(".imagen");
const modal = document.getElementById("modal");
const imagenGrande = document.getElementById("imagenGrande");
const descripcion = document.getElementById("descripcionImagen");
const cerrar = document.getElementById("cerrar");

imagenes.forEach(function(imagen){

    imagen.addEventListener("click", function(){

        modal.style.display = "block";

        imagenGrande.src = this.src;

        descripcion.textContent = this.alt;

    });

});

cerrar.addEventListener("click", function(){

    modal.style.display = "none";

});


// =========================
// CALCULADORA
// =========================

const botonCalcular = document.getElementById("calcular");

botonCalcular.addEventListener("click", function(){

    let personas = Number(document.getElementById("personas").value);

    let paquete = Number(document.getElementById("paquete").value);

    let total = personas * paquete;

    if(document.getElementById("transporte").checked){

        total += personas * 50;

    }

    if(document.getElementById("alimentacion").checked){

        total += personas * 75;

    }

    if(document.getElementById("equipo").checked){

        total += personas * 25;

    }

    document.getElementById("resultado").textContent =
    "Total estimado: Q" + total;

});


// =========================
// BUSCADOR DE ACTIVIDADES
// =========================

const buscador = document.getElementById("buscar");

buscador.addEventListener("keyup", function(){

    let texto = buscador.value.toLowerCase();

    let actividades = document.querySelectorAll("#listaActividades li");

    actividades.forEach(function(actividad){

        if(actividad.textContent.toLowerCase().includes(texto)){

            actividad.style.display = "list-item";

        }else{

            actividad.style.display = "none";

        }

    });

});


// =========================
// VALIDACIÓN
// =========================

const botonEnviar = document.getElementById("enviar");

botonEnviar.addEventListener("click", function(){

    let nombre = document.getElementById("nombre").value;

    let personas = document.getElementById("personas").value;

    if(nombre == "" || personas == ""){

        document.getElementById("mensaje").textContent =
        "Debe completar todos los campos.";

        return;

    }

    document.getElementById("mensaje").textContent =
    "¡Gracias " + nombre +
    "! Su solicitud para " +
    personas +
    " personas fue registrada.";

});


// =========================
// RESEÑAS
// =========================

const nombres = [

    "Ana Gómez",

    "Carlos López",

    "María Pérez",

    "José Ramírez",

    "Sofía Morales"

];

const comentarios = [

    "Una experiencia inolvidable.",

    "Las pozas son muy bonitas.",

    "Excelente atención durante el recorrido.",

    "Recomiendo visitar el mirador.",

    "Volvería nuevamente con mi familia."

];

let numero = Math.floor(Math.random() * nombres.length);

document.getElementById("persona").textContent = nombres[numero];

document.getElementById("comentario").textContent = comentarios[numero];




modal.addEventListener("click", function(event){

    if(event.target == modal){

        modal.style.display = "none";

    }

});