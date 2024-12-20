async function cargarInvestigaciones() {
    try {
        // Cargar datos del JSON
        const response = await fetch('https://deepscrd.github.io/DEEP-SCRD/data/investigaciones.json');
        if (!response.ok) {
            throw new Error(`Error al cargar JSON: ${response.status}`);
        }

        const investigaciones = await response.json();
        const container = document.getElementById('investigaciones-container');
        container.innerHTML = ''; // Limpiar contenedor

        // Generar tarjetas dinámicamente
        investigaciones.forEach((investigacion) => {
            const card = document.createElement('div');
            card.className = 'card';

            // Agregar imagen
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

            // Botón para el documento
            const linkButton = document.createElement('a');
            linkButton.href = investigacion.link;
            linkButton.textContent = 'Ver documento';
            linkButton.className = 'link-button';
            linkButton.target = '_blank';

            // Ensamblar la tarjeta
            cardContent.appendChild(titulo);
            cardContent.appendChild(descripcion);
            cardContent.appendChild(autor);
            cardContent.appendChild(anio);
            cardContent.appendChild(linkButton);

            card.appendChild(img);
            card.appendChild(cardContent);

            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error al cargar investigaciones:', error);
        document.getElementById('investigaciones-container').innerHTML = `
            <p style="color: red; text-align: center;">No se pudo cargar la información. Intenta nuevamente más tarde.</p>
        `;
    }
}

document.addEventListener('DOMContentLoaded', cargarInvestigaciones);
