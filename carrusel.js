const imagenes = [
    'img/Experiencia1.jpg',
    'img/Experiencia2.jpg',
    'img/Experiencia3.jpg'
  ];
  
  const descripciones = [
    'Ofrecemos un lugar tranquilo con jazz de fondo para tener una platica amena mientras si disfurta un Cafe',
    'Ideal para venir a leer o trabajar de manera tranquila con internet ',
    'Ambiente interior de Real Rentería'
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
    document.getElementById('texto-imagen').textContent = descripciones[indiceActual];
  }
  
  console.log("Sitio Real Rentería cargado correctamente.");
  