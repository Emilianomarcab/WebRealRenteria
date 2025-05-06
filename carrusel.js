const imagenes = [
    'img/Cafe4.jpg',
    'img/Cafe2.jpg',
    'img/Cafe3.jpg'
];

// Pre-cargar las imágenes
imagenes.forEach(function(imagen) {
    const img = new Image();
    img.src = imagen;
});

let indiceActual = 0;

function cambiarImagen(direccion) {
    indiceActual = (indiceActual + direccion + imagenes.length) % imagenes.length;
    actualizarImagen();
}

function actualizarImagen() {
    document.getElementById('imagen-carrusel').src = imagenes[indiceActual];
    document.getElementById('texto-imagen').textContent = 'Descripción de la imagen ' + (indiceActual + 1);
}

console.log("Sitio Real Rentería cargado correctamente.");
