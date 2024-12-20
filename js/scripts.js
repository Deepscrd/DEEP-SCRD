fetch('data/investigaciones.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('investigaciones-container');
        data.forEach(investigacion => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${investigacion.imagen}" alt="Imagen de ${investigacion.titulo}" class="card-img">
                <div class="card-content">
                    <h3>${investigacion.titulo}</h3>
                    <p>${investigacion.descripcion}</p>
                    <p><strong>Año:</strong> ${investigacion.anio} | <strong>Autor:</strong> ${investigacion.autor}</p>
                    <a href="${investigacion.link}" class="link-button" target="_blank">Ver Documento</a>
                </div>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));
