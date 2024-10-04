// Posicionarnos en el elemento #contenedorCartas y mostrarme por consola los siguientes elementos:
const contenedor = document.querySelector('#contenedorCartas');

// 1) Su primer hijo
const primerHijo = contenedor.firstElementChild;
console.log("Primer hijo: ",primerHijo)

// 2) Su tercer hijo
const tercerHijo = contenedor.children[2];
console.log("Tercer hijo: ",tercerHijo);

// 3) El siguiente hermano del tercer hijo
const hermanoTercerHijo = tercerHijo.nextElementSibling;
console.log("Siguiente hermano del tercer hijo: ",hermanoTercerHijo);

// 4) Su último hijo
const ultimoHijo = contenedor.lastElementChild;
console.log("Ultimo hijo: ", ultimoHijo);

// 5) Su padre
const contenedorPadre = contenedor.parentElement;
console.log("Padre del contenedor: ",padre);

// 6) El padre del padre
const padreDelPadre = contenedorPadre.parentElement;
console.log("El padre del padre: ", padreDelPadre);

// 7) Su hermano anterior
const hermanoAnteriorContenedor = contenedor.previousElementSibling;
console.log("Su hermano anterior: ",hermanoAnteriorContenedor);

// 8) Las clases del último hijo
const clasesUltimoHijo = ultimoHijo.classList.lastElementChild;
console.log("Las clases del ultimo hijo: ",clasesUltimoHijo);