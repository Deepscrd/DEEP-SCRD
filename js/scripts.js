// Obtener el contenedor de investigaciones
const container = document.getElementById('investigaciones-container');

// JSON con datos de investigaciones
const investigaciones = [
    {
        id: 84,
        titulo: "Cuenta Satélite de Economía Cultural y Creativa de Bogotá (CSECCB) - Resultados 2023",
        descripcion: "Resultados 2023 de la CSECCB en términos de valor agregado y empleo para el sector cultural y creativo de Bogotá.",
        solicitante: "SCRD y DANE",
        anio: 2024,
        imagen: "img/cseccb-2023.jpg",
        link: "docs/DEEP_Publicación%20de%20Resultados%20CSECCB%20serie%202014-2023pr.pdf"
    }
];

// Generar las tarjetas dinámicamente
investigaciones.forEach(investigacion => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${investigacion.imagen}" alt="Imagen de ${investigacion.titulo}" class="card-img">
        <div class="card-content">
            <h3>${investigacion.titulo}</h3>
            <p>${investigacion.descripcion}</p>
            <p><strong>Año:</strong> ${investigacion.anio} | <strong>Solicitante:</strong> ${investigacion.solicitante}</p>
            <a href="${investigacion.link}" class="link-button" target="_blank">Ver Documento</a>
        </div>
    `;

    container.appendChild(card);
});
