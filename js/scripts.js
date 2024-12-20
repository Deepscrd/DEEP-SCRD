// scripts.js

// Función para cargar el JSON y renderizar las investigaciones
async function cargarInvestigaciones() {
    try {
        // Cargar los datos del archivo JSON
        const response = await fetch('data/investigaciones.json');
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
        }

        const investigaciones = await response.json();

        // Contenedor principal para las tarjetas
        const container = document.getElementById('investigaciones-container');

        // Vaciar el contenedor antes de agregar contenido
        container.innerHTML = '';

        // Crear una tarjeta por cada investigación
        investigaciones.forEach((investigacion) => {
            const card = document.createElement('div');
            card.className = 'card';

            // Imagen
            const img = document.createElement('img');
            img.src = investigacion.imagen;
            img.alt = investigacion.titulo;
            img.className = 'card-img';

            // Contenido de la tarjeta
            const cardContent = document.createElement('div');
            cardContent.className = 'card-content';

            const titulo = document.createElement('h3');
            titulo.textContent = investigacion.titulo;

            const descripcion = document.createElement('p');
            descripcion.textContent = investigacion.descripcion;

            const autor = document.createElement('p');
            autor.innerHTML = `<strong>Autor:</strong> ${investigacion.autor}`;

            const anio = document.createElement('p');
            anio.innerHTML = `<strong>Año:</strong> ${investigacion.anio}`;

            // Botón para el enlace
            const linkButton = document.createElement('a');
            linkButton.href = investigacion.link;
            linkButton.textContent = 'Ver documento';
            linkButton.className = 'link-button';
            linkButton.target = '_blank';

            // Añadir elementos al contenedor de la tarjeta
            cardContent.appendChild(titulo);
            cardContent.appendChild(descripcion);
            cardContent.appendChild(autor);
            cardContent.appendChild(anio);
            cardContent.appendChild(linkButton);

            // Añadir la imagen y el contenido al contenedor de la tarjeta
            card.appendChild(img);
            card.appendChild(cardContent);

            // Añadir la tarjeta al contenedor principal
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error al cargar las investigaciones:', error);
    }
}

// Cargar las investigaciones al cargar la página
document.addEventListener('DOMContentLoaded', cargarInvestigaciones);
