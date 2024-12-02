const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const icons = document.querySelectorAll('.icon');
const totalImages = images.length;

// Clonamos las imágenes inicial y final para un efecto continuo
const firstClone = images[0].cloneNode(true);
const lastClone = images[totalImages - 1].cloneNode(true);
carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, images[0]);

let index = 1; // Índice inicial
const imageWidth = images[0].clientWidth; // Ancho de una imagen
carousel.style.transform = `translateX(${-imageWidth * index}px)`;

// Función para mover el carrusel
function moveCarousel() {
  index++;
  carousel.style.transition = 'transform 1s ease-in-out';
  carousel.style.transform = `translateX(${-imageWidth * index}px)`;

  carousel.addEventListener('transitionend', () => {
    if (index === totalImages + 1) { // Si llega al final del carrusel
      carousel.style.transition = 'none';
      index = 1; // Reiniciamos al primer elemento real
      carousel.style.transform = `translateX(${-imageWidth * index}px)`;
    }
    if (index === 0) { // Si llega al principio del carrusel
      carousel.style.transition = 'none';
      index = totalImages; // Reiniciamos al último elemento real
      carousel.style.transform = `translateX(${-imageWidth * index}px)`;
    }
  });
}

// Iniciamos el carrusel
setInterval(moveCarousel, 3000); // Cambia cada 3 segundos

// Añadimos el evento de clic a las imágenes del carrusel
images.forEach(image => {
  image.addEventListener('click', (e) => {
    const title = e.target.getAttribute('data-title');
    const info = e.target.getAttribute('data-info');
    const src = e.target.getAttribute('src');

    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
          }
          img {
            width: 20cm; /* Ancho de la imagen completa */
            height: auto;
            border-radius: 8px;
            margin-right: 20px; /* Espacio entre la imagen y el texto */
          }
          .info {
            max-width: calc(100% - 20cm - 20px); /* Ajuste del ancho para la información */
          }
          h1 {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <img src="${src}" alt="${title}">
        <div class="info">
          <h1>${title}</h1>
          <p>${info}</p>
        </div>
      </body>
      </html>
    `);
  });
});

// Añadimos el evento de clic a los íconos
icons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    const title = e.currentTarget.getAttribute('data-title');
    const info = e.currentTarget.getAttribute('data-info');
    const newWindow = window.open('', '_blank');

    if (title === "Carrera Diseño, Imagen y Sonido") {
        let pdfsHTML = '';
        const pdfTitles = [
          "Pagina Web apra ayudar a los habitantes de Dolores", // Título para los PDFs 1 y 1_2
          "Pagina Web apra ayudar a los habitantes de Dolores",
          "Flyers Publicitarios para Segmento de Radio Informativo",
          "Festival de Tango: Brief, Manual de Marca, Aplicaciones Publicitarias",
          "Flyer Publicitario para Evento: Fiesta de Halloween",
          "Flyer de Formula Tetraédrica de Colores",
          "Fotografias para Analizar"
          // Añade aquí más títulos según corresponda
        ];
      
        for (let i = 1; i <= 20; i++) {
          const pdfPath = `pdfs/carrera${i}.pdf`;
          const previewPath = `pdfs/carrera${i}.png`;
          const pdfTitle = pdfTitles[i] || `Título del PDF ${i}`; // Usa el título personalizado o el genérico si no hay personalizado
      
          if (i === 1) {
            // Primer renglón con dos PDFs
            const pdfPath2 = `pdfs/carrera${i}_2.pdf`;
            const previewPath2 = `pdfs/carrera${i}_2.png`;
            const pdfTitle2 = pdfTitles[0] || `Título del PDF ${i}_2`; // Usa el mismo título para el segundo PDF en el primer renglón
      
            pdfsHTML += `
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <!-- Primer PDF -->
                <div style="display: flex; align-items: center; margin-right: 20px;">
                  <a href="${pdfPath}" target="_blank">
                    <img src="${previewPath}" alt="Vista previa de PDF ${i}" style="width: 5cm; height: auto; border-radius: 8px; margin-right: 10px;">
                  </a>
                  <a href="${pdfPath2}" target="_blank">
                    <img src="${previewPath2}" alt="Vista previa de PDF ${i}_2" style="width: 5cm; height: auto; border-radius: 8px; margin-left: 10px;">
                  </a>
                </div>
                <!-- Títulos -->
                <div>
                  <h3 style="margin: 0;">${pdfTitle}</h3>
                </div>
              </div>`;
          } else {
            // Resto de los renglones con un solo PDF
            pdfsHTML += `
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <!-- PDF único -->
                <div style="display: flex; align-items: center; margin-right: 20px;">
                  <a href="${pdfPath}" target="_blank">
                    <img src="${previewPath}" alt="Vista previa de PDF ${i}" style="width: 5cm; height: auto; border-radius: 8px; margin-right: 10px;">
                  </a>
                </div>
                <!-- Título -->
                <div>
                  <h3 style="margin: 0;">${pdfTitle}</h3>
                </div>
              </div>`;
          }
        }
      
        newWindow.document.write(`
          <!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #0cb7f2;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                padding: 20px;
                margin: 0;
              }
              .container {
                background-color: #fff;
                border-radius: 8px;
                padding: 20px;
                max-width: 800px;
                width: 100%;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
              }
              h1 {
                margin-bottom: 20px;
              }
              a {
                text-decoration: none;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>${title}</h1>
              <div>${info}</div>
              <div>${pdfsHTML}</div>
            </div>
          </body>
          </html>
        `);
      }                  
  });
});

// Pestañas emergentes
const tabs = document.querySelectorAll('.pestaña');
const contents = document.querySelectorAll('.pestaña-container');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.dataset.pestana;

    // Ocultar todos los contenidos
    contents.forEach(content => content.style.display = 'none');

    // Mostrar la pestaña correspondiente
    document.getElementById(targetTab).style.display = 'block';
  });
});

// Mostrar la primera pestaña por defecto
if (tabs.length > 0) {
  tabs[0].click();
}
// Seleccionamos el fondo con el ID "blue-background"
const blueBackground = document.getElementById('blue-background');

// Añadimos un evento de clic al fondo
blueBackground.addEventListener('click', () => {
    // Redirige al inicio de la página
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});

