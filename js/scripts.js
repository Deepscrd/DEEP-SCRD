// Declarar investigaciones globalmente para el filtrado
let investigaciones = [];

// Función para cargar investigaciones
async function cargarInvestigaciones() {
    try {
        const response = await fetch('data/investigaciones.json');
        investigaciones = await response.json(); // Guardar investigaciones en la variable global
        mostrarInvestigaciones(investigaciones); // Mostrar todas las investigaciones inicialmente
    } catch (error) {
        console.error('Error al cargar las investigaciones:', error);
    }
}

// Función para mostrar las investigaciones
function mostrarInvestigaciones(lista) {
    const container = document.getElementById('investigaciones-container');
    container.innerHTML = ''; // Limpiar contenedor antes de agregar nuevas tarjetas

    lista.forEach((investigacion) => {
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
}

// Función para filtrar investigaciones
function filtrarInvestigaciones(event) {
    const textoBusqueda = event.target.value.toLowerCase(); // Convertir texto a minúsculas
    const investigacionesFiltradas = investigaciones.filter((investigacion) =>
        investigacion.titulo.toLowerCase().includes(textoBusqueda) ||
        investigacion.descripcion.toLowerCase().includes(textoBusqueda) ||
        investigacion.autor.toLowerCase().includes(textoBusqueda) ||
        investigacion.anio.toString().includes(textoBusqueda)
    );
    mostrarInvestigaciones(investigacionesFiltradas); // Mostrar las investigaciones filtradas
}

// Agregar evento al campo de búsqueda
document.getElementById('search-bar').addEventListener('input', filtrarInvestigaciones);

// Cargar investigaciones al inicio
document.addEventListener('DOMContentLoaded', cargarInvestigaciones);
