async function cargarInvestigaciones() {
    try {
        const response = await fetch('data/investigaciones.json');
        const investigaciones = await response.json();

        // Contenedor de las tarjetas
        const container = document.getElementById('investigaciones-container');
        const searchBar = document.getElementById('search-bar'); // Input del buscador
        const toggleThemeButton = document.getElementById('toggle-theme'); // Botón de cambio de tema
        container.innerHTML = '';

        // Contador de publicaciones por año
        const publicacionesPorAnio = {};
        investigaciones.forEach((investigacion) => {
            const anio = investigacion.anio;
            publicacionesPorAnio[anio] = (publicacionesPorAnio[anio] || 0) + 1;
        });

        // Actualizar el texto del conteo en la página
        const publicacionesTexto = document.getElementById('publicaciones-por-anio');
        publicacionesTexto.textContent = `Publicaciones: ${Object.entries(publicacionesPorAnio)
            .map(([anio, cantidad]) => `${cantidad} en ${anio}`)
            .join(' · ')}`;

        // Función para renderizar las tarjetas
        function mostrarInvestigaciones(filtradas) {
            container.innerHTML = ''; // Limpiar el contenedor

            if (filtradas.length === 0) {
                container.innerHTML = '<p>No se encontraron resultados.</p>';
                return;
            }

            filtradas.forEach((investigacion) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.setAttribute('data-id', investigacion.id);

                const img = document.createElement('img');
                img.src = investigacion.imagen;
                img.alt = investigacion.titulo;
                img.className = 'card-img';

                const cardContent = document.createElement('div');
                cardContent.className = 'card-content';

                const titulo = document.createElement('a');
                titulo.href = investigacion.pagina; // Redirige a la página específica
                titulo.textContent = investigacion.titulo;
                titulo.className = 'investigation-title';
                titulo.target = '_blank'; // Abre en una nueva pestaña

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

        // Mostrar todas las investigaciones inicialmente
        mostrarInvestigaciones(investigaciones);

        // Filtrar las investigaciones en tiempo real
        searchBar.addEventListener('input', (e) => {
            const termino = e.target.value.toLowerCase(); // Convierte el texto a minúsculas
            const filtradas = investigaciones.filter((investigacion) => {
                return (
                    investigacion.titulo.toLowerCase().includes(termino) ||
                    investigacion.descripcion.toLowerCase().includes(termino) ||
                    investigacion.autor.toLowerCase().includes(termino) ||
                    investigacion.anio.toString().includes(termino)
                );
            });

            mostrarInvestigaciones(filtradas);
        });

        // Lógica para cambiar de tema
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
            toggleThemeButton.textContent = 
                document.body.classList.contains('high-contrast') 
                ? 'Modo normal' 
                : 'Modo alto contraste';
        });
    } catch (error) {
        console.error('Error al cargar las investigaciones:', error);
    }
}

document.addEventListener('DOMContentLoaded', cargarInvestigaciones);
