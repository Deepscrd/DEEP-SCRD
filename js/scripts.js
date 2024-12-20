async function cargarInvestigaciones() {
    try {
        const response = await fetch('data/investigaciones.json');
        const investigaciones = await response.json();
        const container = document.getElementById('investigaciones-container');
        container.innerHTML = '';

        investigaciones.forEach((investigacion, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.setAttribute('data-id', investigacion.id);

            const img = document.createElement('img');
            img.src = investigacion.imagen;
            img.alt = investigacion.titulo;
            img.className = 'card-img';

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

            const linkButton = document.createElement('a');
            linkButton.href = investigacion.link;
            linkButton.textContent = 'Ver documento';
            linkButton.className = 'link-button';
            linkButton.target = '_blank';

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
        console.error('Error al cargar las investigaciones:', error);
    }
}

document.addEventListener('DOMContentLoaded', cargarInvestigaciones);
