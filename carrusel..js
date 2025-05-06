
const imagenes = [
    { src: 'img/Cafe4.jpg', texto: 'Descripción de la imagen 1' },
    { src: 'img/Cafe2.jpg', texto: 'Descripción de la imagen 2' },
    { src: 'img/Cafe3.jpg', texto: 'Descripción de la imagen 3' }
];

let indiceActual = 0;

function cambiarImagen(direccion) {
    indiceActual = (indiceActual + direccion + imagenes.length) % imagenes.length;
    document.getElementById('imagen-carrusel').src = imagenes[indiceActual].src;
    document.getElementById('texto-imagen').textContent = imagenes[indiceActual].texto;
}
