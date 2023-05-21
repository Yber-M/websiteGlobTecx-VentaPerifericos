// * Cambiar SVG del carrito de compras cuando esté lleno
let carLleno = document.getElementById("btn-continuar");
let changeCar = document.getElementById("car-svg");
// función
carLleno.onclick = function () {
    // variables
    changeCar.src = "../img/carritoLleno.svg";
}

// Crear una cookie
var objetoSeleccionado = [];

// * Función Para Mostrar Una Ventana De Bienvenida Al Iniciar El Programa
function welcomeFuncion() {
    const modalEntrada = new bootstrap.Modal("#modalEntrada");
    modalEntrada.show();
}

// * Función para añadir productos al carrito
function addCar(objeto) {
    // Obtener Elemento Donde Se Encuentre
    var contendor = objeto.parentElement.parentElement;

    // Datos Producto
    var nombre = contendor.getElementsByTagName("p")[3];
    var dsct = contendor.getElementsByTagName("p")[1];
    var precio = contendor.getElementsByTagName("p")[2];

    // Crear Objetos
    var producot = {
        "nombre": nombre.innerText,
        "precio": dsct.innerText,
        "precioFinal": precio.innerText
    }

    //  Añadir el array de objetos
    objetoSeleccionado.push(producot);
}

// * Actualizar lista del carrito
function actualizarLista() {
    var lista = document.getElementById("listaCarrito");

    texto = "";
    // Crear HTML
    var cont = 1;

    objetoSeleccionado.forEach(element => {
        texto = texto + "<div class='produc-carr'>"
        texto = texto + "<h6><u>" + "Producto " + cont + "</u></h6>";
        texto = texto + "<p class='title-producto'>" + element.nombre + "</p>"
        texto = texto + "<p><del>" + element.precio + "</del></p>"
        texto = texto + "<p>" + element.precioFinal + "</p>"
        texto = texto + "<div class='eliminarProduc'><ion-icon name='trash-outline'></ion-icon> </div>"
        texto = texto + "<p>" + "------------------------------------" + "</p>"
        texto = texto + "</div>"
        cont++;
    });
    lista.innerHTML = texto;
}

// * Borrar Lista del Carrito
function refrescarPagina() {
    location.reload();
}

// * Carrito
const carrInfo = document.querySelector('produc-carr')
